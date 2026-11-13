import { Link } from "@tanstack/react-router";
import type { Service } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      to="/services/$slug/"
      params={{ slug: s.slug }}
      className="group block min-w-0 bg-background"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
        <img src={s.image} alt={s.name} loading="lazy" width={1536} height={864} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      </div>
      <div className="py-4">
        <p className="text-[0.65rem] uppercase text-gold">{s.category === "traditional" ? "Tradition & celebration" : "Celebration essentials"}</p>
        <h3 className="mt-2 flex items-start justify-between gap-3 text-lg font-semibold break-words text-primary"><span>{s.name}</span><ArrowUpRight className="mt-1 h-4 w-4 shrink-0" /></h3>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.short}</p>
        <span className="mt-3 inline-block text-xs font-medium text-foreground">{s.price}</span>
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
        <h1 className="fluid-h1 max-w-3xl font-semibold tracking-tight break-words text-ivory">{title}</h1>
        <p className="mt-3 max-w-xl text-sm text-ivory/90 sm:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
