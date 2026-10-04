# Build

This file is one shell: a physical object. A restaurant, a hotel, a studio, a campaign, or an agency does not use it. Go back to `directions.md`.

Do not invent a hero. Type, a price, and a button do not sit on the photograph.

A $10k site is not a higher score you give yourself. It is the direction's structure, filled with that client's real words and real pictures.

## Pick the shell

| The subject is | You build |
|---|---|
| A thing, a room, a dish, a vehicle, a tool | The inspection below |
| A studio with several projects | An index. One row, one image. No tiles. |
| A place they insisted you fly through | WebGL, and only then. Read `webgl.md`. |
| Anything else | Stop. This file is the wrong one. Use `directions.md`. |

If the subject is not an object, do not build the inspection.

## Inspection

The copy sits beside the picture. It never sits on the picture. Scroll moves
the picture inside a fixed window. The words stay still.

Desktop, from 1440px down to 800px:

- Left column, about 34vw: the sentence, the number, the action, then a short
  list of stations (what you see as the window moves).
- Right column: one photograph, sticky, the height of the screen.
- The section is tall (`280vh`) only when scroll-driven animation exists, so
  the sticky window has room to travel.
- One photograph in that window. Do not add a second image under it.

Phone, under 800px:

- The photograph is on top, about `42svh`, and it scrolls away. Nothing is
  placed on it.
- The sentence, the number, and the action sit under it, still inside the
  first screen.
- The station list follows. Do not pin the page. A thumb must be able to fling.

```html
<section class="inspect">
  <div class="inspect-copy">
    <h1>One concrete sentence.</h1>
    <p class="inspect-num">12</p>
    <a href="#ask">The action</a>
    <ol>
      <li><span>Start</span></li>
      <li><span>Station</span></li>
      <li><span>End</span></li>
    </ol>
  </div>
  <div class="inspect-stage">
    <img src="/media/object.jpg" alt="What the photo actually shows." width="1600" height="1000" />
  </div>
</section>
```

```css
.inspect {
  display: grid;
  grid-template-columns: minmax(16rem, 34vw) 1fr;
  align-items: start;
}
.inspect-stage {
  position: sticky;
  top: 0;
  height: 100svh;
  overflow: clip;
}
.inspect-stage img {
  width: 160%;
  height: 100%;
  max-width: none;
  object-fit: cover;
}
.inspect-copy {
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1.25rem;
  min-height: 100svh;
  padding: 1.5rem clamp(1.25rem, 3vw, 3rem);
}
.inspect-num {
  font-size: clamp(4rem, 8vw, 8rem);
  line-height: 0.8;
  text-box: trim-both cap alphabetic;
}
.inspect-copy ol { list-style: none; margin: 0; padding: 0; }
.inspect-copy li { border-top: 1px solid var(--color-line); padding: 0.65rem 0; }
.inspect-copy li span { display: block; transform-origin: 0 50%; }

@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: scroll()) {
    .inspect { min-height: 280vh; }
    .inspect-copy { position: sticky; top: 0; }
    .inspect-stage img {
      animation: scan 1ms linear both;
      animation-timeline: scroll(root block);
      animation-range: 0% 70%;
    }
    .inspect-copy li span {
      transform: scaleX(0.2);
      animation: fill 1ms linear both;
      animation-timeline: scroll(root block);
    }
    .inspect-copy li:nth-child(1) span { animation-range: 0% 22%; }
    .inspect-copy li:nth-child(2) span { animation-range: 22% 46%; }
    .inspect-copy li:nth-child(3) span { animation-range: 46% 70%; }
  }
}
@keyframes scan {
  to { transform: translate3d(-28%, 0, 0); }
}
@keyframes fill {
  to { transform: scaleX(1); }
}

@media (max-width: 799px) {
  .inspect { display: block; min-height: 0; }
  .inspect-stage { position: relative; height: 42svh; }
  .inspect-copy { position: static; min-height: 0; }
  .inspect-stage img,
  .inspect-copy li span { animation: none; transform: none; }
}
```

The scan is the move. Start, station, and end are how far the window has
travelled along that one object. They are not three new pictures in a grid.
Name the stations after the object in front of you.

