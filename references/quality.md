# Quality

The builder does not fill in these numbers. The jury in `references/jury.md`
does, from the screenshots, and the builder obeys the verdict.

Awwwards' published weights: Design 40, Usability 30, Creativity 20, Content 10.
Honorable Mention is 6.5. Delivery requires each lens at 7 or above. Usability
and content are the cheap points beautiful drafts throw away.

## How the jury scores

| Lens | 10 means | Usual failure |
|---|---|---|
| Design | One system, type that is the layout, nothing you would delete | A kit of equal cards, two type moods, cramped 390px |
| Usability | Keyboard, phone, reduced motion, speed, the action is obvious | Hover-only nav, a pin that traps scroll, a canvas with no poster |
| Creativity | A stranger can point at the move with the words covered, and you can name a 2023–2026 Site of the Year or Month that shares it without inventing one | A hairline, a repeated caption, fade-up sections, a mesh gradient |
| Content | Specific, true or clearly fictional, no banned phrases | Lorem, fake logos, "elevate your brand" |

Weighted = `0.4 D + 0.3 U + 0.2 C + 0.1 Content`. The builder does not compute
this in order to pass. If the signature is not on the screenshot, there is no
number. Adding WebGL does not lift a 5 in usability.

## Does not raise a score

These do not raise a score. If you treat them as one, the verdict is void.

- A finished fix list. Doing what the last note asked is compliance, not a better site.
- A repeated caption, hairline, or label. A signature is a move you could not get from `object-fit` plus absolute text. If a one-day Tailwind brochure already has it, creativity is at most 4 and design at most 6.
- A drawn mark, three image files, and a button in the first viewport. That is the pre-ship list, not an Honorable Mention.
- Naming a signature in a sentence without a real Awwwards site (Site of the Year or Site of the Month, 2023–2026) that shares that specific move. No named site, no score of 8.
- Three moments that are the same price chip. That fails `rejects.md` even if you wrote the sentence.

## Signature check

Before the numbers, answer:

1. One sentence: what does the visitor's eye do that a static crop would not?
2. Where is that move at full size, where does it decide a fact, where is the end frame?
3. If you delete those three and the page is unchanged, you have no signature.
   Stop. Do not assign creativity. Do not average the other three up. Delete
   the page.

## Pre-ship

- [ ] Signature sentence written. Three moments are one move, not a caption. None of the twelve firewall rows in `rejects.md`.
- [ ] First viewport: name, sentence, image or signature, one action. No loader
      in the way. Readable with JS disabled (the words are in the HTML).
- [ ] Search the stylesheet: no resting `opacity: 0` that hides copy until a
      script. `@starting-style` and `[hidden]` do not count. Entrances are a
      transform inside `prefers-reduced-motion: no-preference`, or they start
      in the same frame as the tween.
- [ ] 1440 and 390: no horizontal scroll, no overlap, no type under the fixed nav.
- [ ] One `h1`. Landmarks (`header`, `nav`, `main`, `footer`). Skip link works.
      Anchors point at real `id`s. `references/seo.md`.
- [ ] Meta description is one human sentence. No `og:*` in the root if the
      injector owns them. JSON-LD only repeats facts already visible. No
      invented phone, email, VAT, or rating.
- [ ] Tap targets ≥ 44px. Focus ring ≥ 2px and 3:1. Nothing hover-only.
- [ ] Form: visible labels, errors in words under the field, `aria-invalid`,
      `role="alert"` (or `aria-live`). Success does not pretend mail was sent
      unless a backend sent it.
- [ ] Contrast: body ≥ 4.5:1, display ≥ 3:1. Type on a photo uses a scrim that
      belongs to the grade, or the type sits off the photo.
- [ ] `prefers-reduced-motion`: the signature's end frame, no pin, no infinite
      motion. The still is composed.
- [ ] Photos have dimensions or aspect boxes, real alt, licenses in `credits.json`.
      CC-BY lines are in the footer. Hero ≤ ~2500px wide. Below-fold images are
      `loading="lazy"` and `decoding="async"`. One woff2 preloaded.
- [ ] The page does not match `references/rejects.md`. A match caps design at 5 and creativity at 4. Do not score past it.
- [ ] One structural move. No second smoother. No Lenis + ScrollSmoother.
- [ ] Hero poster is the LCP. Canvas, if any, is `aria-hidden`, DPR-capped,
      paused off-screen, and has an error boundary. LCP is never the canvas.
- [ ] No emoji icons, no lorem, no banned phrases, no fake clients, no stock face as a founder.
- [ ] Console clean. Links that claim to go somewhere go somewhere.

## Budgets

Aim at a mid-range phone, not your laptop.

| | Target |
|---|---|
| LCP | ≤ 2.5s. The node is text or the poster, never the canvas |
| INP | ≤ 200ms. No scroll handler that re-renders React |
| CLS | ≤ 0.1. Fonts have fallbacks and one preloaded woff2. Images have boxes |
| First view | Hero CSS + one font + the poster. Defer the scene import. No `opacity: 0` flash |
| Hero image | Long edge ≤ ~2500px. Width and height set. Not a multi-megabyte original |
| Loader | None, or ≤ 1.5s and skippable |
| Display type | Desktop clamp max ~9rem. Mobile must fit |

If you add a scene and the first view jumps by a multi-megabyte glb, you
missed the poster rule.

## Pins (2026-10-04)

Re-check with the registry if installs fail. These were current that day
(registry checked the same day):

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
- Platform features, checked 2026-10-04: CSS scroll-driven animations
  (`animation-timeline: view()` / `scroll()`), scroll-triggered animations
  (`animation-trigger`, Chrome 145, flag at launch — use `@supports`),
  View Transitions including `@view-transition { navigation: auto }`,
  `@starting-style`, `clip-path: shape()`, `text-box`, `sibling-index()`.
  Details and the do-not-use-yet list: `references/techniques.md`.
- MDN, scroll-driven animations, updated 2026-09-22.
- MDN, View Transition API, updated 2026-09-28.
- Chrome Developers, "CSS scroll-triggered animations are coming", 2025-12-12.
- Openverse API, commercial filter, no key: https://api.openverse.org/v1/images/
- Unsplash license allows commercial use without credit; their API terms do
  require credit. Pexels license allows commercial use; not as an unchanged
  standalone product.
- Observed motion stack on recent awarded case studies: GSAP ScrollTrigger
  and Lenis, with Three used when the subject is spatial. Versions above.

## Audit mode

If the user asks to review rather than build: do not restyle yet. Run
`references/jury.md` as a new agent. Do not score the page yourself. Then
stop, unless they asked you to apply the verdict.
