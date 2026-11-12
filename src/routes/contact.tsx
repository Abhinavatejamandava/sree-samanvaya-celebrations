import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/services";
import { PageHero } from "@/components/site/ServiceCard";
import { SectionTitle } from "@/components/site/Ornament";
import { RequestForm } from "@/components/site/RequestForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Sree Samanvaya Events" },
      { name: "description", content: "Request a free quote for your event decor. Serving NY, NJ, PA and DE." },
      { property: "og:title", content: "Book Your Event — Sree Samanvaya" },
      { property: "og:description", content: "Tell us about your celebration and receive a personalised concept and quote." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero title="Let's Celebrate Together" subtitle="Tell us about your event — we'll respond with ideas and a personalised quote." image={SERVICES[8].image} video={SERVICES[8].video} />
      <section className="mandala-bg py-14 sm:py-20">
        <SectionTitle eyebrow="Free quote" title="Book Your Event Today" />
        <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-3 sm:px-6 lg:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            {[
              { I: Mail, t: CONTACT.email, h: `mailto:${CONTACT.email}` },
              { I: Phone, t: CONTACT.phone },
              { I: MapPin, t: `Serving ${CONTACT.areas}` },
            ].map(({ I, t, h }) => (
              <div key={t} className="flex min-w-0 items-center gap-3 rounded-2xl border border-gold/40 bg-card p-4 shadow-card">
                <I className="h-5 w-5 shrink-0 text-gold" />
                {h ? <a href={h} className="min-w-0 break-all font-semibold text-primary">{t}</a> : <span className="min-w-0 font-semibold text-primary">{t}</span>}
              </div>
            ))}
          </div>
          <RequestForm />
        </div>
      </section>
    </>
  );
}
