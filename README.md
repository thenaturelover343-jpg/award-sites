# award-sites

Build the inspection in `references/build.md`. The words sit beside the photograph, and scroll moves the photograph inside a fixed window. Do not invent a hero. A full-screen photo with type on it is the page this skill already failed.

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
├── references/     # rejects, build, seo, scroll, directions, motion, QA
├── scripts/        # fetch-photos.mjs
└── assets/grain.svg
```

Research baseline inside the skill: 2026-10-04.
