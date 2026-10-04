# Scroll-driven animations

Checked against MDN on 2026-10-04. The timelines guide was updated 29 March
2026, `animation-timeline` on 16 September 2026, `animation-range` on 27 August
2026, `timeline-scope` on 14 September 2026. Chrome's overview is older (5 May
2023) and does not mention the shorthand trap.

MDN still did not call `animation-range` Baseline on 27 August 2026. Chrome has
shipped scroll-driven animations for years. Do not assume Firefox or Safari.
Wrap the motion in `@supports`. The page must already make sense without it.

This is not scroll-triggered animation. A scroll-driven animation scrubs: stop
the finger and the animation stops. `animation-trigger` plays on a clock. That
one lives in `techniques.md`.

## Scroll timeline or view timeline

They both scrub. They measure different things. MDN, `view-timeline` updated
27 August 2026, `view-timeline-name` 22 April 2026. Neither is Baseline.

| | Scroll timeline | View timeline |
|---|---|---|
| You ask | How far has this scroller moved? | How far has this element crossed the scrollport? |
| 0% | The scroll is at the start | The subject first meets one edge |
| 100% | The scroll is at the end | The subject reaches the opposite edge |
| You set the name on | The scroller | The subject, the element you watch |
| Anonymous form | `scroll(root block)` | `view()` on the element that enters |
| Ranges | Percentages of the scroll | `entry`, `exit`, `cover`, `contain`, the crossing names |
| Dies when | That axis cannot scroll | The scroller cannot scroll, or the subject never crosses the port |
| Use it for | The inspection. The page is tall, the picture is sticky | One entrance. A block arrives and settles |

A scroll timeline does not care whether the picture is on screen. A view
timeline does. That is the whole choice.

Do not scan a sticky picture with `view()`. The picture stays in the port, so
the timeline finishes at once. Drive that scan with `scroll(root block)`.

Do not drive an entrance with `scroll()`. The entrance would run for the
whole page, not for the moment the block arrives. Use `view()` and
`animation-range: entry 0% entry 35%`.

The name lives in different places. `scroll-timeline-name` goes on the
scroller. `view-timeline-name` goes on the subject. Descendants of that
element can see the name. A sibling cannot, until you hoist it with
`timeline-scope` on the shared ancestor. The scope rules are the same. The
element you attach them to is not.

`view-timeline` is the shorthand of the name, the axis, and the inset. The
inset pulls the port's edges in, or pushes them out, so the timeline starts
before the subject actually touches the screen. `scroll-timeline` has no inset.
It only has a name and an axis.

```css
/* the page moved */
.stage img {
  animation: scan 1ms linear both;
  animation-timeline: scroll(root block);
  animation-range: 0% 70%;
}

/* this block entered */
.fact {
  animation: rise 1ms linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 35%;
}
```

Write the timeline after `animation`. Write `1ms`. Use `both`. The shorthand
wipes the timeline either way. A missing name, or two subjects with the same
view name under one scope, becomes an inactive timeline. The element stays on
the first frame.

## The shorthand wipes the timeline

`animation` resets `animation-timeline` to `auto`. You cannot set the timeline
inside the shorthand. Write the timeline after it.

A missing duration is `0s`. Firefox drops a scroll-driven animation at `0s`.
Write `1ms`. The scroll owns the progress. The millisecond is only there so
the animation exists.

`animation-fill-mode: both` is required. Without it, the picture jumps back to
the first frame when the range ends.

```css
.scan {
  animation: scan 1ms linear both;
  animation-timeline: scroll(root block);
  animation-range: 0% 70%;
}
```

That order is the whole bug. Reverse the two lines and the picture never moves.

## Ranges

On a `scroll()` timeline, use percentages of that scroll. `0% 70%` means the
scan finishes before the page does, so the last frame rests while the form
arrives.

On a `view()` timeline, name the slice:

| Name | The element is |
|---|---|
| `cover` | crossing the scrollport, from first pixel in to last pixel out |
| `contain` | fully inside the scrollport |
| `entry` | entering |
| `exit` | leaving |
| `entry-crossing` | its start edge crossing the end edge of the port |
| `exit-crossing` | its end edge crossing the start edge of the port |

```css
animation-range: entry 0% entry 35%;
animation-range: entry 10% exit 100%;
```

`entry` on a `scroll()` timeline is the wrong tool. Percentages there.

One range per animation, in the same order as the names. Extra ranges are
dropped. Too few ranges repeat.

## Scope

`scroll()` and `view()` have no name. `timeline-scope` cannot see them. The
inspection uses `scroll(root)` for that reason. Do not also give it a name.

Name a timeline only when the element that moves is not a descendant of the
scroller. Put `scroll-timeline-name` on the element that actually scrolls.

```css
scroll-timeline-name: --scan;
scroll-timeline: --scan block;
```

By default the name is visible to that element and its descendants. The
animated element walks its ancestors to find the name. A child can use it. A
sibling cannot. MDN's page (14 September 2026) says "direct descendant". Trust
the lookup: if the element is inside the scroller, it can see the name. If it
is not, it cannot.

Hoist the name to the ancestor they share:

```html
<div class="page">
  <div class="copy">…</div>
  <div class="scroller">…</div>
</div>
```

```css
.page { timeline-scope: --scan; }
.scroller {
  overflow: auto;
  scroll-timeline: --scan block;
}
.copy strong {
  animation: fill 1ms linear both;
  animation-timeline: --scan;
}
```

