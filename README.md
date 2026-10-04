# award-sites

A skill for any public site that should clear an award bar: landing, portfolio, restaurant, hotel, shop, campaign, agency. One structural move at three scales. A different agent juries the result. The builder does not grade itself. Not a layout for one client. Not a dashboard.

Pick a direction in `references/directions.md`. Open `references/build.md` only when the subject is a physical object. A full-screen photo with type on it fails `references/rejects.md`.

## Install (Grok app builder)

Copy this folder to:

```text
.grok/skills/award-sites/
```

The app agent picks it up from `SKILL.md` frontmatter (name + description).
Trigger it by asking for a website, landing page, portfolio, or anything that
should look award-level rather than like a SaaS template. Dutch is fine
("bouw een website").

## Photos

```bash
node .grok/skills/award-sites/scripts/fetch-photos.mjs "porcelain cup, window light" --count 6 --out public/media --aspect wide
```

Openverse, commercial licenses, no API key. CC-BY rows must be credited.

## Layout

```text
award-sites/
├── SKILL.md
├── CHANGELOG.md
├── references/     # rejects, jury, build, seo, scroll, directions, motion, QA
├── scripts/        # fetch-photos.mjs
└── assets/grain.svg
```

Research baseline inside the skill: 2026-10-04.
