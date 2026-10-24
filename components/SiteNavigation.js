'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { sources } from '@/data/guide';

const mainLinks = [
  { href: '/compare', label: 'Compare' },
  { href: '/uk-watch', label: 'UK watch' },
  { href: '/articles', label: 'Articles' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function isCurrentPath(pathname, href) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteNavigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const sourcesButtonRef = useRef(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setSourcesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen && !sourcesOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return;
      setSourcesOpen(false);
      setMenuOpen(false);
      if (window.matchMedia('(max-width: 980px)').matches) {
        menuButtonRef.current?.focus();
      } else {
        sourcesButtonRef.current?.focus();
      }
    };

    const closeOnOutsideClick = (event) => {
      if (!navigationRef.current?.contains(event.target)) {
        setSourcesOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsideClick);
    };
  }, [menuOpen, sourcesOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setSourcesOpen(false);
  };

  return (
    <div className="site-navigation" ref={navigationRef}>
      <button
        ref={menuButtonRef}
        className={`site-navigation__toggle${menuOpen ? ' is-open' : ''}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation-menu"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span className="site-navigation__toggle-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav
        id="site-navigation-menu"
        className={`primary-nav${menuOpen ? ' is-open' : ''}`}
        aria-label="Main navigation"
      >
        <ul className="primary-nav__list">
          <li
            className={`primary-nav__item primary-nav__item--dropdown${sourcesOpen ? ' is-expanded' : ''}`}
            onMouseEnter={() => {
              if (window.matchMedia('(min-width: 981px)').matches) setSourcesOpen(true);
            }}
            onMouseLeave={() => {
              if (window.matchMedia('(min-width: 981px)').matches) setSourcesOpen(false);
            }}
          >
            <Link
              className={`primary-nav__link${isCurrentPath(pathname, '/protein-sources') ? ' is-active' : ''}`}
              href="/protein-sources"
              onClick={closeMenu}
              aria-current={pathname === '/protein-sources' ? 'page' : undefined}
            >
              Protein sources
            </Link>
            <button
              ref={sourcesButtonRef}
              className="primary-nav__submenu-toggle"
              type="button"
              aria-label="Toggle protein source submenu"
              aria-expanded={sourcesOpen}
              aria-controls="protein-sources-submenu"
              onClick={() => setSourcesOpen((isOpen) => !isOpen)}
              onMouseEnter={() => {
                if (window.matchMedia('(min-width: 981px)').matches) setSourcesOpen(true);
              }}
              onFocus={() => {
                if (window.matchMedia('(min-width: 981px)').matches) setSourcesOpen(true);
              }}
            >
              <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
                <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <ul
              id="protein-sources-submenu"
              className="primary-nav__submenu"
              hidden={!sourcesOpen}
            >
              <li>
                <Link href="/protein-sources" onClick={closeMenu}>All protein sources</Link>
              </li>
              {sources.map((source) => (
                <li key={source.slug}>
                  <Link
                    href={`/protein-sources/${source.slug}`}
                    onClick={closeMenu}
                    aria-current={pathname === `/protein-sources/${source.slug}` ? 'page' : undefined}
                  >
                    {source.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {mainLinks.map((link) => (
            <li className="primary-nav__item" key={link.href}>
              <Link
                className={`primary-nav__link${isCurrentPath(pathname, link.href) ? ' is-active' : ''}`}
                href={link.href}
                onClick={closeMenu}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
