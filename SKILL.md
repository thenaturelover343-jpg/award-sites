---
name: award-sites
description: >
  Build or redesign public websites at a $10k+ studio bar (Awwwards, FWA,
  CSS Design Awards craft): one art-directed idea, real photography or a
  justified 3D scene, directed motion, and usability that holds on a phone.
  Use whenever the user wants a website, landing page, portfolio, studio site,
  brand or campaign site, product launch, restaurant, hotel, agency, or
  e-commerce storefront — including Dutch asks ("website bouwen",
  "landingspagina", "premium site", "maak het duurder") — and when they say
  award-winning, Awwwards, top of the art, expensive, cinematic, scroll story,
  WebGL, or "not a template". Also use to choose type, color, motion, free
  photos, image grading, or to audit a marketing page against that bar. Read
  this before falling back to generic app-UI styling for any public marketing
  surface.
metadata:
  short-description: "Award-level marketing sites: art direction, motion, free photos, $10k bar"
  research-through: "2026-10-04"
user-invocable: false
---

# Award sites

Build a public site a studio could invoice above $10k for. That bar is not
more libraries. It is one idea, drawn through type, image, and motion, that
still works with the animation turned off.

Juries (Awwwards, confirmed on their evaluation page) score **Design 40 /
Usability 30 / Creativity 20 / Content 10**. Honorable Mention starts at 6.5.
Usability is where beautiful sites lose. A 2023–2026 survey of award winners
keeps finding the same traits: one brand system, a story told by scroll, and
micro-interactions — not a pile of effects. Site of the Year is often WebGL
(Lando Norris, 2025) and just as often not (Pangram Pangram is type; Don't
Board Me is graphic storytelling). Do not add a 3D scene to hit a quota.

Research cutoff: **2026-10-04**. Stack pins and sources live in
`references/quality.md`. If a package major has moved, trust the registry, not
a stale pin.

## Precedence

1. The user's brief (brand, pages, "no 3D", "Dutch copy").
2. Workspace shell contracts: routing, auth defaults, share-card injector,
   preview verification. This skill never overrides those.
3. **This skill**, for any public marketing surface.
4. `design-ui`, for tokens, Tailwind v4, Lucide, and focus states.

Overrides of `design-ui` on marketing sites only:

- Display type may be 64–180px. The product-UI scale is for app chrome.
- One grain overlay and one material color-field are part of the system, not
  "gradient blobs", when a direction calls for them.
- A hero may be full-bleed. Choreography may run 600–1400ms. Hovers stay
  ≤ 240ms.
- Still banned: emoji as icons, lorem, Inter/Roboto/Poppins as the default,
  purple-gradient SaaS, three unrelated effects, a custom cursor on touch,
  WebGL the user did not need.

## Read map

Read only what the chosen direction needs.

| When | File |
|---|---|
| Picking the idea | `references/directions.md` |
| Type, color, grid, grain | `references/system.md` |
| Motion, Lenis, view transitions | `references/motion.md` |
| A canvas is actually justified | `references/webgl.md` |
| Photos, licensing, grading, editing | `references/imagery.md` |
| Nav, loader, forms, copy, footer | `references/interaction.md` |
| Jury score, a11y, performance, pins | `references/quality.md` |
| This TanStack sandbox | `references/grok-env.md` |

On a build, always open **directions, system, imagery, interaction, quality**,
plus **motion** if anything moves, plus **webgl** only if a canvas survives
the decision tree, plus **grok-env** when the app runs in this workspace.

## Loop

Do these in order. Skipping "signature" is how templates happen.

1. **Brief.** Write six lines before code: who it is for, the object or place,
   the one action, the line they should remember, what is true (materials,
   city, prices), what you had to invent. If the user was vague, invent one
   coherent brand and say so in the summary — do not stall. No lorem later.
2. **Direction.** One primary from `references/directions.md`, one optional
   secondary. Write the sentence: "The visitor ___ and understands ___."
3. **System.** Tokens first (`references/system.md`). Two families, one ink,
   one ground, at most one hue. Lock an ease and a duration ladder.
4. **Imagery.** Follow `references/imagery.md` before layout. Real photos or a
   justified scene. One grade across the set. Credit CC-BY in the footer.
5. **Structure.** Default is one page, eight beats (below). Add routes only
   when a case study needs its own URL. Then use view transitions, not a hard
   cut.
6. **Motion.** Native scroll + CSS timelines, unless choreography needs
   GSAP. One smoother, never two. Reduced motion is a designed still, not a
   blank.
