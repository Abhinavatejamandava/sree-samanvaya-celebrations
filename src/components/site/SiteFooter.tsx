import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, SERVICES } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="bg-maroon-gradient text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="min-w-0">
          <div className="inline-block rounded-2xl bg-ivory p-2"><Logo /></div>
          <p className="mt-4 text-sm opacity-90">Traditional elegance, modern creativity and custom experiences for every celebration of your life.</p>
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-xl font-bold text-gold-soft">Services</h3>
          <ul className="mt-3 space-y-1 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="opacity-90 hover:text-gold-soft">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-xl font-bold text-gold-soft">Get in Touch</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex gap-2 break-all"><Mail className="h-4 w-4 shrink-0" /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" />{CONTACT.phone}</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" />Serving {CONTACT.areas}</li>
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-xl font-bold text-gold-soft">Let's Celebrate</h3>
          <p className="mt-3 text-sm opacity-90">Tell us about your event and receive a personalised concept and quote.</p>
          <Link to="/contact" className="mt-4 inline-block rounded-full bg-gold-gradient px-5 py-2 text-sm font-bold text-maroon-deep">Book a Consultation</Link>
        </div>
      </div>
      <div className="border-t border-gold/30 px-4 py-4 text-center text-xs opacity-80">© {new Date().getFullYear()} Sree Samanvaya Groups LLC · Events</div>
    </footer>
  );
}
