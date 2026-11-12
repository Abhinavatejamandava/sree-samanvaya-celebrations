import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-2 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-4 py-2 font-display text-lg font-semibold text-primary transition hover:bg-secondary"
              activeProps={{ className: "bg-maroon-gradient text-primary-foreground hover:bg-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-2 rounded-full bg-gold-gradient px-5 py-2 text-sm font-bold text-maroon-deep shadow-gold transition hover:scale-105">
            Book Now
          </Link>
        </nav>
        <button
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/50 text-primary lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-gold/30 bg-background px-3 pb-4 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="block rounded-lg px-3 py-3 font-display text-lg font-semibold text-primary"
              activeProps={{ className: "bg-secondary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
