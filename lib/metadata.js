import { imageSrc } from '@/data/images';
import { site } from '@/data/site';

// Page-level metadata with canonical URL and Open Graph image.
export function pageMetadata({ title, description, path, image, type = 'website' }) {
  const ogImage = image ? imageSrc(image) : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title ? `${title} | ${site.name}` : site.name,
      description,
      url: path,
      siteName: site.name,
      type,
      locale: 'en_GB',
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: { card: ogImage ? 'summary_large_image' : 'summary' },
  };
}
