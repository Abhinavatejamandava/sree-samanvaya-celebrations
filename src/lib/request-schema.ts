import { z } from "zod";

export const requestSchema = z.object({
  service: z.string().trim().min(1).max(120),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30).regex(/^[+\d\s()\-.]+$/, "Please enter a valid phone"),
  eventDate: z.string().trim().max(20).optional().or(z.literal("")),
  location: z.string().trim().max(150).optional().or(z.literal("")),
  guests: z.string().trim().max(40).optional().or(z.literal("")),
  budget: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});
export type RequestInput = z.infer<typeof requestSchema>;
