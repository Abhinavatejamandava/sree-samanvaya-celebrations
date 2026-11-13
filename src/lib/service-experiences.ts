export type EventStep = { title: string; text: string };
export type ServiceExperience = { steps: EventStep[]; menu: string; detail: string; showCatering: boolean; showFoodImage: boolean };

const journeys: Record<string, [string, string, string, string]> = {
  seemantham: ["Listen to your traditions", "Style the blessing space", "Welcome family with a meal", "Enjoy every blessing"],
  haldi: ["Choose your colour story", "Plan rituals and guest flow", "Set out a joyful feast", "Celebrate in full colour"],
  "pelli-kuthuru": ["Honour your family's rituals", "Create the bridal setting", "Time the ceremony and meal", "Be present for her moment"],
  wedding: ["Bring two visions together", "Design ceremony to reception", "Curate the wedding feast", "Celebrate with confidence"],
  sangeeth: ["Set the mood and playlist", "Sequence family performances", "Pair dinner with the programme", "Let the evening come alive"],
  "satyanarayana-pooja": ["Discuss rituals and timings", "Prepare the devotional space", "Plan prasadam and family meals", "Gather in gratitude"],
  "indian-baby-shower": ["Share your family's customs", "Design a gentle floral setting", "Choose a welcoming menu", "Celebrate the new chapter"],
  "american-baby-shower": ["Choose a personal theme", "Plan games and photo moments", "Build a playful party menu", "Shower the family with love"],
  anniversary: ["Revisit your love story", "Style meaningful memories", "Plan dinner and toasts", "Celebrate the years together"],
  "event-planning": ["Define the vision and budget", "Align venue and providers", "Build the event timeline", "Bring the whole day together"],
  photography: ["Share the moments that matter", "Plan light and ceremony coverage", "Coordinate with the event team", "Preserve your family's story"],
  catering: ["Tell us who is gathering", "Shape your Indian & American menu", "Confirm service and dietary needs", "Serve a memorable celebration"],
  "event-consulting": ["Explore your inspiration", "Create the concept and layout", "Select florals and installations", "Style the finishing touches"],
  "family-gathering": ["Bring your people together", "Choose comedy and live music", "Curate a meal for everyone", "Laugh, connect and celebrate"],
  "family-getaway": ["Choose your escape", "Coordinate the drive and stay", "Plan meals and shared activities", "Arrive, unwind and reconnect"],
};

const menus: Record<string, string> = {
  seemantham: "A comforting Indian lunch, favourite family sweets and American dishes for a mixed-culture guest list.",
  haldi: "Light bites, a colourful Indian buffet and easy-to-enjoy American favourites between the festivities.",
  "pelli-kuthuru": "A traditional family meal shaped around your customs, with additional American selections on request.",
  wedding: "Regional Indian cuisines, American reception favourites and a service style planned around your ceremony and speeches.",
  sangeeth: "Indian and American party food, dinner and desserts timed around performances and the dance floor.",
  "satyanarayana-pooja": "Discuss vegetarian, no-onion-no-garlic and prasadam requirements alongside the family's post-pooja meal.",
  "indian-baby-shower": "Familiar Indian flavours, gentle crowd-pleasers and American favourites for guests of all ages.",
  "american-baby-shower": "American party favourites, Indian bites and a dessert selection that complements your shower theme.",
  anniversary: "A menu inspired by the couple's favourite Indian and American dishes, from an intimate dinner to a family buffet.",
  "event-planning": "Bring Indian and American catering into the same timeline as venue access, guest arrival and your main celebration.",
  photography: "Book catering alongside your event coverage so meal service and group photographs have their own unhurried moments.",
  catering: "Explore South Indian, North Indian and other regional menus alongside American dishes; the final menu is agreed with you.",
  "event-consulting": "Coordinate the dining layout, buffet styling and Indian or American catering with your overall event concept.",
  "family-gathering": "A generous Indian and American spread that brings children, grandparents and everyone in between to the same table.",
  "family-getaway": "Discuss shared breakfasts, relaxed dinners and Indian or American catering around your destination and stay arrangements.",
};

export function getServiceExperience(slug: string): ServiceExperience {
  const showCatering = !["photography", "event-planning", "event-consulting"].includes(slug);
  const titles = journeys[slug] ?? ["Share your vision", "Shape the details", "Plan the meal", "Enjoy your celebration"];
  const details = [
    "Tell us your guest count, occasion, cultural preferences and the details that matter most to your family.",
    "Review a personalised proposal. We agree the setting, schedule, selected arrangements and costs before booking.",
    showCatering
      ? "Choose the menu or supporting services you want. Dietary requests, availability and service details are confirmed with the team."
      : slug === "photography"
        ? "Agree your priority photographs, ceremony timings and coverage with the photographer so each meaningful moment has its place."
        : slug === "event-consulting"
          ? "Review flowers, balloons, materials and installation details against your venue and chosen concept."
          : "Agree the schedule, provider responsibilities and guest flow so the day runs as one coordinated celebration.",
    "With the agreed plan in place, make room for the people, conversations and moments you came together for.",
  ];
  return {
    showCatering,
    showFoodImage: slug === "catering",
    steps: titles.map((title, index) => ({ title, text: details[index] ?? details[0] ?? "" })),
    menu: menus[slug] ?? "Indian and American catering can be arranged alongside your celebration.",
    detail: "Catering and additional services are quoted separately unless expressly included in your chosen package. Share allergies and dietary needs so we can confirm suitable options; allergen-free preparation is not assumed.",
  };
}