import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, HeartHandshake, Utensils, Sparkles, Camera, Flower2, ClipboardList, Music, Car, BedDouble } from "lucide-react";
import { type Service } from "@/lib/services";
import { getServiceExperience } from "@/lib/service-experiences";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Ornament";

export function ServiceExperience({ service }: { service: Service }) {
  const experience = getServiceExperience(service.slug);
  const thirdIcon = service.slug === "photography" ? Camera : service.slug === "event-consulting" ? Flower2 : service.slug === "event-planning" ? ClipboardList : Utensils;
  const icons = service.slug === "family-getaway" ? [HeartHandshake, Car, BedDouble, Sparkles] : [HeartHandshake, service.slug === "sangeeth" || service.slug === "family-gathering" ? Music : CalendarCheck, thirdIcon, Sparkles];
  return <>
    <section className="border-b border-border py-14 sm:py-20">
      <SectionTitle eyebrow="Thoughtfully planned, personally yours" title="Your Celebration, Step by Step" />
      <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {experience.steps.map((step, index) => {
          const Icon = icons[index] ?? Sparkles;
          return <Reveal key={step.title} delay={index * 90}><div className="event-step">
            <div className="flex items-center justify-between"><span className="event-step-symbol"><Icon className="h-5 w-5" /></span><span className="text-xs text-muted-foreground">0{index + 1}</span></div>
            <h3 className="mt-5 text-lg font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </div></Reveal>;
        })}
      </div>
    </section>
    {experience.showCatering && <section className="bg-secondary py-14 sm:py-20">
      <div className={`mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 ${experience.showFoodImage ? "lg:grid-cols-2" : "max-w-3xl"}`}>
        {experience.showFoodImage && <Reveal><img src={service.image} alt="Indian and American dishes for a shared celebration meal" loading="lazy" width={1536} height={864} className="aspect-[4/3] w-full object-cover" /></Reveal>}
        <Reveal delay={100}><p className="flex items-center gap-2 text-xs uppercase text-gold"><Utensils className="h-4 w-4" />A place at the table for everyone</p>
          <h2 className="fluid-h2 mt-4 font-semibold">Good Food. Great Company.</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground">{experience.menu}</p>
          <div className="mt-5 grid grid-cols-2 gap-4 border-y border-border py-5"><div><h3 className="font-semibold">Indian cuisines</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">Regional flavours and family favourites.</p></div><div><h3 className="font-semibold">American favourites</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">Welcoming menus for a shared celebration.</p></div></div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{experience.detail}</p>
          {service.slug !== "catering" && <Button asChild variant="outline" className="mt-6"><Link to="/services/$slug" params={{ slug: "catering" }}>Explore Catering <ArrowRight /></Link></Button>}
        </Reveal>
      </div>
    </section>}
  </>;
}