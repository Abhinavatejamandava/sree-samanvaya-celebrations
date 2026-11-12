import { createServerFn } from "@tanstack/react-start";
import { requestSchema } from "./request-schema";

export const submitServiceRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => requestSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("service_requests")
      .insert({
        service: data.service,
        name: data.name,
        email: data.email,
        phone: data.phone,
        event_date: data.eventDate || null,
        location: data.location || null,
        guests: data.guests || null,
        budget: data.budget || null,
        message: data.message || null,
      })
      .select("id")
      .single();
    if (error) {
      console.error("service request insert failed", error);
      throw new Error("We couldn't send your request. Please try again.");
    }
    return { ok: true, id: row.id };
  });
