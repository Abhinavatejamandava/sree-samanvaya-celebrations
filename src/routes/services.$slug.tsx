import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Heart } from "lucide-react";
import { getService, SERVICES } from "@/lib/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SectionTitle } from "@/components/site/Ornament";
import { Reveal } from "@/components/site/Reveal";
import { Petals } from "@/components/site/Petals";
import { RequestForm } from "@/components/site/RequestForm";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return { slug: s.slug };
  },
  head: ({ loaderData }) => {
    const s = loaderData ? getService(loaderData.slug) : undefined;
    if (!s) return { meta: [{ title: "Service not found — Sree Samanvaya" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${s.name} — Sree Samanvaya Events` },
        { name: "description", content: `${s.tagline} ${s.short}` },
        { property: "og:title", content: `${s.name} — Sree Samanvaya` },
        { property: "og:description", content: s.tagline },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="py-24 text-center">
      <h1 className="font-display text-3xl text-primary">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-primary underline">See all services</Link>
    </div>
  ),
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const s = getService(slug)!;
  const others = SERVICES.filter((o) => o.slug !== s.slug).slice(0, 3);
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <video key={s.video} src={s.video} poster={s.image} autoPlay muted loop playsInline className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-fade" />
        <Petals />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32">
          <p className="font-accent text-[0.6rem] tracking-[0.3em] text-gold-soft uppercase sm:text-xs">{s.subtitle}</p>
          <h1 className="fluid-h1 mt-3 max-w-3xl font-bold italic break-words text-ivory">{s.name}</h1>
          <p className="mt-4 max-w-xl font-display text-lg italic text-ivory/95 sm:text-2xl">{s.tagline}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#request" className="rounded-full bg-gold-gradient px-6 py-3 text-center font-bold text-maroon-deep shadow-gold transition hover:scale-105">Request This Service</a>
            <span className="text-center font-display text-xl font-bold text-gold-soft sm:text-left">{s.price}</span>
          </div>
        </div>
      </section>

      <section className="mandala-bg py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="font-accent text-xs tracking-[0.3em] text-gold uppercase">The meaning</p>
            <p className="mt-3 font-display text-xl leading-snug text-primary italic sm:text-2xl">{s.meaning}</p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
              {s.story.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-3xl border-4 border-gold/60 shadow-gold">
              <img src={s.image} alt={`${s.name} by Sree Samanvaya`} loading="lazy" width={1536} height={864} className="w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-maroon-gradient py-14 text-primary-foreground sm:py-20">
        <SectionTitle eyebrow="Thoughtfully included" title="What We Create For You" light />
        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 px-4 sm:grid-cols-2 sm:px-6">
          {s.includes.map((it, i) => (
            <Reveal key={it} delay={i * 60}>
              <li className="flex items-start gap-3 rounded-xl border border-gold/30 bg-ivory/5 p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><span className="text-sm sm:text-base">{it}</span>
              </li>
            </Reveal>
          ))}
        </ul>
        <p className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 px-4 text-center font-display text-xl italic text-gold-soft sm:text-2xl">
          <Heart className="h-5 w-5 shrink-0" /> {s.feeling}
        </p>
      </section>

      <section className="py-14 sm:py-20">
        <SectionTitle title="Questions Families Ask" />
        <div className="mx-auto mt-8 max-w-3xl space-y-3 px-4 sm:px-6">
          {s.faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-gold/40 bg-card p-4 shadow-card">
              <summary className="cursor-pointer font-display text-lg font-bold text-primary">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="request" className="mandala-bg scroll-mt-20 bg-secondary py-14 sm:py-20">
        <SectionTitle eyebrow="Your celebration starts here" title={`Request ${s.name}`} />
        <p className="mx-auto mt-3 max-w-xl px-4 text-center text-sm text-muted-foreground">Share a few details and our team will reach out with ideas and a personalised quote. 15% off your first booking!</p>
        <div className="mx-auto mt-8 max-w-3xl px-3 sm:px-6"><RequestForm service={s.name} /></div>
      </section>

      <section className="py-14 sm:py-20">
        <SectionTitle title="You May Also Love" />
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 px-3 min-[420px]:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {others.map((o) => <ServiceCard key={o.slug} s={o} />)}
        </div>
      </section>
    </>
  );
}
