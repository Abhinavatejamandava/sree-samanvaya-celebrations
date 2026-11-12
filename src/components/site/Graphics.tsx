import { useEffect, useRef, useState } from "react";
import { SERVICES } from "@/lib/services";

export function Mandala({ className = "" }: { className?: string }) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5);
  return (
    <svg viewBox="0 0 200 200" className={`animate-spin-slow ${className}`} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <circle cx="100" cy="100" r="95" />
        <circle cx="100" cy="100" r="70" strokeDasharray="2 4" />
        <circle cx="100" cy="100" r="40" />
        {petals.map((a) => (
          <g key={a} transform={`rotate(${a} 100 100)`}>
            <path d="M100 30 C110 50 110 60 100 70 C90 60 90 50 100 30Z" />
            <path d="M100 5 C106 15 106 20 100 26 C94 20 94 15 100 5Z" />
            <circle cx="100" cy="82" r="2" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1600);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  const items = [
    { n: SERVICES.length, s: "", l: "Signature Services" },
    { n: 100, s: "+", l: "Decor Setups" },
    { n: 4, s: "", l: "States Served" },
    { n: 100, s: "%", l: "Made With Love" },
  ];
  return (
    <section className="relative overflow-hidden bg-maroon-gradient py-14 text-primary-foreground">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 min-[300px]:grid-cols-2 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.l} className="text-center">
            <p className="font-display text-4xl font-semibold text-gold-gradient sm:text-5xl"><Counter to={i.n} suffix={i.s} /></p>
            <p className="mt-1 font-accent text-xs tracking-[0.2em] uppercase opacity-90">{i.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function OccasionMarquee() {
  const names = SERVICES.map((s) => s.name);
  const row = [...names, ...names];
  return (
    <div className="overflow-hidden border-y border-gold/40 bg-secondary py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((n, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg text-primary sm:text-2xl">
            {n}<span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function GlowOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="animate-glow absolute top-10 left-1/4 h-64 w-64 rounded-full bg-gold/30 blur-3xl" />
      <div className="animate-glow absolute right-1/5 bottom-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" style={{ animationDelay: "2s" }} />
    </div>
  );
}
