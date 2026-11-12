import { describe, expect, it } from "vitest";
import { requestSchema } from "@/lib/request-schema";

const base = { service: "Haldi Ceremony Decor", name: "Asha", email: "asha@example.com", phone: "+1 555 123 4567" };
describe("service request form", () => {
  it("accepts name, email and phone with a service", () => {
    expect(requestSchema.safeParse(base).success).toBe(true);
  });
  it("rejects a request without a valid email", () => {
    expect(requestSchema.safeParse({ ...base, email: "nope" }).success).toBe(false);
  });
  it("rejects a request without a phone", () => {
    expect(requestSchema.safeParse({ ...base, phone: "" }).success).toBe(false);
  });
});
