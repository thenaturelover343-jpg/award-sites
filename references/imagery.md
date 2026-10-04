# Imagery

Art direction is the photo decision. A $10k page with five unrelated stock
shots looks cheaper than a $10k page with four crops of one session.

## Pipeline

1. **Shot list before search.** Write the frames you need: hero (place or
   object, wide), detail (material, macro), proof (the work in use, no fake
   portrait), process (hands, tools — hands are safer than faces). Note the
   ratio: one wide (16:9 or 3:2) and one portrait (4:5). Everything else is a
   crop of those ideas, not a new mood.
2. **Fetch legally.** Run the script (no API key):

   ```bash
   node .grok/skills/award-sites/scripts/fetch-photos.mjs "linen on oak table, natural light" --count 8 --out public/media --aspect wide
   ```

   It queries Openverse with `license_type=commercial` and `size=large`,
   skips files under ~1400px or under 40KB, and writes `credits.json` plus
   `CREDITS.md` next to the files. Openverse requires every word to match.
   The script drops the aspect filter, then retries the first two words, if
   a poetic query comes back empty. Prefer two or three concrete nouns
   yourself ("porcelain cup", "oak table linen") over a sentence.

3. **Select.** Open the files (view them, do not guess from filenames). Keep
   a set that could have been shot on the same morning: one white balance,
   one contrast, no visible logos, no readable trademarks, no license plates
   you would not want, no children. Drop anything you would be ashamed to
   credit.
4. **Grade.** The set should feel like one roll. If the tool list includes
   an image editor, grade every kept frame the same way (one temperature,
   one contrast, a little grain). If it does not, choose only the frames
   that already match, and do the crop with CSS `object-position`. Do not
   leave three warm photos and one blue flash photo because the search was
   good enough.
5. **Place.** Hero poster is compressed and dimensioned (the box has a
   reserved aspect ratio so CLS stays ~0). Long edge about 2500px, not the
   camera original if that file is many megabytes. Below-fold images are
   `loading="lazy"` and `decoding="async"`. The hero is eager. Give `srcset`
   only when you have the files; do not invent URLs. The LCP node is this
   poster or the headline, never a canvas.
6. **Credit.** If `credit_required` is true (license starts with `by`), the
   footer lists creator, license, and source link. CC0: credit optional,
   still keep `credits.json` in the repo. Never hotlink the source URL as
   the site's `<img src>`.

Run the script again for portrait (`--aspect tall`) rather than stretching
wides. If a query returns nothing, broaden the noun, do not drop the license
filter.

## Licenses (short, not legal advice)

| Source | Commercial use | Credit | How |
|---|---|---|---|
| Openverse, filtered by the script | Yes, when `license_type=commercial` | Required for BY and BY-SA | Script |
| Unsplash (the license, not the API) | Yes | Not required; appreciated | Direct download only. The **API** requires attribution of Unsplash and the photographer on every display — do not call the API unless you will show that credit |
| Pexels | Yes | Not required | Direct download, or the API with a key the user supplied. Do not sell the file unchanged as a poster or print |
| Wikimedia Commons | Depends on the file | Usually yes | Only when the script already returned it via Openverse, so the license is recorded |
| "I found it on Google" | No | — | Never |

Do not use a photo as the product the company sells (a poster shop of the
unchanged file). Using it as the atmosphere of their own site is the normal
case both licenses allow. People in the photo are not a model release for an
ad about a disease, a political claim, or a fake team. Prefer rooms, objects,
hands, landscapes, and details.

## Generated images

When an image generator is actually in your tool list, use it for frames the
stock libraries cannot shoot: a specific fictional interior, a product that
does not exist, a material study. Rules:

- Generate the **shot list**, not one hero and a hope. Same lens feel in
  every prompt (for example "35mm, soft north light, muted clay and oak,
  no text, no logo").
- Do not generate a real living person, a celebrity, or a fake founder
  portrait. Illustrated marks and objects are fine.
- Do not generate a fake "as seen in" magazine cover.
- If the generator is **not** in your tool list, do not invent a call to it.
  Use the script.
- Edit (in-paint, grade, extend) only through the editor tool you actually
  have. Re-generating from scratch to fix a crop is how the set stops matching.

Search tools that return a local file are for reference and for photos you
then check the license on. A search thumbnail is not a license. Prefer the
script's `credits.json` over a random search hit.

## Markup

```tsx
<figure className="relative aspect-[16/9] overflow-hidden">
  <img
    src="/media/01-porcelain-cup.jpg"
    alt="A pale porcelain cup on an oak bench, north light"
    width={2500}
    height={1416}
    className="h-full w-full object-cover"
  />
</figure>
```

Alt text says what is in the frame. Decorative duplicates of a hero get
`alt=""` and the hero does not. The first portrait or hero is eager
(`loading` default); the rest `loading="lazy"` and `decoding="async"`.

Reserve the box with `aspect-*` or width and height. A photo that loads and
shoves the headline down fails the layout score.

## Grade without a generator

CSS, used consistently, is a grade. One class on every photo frame:

```css
.frame img {
  filter: saturate(0.85) contrast(1.05);
}
```

Do not stack blur filters. Do not put a different filter on each section.

## Treatment by direction

| Direction | Images |
|---|---|
| Quiet luxury | Few, large, lots of margin. Maybe four on the whole page |
| Editorial object | Object, detail, scale reference (a hand or a room) |
| Archive | The work itself. If you do not have the work, say so and use process photos — do not fake case studies with unrelated cities |
| Launch / film | A poster that matches frame 0 of the scene, so the handoff does not flash |
| Type instrument | Almost none. Paper texture or nothing |

## Editing checklist

- Crop to the ratio system. Faces (when you legitimately have them) sit off
  center, not under the nav.
- Horizon level. Verticals vertical on architecture, unless the tilt is the
  shot.
- No baked-in captions, watermarks, or stock-site UI.
- Export the hero poster smaller than the gallery original if the original is
  many megabytes. A 2500px JPEG at reasonable quality is enough for a hero.
  The script does not recompress; if a file is over ~1.5MB and it is the LCP,
  recompress it before shipping.
