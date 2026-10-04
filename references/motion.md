# Motion

Motion is direction, not decoration. If you cannot say what the movement
means, delete it.

## Ladder

Lock these as tokens next to the colors:

| Role | Duration | Ease |
|---|---|---|
| Hover, color, opacity | 180ms | `cubic-bezier(0.2, 0, 0, 1)` |
| Panels, menus | 600ms | `cubic-bezier(0.77, 0, 0.18, 1)` |
| Reveals | 900ms | `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo) |
| Hero intro | ≤ 1400ms | same out-expo |

One family for the site. Expo-out for things that arrive. A symmetric in-out
only for a cover that leaves and returns (page transition).

## Platform first

Read `scroll.md` before you write `animation-timeline`. The `animation`
shorthand resets the timeline. A duration of `0s` dies in Firefox. Write
`1ms`, then the timeline on the next line. Animate `transform`, not
`object-position`.

## Visible first

Hero: no entrance required. It may settle 12px, but it starts readable.

`opacity: 0` does not belong in the base stylesheet. Not on a section, not on
a class named `reveal` or `in-view`, not "until the observer adds a class".
If you search the file and find it outside a `prefers-reduced-motion:
no-preference` block that also starts the animation in the same rule, delete
it. The reduced-motion still is the end frame of the signature, already
visible. A page that stays blank because the tween never ran has failed.

Below the fold, prefer CSS scroll-driven animations. They run off the main
thread. Do **not** set a resting `opacity: 0`. Gate the animation:

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .rise {
      animation: rise 1ms linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 35%;
    }
  }
}
@keyframes rise {
  from { transform: translateY(1rem); }
  to { transform: none; }
}
```

Keep opacity out of the from-keyframe unless you have confirmed the
reduced-motion block really wins. A 1rem rise is enough. Do not animate
`top`, `height`, or `margin`.

`animation-range` and `view()` need a real scroller. If Lenis is on the page
and the reveal never fires, delete the CSS timeline for that element and use
ScrollTrigger. Do not debug it for an hour.

## Lenis + ScrollTrigger

Use this only when something is **scrubbed** (a pin, a sequence, a progress
bar tied to a chapter). Install on the app, never as a devDependency:

`npm install gsap @gsap/react lenis`

Versions that shipped together on 2026-10-04: `gsap@3.15.0`, `@gsap/react@2.1.2`,
`lenis@1.3.26`. Do not also install ScrollSmoother's wrapper. GSAP itself is
free for commercial use, including SplitText.

```tsx
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: false, lerp: 0.12 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
```

Import `lenis/dist/lenis.css` once. Nested overflow (a horizontal case strip,
a menu) gets `data-lenis-prevent` so the finger scrolls the strip, not the page.

Scrub pattern:

```tsx
useEffect(() => {
  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 0.6,
      },
    });
    tl.to(frame, { scale: 1.08, ease: "none" });
    return () => tl.kill();
  });
  return () => mm.revert();
}, []);
```

One pin per page in Launch sequence. `end: "+=150%"` is a starting point, not
a dare — on a phone, shorter. Always `mm.revert()` so pins do not stick after
navigation.

SplitText, one headline only:

```tsx
const split = SplitText.create(el, { type: "words", mask: "words" });
gsap.from(split.words, { yPercent: 110, stagger: 0.04, duration: 0.9, ease: "expo.out" });
// cleanup: split.revert()
```

Do not split body copy. Do not run it under reduced motion.

## View transitions

For route changes inside the app. The callback may return a promise; the
browser waits until the DOM has updated.

```tsx
export function go(navigate: () => Promise<unknown>) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !document.startViewTransition) return navigate();
  return document.startViewTransition(() => navigate()).finished;
}
```

Shared element (the image that flies from the index to the case): set
`view-transition-name` on the clicked thumb **only**, and the same name on the
case hero. Two elements with one name will abort the transition.

```css
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) { animation: none; }
}
```

A cover wipe is the fallback grammar when view transitions are unavailable:
a fixed panel in the ink color, `transform: scaleY`, origin bottom, ~500ms
in-out, then swap, then exit. Honor modified clicks (meta, ctrl, shift,
middle) and external links — never intercept those.

Same-document chapter changes can use the same API. Do not animate the route
with both a wipe and a view transition.

## Hover

The box does not move. No lift, no shadow bloom, no scale on the whole card.
Change the ink, the image crop, or a 1px underline that is already there
(opacity, not a wipe from the left on every link). Image scale inside an
`overflow: hidden` frame, 1.04 over 600ms, is enough for Archive.

`:focus-visible` uses the same cue as hover, plus a 2px ring. Never
`outline: none` without a replacement.

## Loader

Prefer none. Fonts are self-hosted and the hero is a compressed poster, so
you usually do not need one.

If a Scroll film must fetch a scene: a thin progress line tied to real
promises (`document.fonts.ready`, the poster decode, the dynamic import).
Cap the wait at 1.5s, then show the poster and let the scene arrive.
Skippable. Once per session (`sessionStorage`). No fake 0–100 counter that
ignores the network.

## Reduced motion

The still has to be composed: full type, full photography, the signature in
its final frame (object facing front, material at rest, kinetic line already
set). Not an empty hero because the tween never ran.

## Do not

- AOS-style fade-up on every section.
- `window` scroll listeners that set state in React on every frame. Use
  ScrollTrigger or a CSS timeline. A pointer move may write a CSS variable.
- Animate `filter: blur()` across large photos on scroll. It will miss frames.
- Parallax on text. Parallax on an image, a few percent, only if it is the
  signature.
- Sound, video autoplay with audio, or flashing faster than three times a
  second.
