import Image from 'next/image';
import { imageSrc } from '@/data/images';
import Breadcrumbs from './Breadcrumbs';

export default function PageBanner({ title, image, alt = '', crumbs = [], position = 'center' }) {
  return (
    <section className="page-banner">
      <Image
        src={imageSrc(image)}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="page-banner__image"
        style={{ objectPosition: position }}
      />
      <div className="page-banner__scrim" aria-hidden="true" />
      <div className="container page-banner__content">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, ...crumbs, { label: title }]} />
        <h1 className="page-banner__title">{title}</h1>
      </div>
    </section>
  );
}
