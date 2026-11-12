const PETALS = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i * 1.7) % 12,
  dur: 10 + ((i * 3) % 9),
  size: 8 + ((i * 5) % 10),
  hue: i % 3,
}));
const COLORS = ["oklch(0.78 0.15 70)", "oklch(0.6 0.18 20)", "oklch(0.92 0.05 90)"];

export function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="animate-petal absolute -top-6 block rounded-[60%_0_60%_0]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: COLORS[p.hue],
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
