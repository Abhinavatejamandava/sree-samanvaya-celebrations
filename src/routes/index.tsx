import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarHeart, ClipboardList, Gem, MapPin, Palette, ShieldCheck, Sparkles, Star, Wallet, Wrench } from "lucide-react";
import { SERVICES, svcAt } from "@/lib/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SectionTitle, Diya } from "@/components/site/Ornament";
import { Reveal } from "@/components/site/Reveal";
import { Petals } from "@/components/site/Petals";
import { Mandala, OccasionMarquee, Stats, GlowOrbs } from "@/components/site/Graphics";
import mark from "@/assets/logo-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sree Samanvaya Events — Traditional & Modern Celebration Decor" },
      { name: "description", content: "Exquisite decor for Seemantham, Haldi, Pelli Kuthuru, weddings, Sangeeth, poojas, baby showers and anniversaries across NY, NJ, PA & DE." },
      { property: "og:title", content: "Sree Samanvaya Events — Celebration Decor" },
      { property: "og:description", content: "Traditional elegance, modern creativity and custom experiences for your family's most special moments." },
    ],
  }),
  component: Home,
});

const WHY = [
  { icon: Gem, t: "Elegant & Unique Designs" },
  { icon: Palette, t: "Custom Themes" },
  { icon: Wallet, t: "Budget to Premium Options" },
  { icon: MapPin, t: "Serving NY | NJ | PA | DE" },
  { icon: Wrench, t: "End-to-End Setup & Styling" },
  { icon: ShieldCheck, t: "Reliable & On-Time" },
];
const STEPS = [
  { icon: CalendarHeart, t: "Connect", d: "Share your event details and vision." },
  { icon: ClipboardList, t: "Plan", d: "Receive a personalised concept and quote." },
  { icon: Sparkles, t: "Design & Setup", d: "We decorate and bring your dream to life." },
  { icon: Star, t: "Celebrate", d: "Enjoy a beautiful, stress-free celebration." },
];
const REVIEWS = [
  { q: "Our Seemantham decor was absolutely divine — traditional, elegant and beyond our expectations.", n: "Lakshmi P." },
  { q: "They beautifully handled our Wedding and Sangeeth. The attention to cultural detail was outstanding!", n: "Praneeth R." },
  { q: "From our Satyanarayana Swamy Pooja to our Anniversary, every event was styled with such care.", n: "Madhavi K." },
];

function Home() {
  const hero = svcAt(3);
  return (
    <>
      <section className="relative isolate min-h-[80vh] overflow-hidden">
        <video src={hero.video} poster={hero.image} autoPlay muted loop playsInline className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-fade" />
        <Petals />
        <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6">
          <img src={mark} alt="" width={816} height={816} className="animate-float-soft h-16 w-16 object-contain sm:h-24 sm:w-24" />
          <p className="mt-4 font-accent text-[0.6rem] tracking-[0.3em] text-gold-soft uppercase sm:text-sm">Traditional Elegance · Modern Creativity</p>
          <h1 className="fluid-h1 mt-3 max-w-4xl font-semibold tracking-tight break-words text-ivory">
            Where Traditions Bloom into <span className="text-gold-gradient">Unforgettable Memories</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-ivory/90 sm:text-lg">
            Exquisite decor for beloved Indian ceremonies and modern celebrations — so your family can simply live the moment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="rounded-full bg-gold-gradient px-6 py-3 text-center font-bold text-maroon-deep shadow-gold transition hover:scale-105">Book a Consultation</Link>
            <Link to="/services" className="rounded-full border border-gold-soft px-6 py-3 text-center font-bold text-ivory transition hover:bg-ivory/10">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="bg-maroon-gradient py-3 text-center text-primary-foreground">
        <p className="animate-shimmer px-3 font-display text-base italic sm:text-xl">✦ Grand Launch Offer — 15% off your first booking · Early Bird 10% · Combo 5% ✦</p>
      </section>

      <section className="mandala-bg py-16 sm:py-24">
        <SectionTitle eyebrow="What we create" title="Our Featured Services" />
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 px-3 min-[420px]:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 80}><ServiceCard s={s} /></Reveal>
          ))}
        </div>
      </section>


      <OccasionMarquee />

      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        <GlowOrbs />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <Mandala className="absolute inset-0 h-full w-full text-gold/50" />
              <img src={svcAt(0).image} alt="Seemantham decor by Sree Samanvaya" loading="lazy" width={1536} height={864} className="absolute inset-[14%] h-[72%] w-[72%] rounded-full border-4 border-gold object-cover shadow-gold" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-accent text-xs tracking-[0.3em] text-gold uppercase">Our promise</p>
            <h2 className="fluid-h2 mt-2 font-semibold tracking-tight text-primary">Every ritual has a story. We design the setting it deserves.</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/85 sm:text-base">For us, decor is never just flowers and fabric. It is the swing where a mother receives her blessings, the mandap where two families become one, the lamp that lights a prayer. We study each ceremony's meaning, listen to your family's wishes and then craft a space that feels sacred, joyful and unmistakably yours.</p>
            <div className="mt-6 grid grid-cols-1 gap-3 min-[360px]:grid-cols-3">
              {["Decor & Styling", "Planning", "Photography"].map((t) => (
                <div key={t} className="rounded-xl border border-gold/40 bg-card p-3 text-center text-sm font-semibold text-primary shadow-card">{t}</div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">One trusted team for your entire celebration — no juggling vendors, no stress.</p>
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="bg-maroon-gradient py-16 text-primary-foreground sm:py-20">
        <SectionTitle eyebrow="Why families trust us" title="Why Choose Us?" light />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 px-3 min-[320px]:grid-cols-2 sm:px-6 md:grid-cols-3 lg:grid-cols-6">
          {WHY.map(({ icon: I, t }, i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="h-full rounded-2xl border border-gold/40 bg-ivory/5 p-4 text-center">
                <I className="mx-auto h-8 w-8 text-gold" />
                <p className="mt-2 text-sm font-semibold">{t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <SectionTitle eyebrow="Simple & joyful" title="How It Works" />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 px-3 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {STEPS.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-gold bg-secondary shadow-gold"><I className="h-7 w-7 text-primary" /></div>
                <h3 className="mt-3 font-display text-xl font-bold text-primary">{i + 1}. {t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mandala-bg bg-secondary py-16 sm:py-20">
        <SectionTitle eyebrow="Kind words" title="What Our Families Say" />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 px-3 sm:px-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.n} delay={i * 100}>
              <figure className="h-full rounded-2xl border border-gold/40 bg-card p-5 shadow-card">
                <div className="text-gold">★★★★★</div>
                <blockquote className="mt-2 font-display text-lg italic text-foreground">“{r.q}”</blockquote>
                <figcaption className="mt-3 text-sm font-bold text-primary">— {r.n}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-maroon-gradient py-16 text-center text-primary-foreground">
        <div className="flex justify-center gap-6"><Diya className="h-10 w-10" /><Diya className="h-10 w-10" /><Diya className="h-10 w-10" /></div>
        <h2 className="fluid-h2 mt-4 px-3 font-semibold tracking-tight">Let's Create Your Perfect Celebration</h2>
        <p className="mx-auto mt-3 max-w-xl px-3 text-sm opacity-90 sm:text-base">Your family's story deserves a beautiful setting. Tell us your dream — we'll handle every detail.</p>
        <Link to="/contact" className="mt-6 inline-block rounded-full bg-gold-gradient px-7 py-3 font-bold text-maroon-deep shadow-gold transition hover:scale-105">Request a Custom Quote</Link>
      </section>
    </>
  );
}
