'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navigation } from '@/data/navigation';
import { images, imageSrc } from '@/data/images';

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);

  // Close menus on navigation.
  useEffect(() => {
    setOpen(false);
    setSubmenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="TheGreenSome — home">
          <Image
            src={imageSrc(images.branding.logo)}
            alt="TheGreenSome"
            width={240}
            height={72}
            priority
          />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__bars" aria-hidden="true" />
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav id="primary-nav" className={`primary-nav${open ? ' is-open' : ''}`} aria-label="Main">
          <ul className="primary-nav__list">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              const hasChildren = Boolean(item.children?.length);
              const expanded = submenu === item.href;
              return (
                <li
                  key={item.href}
                  className={`primary-nav__item${hasChildren ? ' has-children' : ''}${expanded ? ' is-expanded' : ''}`}
                  onMouseLeave={() => {
                    // Hover-out only collapses the desktop dropdown, never the mobile panel.
                    if (hasChildren && window.matchMedia('(min-width: 900px)').matches) setSubmenu(null);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`primary-nav__link${active ? ' is-active' : ''}`}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                  {hasChildren && (
                    <>
                      <button
                        type="button"
                        className="submenu-toggle"
                        aria-expanded={expanded}
                        aria-controls={`submenu-${item.label}`}
                        onClick={() => setSubmenu(expanded ? null : item.href)}
                      >
                        <span className="visually-hidden">{item.label} submenu</span>
                        <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
                          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </button>
                      <ul id={`submenu-${item.label}`} className="submenu">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`submenu__link${pathname === child.href ? ' is-active' : ''}`}
                              onClick={() => setOpen(false)}
                              aria-current={pathname === child.href ? 'page' : undefined}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
