# Directions

Commit before styling. One primary. A secondary is allowed only if it serves
the same sentence (Archive + a shader on the thumbnails, not Archive + a
planet + a custom cursor + a liquid menu).

Write this and keep it:

> Direction: …
> Signature: the visitor …
> Not on this site: …

## Quiet luxury

Hospitality, fashion, counsel, architecture practices that sell calm.

- Signature: a photograph changing crop or temperature as you move, plus type
  that is simply large and exact. Almost no animation — a 12px settle at most.
- Stack: HTML, the type system, directed photos. No canvas.
- Mobile: the photo becomes the top half; the name sits in the remaining half.
  Do not shrink the desktop headline until it wraps into a paragraph.
- Avoid: gold gradients, serif + "elegance" clichés, stock handshakes, marble
  textures tiled as a background.

## Editorial object

A product, a dish, a chair, a tool. The object is the page.

- Signature: one object, repeated at three scales (hero crop, process detail,
  a measured spec). Scroll only changes what you know about it.
- Stack: photography-led. A single turntable (`references/webgl.md`, object
  cinema, one model) is allowed if the object must be understood in the round.
  Otherwise a sharp photo sequence beats a bad model.
- Mobile: object first, spec list after. Sticky "inquire" only if it does not
  cover the object.
- Avoid: feature grids with six identical cards, icon rows, fake "3D" CSS cubes.

## Archive

Studios, photographers, foundries, architects with a body of work.

- Signature: an index. Hover (or press) does one thing — a clip change, a
  title swap, or a slight image displacement — and the cursor stays native.
- Stack: a real list of projects. Distortion only if imagery.md's grade is
  already consistent. View transitions into a case page when there are more
  than three projects.
- Mobile: the hover becomes the page. Tapping a row opens it. Do not hide
  titles until hover.
- Avoid: masonry for its own sake, filters that do nothing, "selected works"
  with one item.

## Launch sequence

A product or exhibition told in chapters.

- Signature: a pinned chapter where scroll scrubs one sequence (frames, a
  mask, or a camera move) and the copy is locked to beats. One pin on the
  page, not five.
- Stack: GSAP ScrollTrigger if the sequence is timed. CSS view timelines if
  each beat is just an entrance. Lenis only if the scrub must feel heavy.
- Mobile: shorten the pin (the finger is not a mouse). Offer a "skip chapter"
  control. The sequence still completes.
- Avoid: hijacking the scrollbar so the user cannot fling, sound on by default,
  a 20-second pin before any words.

## Scroll film

The brand is a place or a journey. Active-theory-class, used rarely.

- Signature: a camera path through one scene. Chapters are camera bookmarks.
  HTML type sits on top and stays sharp (do not render paragraphs in WebGL).
- Stack: `references/webgl.md`. Poster first. This is the expensive direction —
  spend the effort on the path and the lighting, not on postprocessing.
- Mobile: a reduced path (fewer draws), or a designed film-strip of stills if
  the GPU cannot hold 45fps. Measure. Do not ship a stuttering film.
- Avoid: a generic icosahedron, particle dust with no subject, a world the
  copy does not mention.

## Object cinema

One product you orbit, configure, or open.

- Signature: drag to turn, scroll to explode or recolor one part. The
  configurator changes a real attribute (material, part), not a random hue.
- Stack: one compressed model or a procedural stand-in that still reads as the
  object. Contact shadow, studio lighting, no HDRI CDN.
- Mobile: drag, not hover. A visible hint that dies after the first gesture.
- Avoid: auto-spin that never stops and makes type unreadable, five materials
  that are all "plastic".

## Type instrument

Foundries, editors, campaigns where language is the product.

- Signature: one kinetic line (a split, a weight axis, a clip reveal) that
  the visitor can scrub or that plays once. Body text never animates.
- Stack: variable font, GSAP SplitText for that one line, or a registered
  `@property` on the weight axis driven by scroll. No WebGL unless glyphs are
  the 3D.
- Mobile: the kinetic line plays once, shorter. Reading size stays ≥ 16px.
- Avoid: animating every heading, scramble-text on load, illegible outlines.

## Material field

A studio whose identity is light, liquid, metal, paper.

- Signature: one shader or one CSS material (grain + a single animated
  gradient mesh) living behind or inside the mark. It shows up in the hero,
  the transition, and the favicon's static frame.
- Stack: CSS first. A fragment shader only if CSS cannot make the material.
  Read webgl.md before adding Three.
- Mobile: the material is quieter (lower speed, no cursor tracking).
- Avoid: purple mesh blobs, three competing materials, grain so heavy the
  text fails contrast.

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
