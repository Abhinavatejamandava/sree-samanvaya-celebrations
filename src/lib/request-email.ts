import { CONTACT } from "./services";
import type { RequestInput } from "./request-schema";

export function requestEmailUrl(data: RequestInput) {
  const body = [
    `Service: ${data.service}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Event date: ${data.eventDate || "Not decided"}`,
    `Location: ${data.location || "Not decided"}`,
    `Guests: ${data.guests || "Not decided"}`,
    `Budget: ${data.budget || "Not decided"}`,
    "", data.message || "",
  ].join("\n");
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Service request — ${data.service}`)}&body=${encodeURIComponent(body)}`;
}