import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Gift } from "lucide-react";
import { SERVICES, svcAt } from "@/lib/services";
import { PageHero } from "@/components/site/ServiceCard";
import { SectionTitle } from "@/components/site/Ornament";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Packages & Offers — Sree Samanvaya Events" },
      { name: "description", content: "Essential from $499, Premium from $1,499 and Luxury from $2,999 — plus grand launch offers." },
      { property: "og:title", content: "Packages for Every Celebration" },
      { property: "og:description", content: "Budget to premium event decor packages with launch offers up to 15% off." },
    ],
  }),
  component: Packages,
});

const PKGS = [
  { name: "Essential", price: "$499+", items: ["Beautiful, budget-friendly decor", "Traditional or modern theme options", "Balloon & basic floral arrangements", "Event coordination support"] },
  { name: "Premium", price: "$1,499+", popular: true, items: ["Complete decor & styling", "Custom theme & full venue styling", "Floral & balloon arrangements", "Stage / backdrop / centerpieces", "Event planning & coordination"] },
  { name: "Luxury", price: "$2,999+", items: ["All-inclusive bespoke experience", "Premium theme design & styling", "Advanced floral & decor installations", "Multiple event setups", "Dedicated event consultant"] },
];
const TIERS = [
  { n: "Intimate Celebration", g: "Up to 50 guests", p: "$499" },
  { n: "Premium Celebration", g: "50 – 150 guests", p: "$899" },
  { n: "Grand Celebration", g: "150+ guests", p: "$1,499" },
];
const OFFERS = ["15% OFF* your first booking", "Early Bird — book 30+ days ahead & save 10%", "Combo — book 2 events & get an extra 5% OFF", "Referral — refer a friend & get $50 OFF* your next event"];

function Packages() {
  return (
    <>
      <PageHero title="Packages" subtitle="Beautiful options for every family, every budget and every dream." image={svcAt(4).image} video={svcAt(4).video} />
      <section className="mandala-bg py-14 sm:py-20">
        <SectionTitle title="Packages for Every Celebration" />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 px-3 sm:px-6 md:grid-cols-3">
          {PKGS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className={`relative h-full rounded-3xl border-2 p-6 shadow-card ${p.popular ? "border-gold bg-maroon-gradient text-primary-foreground shadow-gold" : "border-gold/40 bg-card"}`}>
                {p.popular && <span className="absolute -top-3 right-4 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold text-maroon-deep">Most Popular</span>}
                <h3 className={`font-display text-3xl font-semibold tracking-tight ${p.popular ? "text-gold-soft" : "text-primary"}`}>{p.name}</h3>
                <p className="mt-1 text-sm opacity-80">Starting at</p>
                <p className="font-display text-4xl font-bold">{p.price}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.items.map((it) => <li key={it} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-gold" />{it}</li>)}
                </ul>
                <Link to="/contact/" className={`mt-6 block rounded-full px-5 py-2.5 text-center font-bold ${p.popular ? "bg-gold-gradient text-maroon-deep" : "bg-maroon-gradient text-primary-foreground"}`}>Choose {p.name}</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-secondary py-14 sm:py-20">
        <SectionTitle title="Popular Celebration Sizes" />
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 px-3 sm:grid-cols-3 sm:px-6">
          {TIERS.map((t) => (
            <div key={t.n} className="rounded-2xl border border-gold/40 bg-card p-5 text-center shadow-card">
              <h3 className="font-display text-xl font-bold text-primary">{t.n}</h3>
              <p className="text-sm text-muted-foreground">{t.g}</p>
              <p className="mt-2 inline-block rounded-full bg-maroon-gradient px-4 py-1 font-display text-2xl font-bold text-primary-foreground">From {t.p}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-maroon-gradient py-14 text-primary-foreground sm:py-20">
        <SectionTitle title="Special Offers for You" light />
        <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 px-4 sm:grid-cols-2">
          {OFFERS.map((o) => <li key={o} className="flex gap-3 rounded-xl border border-gold/40 bg-ivory/5 p-4 text-sm"><Gift className="h-5 w-5 shrink-0 text-gold" />{o}</li>)}
        </ul>
        <p className="mt-4 text-center text-xs opacity-70">*Terms & conditions apply.</p>
      </section>
    </>
  );
}
