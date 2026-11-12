import { Link } from "@tanstack/react-router";
import type { Service } from "@/lib/services";

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: s.slug }}
      className="group block min-w-0 overflow-hidden rounded-2xl border border-gold/40 bg-card shadow-card transition duration-500 hover:-translate-y-1.5 hover:shadow-gold"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={s.image} alt={s.name} loading="lazy" width={1536} height={864} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <span className="absolute right-2 bottom-2 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold text-maroon-deep">{s.price}</span>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-display text-lg font-bold break-words text-primary sm:text-xl">{s.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.short}</p>
        <span className="mt-2 inline-block text-xs font-bold tracking-wide text-gold uppercase">Explore →</span>
      </div>
    </Link>
  );
}

export function PageHero({ title, subtitle, image, video }: { title: string; subtitle: string; image: string; video?: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      {video ? (
        <video src={video} poster={image} autoPlay muted loop playsInline className="absolute inset-0 -z-10 h-full w-full object-cover" />
      ) : (
        <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      )}
      <div className="absolute inset-0 -z-10 bg-hero-fade" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-28">
        <h1 className="fluid-h1 max-w-3xl font-bold italic break-words text-ivory">{title}</h1>
        <p className="mt-3 max-w-xl text-sm text-ivory/90 sm:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
