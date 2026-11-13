import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

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
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 py-4 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-4 py-2 text-xs font-semibold uppercase text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-foreground underline underline-offset-8" }}
            >
              {n.label}
            </Link>
          ))}
          <Button asChild className="ml-4"><Link to="/contact">Plan Your Event</Link></Button>
        </nav>
        <Button variant="ghost" size="icon"
          className="shrink-0 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-3 pb-4 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="block px-3 py-3 text-sm font-medium text-primary"
              activeProps={{ className: "bg-secondary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
      <nav aria-label="Celebrations" className="flex gap-7 overflow-x-auto border-t border-border px-4 py-3 text-xs text-muted-foreground sm:px-8 min-[1400px]:justify-center">
        {[
          { slug: "wedding", label: "Weddings" },
          { slug: "haldi", label: "Haldi & Sangeeth" },
          { slug: "seemantham", label: "Baby Celebrations" },
          { slug: "catering", label: "Catering" },
          { slug: "photography", label: "Photography" },
          { slug: "event-planning", label: "Event Planning" },
          { slug: "family-gathering", label: "Family Gatherings" },
          { slug: "family-getaway", label: "Family Getaways" },
        ].map((item) => <Link key={item.slug} to="/services/$slug" params={{ slug: item.slug }} className="shrink-0 hover:text-foreground">{item.label}</Link>)}
      </nav>
    </header>
  );
}
