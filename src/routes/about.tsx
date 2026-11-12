import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";
import { PageHero } from "@/components/site/ServiceCard";
import { SectionTitle } from "@/components/site/Ornament";
import { Reveal } from "@/components/site/Reveal";
import mark from "@/assets/logo-mark.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sree Samanvaya Events" },
      { name: "description", content: "Sree Samanvaya blends Indian traditions with modern creativity to style celebrations across NY, NJ, PA and DE." },
      { property: "og:title", content: "About Sree Samanvaya Events" },
      { property: "og:description", content: "Samanvaya means harmony — of tradition and modern design, of families and celebrations." },
    ],
  }),
  component: About,
});

const VALUES = [
  { t: "Rooted in Tradition", d: "We honour every ritual's meaning — from the placement of a diya to the colours of a garland." },
  { t: "Crafted with Creativity", d: "Modern design, fresh florals and thoughtful lighting make each event feel new." },
  { t: "Served with Heart", d: "We treat your family's celebration as if it were our own." },
];

function About() {
  return (
    <>
      <PageHero title="Our Story" subtitle="Samanvaya means harmony — the beautiful meeting of tradition and modern creativity." image={SERVICES[2].image} video={SERVICES[2].video} />
      <section className="mandala-bg py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_2fr]">
          <Reveal><img src={mark} alt="Sree Samanvaya emblem" width={816} height={816} className="animate-float-soft mx-auto w-40 sm:w-64" /></Reveal>
          <Reveal delay={150}>
            <div className="space-y-4 text-sm leading-relaxed sm:text-base">
              <p className="font-display text-2xl italic text-primary sm:text-3xl">Celebrations are how families say "we love you" out loud.</p>
              <p>Sree Samanvaya Groups LLC was born from a simple belief: the ceremonies our grandparents taught us deserve to be celebrated just as beautifully here, far from home, as they were back home.</p>
              <p>From a mother's Seemantham to a couple's 50th anniversary, we design spaces that carry meaning — fresh jasmine, brass lamps, royal drapes and gentle light — blended with modern styling your guests will remember.</p>
              <p>We serve families across New York, New Jersey, Pennsylvania and Delaware, with complete setup, styling and teardown — so you can be present for every blessing.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-maroon-gradient py-14 text-primary-foreground sm:py-20">
        <SectionTitle title="What We Stand For" light />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 100}>
              <div className="h-full rounded-2xl border border-gold/40 bg-ivory/5 p-6">
                <h3 className="font-display text-2xl font-bold text-gold-soft">{v.t}</h3>
                <p className="mt-2 text-sm opacity-90">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center"><Link to="/contact" className="rounded-full bg-gold-gradient px-6 py-3 font-bold text-maroon-deep">Plan With Us</Link></div>
      </section>
    </>
  );
}
