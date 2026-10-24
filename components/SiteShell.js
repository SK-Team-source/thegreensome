import Link from 'next/link';
import Image from 'next/image';
import SiteNavigation from '@/components/SiteNavigation';

export default function SiteShell({ children }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="wordmark" href="/" aria-label="The Greensome home">
            <Image
              src="/images/branding/greensome.png"
              alt="The Greensome"
              width={250}
              height={54}
              priority
            />
          </Link>
          <SiteNavigation />
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="site-footer__top">
          <div>
            <Link className="wordmark wordmark--footer" href="/" aria-label="The Greensome home">
              <Image
                src="/images/branding/greensome.png"
                alt=""
                width={250}
                height={54}
              />
            </Link>
            <p className="site-footer__tagline">Greener protein, explained.</p>
          </div>
          <nav className="site-footer__links" aria-label="Footer navigation">
            <Link href="/about">About</Link>
            <Link href="/editorial-standards">Editorial standards</Link>
            <Link href="/contact">Contact</Link>
            <a href="mailto:info@thegreensome.com">Email</a>
          </nav>
        </div>
        <div className="site-footer__legal">
          <p>The Greensome Ltd · Registered in England and Wales · Company no. 11743419</p>
          <p>Registered office: 41 Brushfield Way, Knaphill, Woking, Surrey, GU21 2TQ</p>
        </div>
      </footer>
    </>
  );
}
