# Rejects

Read this before `directions.md`. If the page you are about to ship matches a
row here, stop. Design is at most 5 and creativity at most 4. Do not average
the other scores up to a pass. A finished fix list is not a pardon.

This file exists because a skill-following build shipped a brochure and a
reviewer scored it 8.1. The skill had asked for "one signature, three times"
and "a measured spec". The build did both with a hairline and three price
chips, and called that an Awwwards site. That reading is wrong.

Three moments means the same **move** at three sizes. It does not mean the
same caption three times.

## Firewall

Any one of these is an automatic fail. Same list as `SKILL.md`.

| If you shipped this | It is |
|---|---|
| Dark hero, a gradient blob, fade-up on every section | The 2024–2026 AI landing |
| Inter, Roboto, Poppins, Space Grotesk, or Playfair as the default | A font reflex, not a design |
| Magnetic buttons, or a custom cursor | A cliché. Touch and reduced motion make it worse |
| Six equal feature cards, or three price cards on one photo | A catalog |
| "Elevate", "seamless", "next-gen", "unlock" | Empty copy |
| WebGL, and the subject is not an object or a place | Decoration |
| `opacity: 0` waiting on an IntersectionObserver | Hidden content |
| A custom cursor on a touch screen | A broken page |
| Lenis and ScrollSmoother both running | Two scrollers |
| A stranger's face labeled as the founder or the team | A fake person |
| Lorem, or client logos you invented | A lie |
| A fact the visitor only sees on hover | A desktop-only site |

## Automatic fails

| If the page is this | It is |
|---|---|
| Full-bleed photo, serif headline stuck on it, a price, a solid button | The 2024–2026 landing template |
| The same object as three tiles, each with a caption and a price chip | A catalog, not three scales of an idea |
| A 1px rule with end ticks, repeated, called "the signature" | A label |
| Every section is eyebrow + display headline + muted paragraph | A kit |
| Instrument Serif + Instrument Sans + near-white or near-black, and nothing else is the idea | A font pair, not a design |
| White studio shots in bordered boxes on a paper page | A lookbook grid |
| Nav, headline, dimension line, price, and button all fighting one picture | An overlay, not a layout |
| You can rebuild it in a day from Tailwind, the client's photos, and a serif | Not a $10k site |
| Stat chips ("24u", "16+", "100%") above a row of reasons | A local-service template |

Cover the logo and the words. If what remains is "a nice photo with type on it",
creativity stays at 4.

## What a signature is

A signature changes how the object is read. It is not a decoration you can
delete and still have the same page.

A stranger, shown a screenshot with the words covered, can point at the move.
You can say which real Site of the Year or Site of the Month (2023–2026)
shares that move. If you cannot recall one you have actually seen, do not
invent a name, and do not score creativity above 6.

The move appears three times only when the three are different **scales of
that move**: the full window, the moment it decides a fact, the end frame or
the mark reduced. Repeating a label does not count. The nav mark, a mid-page
moment, and the footer only count when they are the same *move* at three
sizes, not the same caption.

Do not add a section to reach three. For an inspection, the three moments are
inside the one scroll: start of the window, the station it is on, the end
frame.

## The hard case: few real photos, one physical product

Do not invent pictures. Do not make a tile per photo. Pick **one** of these
and ignore the other two.

### 1. Inspection

One viewport. The photograph stays. Scroll moves a window (`clip-path`,
`object-position`, or a mask) from hitch to body to unit to axle. Prefer a
`transform` on a wider image (`references/scroll.md`). One column of type,
**outside** the photograph, changes the spec for that station. One pin on the
page. Reduced motion: the same stations stacked, still one column, still no
card on the picture. The still frame shows the whole object, not an empty crop.

### 2. Registered drawing

Draw the object once as SVG (box, unit, wheels, hitch). Clip the photo to
that path so the studio white disappears and the object is a shape on the
page. The dimensions are the drawing's own lines, set large enough to be the
layout (a number at poster scale, not an 11px caption). The nav mark is that
drawing, reduced. The footer is the same drawing, not a second wordmark block
under a photo strip.

### 3. Number as frame

One figure — the length or the day price — is cropped by the viewport. The
photograph is visible only inside the counter. One sentence and one action
sit in the margin, not in a panel on the picture. The footer may repeat the
figure only as the same clip at a smaller size, not as a second wordmark under
a photo strip.

## After you pick

Write two lines and keep them:

> Brochure version: …
> Move instead: inspection, registered drawing, or number as frame.

If those two lines describe the same page, you picked nothing. Then build
`build.md`. Do not sketch a third layout.

## Pass vs fail (first screen)

- **Pass.** One sticky photograph, copy in a side column, scroll moves the
  crop. Three moments are the start, the station, and the end frame of that
  same window.
- **Fail.** Full-bleed photo, a serif on top of it, three price chips. That
  is a brochure. Creativity stays at 4 or below.
