import { articles, sources } from '@/data/guide';

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thegreensome.com';
  const pages = [
    '/',
    '/protein-sources',
    '/compare',
    '/uk-watch',
    '/articles',
    '/about',
    '/editorial-standards',
    '/contact',
  ];

  return [
    ...pages.map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : 0.7,
    })),
    ...sources.map((source) => ({
      url: `${siteUrl}/protein-sources/${source.slug}`,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];
}
