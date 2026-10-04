# SEO and structure

Open this before you score, not before you pick the move. Markup does not
raise creativity. Missing it drops usability and content for free.

Do not invent a business fact to fill a schema field. If the brief has no
phone, the JSON-LD has no `telephone`.

## Document

- One `h1`. It is the concrete sentence, not the brand name repeated as a
  second title. Section titles are `h2`. Do not skip to `h4` because the
  display size jumped.
- Landmarks: `header`, `nav`, `main`, `footer`. A chapter is a `section` with
  an accessible name (heading, or `aria-label` when the heading would be
  noise). A case study that stands alone is an `article`.
- Skip link is the first focusable control. Target is `main`. See
  `interaction.md`.
- The nav anchors exist. A link to `#offer` that has no `id` is a broken
  control, not a style choice.
- The page `lang` matches the copy.

## Meta

One human sentence. Place, offer, constraint. Not a stack of keywords.

```html
<meta name="description" content="One sentence a person would say: what it is, where, and the constraint. Not a keyword list." />
```

In this workspace, do **not** author `og:*` or `twitter:card` in the root
route. The injector owns them (`references/grok-env.md`). The description
above is a normal meta description; it is not an Open Graph tag.

## Structured data

One block, in the page that states the facts, not in a layout file that
runs on every route. Pick the type the page actually is.

| Page | Type |
|---|---|
| A business with a city | `LocalBusiness` |
| A product with a price you may publish | `Product` plus `Offer` |
| A studio or a case | `CreativeWork` or `Article` |
| A person the user named | `Person` |

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The name already printed on the page",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "The city already printed on the page",
    "addressCountry": "BE"
  }
}
</script>
```

Add `telephone`, `email`, `vatID`, or `price` only when that string is already
visible on the page. A weekend price that is "on request" is not an `Offer`
with a made-up number.

`Product` when you do have a price:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The product name already printed on the page",
  "description": "The one fact already printed on the page.",
  "offers": {
    "@type": "Offer",
    "price": "40",
    "priceCurrency": "EUR"
  }
}
</script>
```

Do not mark a demo form as `ReserveAction` if the submit does not reach the
business. Do not add `aggregateRating` without real reviews.

## Images

Alt says what is in the frame. "Side view of the chair, oak seat, black legs." Decorative duplicates of the hero get `alt=""`.
The hero does not.

## What not to add

- A sitemap of doorway pages per town. One page lists the area.
- Hidden text for keywords.
- A second `h1` in the footer wordmark. The footer name is not a heading
  unless it is the only title on a short page, which it is not.
