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
stand in the fallback for slow networks. Preload one woff2, not five weights.

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

## Grid and space

A 12-column grid is the scaffold, not the look. Award pages are usually
asymmetric: a 5/7 split, a full-bleed image with a narrow column of type, or
a margin so large the content feels placed.

- Base space: 4. Section padding `clamp(4rem, 12vh, 10rem)`.
- Page margin: `clamp(1.25rem, 4vw, 4rem)`.
- Align to the grid. One element may break it, on purpose, once.
- Hairline rules (`1px` in `color-line`) do more than cards with shadows.
  Shadows are rare on these sites. A card grid of equal boxes is a dashboard,
  not a story — don't reach for it unless the content is genuinely a catalog
  of peers.
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
  z-index: 40;
  opacity: 0.18;
  mix-blend-mode: overlay;
  background-image: url("/grain.svg");
  background-size: 180px 180px;
}
```

Copy `assets/grain.svg` to `public/grain.svg`. If contrast fails, lower
opacity before you remove the type color. Disable the overlay under
`prefers-reduced-motion` only if the SVG filter is actually expensive; a
static tile is fine to keep.

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
