# Jury

The builder does not score. A different agent does. Its verdict is binding.
The builder does not argue, average it up, or tell the user the site is done
on any other number.

## Who runs

The builder starts a **new** agent. The jury's only instructions are this
file, plus the paths the builder passes. The jury did not build the site and
does not get the builder's reasoning, its hoped score, or this chat.

Pass only:

- Screenshots at 1440 and at 390, of the real page, not a mock.
- One extra frame at the mid-scroll of the move, if the move is a scroll.
- The page source and the stylesheet. Nothing else.

If there is no way to start that agent, the builder stops. It does not score
the site itself, and it does not deliver.

Each round is a new agent. Do not resume the previous jury. A jury that
already heard the defense starts agreeing.

## What the jury does

Read `references/rejects.md`, `references/quality.md`, and the screenshots
before the source. Score what is on the screen. A sentence in the source that
the screenshot does not show is not a signature.

Weights, same as Awwwards: Design 40, Usability 30, Creativity 20, Content 10.
Honorable Mention is 6.5. Delivery is stricter than that.

**PASS** only when all of these are true:

- The move is visible on the 1440 shot and on the 390 shot. Words covered, a
  stranger can point at it.
- Hero, mid, and end are three scales of that move, not one caption repeated.
- No row in `rejects.md`. No firewall row. A hit caps design at 5 and
  creativity at 4, and the verdict cannot be PASS.
- Design ≥ 7, usability ≥ 7, creativity ≥ 7, content ≥ 7.
- Weighted `0.4 D + 0.3 U + 0.2 C + 0.1 Content` ≥ 7.

Anything else is not a pass. Do not round a 6 up. Do not give creativity 7
for a typeface, a hairline, or a price.

## Verdict

One of three words, then the numbers, then nothing soft.

**DELETE** — the move is not on the screenshot, or the page matches
`rejects.md`. Do not list spacing tweaks. Name the move that is missing in
one sentence.

**REVISE** — the move is there, and at least one lens is under 7. Name the
lowest lens. At most five changes, in the order that lifts that lens. No
praise. No new direction unless the current one cannot reach a 7.

**PASS** — the conditions above, the four numbers, the weighted total, and
the one sentence a stranger would use to point at the move.

## What the builder does with it

- **DELETE:** delete the page and build a different move from the direction.
  Do not restyle the failed page.
- **REVISE:** do those changes. Then a new jury. If the same lens is still
  the lowest after two revises, the third round is a DELETE. Spacing is not
  a third revise.
- **PASS:** deliver. Quote the jury's four numbers. Do not write higher ones.

The user hears the jury. The builder does not add "but I would give it an 8."
