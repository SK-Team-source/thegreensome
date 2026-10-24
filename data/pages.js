// Inner-page content. Headings, product names and labels match the original site.
// Paragraphs flagged `condensed` are short rewrites of the original copy (see README).
import { images } from './images';

export const company = {
  title: 'Company',
  banner: images.pages.company,
  description:
    'TheGreenSome connects ethical, mostly organic producers with buyers across the UK, Europe and the world — tea, bio-extracts, spices and essential oils.',
  intro: {
    condensed: true,
    text: 'We bring suppliers and buyers together and help fund agricultural projects around the world across a range of commodities.',
  },
  commodities: [
    { title: 'Organic Tea', image: images.company[0] },
    { title: 'Bio-Extracts', image: images.company[1] },
    { title: 'Organic Spices', image: images.company[2] },
    { title: 'Essential Oils', image: images.company[3] },
  ],
  body: {
    condensed: true,
    paragraphs: [
      'Our first focus is eco-friendly food and spice products for the UK, Europe and the wider world. We are starting with a deliberately limited range of high-quality products, ethically sourced and, wherever possible, close to 100% organic.',
      'Our founder has spent the past decade as a wholesaler and trusted supplier of all-natural products. We work openly and alongside international regulators, use organic and degradable materials, and rely on advanced extraction and production methods.',
      'We have direct access to suppliers across Western Europe and North America, as well as vetted producers in India and Africa who pass strict KYC checks. We match end users and well-funded buyers with those suppliers on terms that work for both sides, and we aim to build long-term relationships on trust and collaboration.',
    ],
  },
};

export const products = {
  title: 'Products',
  banner: images.pages.products,
  heading: 'Some of the focused products',
  description:
    'Stevia, herbal tea, sport nutrition, gluten-free, supplements, superfoods, organic spices, natural flavouring and more — the product categories TheGreenSome sources and supplies.',
  items: [
    'Stevia',
    'Herbal Tea',
    'Sport Nutrition',
    'Gluten Free',
    'Dietary Supplements',
    'Fruit Extracts',
    'Superfoods',
    'WellBeing Ingredients',
    'Organic Spices',
    'Cosmetic Ingredients',
    'Pet Products',
    'Medical Foods',
    'Herbicides',
    'Zero Sugar',
    'Natural Flavouring',
    'Vitamins & Omega-3s',
  ],
};

export const gallery = {
  title: 'Gallery',
  banner: images.pages.gallery,
  description: 'Photographs from TheGreenSome — farms, crops, ingredients and produce.',
  images: images.gallery.map((image, i) => ({
    image,
    alt: `TheGreenSome gallery photograph ${i + 1} of ${images.gallery.length}`,
  })),
};

export const contact = {
  title: 'Contact Us',
  banner: images.pages.contact,
  description:
    'Contact TheGreenSome in Knaphill, Woking, Surrey. Call +44 1483 870170, email info@thegreensome.com or send us a message.',
};

export const wholesale = {
  title: 'Wholesale Enquiry',
  heading: 'Wholesale and Supplier Enquiry',
  banner: images.pages.wholesale,
  description:
    'Wholesale and supplier enquiries for TheGreenSome — tell us about your business and what you are looking to buy or supply.',
};
