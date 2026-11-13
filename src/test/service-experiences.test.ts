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
});