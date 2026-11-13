import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import type { Service } from "@/lib/services";
import { Button } from "@/components/ui/button";

export function ServiceScene({ service }: { service: Service }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && !reducedMotion.matches) void video.play().catch(() => setPlaying(false));
      else video.pause();
    }, { threshold: 0.3 });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, [service.video]);

  return <figure className="min-w-0">
    <div className="relative aspect-video overflow-hidden bg-secondary">
      <video key={service.video} ref={ref} src={service.video} poster={service.image} muted loop playsInline preload="metadata"
        aria-label={`${service.name} animated scene`} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)}
        className="h-full w-full object-cover" />
      {!failed && <Button variant="secondary" size="icon" className="absolute bottom-3 right-3" aria-label={playing ? "Pause scene" : "Play scene"}
        title={playing ? "Pause scene" : "Play scene"} onClick={() => {
          const video = ref.current;
          if (!video) return;
          if (video.paused) void video.play().catch(() => setPlaying(false)); else video.pause();
        }}>{playing ? <Pause /> : <Play />}</Button>}
    </div>
    <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground"><span>{service.subtitle}</span><span>AI-created scene</span></figcaption>
  </figure>;
}