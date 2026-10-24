'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { imageSrc } from '@/data/images';

const INTERVAL = 6500;

export default function HeroSlider({ heading, slides, actions = [] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback((next) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) setPaused(true);
  }, []);

  useEffect(() => {
    if (paused || count < 2) return undefined;
    const id = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused, count, go]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Featured"
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(index + 1);
        if (e.key === 'ArrowLeft') go(index - 1);
      }}
    >
      <div className="hero__slides">
        {slides.map((slide, i) => (
          <div
            key={slide.image.remote}
            className={`hero__slide${i === index ? ' is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
          >
            <Image
              src={imageSrc(slide.image)}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              loading={i === 0 ? undefined : 'lazy'}
              className="hero__image"
            />
          </div>
        ))}
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="container hero__content">
        <h1 className="hero__title">{heading}</h1>
        {actions.length > 0 && (
          <div className="hero__actions">
            {actions.map((a, i) => (
              <Link key={a.href} href={a.href} className={`btn ${i === 0 ? 'btn--light' : 'btn--ghost-light'}`}>
                {a.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {count > 1 && (
        <div className="container hero__controls">
          <div className="hero__progress" aria-hidden="true">
            {slides.map((s, i) => (
              <span key={s.image.remote} className={i === index ? 'is-active' : ''} />
            ))}
          </div>
          <span className="hero__count" aria-live="polite">
            {index + 1} / {count}
          </span>
          <button type="button" className="icon-btn icon-btn--light" onClick={() => go(index - 1)}>
            <span className="visually-hidden">Previous slide</span>
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
              <path d="M12.5 4 6.5 10l6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button type="button" className="icon-btn icon-btn--light" onClick={() => setPaused((p) => !p)}>
            <span className="visually-hidden">{paused ? 'Play slideshow' : 'Pause slideshow'}</span>
            {paused ? (
              <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                <path d="M6 4v12l10-6z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                <path d="M6 4h3v12H6zM11 4h3v12h-3z" fill="currentColor" />
              </svg>
            )}
          </button>
          <button type="button" className="icon-btn icon-btn--light" onClick={() => go(index + 1)}>
            <span className="visually-hidden">Next slide</span>
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
              <path d="m7.5 4 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
