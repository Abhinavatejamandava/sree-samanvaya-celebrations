import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SERVICES, svcAt } from "@/lib/services";
import { PageHero } from "@/components/site/ServiceCard";
import { SectionTitle } from "@/components/site/Ornament";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Gallery & Portfolio — Sree Samanvaya Events" },
      { name: "description", content: "A showcase of our finest event decor, styling and unforgettable celebrations." },
      { property: "og:title", content: "Gallery — Sree Samanvaya Events" },
      { property: "og:description", content: "Explore our event portfolio: traditional ceremonies and modern celebrations." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const items = filter === "all" ? SERVICES : SERVICES.filter((s) => s.slug === filter);
  return (
    <>
      <PageHero title="Our Gallery" subtitle="A showcase of our finest decor, styling and unforgettable celebrations." image={svcAt(0).image} video={svcAt(0).video} />
      <section className="mandala-bg py-14 sm:py-20">
        <SectionTitle title="Explore Our Portfolio" />
        <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-2 px-3">
          {[{ slug: "all", name: "All Events" }, ...SERVICES].map((s) => (
            <button
              key={s.slug}
              onClick={() => setFilter(s.slug)}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold transition sm:text-sm ${filter === s.slug ? "border-primary bg-maroon-gradient text-primary-foreground" : "border-gold/50 bg-card text-primary hover:bg-secondary"}`}
            >
              {s.name.replace(" Decor", "")}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 px-3 min-[420px]:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {items.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group relative block overflow-hidden rounded-2xl border border-gold/40 shadow-card">
              <video src={s.video} poster={s.image} muted loop playsInline preload="none"
                onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                onMouseLeave={(e) => e.currentTarget.pause()}
                className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-2 bottom-2 rounded-full bg-card/90 px-3 py-1 text-center font-display text-sm font-bold text-primary sm:text-base">{s.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
