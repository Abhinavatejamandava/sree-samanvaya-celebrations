export type ProcessStep = { title: string; text: string; care: string };
export type MarketRate = { market: string; basis: string; note: string };

const SPECIFIC: Record<string, [ProcessStep, ProcessStep]> = {
  seemantham: [
    { title: "Muhurtham & priest coordination", text: "We align the ceremony time with your family's chosen muhurtham and the priest's requirements.", care: "We coordinate timings, ritual items and arrival order." },
    { title: "Blessing stage & bangle ceremony", text: "A comfortable, floral seat for the mother-to-be, with space for elders to offer bangles and blessings.", care: "We set up seating, bangle trays and floral styling." },
  ],
  haldi: [
    { title: "Marigold colour story", text: "Yellow and marigold décor, floor seating and props designed around your family's style.", care: "We source flowers, drapes and protective coverings." },
    { title: "Ritual area & guest flow", text: "A clear space for applying haldi, photos and music so every relative takes part.", care: "We manage the ritual setup, towels and guest movement." },
  ],
  "pelli-kuthuru": [
    { title: "Ritual items & preparations", text: "Mangala snanam and ceremony needs are listed with your family well in advance.", care: "We prepare trays, flowers and ritual essentials." },
    { title: "Bridal seating & florals", text: "A graceful setting where the bride is honoured, photographed and blessed.", care: "We style the seat, backdrop and lighting." },
  ],
  wedding: [
    { title: "Mandap & vendor coordination", text: "From the mandap to the reception stage, every provider works to one design and schedule.", care: "We coordinate décor, catering, photography and venue staff." },
    { title: "Ceremony-to-reception rehearsal", text: "Processions, rituals, changeovers and speeches are walked through before the day.", care: "We run the rehearsal and finalise the timeline." },
  ],
  sangeeth: [
    { title: "Stage, lights & sound", text: "A performance stage and dance floor with lighting that turns the evening into a show.", care: "We arrange stage décor, lighting and sound partners." },
    { title: "Performance run-of-show", text: "Family performances, the couple's dance and open dancing are sequenced with dinner.", care: "We cue performers and keep the programme on time." },
  ],
  "satyanarayana-pooja": [
    { title: "Priest, samagri & prasadam", text: "Ritual items, priest timings and prasadam requirements are confirmed with your family.", care: "We help gather samagri and coordinate the priest's needs." },
    { title: "Pooja mandapam setup", text: "A serene, flower-adorned mandapam with seating for family and guests.", care: "We set up the mandapam, flowers and seating." },
  ],
  "indian-baby-shower": [
    { title: "Godh bharai rituals & décor", text: "Traditions from your family are woven into a soft, floral celebration.", care: "We prepare ritual trays and themed décor." },
    { title: "Blessing seat & gifts table", text: "A beautiful seat for the mother-to-be and an organised space for gifts.", care: "We style the seat, backdrop and gift display." },
  ],
  "american-baby-shower": [
    { title: "Theme, balloons & backdrop", text: "A personal theme with balloon garlands, signage and a photo-worthy backdrop.", care: "We design, deliver and install the décor." },
    { title: "Games, desserts & photo corner", text: "Playful games, a dessert table and a photo corner keep guests delighted.", care: "We set up tables, props and activity stations." },
  ],
  anniversary: [
    { title: "Memory décor & personal details", text: "Photos, milestones and favourite colours tell the story of your years together.", care: "We design memory displays and personalised signage." },
    { title: "Dinner, toasts & music", text: "A warm dinner flow with toasts, music and a moment for the couple.", care: "We coordinate the programme, table styling and partners." },
  ],
  "event-planning": [
    { title: "Venue & vendor management", text: "Venue, catering, décor and entertainment are booked, briefed and confirmed.", care: "We handle communication and contracts timelines with providers." },
    { title: "Run-of-show & walkthrough", text: "A minute-by-minute plan is reviewed on site with the key people.", care: "We create the run-of-show and lead the walkthrough." },
  ],
  photography: [
    { title: "Shot list & ritual timings", text: "Your must-have moments and family groupings are listed against the ceremony timeline.", care: "We prepare the shot list with the photographer." },
    { title: "Coverage plan & editing", text: "Positions, lighting and delivery dates for photos and films are agreed in advance.", care: "We coordinate coverage and track delivery." },
  ],
  catering: [
    { title: "Menu tasting & dietary planning", text: "Indian and American dishes are shortlisted with dietary needs and guest count in mind.", care: "We plan quantities, labels and dietary options." },
    { title: "Buffet & service setup", text: "Counters, warmers and service style are arranged to suit your venue.", care: "We manage setup, service staff and replenishment." },
  ],
  "event-consulting": [
    { title: "Concept board & florals", text: "Colours, materials, flowers and balloons are brought together in one concept.", care: "We create the concept board and source materials." },
    { title: "Installation & styling", text: "Backdrops, tablescapes and installations are built and finished on site.", care: "We install, style and inspect every detail." },
  ],
  "family-gathering": [
    { title: "Comedy & live music booking", text: "Entertainment is chosen to suit every age, from grandparents to children.", care: "We arrange performers and their schedule, subject to availability." },
    { title: "Seating, food & programme", text: "A relaxed programme pairs a shared meal with laughter and music.", care: "We plan the layout, meal timing and programme." },
  ],
  "family-getaway": [
    { title: "Drive & stay arrangements", text: "Routes, vehicles and accommodation options are matched to your group.", care: "We coordinate travel and stay arrangements with providers." },
    { title: "Meals & shared activities", text: "Breakfasts, dinners and time together are planned around the destination.", care: "We organise meals and activity plans." },
  ],
};

