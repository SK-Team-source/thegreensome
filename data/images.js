// Every original asset used by the site, keyed by role.
// `remote` is the path on https://thegreensome.com; `local` is where
// `npm run images:download` saves it. Set NEXT_PUBLIC_IMAGE_SOURCE=local
// once the files are in public/images to stop hot-linking the old site.

export const ORIGIN = 'https://thegreensome.com';

const useLocal = process.env.NEXT_PUBLIC_IMAGE_SOURCE === 'local';

const asset = (remote, local) => ({ remote, local });

export function imageSrc(entry) {
  if (!entry) return '';
  return useLocal ? entry.local : `${ORIGIN}${entry.remote}`;
}

// Blog images are served by the DNN NewsArticles image handler on the old site.
const blogRemote = (fileName, width = 1400, height = 900) =>
  `/DesktopModules/DnnForge%20-%20NewsArticles/ImageHandler.ashx?Width=${width}&Height=${height}&HomeDirectory=%2fPortals%2f0%2f&FileName=${encodeURIComponent(
    fileName
  )}&PortalID=0&q=1`;

export const images = {
  branding: {
    logo: asset('/Portals/0/greensome.png', '/images/branding/greensome.png'),
  },
  home: {
    banners: [
      asset('/portals/0/images/banner_img.jpg', '/images/home/banner_img.jpg'),
      asset('/portals/0/images/home_banner1.jpg', '/images/home/home_banner1.jpg'),
      asset('/portals/0/images/banner_new4.jpg', '/images/home/banner_new4.jpg'),
      asset('/portals/0/images/banner_new1.jpg', '/images/home/banner_new1.jpg'),
    ],
    features: [
      asset('/portals/0/images/sec2_1.png', '/images/home/sec2_1.png'),
      asset('/portals/0/images/sec2_2.png', '/images/home/sec2_2.png'),
      asset('/portals/0/images/sec2_3.png', '/images/home/sec2_3.png'),
      asset('/portals/0/images/sec2_4.png', '/images/home/sec2_4.png'),
    ],
    cultivate: asset('/portals/0/images/sec2_right.png', '/images/home/sec2_right.png'),
    tiles: [1, 2, 3, 4, 5, 6].map((n) =>
      asset(`/portals/0/images/sec3_${n}.jpg`, `/images/home/sec3_${n}.jpg`)
    ),
    news: [1, 5, 3, 4].map((n) =>
      asset(`/portals/0/images/blog${n}.jpg`, `/images/home/blog${n}.jpg`)
    ),
  },
  pages: {
    company: asset('/portals/0/images/banner_new5.jpg', '/images/pages/banner_new5.jpg'),
    products: asset('/portals/0/images/product_banner.jpg', '/images/pages/product_banner.jpg'),
    gallery: asset('/portals/0/images/gallery_banner.jpg', '/images/pages/gallery_banner.jpg'),
    contact: asset('/portals/0/images/contact_banner.jpg', '/images/pages/contact_banner.jpg'),
    wholesale: asset('/portals/0/images/banner_new2.jpg', '/images/pages/banner_new2.jpg'),
    blog: asset('/portals/0/Images/banner_new3.jpg', '/images/pages/banner_new3.jpg'),
  },
  company: [1, 2, 3, 4].map((n) =>
    asset(`/portals/0/images/company${n}.png`, `/images/pages/company${n}.png`)
  ),
  gallery: [17, 18, 40, 20, 36, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 19, 21].map((n) =>
    asset(
      `/Portals/0/SalHP_PropertyGallery/Images/galimg_548_${n}.jpg`,
      `/images/gallery/galimg_548_${n}.jpg`
    )
  ),
  blog: {
    11: asset(blogRemote('drink-glass-liquid-65247-sixwaystousecbd_700x.jpg'), '/images/blog/post-11.jpg'),
    10: asset(
      blogRemote('food-edenaromata-flower-blog_78cb2ab1-95bf-43f0-8970-5337596924c7_1500x.jpg'),
      '/images/blog/post-10.jpg'
    ),
    9: asset(blogRemote('Banner-s_769ba1e3-6da4-41b8-a7ed-3ca4ff7e177a_1400x.jpg'), '/images/blog/post-9.jpg'),
    2: asset(blogRemote('2_ImageHandler.jpg'), '/images/blog/post-2.jpg'),
    3: asset(blogRemote('ImageHandler.ashx.jpg'), '/images/blog/post-3.jpg'),
    4: asset(blogRemote('3_ImageHandler.jpg'), '/images/blog/post-4.jpg'),
    5: asset(blogRemote('1_ImageHandler.ashx.jpg'), '/images/blog/post-5.jpg'),
    6: asset(blogRemote('4_ImageHandler.jpg'), '/images/blog/post-6.jpg'),
    7: asset(blogRemote('5_ImageHandler.jpg'), '/images/blog/post-7.jpg'),
    8: asset(blogRemote('6_ImageHandler.jpg'), '/images/blog/post-8.jpg'),
  },
};

// Flat list used by scripts/download-images.js
export function allAssets() {
  const out = [];
  const walk = (node) => {
    if (!node) return;
    if (node.remote && node.local) return out.push(node);
    Object.values(node).forEach(walk);
  };
  walk(images);
  return out;
}
