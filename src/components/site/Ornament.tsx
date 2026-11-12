export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-8 bg-gold/70 sm:w-16" />
      <svg viewBox="0 0 40 20" className="h-4 w-8 fill-current">
        <path d="M20 0c2 5 6 8 10 10-4 2-8 5-10 10-2-5-6-8-10-10 4-2 8-5 10-10z" />
        <circle cx="3" cy="10" r="2" /><circle cx="37" cy="10" r="2" />
      </svg>
      <span className="h-px w-8 bg-gold/70 sm:w-16" />
    </div>
  );
}

export function SectionTitle({ eyebrow, title, light = false }: { eyebrow?: string; title: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl px-2 text-center">
      {eyebrow && (
        <p className={`font-accent text-[0.65rem] tracking-[0.3em] uppercase sm:text-xs ${light ? "text-gold-soft" : "text-gold"}`}>{eyebrow}</p>
      )}
      <h2 className={`fluid-h2 mt-2 font-semibold tracking-tight break-words ${light ? "text-ivory" : "text-primary"}`}>{title}</h2>
      <div className={`mx-auto mt-4 h-px w-10 ${light ? "bg-ivory" : "bg-foreground"}`} />
    </div>
  );
}

export function Diya({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g className="animate-flicker">
        <path d="M20 4c3 6 5 9 0 15-5-6-3-9 0-15z" fill="oklch(0.85 0.16 80)" />
        <path d="M20 9c1.5 3 2.5 5 0 8-2.5-3-1.5-5 0-8z" fill="oklch(0.97 0.08 95)" />
      </g>
      <path d="M4 24h32c-2 8-9 12-16 12S6 32 4 24z" fill="oklch(0.7 0.13 70)" />
      <path d="M4 24h32" stroke="oklch(0.55 0.12 60)" strokeWidth="1.5" />
    </svg>
  );
}
