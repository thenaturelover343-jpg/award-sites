---
name: award-sites
description: >
  Use this skill for a public site: a landing page, portfolio, studio, brand,
  campaign, restaurant, hotel, agency, or shop. Also use it when the user
  writes in Dutch ("website bouwen", "landingspagina", "premium", "maak het
  duurder") or says award, Awwwards, cinematic, scroll story, WebGL, or
  "not a template". Use it to choose type, motion, and free photos, and to
  judge a marketing page. Do not use it for dashboards or game HUDs.
  Build one move that changes how the visitor reads the subject. That move
  appears at three scales (hero, mid-page, end frame or footer). A repeated
  caption is not a signature. The page must still work when animation is off.
  Do not ship a full-screen photo with a serif, a price, and cards. Do not
  ship three crops with captions. Read references/rejects.md and
  references/build.md before you design. Build the inspection in build.md
  unless the subject is a studio index or a scene. Do not invent a hero.
  If the page matches rejects.md, the build has failed.
metadata:
  short-description: "One move, three scales. A photo with a price is not done."
  research-through: "2026-10-04"
user-invocable: false
---

# Award sites

Build one move. That move changes how the visitor reads the subject. It shows at three scales. The page still works when you turn the animation off.

Choose one:

- Scroll across the object, from one end to the other.
- Clip the photograph to a drawing of the object.
- Let one number frame the photograph.

Do not ship a full-screen photo with a serif headline, a price, and a button. Do not ship three crops with captions. Do not call a thin line a signature because you repeated it.

Open `references/rejects.md` first. If the page matches that file, you failed. The rules below do not save a page that matches it.

Juries score design 40, usability 30, creativity 20, and content 10. Honorable Mention starts at 6.5. Sites lose points on usability more often than on looks. Do not add a 3D scene to look expensive. Some awarded sites use WebGL. Some do not.

Research cutoff: 2026-10-04. Package pins live in `references/quality.md`. If a package major has moved, trust the registry.

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
| Before anything else | `references/rejects.md` |
| The page you actually build | `references/build.md` |
| Picking the idea | `references/directions.md` |
| Type, color, grid, grain, scrim | `references/system.md` |
| Motion, Lenis, view transitions | `references/motion.md` |
| What shipped in browsers by 2026-10-04 | `references/techniques.md` |
| Scroll-driven CSS, the traps | `references/scroll.md` |
| A canvas is actually justified | `references/webgl.md` |
| Photos, licensing, grading, editing | `references/imagery.md` |
| Nav, loader, forms, copy, footer | `references/interaction.md` |
| Headings, JSON-LD, meta | `references/seo.md` |
| Jury score, a11y, performance, pins | `references/quality.md` |
| This TanStack sandbox | `references/grok-env.md` |

On a build, always open **rejects, build, techniques, directions, system,
imagery, interaction, quality**, plus **seo** before you score, plus **motion**
if anything moves, plus **webgl** only if a canvas survives the decision tree,
plus **grok-env** when the app runs in this workspace. `build.md` is the page.
Do not invent a hero. A page that matches `rejects.md` is not done.

## Loop

Do these in order. Skipping the signature is how templates happen.

1. **Brief.** Write six lines before code: who it is for, the object or place,
   the one action, the line they should remember, what is true (materials,
   city, prices), what you had to invent. If the user was vague, invent one
   coherent brand and say so in the summary — do not stall. No lorem later.
2. **Signature.** One sentence, then three moments. See below. If the three
   moments are the same caption, you do not have a signature. Write the two
   lines from `references/rejects.md` (brochure version, move instead). If
   they describe the same page, pick again.
3. **Direction.** One primary from `references/directions.md`. Scroll film and
   Object cinema only when the brief's subject is a place or a thing you turn.
4. **System.** Tokens first (`references/system.md`). Two families, one ink,
   one ground, at most one hue. One scheme, unless the direction truly needs
   both. Lock an ease and a duration ladder.
5. **Imagery.** Follow `references/imagery.md` before layout. Real photos or a
   justified scene. One grade across the set. Credit CC-BY in the footer.
6. **Structure.** Build `references/build.md`. The inspection is the default.
   Do not invent a hero. Do not add a section just to "hit" a third moment.
   Add a route only when a project needs its own URL.
7. **Motion.** Native scroll + CSS timelines, unless choreography needs
   GSAP. One smoother, never two. Reduced motion is the end frame, not a blank.
8. **Build visible-first.** Words and the poster image render with no JS, no
   font CDN, and no canvas. No `opacity: 0` in the base stylesheet. Enhance
   after.
9. **Score.** `references/quality.md`, then `references/seo.md`. Fix any line
   that would make a juror mark usability down. Under 7, you are not done.

## Signature

Write this and keep it:

> Signature: the visitor …
> Hero: …
> Mid: …
> End: …

The three moments are the same move at three sizes. Hero is the full move.
Mid is where that move decides a fact (a station, a case, a line), not a new
effect. End is the resting frame, the mark reduced, or the shared-element
handoff. A hairline, a label, or a price chip in all three places is a caption.
Delete it.

Adding a section so you can count to three fails `build.md`. For the
inspection, the three moments are the start of the window, the station the
window is on, and the end frame. Not a second photograph in the footer.

Strong types, one per site:

| Type | The visitor |
|---|---|
| Crop or temperature shift | watches one photograph change as they move |
| Inspection window | reads the object from one end to the other |
| Registered drawing | sees the photo only inside the silhouette |
| Number as frame | sees the photo only inside one figure |
| Index displacement | moves one row and the image answers |
| One kinetic line | scrubs a single line; body text stays still |
| Material wash | sees one material in the mark, the transition, and the still favicon |
| Scale sequence | opens one object across one pin |
| Camera path | moves through one place |

If you cannot point at the move with the words covered, creativity stays at 4.

## Anti-template firewall

Hit one row and the build has failed. Design is at most 5, creativity at most 4.
Do not average the other scores up. The same list is in `references/rejects.md`.

1. Dark hero, gradient blob, and fade-up sections.
2. Inter, Roboto, Poppins, Space Grotesk, or Playfair as the default face.
3. Magnetic buttons, or a custom cursor that is not the move.
4. Six equal feature cards (or three price cards on one photograph).
5. Copy that says elevate, seamless, next-gen, or unlock.
6. WebGL when the subject is not an object or a place.
7. `opacity: 0` plus an IntersectionObserver.
8. A custom cursor on touch.
9. Lenis and ScrollSmoother together.
10. Stock faces presented as the team or the founder.
11. Lorem, or logos of clients you invented.
12. Information that exists only on hover.

## Page (the $10k shape)

`references/build.md` replaces this list for the first screen and the rest of
a one-page site. Use the list below only to see what you may cut. Do not add
a beat that `build.md` does not contain.

1. Nav — mark, two to five links, one action. Keyboardable. Skip link first.
2. Hero — name, one sentence, the signature, one action. Fully visible on load.
   One `h1`.
3. Proof — the object or the work, shown by the one move. Not a row of cards.
4. Paced chapter — the scroll story **or** three case studies, not both at full volume.
5. Material or method — how it is made. Specific nouns.
6. Offer — what they buy, the city, the constraint.
7. Inquire — a real form (labels, errors, success). `mailto` or client state is
   enough unless they asked for a backend.
8. Colophon — type, year, location, photo credits.

Every beat earns its place. Cut a section before you add an effect.

## Hard rules

Break one and the site is a template with expensive libraries.

1. **Visible without JS.** No `opacity: 0` in the base stylesheet, and no
   observer that reveals it. Entrance states are applied in the same frame the
   tween starts, or by a CSS timeline that reduced-motion disables. Hero text
   is painted immediately. Search the file for `opacity: 0` before you finish.
2. **One structural move, three scales, not a repeated caption.** A hairline,
   a label, or a price chip used three times is not a signature. The move has
   to change how the object is read. See `references/rejects.md`.
3. **One ease family. One duration ladder.** Hover 160–240ms. Panels ~600ms.
   Reveals ~800–1000ms. Hero intro ≤ 1400ms.
4. **Type is the layout.** Two families. Display tracking around −0.03em to
   −0.04em, line-height ~0.9. Body 16–18px, measure 55–70ch, line-height
   ~1.45. Never the Inter/Poppins/Space Grotesk reflex.
5. **Palette is a material.** Near-black or near-white ground, one ink, one
   hue used as a field or a hairline — not a rainbow of Tailwind defaults.
   One scheme by default. Both schemes only via `prefers-color-scheme`, with
   the ink flipped in the same rule (`references/system.md`).
6. **Photos are directed.** Same grade, two crops (wide and portrait), real
   alt text. No gray boxes, no picsum, no mixed stock that looks like five
   cameras. Faces of strangers are not "the founder".
7. **Canvas is opt-in** (`references/webgl.md`). Poster image is the LCP.
   DPR capped. Loop pauses off-screen. `aria-hidden` on the canvas. Never for
   a service page that is not a place or a thing you turn.
8. **390px is designed.** No horizontal overflow. No hover-only information.
   Targets ≥ 44px. Nav becomes a panel, not a crushed bar.
9. **Reduced motion, focus, contrast.** `prefers-reduced-motion` shows the
   signature's end frame, fully composed. Focus ring ≥ 2px and 3:1. Body text
   ≥ 4.5:1. Large display type may sit at 3:1. Skip link is the first control.
10. **Speed on a mid phone.** LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. LCP is text
    or the poster, never the canvas. Preload one woff2. Hero image ≤ 2500px
    wide, with a reserved box. Loader ≤ 1.5s, skippable, once per session,
    honest — or no loader.
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
16. **One h1, real landmarks, true structured data.** `header`, `main`, `nav`,
    `footer`. Sections earn an `h2`. JSON-LD only for facts the page already
    shows. Do not invent a telephone. Details: `references/seo.md`.

## Direction in one line

Pick from `references/directions.md` only after `references/rejects.md`. Default
when unsure and the subject is a business: **Quiet luxury**. Default for a
physical product: **Editorial object**, which means inspection, a registered
drawing, or a number as the frame — not three tiles. Default for a studio
portfolio: **Archive**. Full-viewport WebGL only for **Scroll film** or
**Object cinema**, and only when the subject is a place or a thing you turn.

## Imagery in one line

```bash
node .grok/skills/award-sites/scripts/fetch-photos.mjs "<specific query>" --count 6 --out public/media --aspect wide
```

Openverse, commercial licenses, no API key. Then grade and edit — the script
only downloads. Details, Unsplash/Pexels, and the generate/edit tools:
`references/imagery.md`.

## Done

Screenshot the page at 1440 and at 390. The words and the photograph sit in
different rectangles. The phone shows the photograph, the number, and the
action without scrolling. Then search your file for `opacity: 0`, the banned
patterns in `references/build.md`, and the firewall list above. Then open
`references/rejects.md`. A match means you start again. A score under 7 in
`references/quality.md` means you are not done. You do not grade your own fix
list.
