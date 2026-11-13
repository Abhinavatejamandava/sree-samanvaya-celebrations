import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-inclusive.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`brand-logo min-w-0 ${light ? "text-ivory" : "text-foreground"}`} aria-label="Sree Samanvaya home">
      <img src={logo} alt="" width={48} height={64} className="brand-symbol" />
      <span className="min-w-0"><span className="wordmark"><span className="wordmark-sree">SREE</span><span className="wordmark-name">SAMANVAYA</span></span>
      <span className="mt-1 block text-[0.55rem] font-medium">CELEBRATIONS · GROUPS LLC</span></span>
    </Link>
  );
}
