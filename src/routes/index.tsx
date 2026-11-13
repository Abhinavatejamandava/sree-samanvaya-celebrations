import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Camera, ChefHat, ClipboardList, Flower2, MapPin } from "lucide-react";
import { useState } from "react";
import { SERVICES, svcAt, getService } from "@/lib/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SectionTitle } from "@/components/site/Ornament";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Sree Samanvaya — Weddings, Celebrations & Event Services" },
    { name: "description", content: "Explore Indian and American celebrations, event decor, planning, catering and photography with Sree Samanvaya across NY, NJ, PA and DE." },
    { property: "og:title", content: "Sree Samanvaya — Beautiful Celebrations Start Here" },
    { property: "og:description", content: "Discover thoughtful decor, planning, catering and photography for your next celebration." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

const ESSENTIALS = [
  { slug: "event-planning", title: "Event Planning", icon: ClipboardList, text: "A thoughtful plan. A seamless celebration." },
  { slug: "catering", title: "Catering", icon: ChefHat, text: "Indian & American flavours, shared with love." },
  { slug: "photography", title: "Photography & Film", icon: Camera, text: "The moments you will come back to forever." },
  { slug: "event-consulting", title: "Decor & Styling", icon: Flower2, text: "Your story, told through every beautiful detail." },
];

function Home() {
  const [service, setService] = useState("wedding");
  const [area, setArea] = useState("");
  const navigate = useNavigate();
  const hero = getService("wedding") ?? svcAt(3);
  const featured = SERVICES.filter(s => ["wedding", "seemantham", "haldi", "sangeeth"].includes(s.slug));
  return <>
    <section className="hero-home relative isolate flex items-center justify-center overflow-hidden">
      <video src={hero.video} poster={hero.image} autoPlay muted loop playsInline className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-hero-fade" />
      <div className="w-full max-w-4xl px-4 py-12 text-center sm:px-8">
        <p className="text-xs font-medium uppercase text-ivory">Indian traditions. Modern celebrations.</p>
        <h1 className="hero-title mt-4 font-semibold text-ivory">Sree Samanvaya</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-ivory sm:text-xl">Beautiful celebrations start here.</p>
        <form className="discovery mx-auto mt-8 max-w-2xl overflow-hidden rounded-sm bg-background text-left shadow-card" onSubmit={e => { e.preventDefault(); void navigate({ to: "/services/$slug", params: { slug: service } }); }}>
          <label className="border-b border-border px-4 py-3 sm:border-r sm:border-b-0"><span className="mb-1 block text-[0.6rem] uppercase text-muted-foreground">Your celebration</span><select aria-label="Your celebration" value={service} onChange={e => setService(e.target.value)}>{SERVICES.map(s => <option key={s.slug} value={s.slug}>{s.name}</option>)}</select></label>
          <label className="border-b border-border px-4 py-3 sm:border-b-0"><span className="mb-1 block text-[0.6rem] uppercase text-muted-foreground">Location</span><select aria-label="Location" value={area} onChange={e => setArea(e.target.value)}><option value="">NY · NJ · PA · DE</option>{["New York", "New Jersey", "Pennsylvania", "Delaware"].map(a => <option key={a}>{a}</option>)}</select></label>
          <div className="flex p-2"><Button type="submit" className="h-full min-h-11 w-full px-6">Explore <ArrowRight /></Button></div>
        </form>
      </div>
    </section>
    <div className="border-b border-border bg-background px-4 py-4 text-center text-xs text-muted-foreground">Decor · Planning · Catering · Photography <span className="mx-2 text-gold">/</span> NY · NJ · PA · DE</div>

    <section className="py-14 sm:py-20">
      <SectionTitle title="Celebrations Worth Remembering" />
      <p className="mx-auto mt-3 max-w-xl px-4 text-center text-sm text-muted-foreground">From meaningful traditions to once-in-a-lifetime weddings, find the setting for your next chapter.</p>
      <div className="mx-auto mt-9 grid max-w-[1440px] gap-6 px-4 min-[480px]:grid-cols-2 sm:px-8 lg:grid-cols-4">{featured.map((s,i) => <Reveal key={s.slug} delay={i*70}><ServiceCard s={s} /></Reveal>)}</div>
      <div className="mt-6 text-center"><Button asChild variant="outline"><Link to="/services">All Celebrations <ArrowRight /></Link></Button></div>
    </section>

    <section className="border-y border-border bg-secondary py-14 sm:py-20">
      <SectionTitle title="Every Detail, Beautifully Together" />
      <p className="mx-auto mt-3 max-w-xl px-4 text-center text-sm text-muted-foreground">The people, flavours, and finishing touches that make a celebration yours.</p>
      <div className="mx-auto mt-9 grid max-w-[1440px] gap-6 px-4 min-[480px]:grid-cols-2 sm:px-8 lg:grid-cols-4">{ESSENTIALS.map(({slug,title,icon:Icon,text},i) => {
        const s = getService(slug); if (!s) return null;
        return <Reveal key={slug} delay={i*70}><Link to="/services/$slug" params={{slug}} className="group block"><div className="aspect-[4/3] overflow-hidden"><img src={s.image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><h3 className="mt-4 flex items-center gap-2 text-lg font-semibold"><Icon className="h-4 w-4 text-gold" />{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p><span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold">Explore <ArrowRight className="h-3 w-3" /></span></Link></Reveal>;
      })}</div>
    </section>

    <section className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-2">
        <Reveal><img src={svcAt(0).image} alt="Traditional floral celebration setting" loading="lazy" className="aspect-[4/3] w-full object-cover" /></Reveal>
        <Reveal delay={100}><p className="text-xs uppercase text-gold">Rooted in tradition. Designed for you.</p><h2 className="fluid-h2 mt-4 font-semibold">A little closer to home.<br />A memory to last a lifetime.</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground">The jasmine. The warm glow of a diya. The joy of gathering everyone you love. We bring Indian traditions and contemporary style together, creating spaces where every ritual feels meaningful and every guest feels welcome.</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">From the first idea to the final detail, your family's vision is at the heart of the celebration.</p><Button asChild variant="outline" className="mt-6"><Link to="/about">Our Story <ArrowRight /></Link></Button></Reveal>
      </div>
    </section>

    <section className="border-t border-border py-14 sm:py-20">
      <SectionTitle eyebrow="More ways to come together" title="Family Time, Beautifully Planned" />
      <p className="mx-auto mt-3 max-w-xl px-4 text-center text-sm text-muted-foreground">A night of comedy, music and shared food. A weekend away with the people you love.</p>
      <div className="mx-auto mt-9 grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-8">{SERVICES.filter(s => ["family-gathering", "family-getaway"].includes(s.slug)).map(s => <Reveal key={s.slug}><ServiceCard s={s} /></Reveal>)}</div>
    </section>

    <section className="bg-secondary py-14 sm:py-20">
      <SectionTitle title="Your Next Chapter Starts Here" />
      <div className="mx-auto mt-9 grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-8">{[
        { title: "Share Your Vision", text: "Tell us about the occasion, the people, and the details that matter to you." },
        { title: "Make It Yours", text: "Explore a personalised concept and quote, with thoughtful touches for your celebration." },
        { title: "Live the Moment", text: "Let us bring the setting together while you enjoy the people you love." },
      ].map((s,i) => <div key={s.title} className="border-t border-border pt-5"><p className="text-xs text-gold">0{i+1}</p><h3 className="mt-3 text-lg font-semibold">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p></div>)}</div>
    </section>
    <section className="relative isolate overflow-hidden py-16 text-center sm:py-20">
      <img src={svcAt(4).image} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" /><div className="absolute inset-0 -z-10 bg-hero-fade" />
      <h2 className="fluid-h2 px-4 font-semibold text-ivory">Let's Make It Unforgettable.</h2><p className="mt-4 px-4 text-sm text-ivory">Your first booking comes with 15% off.</p><Button asChild className="mt-6"><Link to="/contact">Plan Your Celebration <ArrowRight /></Link></Button><p className="mt-5 flex items-center justify-center gap-2 px-4 text-xs text-ivory"><MapPin className="h-3 w-3" />New York · New Jersey · Pennsylvania · Delaware</p>
    </section>
  </>;
}
