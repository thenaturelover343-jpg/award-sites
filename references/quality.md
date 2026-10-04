# Quality

Score before you stop. Awwwards' published weights: Design 40, Usability 30,
Creativity 20, Content 10. Honorable Mention is 6.5. You will not submit
anything; the weights tell you what to fix first. Usability and content are
the cheap points beautiful drafts throw away.

## Self-score

Give each a number from 1 to 10. Be harsh.

| Lens | 10 means | Usual failure |
|---|---|---|
| Design | One system, type that is the layout, nothing you would delete | A kit of equal cards, two type moods, cramped 390px |
| Usability | Keyboard, phone, reduced motion, speed, the action is obvious | Hover-only nav, a pin that traps scroll, a canvas with no poster |
| Creativity | A person can describe the signature from memory | Fade-up sections, a mesh gradient, "and also a custom cursor" |
| Content | Specific, true or clearly fictional, no banned phrases | Lorem, fake logos, "elevate your brand" |

Weighted = `0.4 D + 0.3 U + 0.2 C + 0.1 Content`. Under 7: do not stop. Fix
the lowest lens first. Adding WebGL does not lift a 5 in usability.

## Pre-ship

- [ ] First viewport: name, sentence, image or signature, one action. No loader
      in the way. Readable with JS disabled (the words are in the HTML).
- [ ] 1440 and 390: no horizontal scroll, no overlap, no type under the fixed nav.
- [ ] Tap targets ≥ 44px. Focus visible. Skip link works.
- [ ] Contrast: body ≥ 4.5:1, display ≥ 3:1, focus ring ≥ 3:1.
- [ ] `prefers-reduced-motion`: still composed, no pin, no infinite motion.
- [ ] Photos have dimensions or aspect boxes, real alt, licenses in `credits.json`.
      CC-BY lines are in the footer.
- [ ] One ease, one signature, used ≥ 3 times. No second smoother.
- [ ] Hero poster is the LCP. Canvas, if any, is `aria-hidden`, DPR-capped,
      paused off-screen, and has an error boundary.
- [ ] No emoji icons, no lorem, no banned phrases, no fake clients.
- [ ] Console clean. Links that claim to go somewhere go somewhere.
- [ ] Meta description is one human sentence. The share card follows the
      workspace `og` skill — do not author `og:*` tags yourself if the
      injector owns them.

## Budgets

Aim at a mid-range phone, not your laptop.

| | Target |
|---|---|
| LCP | ≤ 2.5s. The node is text or the poster, never the canvas |
| INP | ≤ 200ms. No scroll handler that re-renders React |
| CLS | ≤ 0.1. Fonts have fallbacks. Images have boxes |
| First view | Hero + CSS + one font. Defer the scene import |
| Loader | None, or ≤ 1.5s and skippable |
| Display type | Desktop clamp max ~9rem. Mobile must fit |

If you add a scene and the first view jumps by a multi-megabyte glb, you
missed the poster rule.

## Pins (2026-10-04)

Re-check with the registry if installs fail. These were current that day:

| Package | Version |
|---|---|
| gsap | 3.15.0 |
| @gsap/react | 2.1.2 |
| lenis | 1.3.26 |
| three | 0.186.1 |
| @react-three/fiber | 9.8.1 |
| @react-three/drei | 10.7.9 |

GSAP and its plugins are free to ship. Do not add a license banner.

## Sources (so you can update the skill, not worship it)

- Awwwards evaluation: design / usability / creativity / content, 18+ jurors,
  extreme scores dropped, Honorable Mention from 6.5.
  https://www.awwwards.com/about-evaluation/
- Site of the Year history shows both WebGL films and type-only winners.
  Do not treat a secondary blog's "percent immersive" figure as a quota.
- Platform features to prefer when they are enough: CSS scroll-driven
  animations (`animation-timeline: view()` / `scroll()`), View Transitions,
  `@starting-style`, registered `@property`.
- Openverse API, commercial filter, no key: https://api.openverse.org/v1/images/
- Unsplash license allows commercial use without credit; their API terms do
  require credit. Pexels license allows commercial use; not as an unchanged
  standalone product.
- Observed motion stack on recent awarded case studies: GSAP ScrollTrigger
  and Lenis, with Three used when the subject is spatial. Versions above.

## Audit mode

If the user asks to review rather than build: do not restyle yet. Walk the
pre-ship list, give the four scores, name the signature (or say there is
none), and list at most five changes in score order. Then stop, unless they
asked you to apply them.