export function getProcess(slug: string): ProcessStep[] {
  const [a, b] = SPECIFIC[slug] ?? [
    { title: "Design & details", text: "We shape the setting around your vision.", care: "We handle the design work." },
    { title: "Final preparations", text: "Everything is confirmed before the day.", care: "We confirm every arrangement." },
  ];
  return [
    { title: "Discovery call", text: "Tell us the occasion, date, guest count, location and traditions that matter to you.", care: "We listen and note every requirement." },
    { title: "Consultation & vision", text: "We explore inspiration, colours, cultural customs and your budget together.", care: "We prepare ideas tailored to your family." },
    { title: "Personalised proposal", text: "A clear proposal with the setting, inclusions and costs — no surprises.", care: "We itemise everything before you commit." },
    { title: "Booking & timeline", text: "Once confirmed, a planning timeline shows what happens and when.", care: "We schedule every milestone and reminder." },
    a, b,
    { title: "Event day coordination", text: "Setup, arrivals, rituals, meals and key moments run to the agreed plan.", care: "We are on hand so you can be present with your guests." },
    { title: "Teardown & follow-up", text: "We pack down agreed items and check in afterwards to hear how it felt.", care: "We clear our setup and follow up personally." },
  ];
}

/** Estimated typical NY/NJ/PA/DE ranges from 2025-26 public price guides; not quotes. */
const RATES: Record<string, MarketRate> = {
  seemantham: { market: "$700 – $1,800", basis: "décor & styling", note: "Floral stage and ritual setup by independent decorators." },
  haldi: { market: "$650 – $1,500", basis: "décor & styling", note: "Marigold backdrops and seating set-ups." },
  "pelli-kuthuru": { market: "$800 – $2,000", basis: "décor & styling", note: "Bridal seating with floral backdrops." },
  wedding: { market: "$3,500 – $9,000+", basis: "décor (mandap & stage)", note: "NJ Indian weddings commonly see decor and mandap budgets in this band." },
  sangeeth: { market: "$1,000 – $2,500", basis: "stage décor & styling", note: "Lighting, DJ and sound are usually extra." },
  "satyanarayana-pooja": { market: "$450 – $1,000", basis: "mandapam décor", note: "Priest fees and samagri usually separate." },
  "indian-baby-shower": { market: "$600 – $1,500", basis: "décor & styling", note: "Shower styling packages for about 25 guests." },
  "american-baby-shower": { market: "$650 – $1,950", basis: "décor & styling", note: "Balloon backdrops, signage and dessert-table set-ups." },
  anniversary: { market: "$600 – $1,500", basis: "décor & styling", note: "Backdrop, signage and table styling." },
  "event-planning": { market: "$1,500 – $6,000+", basis: "planning & coordination", note: "Day-of coordination to full planning." },
  photography: { market: "$156 – $344 / hour", basis: "photographer", note: "Full Indian wedding coverage often $2,200 – $5,000." },
  catering: { market: "$28 – $63 / guest", basis: "Indian catering", note: "Full-service wedding catering can reach $110+ per guest." },
  "event-consulting": { market: "$300 – $1,300 per installation", basis: "backdrops & balloons", note: "Balloon arches, flower walls and neon signs." },
  "family-gathering": { market: "$1,500 – $5,000", basis: "meal + entertainment", note: "Catering plus local comedians or live musicians." },
  "family-getaway": { market: "$200 – $600 / night + travel", basis: "group stay & drive", note: "Varies widely by destination and season." },
};

export const getMarketRate = (slug: string) => RATES[slug];
