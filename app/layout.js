import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import SiteShell from '@/components/SiteShell';

const description =
  'A plain-English guide to greener protein, comparing land, water, energy and climate impacts with a clear UK focus.';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://thegreensome.com'),
  title: { default: 'The Greensome — Greener protein, explained', template: '%s | The Greensome' },
  description,
  openGraph: {
    title: 'The Greensome — Greener protein, explained',
    description,
    siteName: 'The Greensome',
    locale: 'en_GB',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#2d8300',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