7. **Build visible-first.** Words and the poster image render with no JS, no
   font CDN, and no canvas. Enhance after.
8. **Score.** `references/quality.md` before you call it done. Fix any line
   that would make a juror mark usability down.

## Page (the $10k shape)

One screen, one job. Desktop composition is not "stacked" onto 390px — re-break
the grid.

1. Nav — mark, two to five links, one action. Keyboardable.
2. Hero — name, one sentence, the signature, one action. Fully visible on load.
3. Proof — the work, the room, the object, or the numbers that are real.
4. Paced chapter — the scroll story **or** three case studies, not both at full volume.
5. Material or method — how it is made. Specific nouns.
6. Offer — what they buy, the city, the constraint.
7. Inquire — a real form (labels, errors, success). `mailto` or client state is
   enough unless they asked for a backend.
8. Colophon — type, year, location, photo credits.

Every beat earns its place. Cut a section before you add an effect.

## Hard rules

Break one and the site is a template with expensive libraries.

1. **Visible without JS.** No `opacity: 0` parked in CSS waiting for an
   observer. Entrance states are applied in the same frame the tween starts,
   or by a CSS timeline that reduced-motion disables. Hero text is painted
   immediately.
2. **One signature, used at least three times** (hero, a mid-page moment, the
   footer or the transition). Not ten effects once.
3. **One ease family. One duration ladder.** Hover 160–240ms. Panels ~600ms.
   Reveals ~800–1000ms. Hero intro ≤ 1400ms.
4. **Type is the layout.** Two families. Display tracking around −0.03em to
   −0.04em, line-height ~0.9. Body 16–18px, measure 55–70ch, line-height
   ~1.45. Never the Inter/Poppins/Space Grotesk reflex.
5. **Palette is a material.** Near-black or near-white ground, one ink, one
   hue used as a field or a hairline — not a rainbow of Tailwind defaults.
6. **Photos are directed.** Same grade, two crops (wide and portrait), real
   alt text. No gray boxes, no picsum, no mixed stock that looks like five
   cameras. Faces of strangers are not "the founder".
7. **Canvas is opt-in** (`references/webgl.md`). Poster image is the LCP.
   DPR capped. Loop pauses off-screen. `aria-hidden` on the canvas.
8. **390px is designed.** No horizontal overflow. No hover-only information.
   Targets ≥ 44px. Nav becomes a panel, not a crushed bar.
9. **Reduced motion, focus, contrast.** `prefers-reduced-motion` keeps a still
   composition. Focus ring ≥ 2px and 3:1. Body text ≥ 4.5:1. Large display
   type may sit at 3:1.
10. **Speed on a mid phone.** LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, and the
    first view stays light (quality.md budgets). Loader ≤ 1.5s, skippable,
    once per session, honest — or no loader.
11. **Copy sounds like a person.** Banned: "welcome to", "unlock", "elevate",
    "seamless", "next-gen", "passionate about", "your partner in", "solutions".
    Headlines are concrete. Numbers and place names beat adjectives.
12. **Do not imitate a living studio's site.** Take the craft, never their
    name, layout, copy, or assets.
13. **No custom cursor** unless pointer is fine, the cursor *is* the signature,
    and it disappears on touch and for reduced motion. Default is the native
    cursor. Magnetic buttons are a cliché — don't.
14. **One smoother.** Lenis **or** native scroll. Never Lenis + ScrollSmoother.
    CSS scroll timelines and Lenis must be checked together; if the timeline
    stalls, move that animation to ScrollTrigger.
15. **Credits and licenses.** CC-BY and "by-sa" go in the footer. CC0 credit is
    optional. Never hotlink. Never ship a photo you cannot name a license for.

## Direction in one line

Pick from `references/directions.md`. Default when unsure and the subject is a
business: **Quiet luxury** or **Editorial object**. Default when they asked
for a studio portfolio: **Archive**. Full-viewport WebGL only for **Scroll film**
or **Object cinema**, and only when the subject is a place or a thing you turn.

## Imagery in one line

```bash
node .grok/skills/award-sites/scripts/fetch-photos.mjs "<specific query>" --count 6 --out public/media --aspect wide
```

Openverse, commercial licenses, no API key. Then grade and edit — the script
only downloads. Details, Unsplash/Pexels, and the generate/edit tools:
`references/imagery.md`.

## Done

You are done when `references/quality.md` passes, the first viewport is obvious
in a real browser at desktop and 390px, the console is clean, and you can point
at the signature in one sentence. A generic dark hero with a gradient, a
sans-serif, and fade-up sections is not done — restyle it before you stop.
