# Directions

Commit before styling. One primary. A secondary is allowed only if it serves
the same sentence (Archive + a shader on the thumbnails, not Archive + a
planet + a custom cursor + a liquid menu).

Write this and keep it:

> Direction: …
> Signature: the visitor …
> Hero / mid / end: …
> Not on this site: …

Scroll film and Object cinema are closed unless the brief's subject is a
place you move through, or a thing you turn. A rental, a clinic, a restaurant,
or "make it award-winning" is not that brief. Build Quiet luxury or Editorial
object instead.

## Quiet luxury

Hospitality, fashion, counsel, architecture practices that sell calm.

- Signature: a photograph changing crop or temperature as you move, plus type
  that is simply large and exact. Almost no animation — a 12px settle at most.
- Three scales: the crop at full size, the same crop deciding one fact, the
  end frame (warmer, or the last position) at rest in the colophon. Not a new
  photo.
- Stack: HTML, the type system, directed photos. No canvas.
- Phone: the photo is the top half, about 42svh, nothing on it. The name and
  the action sit in the remaining half of the first screen. Do not shrink the
  desktop headline until it wraps into a paragraph. No pin.
- Never: gold gradients, a dark hero plus a blob, stat chips (24u, 16+, 100%),
  serif plus the word "elegance", stock handshakes, marble tiled as a background.

## Editorial object

A product, a dish, a chair, a tool. The object is the page.

- Signature: one of the three moves in `references/rejects.md` — an inspection
  window, a drawing the photo is clipped to, or a number that frames the
  photo. Not three crops in a grid.
- Three scales: start of the window, the station it is on, the end frame.
  Inside the one scroll. Not three cards.
- Stack: photography-led. A single turntable (`references/webgl.md`, object
  cinema) only if turning teaches something the photos cannot. A sharp
  sequence beats a bad model.
- Phone: the same move, re-broken. Object first, about 42svh, nothing on it.
  Sentence, number, and action are in the first screen. Specs sit below, never
  in a chip on the picture. No sticky bar over the object. No pin.
- Never: feature grids, icon rows, price cards on the photograph, a caption
  line pretending to be a measured drawing, the same file cropped three times
  and labeled, a second photo under the window.

## Archive

Studios, photographers, foundries, architects with a body of work.

- Signature: an index. Hover (or press) does one thing — a clip change, a
  title swap, or a slight image displacement — and the cursor stays native.
- Three scales: the index, the displacement on the active row, the same image
  as the case hero (shared element). Titles are always visible.
- Stack: a real list of projects. Distortion only if imagery.md's grade is
  already consistent. View transitions into a case page when there are more
  than three projects.
- Phone: the hover becomes the page. Tapping a row opens it. Do not hide
  titles until hover. The image that would appear on hover is on the page.
- Never: masonry for its own sake, filters that do nothing, "selected works"
  with one item, a custom cursor.

## Launch sequence

A product or exhibition told in chapters.

- Signature: a pinned chapter where scroll scrubs one sequence (frames, a
  mask, or a camera move) and the copy is locked to beats. One pin on the
  page, not five.
- Three scales: the first beat, the beat where the fact changes, the end
  frame after the pin. One sequence.
- Stack: GSAP ScrollTrigger if the sequence is timed. CSS view timelines if
  each beat is just an entrance. Lenis only if the scrub must feel heavy.
  Never Lenis and ScrollSmoother.
- Phone: shorten the pin (the finger is not a mouse). Offer a "skip chapter"
  control. The sequence still completes. A thumb can fling past it.
- Never: hijacking the scrollbar so the user cannot fling, sound on by default,
  a 20-second pin before any words, fade-up on every beat.

## Scroll film

Only if the brand is a place or a journey the brief asked you to move through.
Otherwise do not open this direction.

- Signature: a camera path through one scene. Chapters are camera bookmarks.
  HTML type sits on top and stays sharp (do not render paragraphs in WebGL).
- Three scales: poster (frame 0), one bookmark, the end frame. The poster is
  the page if WebGL fails.
- Stack: `references/webgl.md`. Poster first. Spend the effort on the path and
  the lighting, not on postprocessing.
- Phone: a reduced path (fewer draws), or a designed film-strip of stills if
  the GPU cannot hold 45fps. Measure. Do not ship a stuttering film.
- Never: a generic icosahedron, particle dust with no subject, a world the
  copy does not mention, a canvas with no poster.

## Object cinema

Only if one product is the subject and turning it teaches something the photos
cannot. Otherwise build the inspection.

- Signature: drag to turn, scroll to explode or recolor one part. The
  configurator changes a real attribute (material, part), not a random hue.
- Three scales: the poster, the turn, the changed part. Same object.
- Stack: one compressed model or a procedural stand-in that still reads as the
  object. Contact shadow, studio lighting, no HDRI CDN.
- Phone: drag, not hover. A visible hint that dies after the first gesture.
  Page scroll still works when the gesture starts on type.
- Never: auto-spin that never stops and makes type unreadable, five materials
  that are all "plastic", a scene for a service business.

## Type instrument

Foundries, editors, campaigns where language is the product.

- Signature: **one** kinetic line (a split, a weight axis, a clip reveal) that
  the visitor can scrub or that plays once. Body text never animates. A second
  animated heading fails the direction.
- Three scales: that line, the same axis at rest in a specimen, the still
  favicon or end state. Not every heading.
- Stack: variable font, GSAP SplitText for that one line, or a registered
  `@property` on the weight axis driven by scroll. No WebGL unless glyphs are
  the 3D.
- Phone: the kinetic line plays once, shorter. Reading size stays ≥ 16px.
- Never: animating every heading, scramble-text on load, illegible outlines,
  body copy in motion.

## Material field

A studio whose identity is light, liquid, metal, paper.

- Signature: one shader or one CSS material (grain + a single animated
  gradient mesh) living behind or inside the mark. It shows up in the hero,
  the transition, and the favicon's static frame.
- Three scales: hero, transition, still favicon. One material, not three.
- Stack: CSS first. A fragment shader only if CSS cannot make the material.
  Read webgl.md before adding Three.
- Phone: the material is quieter (lower speed, no cursor tracking).
- Never: purple mesh blobs, three competing materials, grain so heavy the
  text fails contrast, a blob behind a dark hero as the whole idea.

## Choosing

| Subject | Direction |
|---|---|
| Restaurant, hotel, wine, tailor, law, clinic | Quiet luxury |
| Physical product with a name | Editorial object, or Object cinema if rotation teaches something |
| Studio, photographer, agency | Archive |
| Launch, exhibition, keynote | Launch sequence |
| Place, destination, game world, "experience" they insisted on | Scroll film |
| Type, journal, manifesto | Type instrument |
| Lighting, glass, cosmetics, audio brand | Material field |
| They said "Awwwards" and nothing else | Archive if a portfolio, Quiet luxury if a business. Not Scroll film. |

If the brief fights the direction (a clinic asking for a WebGL planet), build
Quiet luxury and put the craft in type and photography. Say that you chose
usability over a spectacle that would hurt the score.
