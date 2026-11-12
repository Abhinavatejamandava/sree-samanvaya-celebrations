import { Link } from "@tanstack/react-router";
import mark from "@/assets/logo-mark.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2" aria-label="Sree Samanvaya home">
      <img src={mark} alt="" width={816} height={816} className="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14" />
      <span className="min-w-0 leading-none">
        <span className={`block truncate font-display text-base font-bold sm:text-2xl ${light ? "text-ivory" : "text-primary"}`}>Sree Samanvaya</span>
        <span className="mt-0.5 block truncate font-accent text-[0.5rem] tracking-[0.25em] text-gold sm:text-[0.65rem]">GROUPS LLC · EVENTS</span>
      </span>
    </Link>
  );
}
