import { describe, expect, it } from "vitest";
import { CONTACT, getService } from "@/lib/services";
import { requestEmailUrl } from "@/lib/request-email";

describe("Updated business details", () => {
  it("uses the supplied mobile number", () => {
    expect(CONTACT.phone.replace(/\D/g, "").slice(-10)).toBe("8455546470");
  });
  it("accepts enquiries for balloon parties addressed to the business", () => {
    const service = getService("balloon-parties");
    expect(service).toBeDefined();
    if (!service) throw new Error("Balloon service missing");
    const url = requestEmailUrl({ service: service.name, name: "Asha", email: "asha@example.com", phone: "8455546470" });
    expect(url.split("?")[0]).toBe("mailto:celebrate@sreesamanvaya.com");
    expect(new URLSearchParams(url.split("?")[1]).get("body")).toContain(`Service: ${service.name}`);
  });
});