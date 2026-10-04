# award-sites

Agent skill for building public websites at a $10k+ studio bar: one
art-directed idea, directed photography, motion that means something, and
usability that survives a phone.

It is not a template pack. The agent reads `SKILL.md`, then only the reference
files the chosen direction needs.

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
├── references/     # directions, type, motion, webgl, imagery, QA
├── scripts/        # fetch-photos.mjs
└── assets/grain.svg
```

Research baseline inside the skill: 2026-10-04.
