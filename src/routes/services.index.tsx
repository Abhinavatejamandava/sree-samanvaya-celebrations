import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";
import { PageHero, ServiceCard } from "@/components/site/ServiceCard";
import { SectionTitle } from "@/components/site/Ornament";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services — Sree Samanvaya Events" },
      { name: "description", content: "Seemantham, Haldi, Pelli Kuthuru, weddings, Sangeeth, Satyanarayana Pooja, baby showers, anniversaries and event consulting." },
      { property: "og:title", content: "Event Decor Services — Sree Samanvaya" },
      { property: "og:description", content: "Complete event decoration and styling for traditional Indian celebrations and modern events." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const groups = [
    { key: "traditional", title: "Indian Traditional Ceremonies" },
    { key: "modern", title: "Modern Celebrations" },
  ] as const;
  return (
    <>
      <PageHero title="Our Services" subtitle="Complete event decoration & styling for traditional Indian celebrations and modern events." image={SERVICES[1].image} video={SERVICES[1].video} />
      {groups.map((g) => (
        <section key={g.key} className="mandala-bg py-14 sm:py-20">
          <SectionTitle title={g.title} />
          <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 px-3 min-[420px]:grid-cols-2 sm:px-6 lg:grid-cols-3">
            {SERVICES.filter((s) => s.category === g.key).map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}><ServiceCard s={s} /></Reveal>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
