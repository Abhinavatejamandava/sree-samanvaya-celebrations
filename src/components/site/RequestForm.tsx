import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Send } from "lucide-react";
import { submitServiceRequest } from "@/lib/requests.functions";
import { requestSchema } from "@/lib/request-schema";
import { SERVICES, svcAt } from "@/lib/services";
import { requestEmailUrl } from "@/lib/request-email";
import { Button } from "@/components/ui/button";

const emailMode = import.meta.env['VITE_GITHUB_PAGES'] === "true";

const field = "w-full min-w-0 rounded-xl border border-input bg-card px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-ring/40";
const label = "mb-1 block text-xs font-bold tracking-wide text-primary uppercase";

export function RequestForm({ service }: { service?: string }) {
  const submit = useServerFn(submitServiceRequest);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "draft">("idle");
  const [emailUrl, setEmailUrl] = useState("");
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
    if (emailMode) {
      const url = requestEmailUrl(parsed.data);
      setEmailUrl(url);
      setStatus("draft");
      window.location.href = url;
      return;
    }
    setStatus("sending");
    try {
      await submit({ data: parsed.data });
      setStatus("done");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  if (status === "done" || status === "draft") {
    return (
      <div className="rounded-2xl border border-gold/50 bg-card p-6 text-center shadow-card sm:p-10">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h3 className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">{status === "draft" ? "Your email draft is ready" : "Thank you!"}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{status === "draft" ? "Your request has not been sent yet. Send the draft in your email app to celebrate@sreesamanvaya.com, or call +1 845 309 9344." : "Your request has reached our team. We'll contact you within 24–48 hours to start planning your celebration."}</p>
        {status === "draft" && <Button asChild variant="outline" className="mt-4"><a href={emailUrl}>Open email draft</a></Button>}
        <Button variant="link" onClick={() => setStatus("idle")} className="mt-5">{status === "draft" ? "Edit request" : "Send another request"}</Button>
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
      {emailMode && <p className="text-sm text-muted-foreground sm:col-span-2">Send your enquiry through your email app, or call +1 845 309 9344.</p>}
      <Button type="submit" disabled={status === "sending"} className="h-auto whitespace-normal rounded-full bg-maroon-gradient px-6 py-3 font-bold text-primary-foreground shadow-card sm:col-span-2">
        <Send className="h-4 w-4" />{status === "sending" ? "Sending…" : emailMode ? "Prepare Email Request" : "Send My Request"}
      </Button>
    </form>
  );
}
