'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { imageSrc } from '@/data/images';

export default function ImageGallery({ items }) {
  const dialogRef = useRef(null);
  const [current, setCurrent] = useState(null);
  const count = items.length;

  const open = (i) => {
    setCurrent(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback((d) => setCurrent((c) => (c === null ? c : (c + d + count) % count)), [count]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const onClose = () => setCurrent(null);
    const onKey = (e) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    dialog.addEventListener('close', onClose);
    dialog.addEventListener('keydown', onKey);
    return () => {
      dialog.removeEventListener('close', onClose);
      dialog.removeEventListener('keydown', onKey);
    };
  }, [step]);

  const item = current !== null ? items[current] : null;

  return (
    <>
      <ul className="gallery">
        {items.map((it, i) => (
          <li key={it.image.remote} className="gallery__item">
            <button type="button" className="gallery__button" onClick={() => open(i)}>
              <Image
                src={imageSrc(it.image)}
                alt={it.alt}
                fill
                sizes="(min-width: 1100px) 25vw, (min-width: 700px) 33vw, 50vw"
                className="gallery__image"
              />
              <span className="visually-hidden">Open larger view</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Gallery image viewer"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {item && (
          <div className="lightbox__inner">
            <figure className="lightbox__figure">
              <Image
                src={imageSrc(item.image)}
                alt={item.alt}
                fill
                sizes="100vw"
                className="lightbox__image"
              />
            </figure>
            <div className="lightbox__bar">
              <span>
                {current + 1} / {count}
              </span>
              <div className="lightbox__buttons">
                <button type="button" className="icon-btn icon-btn--light" onClick={() => step(-1)}>
                  <span className="visually-hidden">Previous image</span>
                  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                    <path d="M12.5 4 6.5 10l6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                <button type="button" className="icon-btn icon-btn--light" onClick={() => step(1)}>
                  <span className="visually-hidden">Next image</span>
                  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                    <path d="m7.5 4 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                <button type="button" className="icon-btn icon-btn--light" onClick={close} autoFocus>
                  <span className="visually-hidden">Close viewer</span>
                  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                    <path d="m5 5 10 10M15 5 5 15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
