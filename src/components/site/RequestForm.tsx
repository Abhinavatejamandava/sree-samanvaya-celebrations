import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Send } from "lucide-react";
import { submitServiceRequest } from "@/lib/requests.functions";
import { requestSchema } from "@/lib/request-schema";
import { SERVICES, svcAt } from "@/lib/services";

const field = "w-full min-w-0 rounded-xl border border-input bg-card px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-ring/40";
const label = "mb-1 block text-xs font-bold tracking-wide text-primary uppercase";

export function RequestForm({ service }: { service?: string }) {
  const submit = useServerFn(submitServiceRequest);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = requestSchema.safeParse(fd);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setServerError("");
    setStatus("sending");
    try {
      await submit({ data: parsed.data });
      setStatus("done");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-gold/50 bg-card p-6 text-center shadow-card sm:p-10">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h3 className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">Thank you!</h3>
        <p className="mt-2 text-sm text-muted-foreground">Your request has reached our team. We'll contact you within 24–48 hours to start planning your celebration.</p>
        <button onClick={() => setStatus("idle")} className="mt-5 text-sm font-bold text-primary underline">Send another request</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-2xl border border-gold/40 bg-card/95 p-4 shadow-card sm:grid-cols-2 sm:p-8">
      <div className="sm:col-span-2">
        <label className={label} htmlFor="service">Service</label>
        <select id="service" name="service" defaultValue={service ?? svcAt(0).name} className={field}>
          {SERVICES.map((s) => <option key={s.slug}>{s.name}</option>)}
          <option>Other / Not sure yet</option>
        </select>
      </div>
      {([
        ["name", "Full name *", "text", "name"],
        ["email", "Email *", "email", "email"],
        ["phone", "Phone *", "tel", "tel"],
        ["eventDate", "Event date", "date", "off"],
        ["location", "City / State", "text", "address-level2"],
        ["guests", "Guest count", "text", "off"],
      ] as const).map(([n, l, t, ac]) => (
        <div key={n} className="min-w-0">
          <label className={label} htmlFor={n}>{l}</label>
          <input id={n} name={n} type={t} autoComplete={ac} className={field} aria-invalid={!!errors[n]} />
          {errors[n] && <p className="mt-1 text-xs text-destructive">{errors[n]}</p>}
        </div>
      ))}
      <div className="sm:col-span-2">
        <label className={label} htmlFor="budget">Budget</label>
        <select id="budget" name="budget" className={field} defaultValue="">
          <option value="">Select a range</option>
          <option>Under $500</option><option>$500 – $1,000</option><option>$1,000 – $3,000</option><option>$3,000+</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="message">Tell us your dream</label>
        <textarea id="message" name="message" rows={4} maxLength={2000} className={field} placeholder="Theme, colours, venue, anything you imagine…" />
      </div>
      {serverError && <p className="text-sm text-destructive sm:col-span-2">{serverError}</p>}
      <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon-gradient px-6 py-3 font-bold text-primary-foreground shadow-card transition hover:scale-[1.02] disabled:opacity-60 sm:col-span-2">
        <Send className="h-4 w-4" />{status === "sending" ? "Sending…" : "Send My Request"}
      </button>
    </form>
  );
}
