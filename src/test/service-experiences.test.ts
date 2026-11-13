import { describe, expect, it } from "vitest";
import { getService, SERVICES } from "@/lib/services";
import { getServiceExperience } from "@/lib/service-experiences";

describe("Celebration offerings", () => {
  it("offers catering, comedy and live music for family gatherings", () => {
    expect(getService("family-gathering")?.offerings).toEqual(["catering", "comedy", "live-music"]);
  });
  it("offers drive and stay arrangements with meals for family getaways", () => {
    expect(getService("family-getaway")?.offerings).toEqual(["catering", "drive", "stay"]);
  });
  it("provides a four-step journey for every service", () => {
    for (const service of SERVICES) expect(getServiceExperience(service.slug).steps).toHaveLength(4);
  });
  it.each(["photography", "event-planning", "event-consulting"])("omits catering content for %s", slug => {
    expect(getServiceExperience(slug).showCatering).toBe(false);
  });
  it("limits food imagery to the catering service", () => {
    expect(SERVICES.filter(service => getServiceExperience(service.slug).showFoodImage).map(service => service.slug)).toEqual(["catering"]);
  });
  it("uses a distinct animated video for every service", () => {
    expect(new Set(SERVICES.map(service => service.video)).size).toBe(SERVICES.length);
  });
});