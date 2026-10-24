// Blog articles migrated from the DNN NewsArticles module.
// URLs, titles, authors, dates, categories and images match the original.
// Article bodies are condensed summaries; `bodyStatus` tells you which still need
// the original text pasted in (see README → "Content to migrate").
import { images } from './images';

export const categories = [
  { id: 1, name: 'Vegetables', slug: 'Vegetables' },
  { id: 2, name: 'Fruits', slug: 'Fruits' },
  { id: 3, name: 'Agriculture', slug: 'Agriculture' },
];

export const posts = [
  {
    id: 11,
    slug: 'New-Blog-CleverBotanics',
    title: 'New Blog @CleverBotanics',
    author: 'Salar',
    date: '2019-04-12T12:03:00',
    categoryId: null,
    image: images.blog[11],
    bodyStatus: 'condensed',
    body: [
      { type: 'h2', text: 'Six Best Ways to Use CBD' },
      {
        type: 'p',
        text: 'Cannabis plants contain more than a hundred chemical compounds, and only a fraction of them — the cannabinoids — are well understood. They act on receptors in the body’s endocannabinoid system, mainly in the brain and immune system. THC is the most studied and the one that intoxicates; CBD is valued for non-impairing effects such as easing inflammation and stress.',
      },
      {
        type: 'p',
        text: 'No single way of taking CBD suits everyone. When choosing between vapes, tinctures, edibles or flowers, weigh how quickly it is absorbed, the peak concentration it reaches, and what it costs for the effect you want.',
      },
    ],
  },
  {
    id: 10,
    slug: 'Cannabis-Weekly-CBD-Hemp-Seed-Oil-Hemp-Flowers-And-More',
    title: 'Cannabis Weekly, CBD, Hemp Seed Oil, Hemp Flowers And More..',
    author: 'Salar',
    date: '2019-03-30T12:57:00',
    categoryId: null,
    image: images.blog[10],
    bodyStatus: 'missing',
    body: [
      {
        type: 'p',
        text: 'A weekly round-up covering CBD, hemp seed oil, hemp flowers and related news.',
      },
    ],
  },
  {
    id: 9,
    slug: 'Fresh-New-Online-CBD-Shop-by-CleverBotanics',
    title: 'Fresh New Online CBD Shop by CleverBotanics',
    author: 'Salar',
    date: '2019-03-30T12:54:00',
    categoryId: null,
    image: images.blog[9],
    bodyStatus: 'condensed',
    body: [
      {
        type: 'p',
        text: 'Clever Botanics, a UK company, has opened an online shop through a sister company for CBD and wellbeing products, including US hemp-derived CBD oils, creams and edibles.',
      },
      {
        type: 'p',
        text: 'The new site works well on mobile, includes a blog, and puts transparency first: full lab reports are available for the products it sells. The launch was promoted at the NEC CBD and Hemp Exhibition, and visitors can sign up to the newsletter for updates.',
      },
    ],
  },
  {
    id: 2,
    slug: 'Banana-boom-and-bust-as-climate-changes',
    title: 'Banana boom and bust as climate changes',
    author: '',
    date: '2016-05-14T11:06:00',
    categoryId: 2,
    image: images.blog[2],
    bodyStatus: 'condensed',
    body: [
      {
        type: 'p',
        text: 'Climate change is likely to cut banana and plantain yields in the hot lowland tropics, while cooler parts of eastern and southern Africa may see production rise.',
      },
      { type: 'h2', text: 'Warmer weather raises banana disease risk' },
      {
        type: 'p',
        text: 'Disease pressure shifts too: risks such as black sigatoka increase in some regions and fall in others. The findings come from CCAFS research into climate-proofing key crops, with an interactive platform of data, photos and video for those who want to explore further.',
      },
    ],
  },
  {
    id: 3,
    slug: 'Agricultural-intensification-alone-is-not-enough-says-UK-Science-Chief',
    title: '"Agricultural intensification alone is not enough" says UK Science Chief',
    author: 'Salar',
    date: '2016-05-14T10:58:00',
    categoryId: 3,
    image: images.blog[3],
    bodyStatus: 'condensed',
    body: [
      {
        type: 'p',
        text: 'Sir John Beddington, the UK government’s former chief scientific adviser, argues that climate-smart farming can deliver wins on adaptation, mitigation and food security at once — all of which will be needed to feed nine billion people by 2050.',
      },
      {
        type: 'p',
        text: 'Producing more is not enough on its own. Farming has to be sustainable and sit within wider policy that also tackles degraded and deforested land, fisheries and biodiversity. The commission he chairs is gathering evidence to identify the policy changes needed now.',
      },
    ],
  },
  {
    id: 4,
    slug: 'Overhauling-crop-climate-models-for-food-security',
    title: 'Overhauling crop-climate models for food security',
    author: 'Salar',
    date: '2016-05-14T10:43:00',
    categoryId: 3,
    image: images.blog[4],
    bodyStatus: 'missing',
    body: [
      {
        type: 'p',
        text: 'How crop and climate models need to change to give a clearer picture of future food security.',
      },
    ],
  },
  {
    id: 5,
    slug: 'Defending-a-vegetable-farm-against-drought',
    title: 'Defending a vegetable farm against drought',
    author: 'Salar',
    date: '2016-05-14T10:27:00',
    categoryId: 3,
    image: images.blog[5],
    bodyStatus: 'missing',
    body: [
      {
        type: 'p',
        text: 'How vegetable growers can protect their farms and harvests through periods of drought.',
      },
    ],
  },
  {
    id: 6,
    slug: 'Act-now-for-farmers-futures',
    title: 'Act now for farmers’ futures',
    author: 'Salar',
    date: '2016-05-14T07:39:00',
    categoryId: 3,
    image: images.blog[6],
    bodyStatus: 'condensed',
    source: 'Written by Bruce Campbell, Director of CCAFS. First published on The Broker’s blog.',
    body: [
      { type: 'h2', text: 'A new agriculture for food security' },
      {
        type: 'p',
        text: 'Climate change piles further pressure on small-scale farmers, herders and fishers. Policymakers have to balance food security, emissions reduction and sustainability, and they need research that makes the trade-offs between them clear.',
      },
      {
        type: 'p',
        text: 'The piece calls for support for low-carbon farming that also protects livelihoods, wider access to proven risk tools such as index-based insurance and community grain stores, and agricultural science that works alongside climate science and local knowledge.',
      },
    ],
  },
  {
    id: 7,
    slug: 'In-India-a-surge-in-interest-to-make-agriculture-climate-smart',
    title: 'In India, a surge in interest to make agriculture climate-smart',
    author: 'Salar',
    date: '2016-05-11T10:57:00',
    categoryId: 3,
    image: images.blog[7],
    bodyStatus: 'condensed',
    body: [
      {
        type: 'p',
        text: 'Agribusiness leaders, including members of the WBCSD, met farmers in Karnal, Haryana, to see how climate-smart agriculture can strengthen food production while cutting emissions.',
      },
      {
        type: 'p',
        text: 'In Climate-Smart Villages supported by CCAFS and CIMMYT, farmers use laser land levelling and climate information services to grow more with less water and fertiliser — which also steadies supply chains for large food companies. State governments are extending the approach to hundreds more villages, and the business leaders plan a 2050 action plan ahead of the COP21 talks.',
      },
    ],
  },
  {
    id: 8,
    slug: 'Scaling-up-the-farms-of-the-future-approach',
    title: 'Scaling up the "farms of the future" approach',
    author: 'Salar',
    date: '2016-05-11T10:11:00',
    categoryId: 1,
    image: images.blog[8],
    bodyStatus: 'condensed',
    body: [
      {
        type: 'p',
        text: 'Regional research bodies and national agricultural institutes in West Africa joined forces on the ENRACCA-WA project to help farming communities in semi-arid areas adapt to climate change.',
      },
      {
        type: 'p',
        text: 'The “farms of the future” method pairs reference farms with climate-analogue sites so farmers can visit places whose climate today resembles their own tomorrow. Around thirty officials were trained in 2013 before the approach expanded to five countries; the partners credit pooled funding and staff, and the Sahel Institute’s involvement, for its reach. A documentary records the results.',
      },
    ],
  },
];