The scroller must sit inside the element that sets `timeline-scope`. The
property is not inherited. `scroll()` is still invisible to it.

`timeline-scope: all` on a section keeps every name declared in that section
inside it. Use that when two sections would both be called `--scan`. A missing
name, or two timelines with the same name under one scope, becomes an inactive
timeline. The animation stays on the first frame. The console stays quiet.
Give each timeline one name, or fence each section with `all`.

No scroll range means no timeline. `overflow: clip` or `hidden` on the scroller
creates nothing if the axis cannot scroll. Clip the picture. Do not clip the
scroller. The document (or the overflow element) is the scroller. The stage is
only the window.

Safari Technology Preview 253 (24 September 2026) began matching some
style-originated timelines outside the ancestor chain. That is a preview. It
is not Baseline. Keep the ancestor and the `timeline-scope`. Do not delete
them because one preview stopped needing them.

## Named timelines

`scroll-timeline` is `scroll-timeline-name` plus `scroll-timeline-axis`.
`view-timeline-name` goes on the element you watch, not on the scroller. A
view timeline's scope works the same way: descendants see it, siblings need
`timeline-scope` on the shared ancestor.

## What you may animate

The compositor can run `transform` and `opacity` off the main thread. Animate
those.

`object-position`, `clip-path`, `width`, `top`, `filter`, and `background-position`
repaint. A full-bleed photograph that changes `object-position` every frame
will hitch on a phone. Scan with a larger image inside a clipped window:

```css
.inspect-stage { overflow: clip; }
.inspect-stage img {
  width: 160%;
  height: 100%;
  max-width: none;
  object-fit: cover;
}
@keyframes scan {
  to { transform: translate3d(-28%, 0, 0); }
}
```

A vertical subject uses `height: 140%` and `translate3d(0, -18%, 0)`.

`scaleX` on a station label is fine. It is a transform. Do not animate the
label's `width`.

## Sticky

The section is tall. The picture is `position: sticky; top: 0; height: 100svh`.
The timeline is the root scroll, not `view()`. The copy column is sticky too,
so the words stay while the picture travels.

Do not put `animation-timeline: view()` on the sticky image.

## Lenis

Lenis often moves a wrapper and leaves the document scroll at 0. Then
`scroll(root)` never advances. If the picture does not move, remove Lenis.
Do not add ScrollTrigger to paper over it. If you truly need Lenis for one
pinned chapter, name the timeline on the element that actually scrolls.

## Detection and motion

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: scroll()) {
    .inspect-stage img {
      animation: scan 1ms linear both;
      animation-timeline: scroll(root block);
      animation-range: 0% 70%;
    }
  }
}
```

The still frame is the default, outside that block. Do not start at
`opacity: 0`. Do not wait for a class from JavaScript.

On a phone, turn this animation off (`animation: none`) and let the page
scroll. A sticky `280vh` section traps a thumb.

## Other timelines

`animation-timeline` accepts five kinds of value. MDN, 16 September 2026.
Only one of them should drive the inspection.

| Timeline | Progress | Use it for |
|---|---|---|
| Document (`auto`, `document.timeline`) | Clock time since load | A hover, a menu, a 600ms panel. Duration is real here |
| Scroll progress | Position of a scroller | The inspection |
| View progress | An element's crossing of the port | One entrance |
| None | Nothing. The animation does not run | Turning a timeline off |
| Timeline trigger | A scroll or view timeline only decides *when*. The clip then plays on the document clock | A 0.35s unclip when a station is crossed. `@supports (animation-trigger: --t)` only |

The `1ms` duration is a workaround for scroll and view timelines. On the document timeline it is a one-millisecond flash. Do not copy it onto a hover.

A timeline trigger is not a third way to scrub. Chrome's note of 12 December 2025: the animation stays on the document timeline, and `timeline-trigger-source: view()` only fires it. Stop scrolling and a scrub pauses. A trigger finishes the clip.

The same two progress timelines exist in JavaScript. `ScrollTimeline` takes `{ source, axis }`. `ViewTimeline` extends it and takes `{ subject, axis, inset }`. MDN, 7 November 2025. Neither is Baseline. Pass one to `element.animate(keyframes, { timeline })` only when you must read `currentTime`. If CSS can see the scroller, do not build the inspection in JavaScript.

A GSAP timeline is a library clock. ScrollTrigger maps scroll onto it. It is not a CSS timeline. Use it for one pinned chapter. Do not run it on the same scroll as `scroll(root)`. Lenis leaves the document scroll at 0, so the CSS timeline never moves.

A view transition is a short document-timeline animation of the old and new snapshots (`::view-transition`). Use it when a route changes. Do not use it to scan the photograph.

Do not reach for SMIL. Do not polyfill a timeline by writing `style` from a scroll listener. That listener is the jank the platform timelines replace.

## Do not

- Combine `animation` and `animation-timeline` in one declaration.
- Omit the `1ms`.
- Use `view()` for a sticky scan, or `entry` on `scroll()`.
- Animate `object-position` on a hero-sized photograph.
- Drive the timeline from a `scroll` listener in React.
- Give two timelines the same name under one `timeline-scope`.
- Set `timeline-scope` and expect it to see `scroll()` or `view()`.
- Put `overflow: clip` on the element that owns the timeline.
- Ship the motion as the only way to see the sentence, the number, or the action.