If `animation-timeline` is missing, the visitor still sees the sentence, the
number, the action, and the whole photograph. Do not hide them until a script
runs.

Lenis often freezes `scroll(root)`. If the window does not move, delete Lenis.
Do not add ScrollTrigger to rescue a sticky you just broke.

## Number as frame

Use this instead of the inspection only when the number is the product. The digit fills the viewport. The photograph moves inside the digit. The sentence and the action stay outside it.

```html
<section class="figure-frame">
  <p class="figure-frame-num">40</p>
  <div class="figure-frame-copy">
    <h1>One concrete sentence.</h1>
    <a href="#ask">The action</a>
  </div>
</section>
```

```css
.figure-frame { min-height: 100svh; display: grid; align-items: end; }
.figure-frame-num {
  margin: 0;
  font-size: 46vw;
  line-height: 0.75;
  text-box: trim-both cap alphabetic;
  color: transparent;
  background: url("/media/object.jpg") 50% 40% / cover no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
}
.figure-frame-copy { display: flex; justify-content: space-between; gap: 1rem; padding: 1.25rem; }
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: scroll()) {
    .figure-frame { min-height: 220vh; }
    .figure-frame-num {
      position: sticky;
      top: 0;
      animation: pan 1ms linear both;
      animation-timeline: scroll(root block);
      animation-range: 0% 80%;
    }
  }
}
@keyframes pan {
  to { background-position: 80% 70%; }
}
@media (max-width: 799px) {
  .figure-frame { min-height: 100svh; }
  .figure-frame-num { position: static; font-size: 42vw; animation: none; }
}
```

## Drawing

Use this when you can cut the studio background away. Scroll reveals the photograph inside the silhouette. Do not also build the inspection.

```css
.drawn {
  height: 100svh;
  overflow: clip;
}
.drawn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: shape(from 10% 45%, line to 72% 45%, line to 72% 68%, line to 10% 68%, close);
}
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: scroll()) {
    .drawn { height: 240vh; }
    .drawn img {
      position: sticky;
      top: 0;
      animation: reveal 1ms linear both;
      animation-timeline: scroll(root block);
      animation-range: 0% 75%;
    }
  }
}
@keyframes reveal {
  from { clip-path: shape(from 10% 56%, line to 28% 56%, line to 28% 64%, line to 10% 64%, close); }
  to { clip-path: shape(from 8% 38%, line to 78% 38%, line to 78% 72%, line to 8% 72%, close); }
}
@media (max-width: 799px) {
  .drawn { height: auto; }
  .drawn img { position: static; height: 42svh; animation: none; }
}
```

`background-position` and `clip-path` repaint. Prefer the inspection, which moves a `transform`. Use these two only when the digit or the silhouette is the move. The rules in `scroll.md` still apply: `1ms`, timeline on the next line, `both`, and `@supports`.

## After the first screen

One page. In this order:

1. The inspection, the number, or the drawing. That scroll is the signature.
   Its three moments are the start of the window, the station the window is
   on, and the end frame. Do not add a section so you can count to three.
2. One short block of facts, in sentences, in the copy column's width. Not a
   card grid. Not a town grid. Not six equal uses.
3. The form. Labels, errors, a success state. It does not pretend to send mail
   unless a backend exists.
4. A colophon: place, year, who took the pictures. The end frame may sit here
   only if it is the same move at rest (the drawing, reduced, or the figure).
   Not a second photograph, not a repeated price chip.

Cut anything else. Another section is how the brochure comes back.

## Banned in your own file

Search the component before you call it done. If you find one, delete it and
rebuild the screen.

- An `h1`, a price, and a link inside the same element as the hero image.
- `position: absolute` on the headline or the price.
- More than one `<figure>` in the first two screens.
- A button that says "this one" painted on top of a photograph.
- A hairline component whose only job is a label.

## Check with your eyes

Screenshot 1440×900 and 390×844. On the desktop shot, the words and the
photograph occupy different rectangles. On the phone shot, the photograph, the
number, and the action are all visible without scrolling, and the next
photograph is not. If either shot looks like a poster with type on it, you are
not done. Do not score that page.
