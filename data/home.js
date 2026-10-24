// Homepage content. Headings and labels match the original site.
// Body copy marked `condensed` is a short rewrite of the original paragraph —
// swap in the approved original wording if you want it word-for-word (see README).
import { images } from './images';

export const hero = {
  heading: 'Implementing new technologies for agriculture growth',
  slides: images.home.banners.map((image, i) => ({
    image,
    alt: [
      'Green farmland stretching towards the horizon',
      'Fresh crops growing in cultivated rows',
      'Farm landscape under open sky',
      'Agricultural field ready for harvest',
    ][i],
  })),
  // The original hero has no buttons; add { label, href } entries here if wanted.
  actions: [],
};

export const about = {
  heading: 'About us',
  condensed: true,
  paragraphs: [
    'Agriculture is an integrated system of techniques for growing and harvesting crops and livestock — a practical, technical discipline that keeps ecological balance, protects human resources and, above all, sustains a viable food supply.',
    'We are passionate about food. Whether the end product is a vitamin, a probiotic or a protein powder, it should start with real food. We source the world’s best organic ingredients, build lasting relationships with growers and customers, and share what we know about the benefits of every product we carry — beginning with the highest-quality matcha, imported for customers across the UK and EU.',
  ],
};

export const features = [
  {
    title: 'The Botany of Gluten',
    text: 'Wheat, barley, rye, oats, rice, sorghum, corn and even sugar cane are all related. Cutting gluten out completely takes real care; reducing it is often the more achievable goal.',
    image: images.home.features[0],
    href: '/Products',
  },
  {
    title: 'Edible Fruits',
    text: 'Long tied to love, happiness and celebration, edible flowers and fruits bring colour, flavour and texture to sweet and savoury dishes and are a staple of fine dining.',
    image: images.home.features[1],
    href: '/Products',
  },
  {
    title: 'Dietary Supplements',
    text: 'Vitamins, minerals, herbs and botanicals, amino acids and their concentrates, extracts and combinations — all used to add to the nutrition of an everyday diet.',
    image: images.home.features[2],
    href: '/Products',
  },
  {
    title: 'Sports Nutrition',
    text: 'The link between nutrition and performance keeps growing. Research increasingly shows the role supplements play in recovery when they support a well-balanced diet.',
    image: images.home.features[3],
    href: '/Products',
  },
];

export const cultivate = {
  heading: 'We cultivate new crops to make farmers increase profits!',
  condensed: true,
  text: 'Modern technology and focused marketing let growers reach both domestic and international markets. Output depends on capital and strategy, but just as much on the technical capability applied during production and processing.',
  image: images.home.cultivate,
};

export const productsIntro = {
  heading: 'Products',
  condensed: true,
  principles: [
    {
      title: 'The Science of Whole Food',
      text: 'Your body is built to get its nutrition from real, healthy food. So every product starts with food: what valuable nutrients are missing from modern diets, and which whole foods can best restore them?',
    },
    {
      title: 'Clean Organic is healthy',
      text: 'We care about what goes into our products — true, whole-food ingredients — and just as much about what stays out. If it isn’t in your food, it shouldn’t be in your supplements, and independent third-party certifications back that up.',
    },
    {
      title: 'Traceability',
      text: 'We know where every ingredient comes from: where it is grown, how it is farmed and how farm workers are treated. A planned second phase will add a decentralised ledger so you can trace a product all the way back to its farm.',
    },
  ],
};

export const tiles = [
  { title: 'Harvesting rice', text: 'Rice is ready to harvest once the grain turns yellow and begins to drop.' },
  { title: 'Maize', text: 'Maize meal stands in for wheat flour in cornbread and other baked goods.' },
  { title: 'Your vegetables up', text: 'Our foods span cereals, seeds, spices, fruits, dried fruits and vegetables.' },
  { title: 'Your fruit up', text: 'Nutrition, storage and handling information for a wide variety of fruit and vegetables.' },
  { title: 'We are transforming agriculture', text: 'Leafy greens and herbs grown without sunlight, soil or pesticides.' },
  { title: 'Agricultural equipment', text: 'The machinery that helps every stage of work on the farm.' },
].map((tile, i) => ({ ...tile, image: images.home.tiles[i] }));

// NOTE: this carousel is placeholder copy on the original site (Lorem ipsum).
// It is reproduced as-is so no section is lost; replace before launch.
export const news = {
  heading: 'New technologies',
  subheading: 'Eget tellus non erat',
  placeholder: true,
  items: images.home.news.map((image) => ({
    title: 'Nulla Facilisi',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat sem, blandit quis nisl quis, faucibus condimentum lectus.',
    image,
  })),
};

export const contactIntro = {
  heading: 'Contact us',
  text: 'Here are answers to some of the more common questions we get asked.',
};
