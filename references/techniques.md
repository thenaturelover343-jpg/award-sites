# Techniques (checked 2026-10-04)

Use a platform feature before you add a library. Gate every block in
`@supports`. If the gate fails, show the still frame. Do not polyfill a look.

Sources: MDN scroll-driven animations (updated 2026-09-22), MDN View
Transition API (updated 2026-09-28), Chrome's scroll-triggered note
(2025-12-12, Bramus), modern.css 2026 list. Do not cite a blog's "percent of
winners use WebGL" as a quota.

## Order

1. **Scroll-driven CSS** when the motion is the scroll. Read `scroll.md` and use that code. `scroll()` drives a sticky scan. `view()` drives one entrance. Write `animation: name 1ms linear both` and set `animation-timeline` on the next line. Animate `transform`, not `object-position`.
2. **Scroll-triggered CSS** only when a clip must play in time after the user crosses a line, and only inside `@supports (animation-trigger: --t)`. Chrome 145 shipped it behind a flag (December 2025). Do not assume it is everywhere.
3. **View transitions** when a route or a shared image changes.
4. **GSAP** when you pin one chapter or split one headline. Not for a fade.

## Scroll-driven (the default)

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: scroll()) {
    .window img {
      width: 160%;
      height: 100%;
      max-width: none;
      object-fit: cover;
      animation: scan 1ms linear both;
      animation-timeline: scroll(root block);
      animation-range: 0% 70%;
    }
  }
}
@keyframes scan {
  to { transform: translate3d(-28%, 0, 0); }
}
```

Write `1ms`. Set `animation-timeline` on the next line. The `animation`
shorthand resets it. Animate `transform`, not `object-position` — a full-bleed
photo that repositions every frame will hitch. `scroll()` follows a scroller.
`view()` follows an element entering the viewport. Do not use `view()` on a
sticky picture. Do not set `opacity: 0` as the resting state. Lenis can stall
a CSS timeline. If the window never moves, drop Lenis or move that one
animation to ScrollTrigger. The traps are in `scroll.md`.

## Scroll-triggered (time-based, optional)

A scroll-driven animation scrubs. A scroll-triggered animation plays on a clock when a trigger fires.

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-trigger: --t) {
    .station {
      timeline-trigger: --t view() entry 100% exit 0%;
    }
    .note {
      animation: in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
      animation-trigger: --t play-forwards play-backwards;
    }
  }
}
@keyframes in {
  from { transform: translateY(0.75rem); }
}
```

Name the trigger once. A second element with the same name wins. Use `trigger-scope` if two chapters would collide. The block stays inside the reduced-motion query. Do not fade from `opacity: 0`. The note is already readable before the trigger fires.

## Clip the photo to a drawing

`clip-path: shape()` is baseline across engines (Chrome 135, Safari 18.4, Firefox 148). Coordinates take `%` and `px`, so the mask scales. An SVG `path()` does not.

```css
.object {
  clip-path: shape(from 8% 40%, line to 70% 40%, line to 70% 62%, line to 8% 62%, close);
}
```

Draw the real silhouette, then put the photograph inside it. That is the registered-drawing move. A 1px caption under a rectangle is not.

## One number as the frame

Trim the font's invisible box so the digit sits in the viewport, not in the line-height.

```css
.figure {
  font-size: clamp(6rem, 28vw, 18rem);
  line-height: 0.8;
  text-box: trim-both cap alphabetic;
  overflow: hidden;
}
```

`text-box` shipped in Chrome 133 and Safari 18.2. If it is missing, the number still reads. Do not add a second box around it.

## Enter and leave without a timer hack

```css
@media (prefers-reduced-motion: no-preference) {
  .panel {
    transition: transform 600ms cubic-bezier(0.77, 0, 0.18, 1),
      display 600ms allow-discrete;
    @starting-style { transform: translateY(0.5rem); }
  }
}
.panel[hidden] { display: none; }
```

`@starting-style` and `transition-behavior: allow-discrete` are baseline in 2026. Use them for the menu. The resting panel is already visible. Do not set `opacity: 0` on it, and do not wait a `setTimeout` to add a class.

## Same-origin page changes

```css
@view-transition { navigation: auto; }
```

That opts both documents into a cross-document transition (Chrome 134, Safari 18.2). Inside one app, keep `document.startViewTransition`. Give one shared name to the image that moves. Two elements with the same name abort it.

## Small tools, not signatures

| Feature | Use it for | Do not |
|---|---|---|
| `sibling-index()` | a stagger delay on a real list | a cascade on every heading |
| `field-sizing: content` | a note field that grows | a layout that jumps the page |
| `oklch(from var(--ink) l c h)` | one hover ink from the token | a new hue |
| `contrast-color()` | a check, with your own contrast test behind it | the only contrast plan |
| `:open` | `details` and `dialog` | a second open-state system |
| `corner-shape` | one mark, if the brand is a squircle | squircles on every card |

## Not yet

CSS mixins (`@mixin`, Chrome 146 expected), gap decorations, and `display: grid-lanes` were not baseline on 2026-10-04. Do not build the layout on them.

## What won without a scene

"The grid to the page" (Awwwards nominee, 13 August 2026) draws the story in lines: one request, about 14 kB, no images. 100 Lost Species (April 2026) is HTML, CSS, and GSAP. By-Kin won a Developer Award on restraint, not on a longer effect list. Copy none of them. The lesson is the same: the technique serves one idea, and the still frame already holds it.
