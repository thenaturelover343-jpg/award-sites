# This workspace

Read this when the site runs in the Grok app-builder sandbox (TanStack Start,
preview on port 8080). Skip it if you are generating a standalone Vite or
Next project for somewhere else — the craft rules in the other files still
hold.

## What you inherit

- `design-ui` for tokens in `@theme`, Tailwind v4, Lucide, the pointer cursor
  on buttons, and the ban on emoji icons. Award-sites overrides only what
  `SKILL.md` lists (display scale, one grain, one material wash, longer
  choreography).
- `og` for the share card and favicon. Do not put `og:*` or `twitter:card` in
  the root route. Dispatch the brand pass the way `og` says; do not wait on it.
  The card should look like the site's first frame: the type, the ground, the
  object. Not a generic purple card. JSON-LD is not an Open Graph tag: put it
  in the page, only for facts already visible (`references/seo.md`).
- Auth and database stay **off** unless the user asked for accounts or saved
  server data. A contact form does not need them.
- Verify in a real browser at desktop and ~390px, on dev and on the production
  build, the way the workspace instructions require. A screenshot where the
  hero type is readable is the bar — a 200 from curl is not.

## Dependencies

`npm install` the motion or Three packages only if the direction uses them.
Never `--save-dev`. Do not install a smooth-scroll package "just in case".

Fontsource packages are runtime dependencies too. Import their CSS from
`src/styles.css` (or the route) so the faces ship. If an import path 404s,
open the package's `package.json` exports and use the path that exists.

## Files

- Routes in `src/routes/`. Home is the one-page story. A case study is
  `src/routes/work.$slug.tsx` (or the file-route form this repo already uses).
- Photos in `public/media/` via the fetch script. Grain at `public/grain.svg`,
  copied from this skill's `assets/grain.svg`.
- Do not edit `public/__grok/`, `server/`, or the preview bridge.
- Keep the root document shell. Add the skip link and the main landmark
  inside the page, not by replacing the shell.

## Server rendering

The hero text and the poster `<img>` are in the server-rendered route, so the
first HTML already contains them. Anything that touches `window`, Lenis,
GSAP's matchMedia, or Three is inside `useEffect` or a lazily imported client
module (`references/webgl.md`). A canvas imported at the top of the route is
the usual white screen — don't.

## Tools for pictures

Use a tool only if it is on your tool list this session:

- Photo search + download with licenses: the fetch script, first.
- An image search tool: for looking, not for hotlinking, and not as proof of
  license.
- A generator: shot-list frames for fictional objects and rooms. No real
  people. Same prompt skeleton every frame (`references/imagery.md`).
- An image editor: one grade applied to the set.

If none of the image tools exist, the script plus CSS grade is the whole
pipeline. That is enough for the bar.

## Preview performance

The in-browser preview is a real browser. A Scroll film that stalls there
will stall for the user. Prefer Quiet luxury / Editorial object / Archive
unless the brief truly needs a scene. Ship the poster either way.

## After you build

Do not tell the user the site is finished. Run `references/jury.md` first.
In the user-facing summary, quote the jury's verdict and its four numbers,
name the direction and the signature in one sentence, and the brand
assumptions you invented. Do not narrate package versions, ports, or this
file. Do not replace the jury's numbers with your own.
