import seemanthamImg from "@/assets/svc-seemantham.jpg";
import haldiImg from "@/assets/svc-haldi.jpg";
import pelliImg from "@/assets/svc-pelli-kuthuru.jpg";
import weddingImg from "@/assets/svc-wedding.jpg";
import sangeethImg from "@/assets/svc-sangeeth.jpg";
import poojaImg from "@/assets/svc-pooja.jpg";
import ibsImg from "@/assets/svc-indian-baby-shower.jpg";
import absImg from "@/assets/svc-american-baby-shower.jpg";
import annivImg from "@/assets/svc-anniversary.jpg";
import consultImg from "@/assets/svc-consulting.jpg";
import seemanthamVid from "@/assets/videos/seemantham.mp4.asset.json";
import haldiVid from "@/assets/videos/haldi.mp4.asset.json";
import pelliVid from "@/assets/videos/pelli-kuthuru.mp4.asset.json";
import weddingVid from "@/assets/videos/wedding.mp4.asset.json";
import sangeethVid from "@/assets/videos/sangeeth.mp4.asset.json";
import poojaVid from "@/assets/videos/pooja.mp4.asset.json";
import ibsVid from "@/assets/videos/indian-baby-shower.mp4.asset.json";
import absVid from "@/assets/videos/american-baby-shower.mp4.asset.json";
import annivVid from "@/assets/videos/anniversary.mp4.asset.json";
import photoImg from "@/assets/svc-photography.jpg";
import planImg from "@/assets/svc-event-planning.jpg";
import photoVid from "@/assets/videos/photography-scene.mp4.asset.json";
import planVid from "@/assets/videos/event-planning-scene.mp4.asset.json";
import cateringImg from "@/assets/svc-catering.jpg";
import cateringVid from "@/assets/videos/catering.mp4.asset.json";
import consultVid from "@/assets/videos/styling-scene.mp4.asset.json";
import gatheringImg from "@/assets/svc-family-gathering.jpg";
import getawayImg from "@/assets/svc-family-getaway.jpg";
import gatheringVid from "@/assets/videos/family-gathering.mp4.asset.json";
import getawayVid from "@/assets/videos/family-getaway.mp4.asset.json";

export type Category = "traditional" | "modern";

export interface Service {
  slug: string;
  name: string;
  subtitle: string;
  price: string;
  category: Category;
  image: string;
  video: string;
  tagline: string;
  short: string;
  story: string[];
  meaning: string;
  includes: string[];
  feeling: string;
  faqs: { q: string; a: string }[];
  offerings?: ("catering" | "comedy" | "live-music" | "drive" | "stay")[];
}

