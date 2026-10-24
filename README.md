# The Greensome

An independent, plain-English guide to greener protein, built with Next.js 16 App Router.
The site is JavaScript-only and uses a custom editorial stylesheet with Fraunces and Manrope.

## Run locally

```bash
npm install
npm run dev
npm run build
npm start
```

## Launch routes

| Section | Route |
|---|---|
| Home | `/` |
| Protein-source hub | `/protein-sources` |
| Individual source guides | `/protein-sources/[slug]` |
| Footprint comparison | `/compare` |
| UK regulatory watch | `/uk-watch` |
| Article index | `/articles` |
| Article | `/articles/[slug]` |
| About | `/about` |
| Editorial standards | `/editorial-standards` |
| Contact | `/contact` |

Articles and source guides are maintained in `data/guide.js`; route templates generate static
pages from that content. The comparison page deliberately presents system drivers and evidence
limitations rather than combining incompatible estimates into a numerical league table. Add
numeric comparisons only when the underlying sources and assumptions can be verified on a common
100 g-protein basis.

## Editorial photography

Photos are downloaded from Unsplash and Pexels and served locally from `public/images/guide/`.
Source-guide and article image paths and alt text are maintained in `data/guide.js`; shared section
banners use the same local assets. The homepage uses a four-image carousel of food and farming:
market vegetables ([Unsplash](https://unsplash.com/photos/fresh-vegetables-on-market-stall-Zaiuy5dKeCk)),
grazing cattle ([Unsplash](https://unsplash.com/photos/a-cow-grazes-peacefully-in-a-green-field-ryAJUU42w1I)),
mixed pulses ([Unsplash](https://unsplash.com/photos/assorted-colored-bean-lot-t4X660oKiYs)) and
vegetable rows ([Unsplash](https://unsplash.com/photos/kale-and-cabbage-rows-in-garden-tFDZCJtwBFo)).
Article banners use separate images: the articles index shows a field at sunset, while
“What greener protein actually means” shows a wide view of a fresh-produce market stall
([Pexels](https://www.pexels.com/photo/colorful-fresh-produce-display-at-market-stall-37838871/)).
The About page shows a tractor working a field in Yorkshire
([Pexels](https://www.pexels.com/photo/aerial-view-of-farming-tractor-in-yorkshire-fields-32459854/)).
The Protein sources page uses a close-up of assorted beans
([Unsplash image](https://images.unsplash.com/photo-1564894809611-1742fc40ed80)).
Pexels images are available under the [Pexels licence](https://www.pexels.com/license/); other
Unsplash images follow the [Unsplash licence](https://unsplash.com/license). The carousel pauses
while hovered or focused and respects reduced-motion preferences.

## Legacy URL redirects

The old `/Company`, `/Products`, `/Gallery`, `/Blog` and `/Contact-Us` sections permanently redirect
to their new destinations. `/Login` and `/Portals/*` are not recreated. Keep mail DNS records
unchanged during any hosting cutover; the contact address is `info@thegreensome.com`.

## Before publishing

- Articles in `data/guide.js` are editorial drafts and need human fact-checking and Salar's sign-off.
- Article 10 provides an energy-analysis framework; it is not a personal calculation or a statement
  attributed to Salar.
- Confirm all citations and current UK regulatory status immediately before deployment.
- Review the registered office disclosure and brand destination URLs before launch.
- Contact is by email; no contact form or cookie banner is used. Vercel Analytics is enabled.
