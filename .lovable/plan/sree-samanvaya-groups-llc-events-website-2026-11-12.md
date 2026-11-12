# Sree Samanvaya Groups LLC – Events Website

A rich, festive website in the maroon, gold and ivory style of your flyers, with a new traditional logo, gentle animations, AI-made video for every service, and a request form on every service page that emails celebrate@sreesamanvaya.com.

## Logo
- Two concepts in Indian tradition (lotus, diya, temple-arch, kolam motifs around an "S"), maroon and gold. You pick one; it is used in the header, footer and browser tab.

## Pages
- **Home** – video hero, featured services, "Our Work in Action", how it works, testimonials, offers, call to action.
- **About** – story, values (tradition + modern creativity), serving NY | NJ | PA | DE.
- **Services** – overview of all services with prices.
- **One page per service (10):** Seemantham, Haldi, Pelli Kuthuru, Wedding & Reception, Sangeeth, Satyanarayana Swamy Pooja, Indian Baby Shower, American Baby Shower, Anniversary, Event Consulting / Balloon & Floral.
  Each has: its own AI video, emotional story-led copy (meaning of the ritual, what we create, what's included), "From $X" price, gallery, FAQs, and a request form for that service.
- **Gallery** – filterable by occasion.
- **Packages** – Essential $499+, Premium $1,499+, Luxury $2,999+; plus Intimate/Premium/Grand celebration tiers and launch offers (15% off first booking, early bird 10%, combo 5%, $50 referral).
- **Contact** – general request form.

## Request form
Name, email, phone, event date, location/state, guest count, budget, message; service pre-filled. Each request is saved and emailed to celebrate@sreesamanvaya.com with all details. A thank-you confirmation shows on screen.

## Videos and images
- About 10 short AI videos (one per service, ~5–8 s, decor scenes with flowers, diyas, gold drapes) plus matching still images for galleries. Generating video uses credits; I'll make one per service.

## Design and motion
- Serif display headings, maroon/gold/ivory palette, ornamental dividers, floating petals, glowing diyas, scroll fade-ins, hover lifts. Respects "reduce motion".
- Fully responsive down to under 250px wide (stacked layout, compact menu, fluid text).

## What you need to know
- Email sending needs the domain sreesamanvaya.com set up for sending (a short one-time setup I'll open for you). Until it's verified, requests are still saved safely.
- Phone number and address on the flyers are placeholders; I'll leave placeholders until you send real ones.

## Technical details
- TanStack routes per page (`/services/$slug` data-driven or individual files), per-route head metadata.
- Lovable Cloud table `service_requests` (insert-only from server), server function validates with zod, then sends owner-notification app email via Lovable Emails.
- Videos via videogen saved as asset pointers; images via imagegen.