export const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

export const postPath = (post) => `/Blog/ID/${post.id}/${post.slug}`;

export const categoryPath = (cat) => `/Blog/articleType/CategoryView/categoryId/${cat.id}/${cat.slug}`;

export const archivePath = (month, year) => `/Blog/articleType/ArchiveView/month/${month}/year/${year}`;

export const getCategory = (id) => categories.find((c) => c.id === id) || null;

export function postsInCategory(id) {
  return sortedPosts.filter((p) => p.categoryId === id);
}

export function archiveMonths() {
  const map = new Map();
  for (const post of sortedPosts) {
    const d = new Date(post.date);
    const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
    if (!map.has(key)) map.set(key, { year: d.getFullYear(), month: d.getMonth() + 1, count: 0 });
    map.get(key).count += 1;
  }
  return [...map.values()];
}

export function postsInMonth(month, year) {
  return sortedPosts.filter((p) => {
    const d = new Date(p.date);
    return d.getFullYear() === year && d.getMonth() + 1 === month;
  });
}

export function excerpt(post, length = 180) {
  const first = post.body.find((b) => b.type === 'p');
  if (!first) return '';
  return first.text.length > length ? `${first.text.slice(0, length).trimEnd()}…` : first.text;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const monthName = (m) => MONTHS[m - 1];

export function formatDate(iso) {
  const d = new Date(iso);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
