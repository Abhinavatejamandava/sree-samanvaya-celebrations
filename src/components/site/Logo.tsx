import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`min-w-0 ${light ? "text-ivory" : "text-foreground"}`} aria-label="Sree Samanvaya home">
      <span className="wordmark"><span className="wordmark-sree">SREE</span><span className="wordmark-name">SAMANVAYA</span></span>
      <span className="mt-1 block text-[0.55rem] font-medium">CELEBRATIONS · GROUPS LLC</span>
    </Link>
  );
}
