import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/services";
import { getMarketRate, getProcess } from "@/lib/service-process";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Ornament";

const videos = import.meta.glob<{ default: { url: string } }>("../../assets/videos/process/*.asset.json", { eager: true });
export function getProcessVideo(slug: string) {
  return Object.entries(videos).find(([path]) => path.endsWith(`/${slug}-process.mp4.asset.json`))?.[1].default.url;
}

export function ServiceProcess({ service }: { service: Service }) {
  const steps = getProcess(service.slug);
  const rate = getMarketRate(service.slug);
  const video = getProcessVideo(service.slug);
  return <>
    <section className="border-b border-border py-14 sm:py-20">
      <SectionTitle eyebrow="From first call to final goodbye" title="How We Bring It Together" />
      {video && <div className="mx-auto mt-10 max-w-4xl px-4 sm:px-6"><LoopVideo key={video} src={video} poster={service.image} autoPlay loop muted playsInline preload="auto" controls aria-label={`${service.name} process explained`} className="aspect-video w-full bg-secondary" /></div>}
      <ol className="mx-auto mt-10 max-w-3xl space-y-0 px-4 sm:px-6">
        {steps.map((st, i) => <Reveal key={st.title} delay={i * 50}><li className="relative border-l border-gold/50 pb-8 pl-6 last:pb-0 sm:pl-10">
          <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-background text-xs font-semibold text-gold ring-1 ring-gold">{i + 1}</span>
          <h3 className="text-base font-semibold sm:text-lg">{st.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{st.text}</p>
          <p className="mt-2 flex items-start gap-2 text-xs text-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span><strong>We take care of it:</strong> {st.care}</span></p>
        </li></Reveal>)}
      </ol>
    </section>
    {rate && <section className="bg-secondary py-14 sm:py-16">
      <SectionTitle eyebrow="Honest, transparent value" title="How We Compare" />
      <div className="mx-auto mt-8 grid max-w-3xl gap-4 px-4 sm:grid-cols-2 sm:px-6">
        <div className="border border-border bg-background p-5"><p className="text-xs uppercase text-muted-foreground">Typical market · {rate.basis}</p><p className="mt-2 text-2xl font-semibold break-words">{rate.market}</p><p className="mt-2 text-xs text-muted-foreground">{rate.note}</p></div>
        <div className="border border-gold bg-background p-5"><p className="text-xs uppercase text-gold">Sree Samanvaya</p><p className="mt-2 text-2xl font-semibold break-words">{service.price}</p><p className="mt-2 text-xs text-muted-foreground">Personalised planning included, plus 15% off your first booking.</p></div>
      </div>
      <p className="mx-auto mt-4 max-w-3xl px-4 text-xs text-muted-foreground sm:px-6">Market figures are estimates from 2025–26 public price guides for NY, NJ, PA and DE and vary by date, venue and guest count.</p>
    </section>}
  </>;
}

function LoopVideo(props: React.VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) void v.play().catch(() => {});
    return () => v.pause();
  }, [props.src]);
  return <video ref={ref} {...props} />;
}
