# Interaction and content

The interface is part of the score, not a chrome kit you add at the end.

## Nav

- A mark (wordmark or a 16px SVG), two to five links, one action.
- It can be fixed. It should not be a frosted bar that covers a quarter of a
  phone. At 390px the links move into a full-height panel. The button that
  opens it is a real `<button>` with an accessible name ("Menu"), and Escape
  closes it. Focus moves into the panel and back on close.
- On scroll, the bar may gain the ground color. It does not shrink, bounce,
  or change logo mid-page.
- The current section is marked in the nav (aria-current or a visible rule)
  if you spy on sections. Spy with `IntersectionObserver`, not a scroll
  listener in React state.
- Skip link: first focusable element, "Skip to content", visible on focus.

## The one action

A site has one primary action (reserve, inquire, view the work). It appears
in the nav and again after the paced chapter. Repeated ghost buttons with
different verbs ("Learn", "Explore", "Discover") are indecision. Pick the verb
the business actually wants.

Buttons take the accent as a **fill**, with ink that still contrasts. Hover
changes the fill toward the ground or the ground toward the fill. No lift.

## Forms

Every inquire block has a visible label, a name, a way to reply (email), and
a submit that does something real.

- Client-side: required fields, an email shape check, errors under the field
  in words, `aria-invalid`.
- Success: replace the form with a specific sentence ("We have it. A reply
  goes to …") not an alert() and not "Submitted!!!".
- Without a backend, `mailto:` is honest only if you say it opens their mail
  app. A better default in a demo: store nothing, show success, and do not
  pretend a message was sent to a studio. If the workspace has no database
  and they did not ask for accounts, do not add auth to make a contact form
  "real".
- Inputs are at least 44px tall, 16px type (so iOS does not zoom), and use the
  page's type and line color. Not a second design system.

## Footer / colophon

Award sites finish. A fat footer with four columns of dead links does not.

Include: the name, the city, the year, the action again, photo credits when
required, and a quiet line about the display face if it is part of the
signature ("Set in Instrument Serif"). Legal links only if the user asked.
The footer is a designed block, often the ground flipped, with the same
margins as the hero.

## 404

If there is more than one route, the 404 uses the same system: the sentence,
a way home, no joke that breaks the brand, no stock illustration.

## Copy

Write after the brief's "what is true" lines. Specifics:

- A name that is not "Lumina" or "Nexus" unless the user gave it.
- A city, a material, a number, a constraint ("four seats", "fired at 1280°").
- Headlines that could only sit on this site. If the headline fits a bank and
  a bakery, rewrite it.
- Ban list: welcome to, unlock, elevate, seamless, next-gen, cutting-edge,
  passionate, your partner, solutions, crafted to perfection, where vision
  meets, take it to the next level, game-changing.

You may write in the user's language. Dutch copy uses the same ban list in
spirit ("welkom bij", "naar een hoger niveau", "passie voor", "innovatieve
oplossingen").

Do not invent awards, press logos, client names, star ratings, or testimonials
from real people. A made-up brand can have a point of view; it cannot have a
fake quote from a real company. If social proof is needed, use a process fact
or omit the section.

## Loader, cursor, sound

See motion.md. Native cursor. No sound. Video only if the subject moves and
the file is short, muted, subtitled or purely visual, and paused off-screen
and under reduced motion (show the poster frame).

## Empty and error

A case route with no projects shows a composed empty — the system, one
sentence, the action — not a blank layout. Image failure: the aspect box
remains, background is the ground, alt or a caption still tells the truth.
