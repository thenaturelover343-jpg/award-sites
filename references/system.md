# System

Define tokens before components. Marketing pages still use the workspace rule:
palette, type, and radius live in CSS (`@theme` on Tailwind v4), not as hex
scattered through JSX.

## Type

Two families. A display face with an opinion, and a neutral text face that
disappears.

**Display, pick one that fits the material** (self-host, do not hotlink a
stylesheet into the critical path):

| Face | Use |
|---|---|
| Instrument Serif | Editorial, fashion, food |
| Newsreader or Fraunces (variable) | Long-form luxury, publishing |
| Instrument Sans or Geist | Product, tech that must not look like a template |
| Syne | Campaigns, loud launches — easy to overuse |
| Familjen Grotesk | Neutral grotesque when the photos do the talking |

Banned as the automatic choice: Inter, Roboto, Poppins, Montserrat, Open Sans,
Space Grotesk, Playfair Display. They are not illegal; they are the tell.

Install from fontsource, then check the package's actual CSS entry. Example
shape (confirm the path against `node_modules` if the import fails):

```css
@import "@fontsource/instrument-serif/400.css";
@import "@fontsource-variable/instrument-sans/wght.css";
```

```css
@theme {
  --font-display: "Instrument Serif", "Iowan Old Style", Georgia, serif;
  --font-sans: "Instrument Sans", "Avenir Next", system-ui, sans-serif;
}
```

Always name a metric-compatible fallback so the swap does not jump (CLS).
`font-display: swap` on body, `optional` on a heavy display if the hero can
stand in the fallback for slow networks. Import the latin (or the subset you
actually use), not the whole family. Preload **one** woff2 for the face that
paints the first screen, not five weights.

```html
<link rel="preload" href="/fonts/display-latin.woff2" as="font" type="font/woff2" crossorigin />
```

If the file comes from `node_modules` via the bundler, preload the URL the
build emits, or skip the tag rather than preload a path that 404s. A failed
preload is worse than none.

**Scale**

- Display, 1440px: `clamp(3.5rem, 8vw, 9rem)`, tracking −0.03em to −0.04em,
  line-height 0.88–0.96, weight with restraint (a serif at 400 often beats a
  bold grotesque).
- Display, 390px: `clamp(2.4rem, 12vw, 4.2rem)`. It must not overflow.
- Section titles: a clear step down, not 90% of the hero.
- Body: 17–18px, line-height 1.45, measure `min(68ch, 100%)`.
- Labels / nav: 12–13px, tracking 0.08em, uppercase only for short meta.

Use `text-wrap: balance` on headlines and `pretty` on paragraphs. Hang
punctuation if the face supports it. Numerals in tables: `font-variant-numeric: tabular-nums`.

Variable axis as a signature (Type instrument only): register it.

```css
@property --wd {
  syntax: "<number>";
  inherits: false;
  initial-value: 400;
}
```

Animate `--wd`, then `font-variation-settings: "wght" var(--wd)`. Animating
`font-weight` directly on an unregistered custom property will not interpolate.

## Color

One ground, one ink, one hue. Write them as `oklch` so lightness is honest.

```css
@theme {
  --color-bg: oklch(0.16 0.01 80);
  --color-fg: oklch(0.96 0.01 80);
  --color-muted: oklch(0.72 0.02 80);
  --color-line: oklch(0.32 0.01 80);
  --color-accent: oklch(0.72 0.14 55);
}
```

- The hue is a field (a chapter background, a button fill) or a 1px rule.
  Not a gradient on every heading.
- If the ground flips between chapters, flip the ink in the same rule.
- Check body text at 4.5:1 and display at 3:1. A photo under type needs a
  scrim that is part of the grade, not a black rectangle at 70% on every hero.
- Do not default to purple, and do not default to pure `#000` / `#fff` unless
  the direction is a type specimen. A slight temperature (the `80` hue above
  is a warm gray) makes it feel printed.

One scheme is the default. No theme toggle. A second scheme only via
`prefers-color-scheme`, when the brief asks or the photographs need it.
Flip ink, ground, muted, and line in that one media-query block.

