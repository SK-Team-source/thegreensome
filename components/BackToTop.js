'use client';

import { useEffect, useState } from 'react';

// Replaces the original fixed "scroll to top" image button.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
        document.getElementById('main')?.focus({ preventScroll: true });
      }}
    >
      <span className="visually-hidden">Back to top</span>
      <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
        <path d="M4 12.5 10 6.5l6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </button>
  );
}
