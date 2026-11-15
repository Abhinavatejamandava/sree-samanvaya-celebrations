const videos = import.meta.glob<{ default: { url: string } }>("../assets/videos/illustrated/*.mp4.asset.json", { eager: true });
const posters = import.meta.glob<{ default: { url: string } }>("../assets/illustrated/*.jpg.asset.json", { eager: true });

export function getCelebrationScene(slug: string) {
  const video = Object.entries(videos).find(([path]) => path.endsWith(`/${slug}.mp4.asset.json`))?.[1].default.url;
  const poster = Object.entries(posters).find(([path]) => path.endsWith(`/${slug}.jpg.asset.json`))?.[1].default.url;
  return video && poster ? { video, poster } : undefined;
}