| Direction | Default scheme |
|---|---|
| Quiet luxury | Paper (warm light) or charcoal — pick from the photographs, not both |
| Editorial object | Charcoal or paper, one temperature with the grade |
| Archive | Near-white or near-black, no mid-grey |
| Material field | Follow the material (dark metal / light paper) |
| Type instrument | Near-white or near-black; accent only as hairline or field |
| Launch sequence | Match the product photography temperature |
| Scroll film / Object cinema | Dark unless the scene is daylight |

Do not ship both schemes to look thorough. A script that sets the theme after
paint flashes. Ship one scheme. Paste the block below only when the brief
asks for a second scheme, or the photographs cannot live on the first ground.
If the brief does not ask, do not include this query.

```css
@media (prefers-color-scheme: light) {
  :root {
    --color-bg: oklch(0.96 0.01 80);
    --color-fg: oklch(0.2 0.02 80);
    --color-muted: oklch(0.42 0.02 80);
    --color-line: oklch(0.82 0.01 80);
  }
}
```

Flip every token that carries ink or ground in that one block. A light page
with dark-theme muted text fails contrast. Do not leave the accent hue
unchanged if it only worked on the dark ground.

## Scrim

Type sits off the photograph when `build.md` says so. When type must cross a
photo, the scrim is a continuation of the ground, not a black plate.

```css
.scrim {
  background: linear-gradient(
    to top,
    var(--color-bg) 0%,
    color-mix(in oklch, var(--color-bg) 55%, transparent) 42%,
    transparent 70%
  );
}
```

The gradient uses the page ground so the grade stays one temperature. Cap the
solid part. A full-bleed `rgba(0,0,0,.7)` under every headline is the template.
If the scrim is the only way the sentence is readable, move the sentence off
the picture instead.

## Grid and space

A 12-column grid is the scaffold, not the look. Award pages are usually
asymmetric: a 5/7 split, a full-bleed image with a narrow column of type, or
a margin so large the content feels placed.

- Base space: 4. Section padding `clamp(4rem, 12vh, 10rem)`.
- Page margin: `clamp(1.25rem, 4vw, 4rem)`.
- Align to the grid. One element may break it, on purpose, once.
- Hairlines are structure, not a signature. A 1px rule with a caption does
  not make a drawing. Shadows are rare. Equal cards are a dashboard.
- Radius: 0 for editorial and archive. A small radius (4–8px) only if the
  brand is soft product. Not 24px on everything.

## Grain

Allowed when the direction is Quiet luxury, Material field, or Editorial
object. One overlay for the whole page, not per card.

```css
body::before {
  content: "";
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 1;
  opacity: 0.18;
  mix-blend-mode: overlay;
  background-image: url("/grain.svg");
  background-size: 180px 180px;
}
```

Copy `assets/grain.svg` to `public/grain.svg`. If contrast fails, lower
opacity before you remove the type color. Disable the overlay under
`prefers-reduced-motion` only if the SVG filter is actually expensive; a
static tile is fine to keep. Menus and dialogs sit above the overlay.

## Material field (CSS, no canvas)

A single animated wash, masked, behind a hero. Not a blob component library.

```css
.wash {
  background:
    radial-gradient(40% 50% at 30% 40%, var(--color-accent), transparent 70%),
    radial-gradient(30% 40% at 70% 60%, color-mix(in oklch, var(--color-fg) 30%, transparent), transparent 70%);
  filter: blur(8px);
}
@media (prefers-reduced-motion: no-preference) {
  .wash { animation: drift 18s ease-in-out infinite alternate; }
}
@keyframes drift {
  to { transform: translate3d(2%, -2%, 0) scale(1.05); }
}
```

One wash per page. If you need it to react to the pointer, do it with a CSS
variable set from one listener on the hero, not a physics library.

## What not to import

No Bootstrap, no random component kit for the marketing page, no icon font.
Lucide for UI icons (menu, close, arrow) at a consistent stroke. The logomark
is a small hand-authored SVG, simple enough to read at 16px — the share-card
skill owns the favicon file when this is the app-builder workspace.
