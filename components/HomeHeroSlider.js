'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const slides = [
  {
    image: '/images/guide/hero-market-produce.jpg',
    eyebrow: 'The UK guide to greener protein',
    title: <>Greener protein,<br /><em>explained.</em></>,
    description:
      'From pulses and livestock to fermentation and cultivated meat, explore the options with evidence, not hype.',
    primary: { href: '/protein-sources', label: 'Explore protein sources' },
    secondary: { href: '/compare', label: 'Compare their impacts' },
  },
  {
    image: '/images/guide/hero-cow-grazing.jpg',
    eyebrow: 'Livestock, done better',
    title: <>A fair view<br /><em>of livestock.</em></>,
    description:
      'Look at the role of grazing, feed, land and methane in the UK, without overlooking the trade-offs.',
    primary: { href: '/protein-sources/livestock-done-better', label: 'Explore livestock' },
    secondary: { href: '/compare', label: 'Compare impacts' },
  },
  {
    image: '/images/guide/hero-mixed-pulses.jpg',
    eyebrow: 'Protein from the land',
    title: <>Make room<br /><em>for pulses.</em></>,
    description:
      'Beans, peas and lentils are familiar, nutritious protein. Discover their potential and the barriers to growing more in the UK.',
    primary: { href: '/protein-sources/pulses-legumes', label: 'Explore pulses' },
    secondary: { href: '/articles/pulses-oldest-alternative-protein', label: 'Read the article' },
  },
  {
    image: '/images/guide/hero-vegetable-rows.jpg',
    eyebrow: 'Food grown closer to home',
    title: <>Small crops,<br /><em>big potential.</em></>,
    description:
      'Vegetable plots, field crops and pulses can all contribute to a lower-impact food system when supply and demand grow together.',
    primary: { href: '/protein-sources', label: 'Explore every route' },
    secondary: { href: '/uk-watch', label: 'Follow the UK watch' },
  },
];

const SLIDE_INTERVAL = 7000;

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener('change', updateMotionPreference);

    return () => motionPreference.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || reducedMotion) return undefined;

    const timer = window.setTimeout(
      () => setActiveIndex((index) => (index + 1) % slides.length),
      SLIDE_INTERVAL,
    );

    return () => window.clearTimeout(timer);
  }, [activeIndex, paused, hovered, focused, reducedMotion]);

  const goToSlide = (index) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section
      className="hero"
      aria-labelledby="home-hero-title"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="hero__art" aria-hidden="true">
        <Image
          key={activeSlide.image}
          className="hero__art-photo"
          src={activeSlide.image}
          alt=""
          fill
          priority={activeIndex === 0}
          sizes="100vw"
        />
        <div className="hero__measure">
          <span className="hero__measure-label">A common measure</span>
          <div className="hero__orbit hero__orbit--one" />
          <div className="hero__orbit hero__orbit--two" />
          <div className="hero__disc">
            <span>100 g</span>
            <small>protein</small>
          </div>
          <span className="hero__art-label hero__art-label--land">land</span>
          <span className="hero__art-label hero__art-label--water">water</span>
          <span className="hero__art-label hero__art-label--energy">energy</span>
          <span className="hero__art-label hero__art-label--climate">climate</span>
        </div>
      </div>

      <div className="hero__inner">
        <p className="eyebrow">{activeSlide.eyebrow}</p>
        <h1 id="home-hero-title" key={`title-${activeIndex}`}>
          {activeSlide.title}
        </h1>
        <p key={`description-${activeIndex}`}>{activeSlide.description}</p>
        <div className="hero__actions">
          <Link className="button button--dark" href={activeSlide.primary.href}>
            {activeSlide.primary.label} <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" href={activeSlide.secondary.href}>
            {activeSlide.secondary.label}
          </Link>
        </div>
        <div className="hero__note">
          <span>{String(activeIndex + 1).padStart(2, '0')}</span>
          <span>Land · water · energy · climate</span>
          <span>Evidence-led · UK-focused</span>
        </div>
      </div>

      <div className="hero__slider-controls" role="group" aria-label="Banner controls">
        <button
          className="hero__slider-button"
          type="button"
          aria-label="Previous banner"
          onClick={() => goToSlide(activeIndex - 1)}
        >
          <span aria-hidden="true">←</span>
        </button>
        <div className="hero__slider-dots" role="group" aria-label="Choose a banner">
          {slides.map((slide, index) => (
            <button
              className={`hero__slider-dot${index === activeIndex ? ' is-active' : ''}`}
              type="button"
              key={slide.image}
              aria-label={`Show banner ${index + 1}: ${slide.eyebrow}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button
          className="hero__slider-button"
          type="button"
          aria-label={
            reducedMotion
              ? 'Automatic slideshow disabled for reduced motion'
              : paused
                ? 'Play banner slideshow'
                : 'Pause banner slideshow'
          }
          disabled={reducedMotion}
          onClick={() => setPaused((isPaused) => !isPaused)}
        >
          <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
        </button>
        <button
          className="hero__slider-button"
          type="button"
          aria-label="Next banner"
          onClick={() => goToSlide(activeIndex + 1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
