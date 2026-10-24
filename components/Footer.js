import Link from 'next/link';
import { navigation } from '@/data/navigation';
import { site } from '@/data/site';

const icons = {
  Facebook: 'M13.5 21v-7.5h2.5l.4-3H13.5V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z',
  Twitter: 'M17.8 4h3l-6.6 7.5L22 20h-6l-4.7-6.1L5.9 20H2.9l7-8L2.4 4h6.2l4.2 5.6L17.8 4Zm-1 14.3h1.7L7.7 5.6H5.9l10.9 12.7Z',
  LinkedIn: 'M6.9 8.8H3.8V20h3.1V8.8ZM5.4 4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM20.2 13.6c0-3-1.6-5-4.3-5-1.5 0-2.5.8-3 1.6V8.8H10V20h3v-6c0-1.5.6-2.6 2-2.6 1.3 0 1.9 1 1.9 2.6v6h3.2v-6.4Z',
};

export default function Footer() {
  const year = new Date().getFullYear();
  const social = site.social.filter((s) => s.href);

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__name">{site.name}</p>
          <p className="site-footer__tagline">Organic ingredients, ethically sourced, traceable to the farm.</p>
        </div>

        <nav aria-label="Footer" className="site-footer__nav">
          <ul>
            {navigation.flatMap((item) => [item, ...(item.children || [])]).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="site-footer__contact">
          {site.address.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <a href={site.phone.href}>Tel: {site.phone.display}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </address>
      </div>

      <div className="container site-footer__base">
        <p>
          Copyright {year} {site.name}. All rights reserved.
          <span className="site-footer__sep" aria-hidden="true">|</span>
          <a href={site.credit.href} rel="noopener" target="_blank">
            {site.credit.label}
          </a>
        </p>
        {social.length > 0 && (
          <ul className="social" aria-label="Social media">
            {social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d={icons[s.label]} fill="currentColor" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
