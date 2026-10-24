'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { imageSrc } from '@/data/images';

// Scroll-snap carousel: swipeable on touch, arrow buttons on larger screens.
export default function NewsCarousel({ items, labelledBy }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('li');
    const amount = card ? card.getBoundingClientRect().width + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <div className="carousel">
      <ul ref={trackRef} className="carousel__track" aria-labelledby={labelledBy} tabIndex={0}>
        {items.map((item, i) => (
          <li key={item.image.remote} className="carousel__item">
            <article className="news-card">
              <div className="news-card__media">
                <Image
                  src={imageSrc(item.image)}
                  alt=""
                  fill
                  sizes="(min-width: 1100px) 25vw, (min-width: 700px) 45vw, 85vw"
                  className="news-card__image"
                />
              </div>
              <h3 className="news-card__title">{item.title}</h3>
              <p className="news-card__text">{item.text}</p>
            </article>
          </li>
        ))}
      </ul>
      <div className="carousel__controls">
        <button type="button" className="icon-btn" onClick={() => scroll(-1)}>
          <span className="visually-hidden">Scroll back</span>
          <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
            <path d="M12.5 4 6.5 10l6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <button type="button" className="icon-btn" onClick={() => scroll(1)}>
          <span className="visually-hidden">Scroll forward</span>
          <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
            <path d="m7.5 4 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