export const SERVICES: Service[] = [
  {
    slug: "seemantham",
    name: "Seemantham Decor",
    subtitle: "God-Bharai · Blessings for Mother & Baby",
    price: "From $599",
    category: "traditional",
    image: seemanthamImg,
    video: seemanthamVid.url,
    tagline: "Where every blessing finds a beautiful home.",
    short: "Traditional, elegant decor for the blessed occasion.",
    meaning:
      "Seemantham is one of the most tender rituals in our culture — a day when the elders, family and friends surround the mother-to-be with bangles, flowers and prayers for a safe and joyful arrival.",
    story: [
      "We remember the first time we saw a grandmother's eyes fill with tears as she placed bangles on her daughter's wrist under a jasmine-covered swing. That moment is why we do this.",
      "Our Seemantham setups are designed to hold that emotion — a carved swing draped in fresh garlands, glowing brass diyas, banana leaves at the entrance and soft gold light that makes every photograph feel like an heirloom.",
      "You focus on the blessings. We take care of every flower, every lamp and every detail, so your family simply arrives and feels at home in tradition.",
    ],
    includes: [
      "Decorated swing (oonjal) or royal seating for the mother-to-be",
      "Fresh jasmine, marigold and rose garlands",
      "Brass diyas, kuthuvilakku lamps and urlis",
      "Banana plants and traditional entrance decor",
      "Bangle ceremony table and aarti thali styling",
      "Personalised name / welcome signage",
    ],
    feeling: "A setting that makes the elders smile and the mother feel like a queen.",
    faqs: [
      { q: "Can you decorate at our home?", a: "Yes — we design for living rooms, backyards, community halls and temples alike." },
      { q: "Do you provide traditional items like the swing?", a: "Yes, swings, lamps, urlis and props are part of our collection." },
    ],
  },
  {
    slug: "haldi",
    name: "Haldi Ceremony Decor",
    subtitle: "Golden Joy Before the Big Day",
    price: "From $599",
    category: "traditional",
    image: haldiImg,
    video: haldiVid.url,
    tagline: "Sunshine, turmeric and laughter you'll never forget.",
    short: "Vibrant, festive setups for pre-wedding rituals.",
    meaning:
      "Haldi is a celebration of purity, protection and pure fun — the turmeric glow that prepares the bride and groom for a new beginning, surrounded by the people who love them most.",
    story: [
      "Haldi is the morning when the nerves melt into giggles — cousins chasing each other with turmeric, aunties singing, and the couple glowing in yellow.",
      "We bring that energy to life with marigold arches, flowing yellow drapes, brass urns filled with haldi and low floral seating that invites everyone to come closer.",
      "Every corner is designed to be photographed — and every photo will bring back the sound of that laughter.",
    ],
    includes: [
      "Marigold and floral arch or backdrop",
      "Yellow and white drapery with fairy lights",
      "Low baithak seating with bolsters",
      "Brass urns, haldi bowls and petal trays",
      "Floral jewellery table (optional)",
      "Photo corner with custom signage",
    ],
    feeling: "Bright, happy and bursting with colour — just like the moment.",
    faqs: [
      { q: "Indoor or outdoor?", a: "Both! We plan drapes and floor protection for each venue." },
      { q: "Can you combine Haldi with Mehendi?", a: "Yes, ask about our combo offer — book two events and save an extra 5%." },
    ],
  },
  {
    slug: "pelli-kuthuru",
    name: "Pelli Kuthuru Decor",
    subtitle: "Celebrating the Bride-to-Be",
    price: "From $699",
    category: "traditional",
    image: pelliImg,
    video: pelliVid.url,
    tagline: "The day she becomes our pelli kuthuru — and our hearts overflow.",
    short: "Beautiful and traditional decor for the bride-to-be.",
    meaning:
      "Pelli Kuthuru is a cherished Telugu ritual where the bride is bathed in blessings, adorned and celebrated as she steps towards married life.",
    story: [
      "There is a quiet moment in every Pelli Kuthuru — when the bride sits down, the mangala snanam begins and her mother looks at her as if seeing her grow up all over again.",
      "We frame that moment in royal maroon and gold: hanging jasmine strands, golden pillars, lotus motifs and the warm flicker of a hundred lamps.",
      "It's tradition, made breathtaking — so the memory lives as beautifully as it felt.",
    ],
    includes: [
      "Royal stage with maroon and gold drapes",
      "Hanging jasmine and rose strands",
      "Golden pillars, lotus and temple motifs",
      "Peeta (seating) and mangala snanam setup",
      "Brass lamps and aarti styling",
      "Entrance and photo-backdrop decor",
    ],
    feeling: "Regal, sacred and deeply emotional.",
    faqs: [
      { q: "Do you also decorate for the groom's Pelli Koduku?", a: "Absolutely — we create matching or contrasting themes for both." },
      { q: "How early should we book?", a: "30+ days ahead is ideal and earns our Early Bird 10% savings." },
    ],
  },
  {
    slug: "wedding",
    name: "Weddings & Receptions",
    subtitle: "Mandap, Stage & Complete Venue Styling",
    price: "Custom Packages",
    category: "traditional",
    image: weddingImg,
    video: weddingVid.url,
    tagline: "Two families, one story — styled to last a lifetime.",
    short: "Grand mandaps, stages, receptions and complete venue styling.",
    meaning:
      "A wedding is the meeting of two souls and two families. Every ritual, from the jeelakarra bellam to the saptapadi, deserves a setting worthy of its meaning.",
    story: [
      "When the antarpat lowers and two people see each other for the first time as husband and wife — the whole room holds its breath. We design for that heartbeat.",
      "From mandaps crowned with roses to receptions glowing under chandeliers, we style every space so it feels both timeless and unmistakably you.",
      "One team, one vision, from the first consultation to the last petal — so you can be fully present on the most important day of your life.",
    ],
    includes: [
      "Mandap design (traditional, floral, or modern)",
      "Reception stage and backdrop",
      "Entrance, aisle and walkway decor",
      "Centerpieces and table styling",
      "Lighting design and drapery",
      "Full venue coordination and teardown",
    ],
    feeling: "Grand, graceful and unforgettable.",
    faqs: [
      { q: "Do you handle multi-day weddings?", a: "Yes — we can style every event from Haldi to Reception with a cohesive theme." },
      { q: "Which areas do you serve?", a: "New York, New Jersey, Pennsylvania and Delaware." },
    ],
  },
  {
    slug: "sangeeth",
    name: "Sangeeth & Celebrations",
    subtitle: "Music, Dance & Dazzling Nights",
    price: "From $899",
    category: "modern",
    image: sangeethImg,
    video: sangeethVid.url,
    tagline: "Let the lights rise, the music play, and the family dance.",
    short: "Fun, vibrant and modern decor for sangeeth nights.",
    meaning:
      "Sangeeth is where families become one big dance floor — songs, surprise performances and memories that are retold for years.",
    story: [
      "It starts with an uncle who 'doesn't dance' and ends with everyone on the floor. That's the magic of a great Sangeeth night.",
      "We build that magic with glowing arches, theatrical lighting, a stage made for performances and lounge seating where grandparents watch with pride.",
      "Every beam of light is placed so your family shines — on stage and in every video.",
    ],
    includes: [
      "Stage and performance backdrop",
      "Uplighting, fairy lights and spotlights",
      "Dance floor styling",
      "Lounge seating for the couple and family",
      "Floral and crystal installations",
      "Custom monogram / name signage",
    ],
    feeling: "Electric, joyful and full of colour.",
    faqs: [
      { q: "Can you work with our DJ and sound team?", a: "Yes, we coordinate stage and lighting layouts with your vendors." },
      { q: "Can the theme be Bollywood-style?", a: "Of course — retro, royal, garden, neon — we'll match your vibe." },
    ],
  },
  {
    slug: "satyanarayana-pooja",
    name: "Satyanarayana Swamy Pooja Decor",
    subtitle: "Gods' Pooja Décor · Sacred & Serene",
    price: "From $399",
    category: "traditional",
    image: poojaImg,
    video: poojaVid.url,
    tagline: "A sacred space where devotion feels at home.",
    short: "Authentic and auspicious pooja setups with traditional arrangements.",
    meaning:
      "The Satyanarayana Swamy Vratham is performed for gratitude, new beginnings and the well-being of the family — housewarmings, weddings, birthdays and milestones.",
    story: [
      "When the priest begins the katha and the room fills with the scent of camphor and flowers, every heart turns inward. That calm is sacred.",
      "We create mandapams with banana plants, fresh garlands, kalash and lamps arranged with care and respect for tradition — so the space feels as divine as the prayer.",
      "You welcome the Lord into your home; we make sure He is welcomed beautifully.",
    ],
    includes: [
      "Decorated mandapam with banana plants",
      "Fresh marigold and jasmine garlands",
      "Kalash, brass diyas and pooja platform",
      "Rangoli / muggulu floor art",
      "Prasadam and offering table styling",
      "Seating for family and guests",
    ],
    feeling: "Peaceful, devotional and auspicious.",
    faqs: [
      { q: "Do you decorate for other poojas too?", a: "Yes — Ganesh, Lakshmi, Varalakshmi Vratham, gruhapravesam and more." },
      { q: "Can you set up early in the morning?", a: "Yes, we plan setup around your muhurtham." },
    ],
  },
  {
    slug: "indian-baby-shower",
    name: "Indian Baby Shower Decor",
    subtitle: "Traditional & Graceful",
    price: "From $499",
    category: "traditional",
    image: ibsImg,
    video: ibsVid.url,
    tagline: "Welcoming a little soul with a whole family's love.",
    short: "Traditional baby shower setups with cultural touches.",
    meaning:
      "An Indian baby shower blends ritual and celebration — honouring the mother, blessing the baby and gathering generations together.",
    story: [
      "Picture a flower-dressed cradle, brass elephants standing guard, and soft pink blossoms everywhere — a room that whispers 'welcome, little one'.",
      "We blend tradition with tenderness: cradles, jasmine strands, diyas and gentle colour palettes that feel warm and graceful.",
      "It's the kind of setup that makes guests pause at the door and say, 'Oh, how beautiful.'",
    ],
    includes: [
      "Flower-decked cradle or swing",
      "Brass elephants, urlis and diyas",
      "Pastel floral backdrop",
      "Seating for the mother-to-be",
      "Gift and dessert table styling",
      "Custom welcome sign",
    ],
    feeling: "Soft, warm and full of blessings.",
    faqs: [
      { q: "Can we mix Indian and modern styles?", a: "Yes — many families love a fusion of both." },
      { q: "Do you do gender reveals?", a: "Yes, we can add a reveal moment to your shower." },
    ],
  },
  {
    slug: "american-baby-shower",
    name: "American Baby Shower Decor",
    subtitle: "Modern, Charming & Playful",
    price: "From $499",
    category: "modern",
    image: absImg,
    video: absVid.url,
    tagline: "Oh baby! A celebration as sweet as the little one on the way.",
    short: "Modern baby shower setups with balloons and creative themes.",
    meaning:
      "A modern baby shower is a joyful party for the parents-to-be — playful themes, sweet treats and photos you'll show your child one day.",
    story: [
      "Pastel balloons, a giant teddy bear, a dessert table that looks too pretty to eat — this is the shower your friends will talk about.",
      "We design organic balloon garlands, floral walls and themed details that feel fresh, light and completely Instagram-worthy.",
      "From 'Oh Baby' to 'Twinkle Twinkle Little Star', we bring your theme to life.",
    ],
    includes: [
      "Organic balloon garland or arch",
      "Themed backdrop and signage",
      "Dessert and gift table styling",
      "Teddy bears, blocks and props",
      "Floral accents",
      "Photo-booth corner",
    ],
    feeling: "Light, playful and picture-perfect.",
    faqs: [
      { q: "Can you match a specific colour scheme?", a: "Absolutely — blush, blue, sage, neutrals or anything you love." },
      { q: "Do you supply the props?", a: "Yes, props and stands are included in your package." },
    ],
  },
  {
    slug: "anniversary",
    name: "Anniversary Celebrations",
    subtitle: "Honouring Love Through the Years",
    price: "From $499",
    category: "modern",
    image: annivImg,
    video: annivVid.url,
    tagline: "Every year together deserves to be celebrated beautifully.",
    short: "Elegant setups to celebrate love and milestones.",
    meaning:
      "Whether it's the 1st or the 50th, an anniversary is a thank-you — to each other and to every family member who walked the journey with you.",
    story: [
      "Imagine your parents walking into a room glowing with candles and roses — and seeing their whole family waiting for them. That's the surprise we love to create.",
      "Romantic arches, candlelight, elegant seating and personal touches like photos from the years gone by turn an evening into a tribute.",
      "Because love that lasts deserves a celebration that shines.",
    ],
    includes: [
      "Floral arch or backdrop",
      "Candle and fairy-light styling",
      "Couple seating / loveseat",
      "Memory wall with photos",
      "Cake table styling",
      "Custom name / years signage",
    ],
    feeling: "Romantic, heartfelt and elegant.",
    faqs: [
      { q: "Can you plan a surprise?", a: "Yes — we coordinate secretly with the family." },
      { q: "Do you do milestone birthdays too?", a: "Yes, we style all kinds of family milestones." },
    ],
  },
  {
    slug: "event-planning",
    name: "Event Planning & Management",
    subtitle: "From First Idea to Final Farewell",
    price: "Custom Quote",
    category: "modern",
    image: planImg,
    video: planVid.url,
    tagline: "You enjoy every moment. We manage every detail.",
    short: "Full-service planning, timelines, vendors and day-of coordination.",
    meaning:
      "Great celebrations don't happen by chance — they are planned with love, patience and precision. Our planners become an extension of your family, carrying the weight so you can carry the joy.",
    story: [
      "We have watched too many parents spend their child's wedding running between the kitchen and the stage. We believe the people who matter most should be in the photographs, not behind them.",
      "Our planners build your timeline, budget and guest flow; source and coordinate caterers, priests, DJs, photographers and venues; and run the day minute by minute with calm confidence.",
      "Muhurtham timings, ritual sequences, rentals, seating and send-off — handled. You simply arrive, smile and celebrate.",
    ],
    includes: [
      "Personal planner and planning timeline",
      "Budget planning and tracking",
      "Venue, caterer, priest, DJ and vendor coordination",
      "Ritual sequence and muhurtham scheduling",
      "Guest flow, seating and RSVP support",
      "Full day-of coordination team",
    ],
    feeling: "Calm, organised and completely carefree.",
    faqs: [
      { q: "Can you plan just the day-of?", a: "Yes — we offer full planning, partial planning and day-of coordination." },
      { q: "Do you plan multi-day events?", a: "Absolutely — engagement to reception, under one cohesive plan." },
    ],
  },
  {
    slug: "photography",
    name: "Photography & Videography",
    subtitle: "Candid Moments · Cinematic Memories",
    price: "Custom Quote",
    category: "modern",
    image: photoImg,
    video: photoVid.url,
    tagline: "Decor fades, flowers wilt — but these memories will last forever.",
    short: "Candid photography, cinematic films and reels for every celebration.",
    meaning:
      "Photographs are the only part of the day you get to keep. A grandmother's blessing, a nervous smile, a tear during the kanyadaanam — we capture what you'll want to relive for generations.",
    story: [
      "Years from now, your children will open an album and ask, 'Who is that?' — and you'll tell them the whole story. We take those photographs.",
      "Our photographers understand Indian ceremonies — when the thali is tied, when the rice is showered, when the elders bless — so no sacred moment is ever missed.",
      "Because we also style your decor, every frame looks harmonious: the light, the colours, the setting and the people, all telling one beautiful story.",
    ],
    includes: [
      "Candid and traditional photography",
      "Cinematic highlight films",
      "Instagram reels and teasers",
      "Pre-wedding and maternity shoots",
      "Drone coverage (where permitted)",
      "Edited online gallery and premium albums",
    ],
    feeling: "Timeless, emotional and beautifully real.",
    faqs: [
      { q: "Can we book photography with decor?", a: "Yes — and you'll save with our combo offer." },
      { q: "How soon do we get photos?", a: "Sneak peeks within a few days; full galleries follow after editing." },
    ],
  },
  {
    slug: "catering",
    name: "Catering — Indian & American Cuisine",
    subtitle: "A Feast Your Guests Will Talk About",
    price: "Custom Quote",
    category: "modern",
    image: cateringImg,
    video: cateringVid.url,
    tagline: "Every celebration is remembered by its food — let's make yours unforgettable.",
    short: "Multi-cuisine Indian menus plus American favourites, buffet or plated.",
    meaning:
      "In our homes, food is love served on a plate. From the first sweet at a pooja to the grand wedding feast, the menu is how a family welcomes its guests.",
    story: [
      "We still remember the aroma of an aunt's biryani drifting through a wedding hall — the moment everyone stopped talking and simply smiled. That is the feeling we cook for.",
      "Our menus travel across India: Andhra and Telangana spice, Tamil and Kerala classics, Karnataka favourites, rich North Indian and Punjabi curries, Gujarati and Rajasthani thalis, Indo-Chinese street favourites and live dosa, chaat and tandoor stations.",
      "Hosting friends with different tastes? We also serve American cuisine — sliders, pastas, grills, salads, mac & cheese and kid-friendly plates — so every guest, from grandparents to colleagues, leaves happy.",
    ],
    includes: [
      "South Indian — Andhra, Telangana, Tamil, Kerala & Karnataka",
      "North Indian & Punjabi — tandoor, curries, breads",
      "Gujarati, Rajasthani & Indo-Chinese specialities",
      "American menu — grills, sliders, pasta, salads, desserts",
      "Pure vegetarian, Jain, vegan & non-veg options",
      "Live stations, buffet or plated service with staff",
    ],
    feeling: "Generous, flavourful and made with love.",
    faqs: [
      { q: "Can we mix Indian and American dishes?", a: "Yes — fusion menus are very popular for receptions and baby showers." },
      { q: "Do you offer pooja prasadam and satvik food?", a: "Yes, we prepare traditional satvik, no-onion-no-garlic and Jain menus." },
      { q: "Can we do a tasting?", a: "Ask us when you request a quote and we'll arrange the details." },
    ],
  },
  {
    slug: "event-consulting",
    name: "Event Consulting, Balloon & Floral",
    subtitle: "Planning, Styling & Complete Event Solutions",
    price: "Custom Quote",
    category: "modern",
    image: consultImg,
    video: consultVid.url,
    tagline: "Your vision, our craft — from first idea to final petal.",
    short: "End-to-end planning, balloon and floral arrangements, and decor supply.",
    meaning:
      "Not every celebration fits a box. Our consulting service helps you dream, plan and execute any event — with balloons, florals, vendors and decor sourced through our trade network.",
    story: [
      "Some of our favourite events started with a single sentence: 'We want it to feel special, but we don't know where to begin.'",
      "We sit with you, understand your family, your budget and your dream — then build a concept, a plan and a team around it.",
      "Fresh and artificial florals, custom balloon art, vendor coordination and even importing / wholesale decor products — all under one roof.",
    ],
    includes: [
      "One-on-one concept consultation",
      "Theme, colour and mood boards",
      "Custom balloon and floral installations",
      "Vendor coordination",
      "Decor products — wholesale & retail",
      "Day-of styling support",
    ],
    feeling: "Thoughtful, organised and stress-free.",
    faqs: [
      { q: "Can I just order flowers or balloons?", a: "Yes — balloon and floral arrangements are available on their own." },
      { q: "Do you sell decor wholesale?", a: "Yes, through our importing, exporting and wholesale trade division." },
    ],
  },
  {
    slug: "family-gathering", name: "Family Gatherings & Entertainment",
    subtitle: "Shared Meals · Comedy · Live Music", price: "Custom Quote", category: "modern",
    image: gatheringImg, video: gatheringVid.url,
    offerings: ["catering", "comedy", "live-music"],
    tagline: "A table for everyone. A reason to laugh. A night to remember.",
    short: "Bring generations together with Indian & American catering, comedy and live music.",
    meaning: "You don't need a wedding to bring everyone together. A reunion, a holiday dinner or a long-overdue family evening can become the memory everyone carries home.",
    story: [
      "The best family gatherings feel effortless: grandparents sharing stories, children making new friends, and cousins picking up exactly where they left off. We shape the setting around those connections.",
      "Pair a generous Indian and American menu with warm decor, comfortable seating and an evening of laughter. Family-friendly comedy and live music can bring the room together without losing space for conversation.",
      "Whether your family shares one tradition or many, your celebration belongs to everyone. We discuss languages, musical tastes, cultural preferences and the ages of your guests before building your programme.",
    ],
    includes: ["Reunion, holiday and family dinner planning", "Welcoming decor and multigenerational seating", "Indian and American catering options", "Family-friendly comedy programme coordination", "Live music and performance scheduling", "Guest activities, photo moments and evening flow"],
    feeling: "More laughter, more connection, more time with your people.",
    faqs: [
      { q: "Can we choose both comedy and live music?", a: "Yes. Tell us your preferred language, musical style and audience ages. Performers, timing and fees are confirmed in your quote, subject to availability." },
      { q: "Can the menu reflect different cultures?", a: "Yes. We offer Indian and American catering and discuss dietary preferences so the meal feels welcoming to your guests." },
      { q: "Can you plan an intimate gathering?", a: "Yes. Share your guest count and venue, and we'll propose a setting and programme that fit the gathering rather than overwhelm it." },
    ],
  },
  {
    slug: "family-getaway", name: "Family Getaways — Drive & Stay",
    subtitle: "The Journey · The Stay · Time Together", price: "Custom Quote", category: "modern",
    image: getawayImg, video: getawayVid.url,
    offerings: ["catering", "drive", "stay"],
    tagline: "Take the scenic route back to each other.",
    short: "Thoughtfully planned family escapes with drive-and-stay arrangements and shared meals.",
    meaning: "Sometimes the celebration is simply getting away together. A change of scenery makes room for unhurried mornings, shared meals and the conversations everyday life leaves behind.",
    story: [
      "Imagine leaving the rush behind and arriving somewhere your whole family can settle in. A lakeside weekend, a countryside retreat or a comfortable group stay becomes a chance to reconnect across generations.",
      "We help shape the journey as well as the destination: drive arrangements, arrival plans, accommodation preferences and a relaxed itinerary with room for children and elders alike.",
      "Gather for Indian and American meals, enjoy activities at your family's pace, and leave time for doing nothing at all. Travel, stays, catering and any entertainment are agreed individually before booking.",
    ],
    includes: ["Destination and family itinerary planning", "Drive arrangements and travel schedule coordination", "Group accommodation and stay coordination", "Indian and American meal planning", "Family activities and shared celebration moments", "Arrival, rooming and departure coordination"],
    feeling: "A little distance from routine. A little closer to family.",
    faqs: [
      { q: "What does drive and stay include?", a: "We coordinate a proposed journey and accommodation plan. Vehicle or self-drive arrangements, rooms, meals and costs are itemised in your quote; nothing is assumed to be included." },
      { q: "Can you accommodate children and older relatives?", a: "Tell us about mobility needs, room preferences, travel comfort and children's ages so we can discuss suitable options with the destination and accommodation providers." },
      { q: "Are destinations and dates guaranteed?", a: "No. Stays, transport and activities depend on availability. We confirm the itinerary, provider terms and cancellation conditions before you commit." },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const CONTACT = {
  email: "celebrate@sreesamanvaya.com",
  phone: "+1 845 309 9344",
  areas: "NY | NJ | PA | DE",
};
export const svcAt = (i: number): Service => {
  const service = SERVICES[i];
  if (!service) throw new Error(`Unknown service index: ${i}`);
  return service;
};
