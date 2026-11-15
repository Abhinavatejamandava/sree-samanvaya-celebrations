import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CelebrationBackground({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    setFailed(false);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (motion.matches) video.pause();
      else void video.play().catch(() => setPlaying(false));
    };
    update();
    motion.addEventListener("change", update);
    return () => { motion.removeEventListener("change", update); video.pause(); };
  }, [src]);
  return <>
    <img src={poster} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
    <video ref={ref} key={src} src={src} poster={poster} muted loop playsInline preload="auto" aria-label={label}
      className="absolute inset-0 -z-20 h-full w-full object-cover" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)} />
    <div className="absolute inset-0 -z-10 bg-hero-fade" />
    {!failed && <Button variant="secondary" size="icon" className="celebration-scene-control absolute bottom-4 right-4" title={playing ? "Pause background" : "Play background"}
      aria-label={playing ? "Pause background" : "Play background"} onClick={() => {
        const video = ref.current;
        if (!video) return;
        if (video.paused) void video.play().catch(() => setPlaying(false)); else video.pause();
      }}>{playing ? <Pause /> : <Play />}</Button>}
  </>;
}