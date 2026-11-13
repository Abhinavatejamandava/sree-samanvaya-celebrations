# Real process footage for every service

## What changes
- Replace the 15 text-step animations with AI-generated realistic footage showing the team actually doing the work for that service, for example:
  - Haldi: decorators hanging marigold garlands, setting floor seating, family applying haldi.
  - Wedding: building the mandap, styling the reception stage, couple at the ceremony.
  - Catering: chefs cooking Indian and American dishes, buffet being set and served.
  - Photography: photographer planning shots, capturing rituals, reviewing images.
  - Family Getaway: packing the car, the drive, arriving at the stay, meals together.
- One continuous video per service (about 15 seconds) moving through setup, the event moment and the finished result, using each service's existing photo as the opening frame so it matches the page.
- The video plays automatically and silently as soon as the page opens, loops continuously, and stops when the visitor moves to another page. A small pause button remains for accessibility; visitors who turn off motion on their device see a still image.

## Kept
- The 8-step "We take care of it" timeline and price comparison stay below the video.
- The previous step-animation videos are removed from the pages.

## Note
- 15 generated videos take time and credits; they are made a few at a time.

## Technical details
- Generate with videogen (seedance, about 15 s, 16:9, starting frame = svc-*.jpg), saving pointers to src/assets/videos/process/<slug>-process.mp4.asset.json (existing pointers deleted via lovable-assets delete).
- ServiceProcess video: autoPlay muted loop playsInline, pauses on unmount; reduced-motion respected.
- Verify autoplay/loop in Playwright on a few pages.
