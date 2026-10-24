/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/Default.aspx', destination: '/', statusCode: 301 },
      { source: '/Company', destination: '/about', statusCode: 301 },
      { source: '/Products', destination: '/protein-sources', statusCode: 301 },
      { source: '/Gallery', destination: '/', statusCode: 301 },
      { source: '/Blog', destination: '/articles', statusCode: 301 },
      { source: '/Blog/:path*', destination: '/articles', statusCode: 301 },
      { source: '/Contact-Us', destination: '/contact', statusCode: 301 },
      { source: '/Contact-Us/:path*', destination: '/contact', statusCode: 301 },
      {
        source: '/DesktopModules/DnnForge%20-%20NewsArticles/Rss.aspx',
        destination: '/articles',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
