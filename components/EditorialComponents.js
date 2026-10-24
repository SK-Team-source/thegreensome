import Link from 'next/link';
import Image from 'next/image';

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

export function PageIntro({ eyebrow, title, description, action, image }) {
  return (
    <section className={`page-intro${image ? ' page-intro--image' : ''}`}>
      {image ? (
        <>
          <Image
            className="page-intro__image"
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
          />
        </>
      ) : null}
      <div className="page-intro__inner">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1>{title}</h1>
        {description ? <p className="page-intro__description">{description}</p> : null}
        {action}
      </div>
    </section>
  );
}

export function ArticleCard({ article, compact = false }) {
  return (
    <article className={`article-card${compact ? ' article-card--compact' : ''}`}>
      <Link className="article-card__image-link" href={`/articles/${article.slug}`} tabIndex={-1} aria-hidden="true">
        <Image
          className="article-card__image"
          src={article.image}
          alt=""
          width={900}
          height={520}
          sizes="(min-width: 700px) 45vw, 92vw"
        />
      </Link>
      <p className="article-card__meta">
        <span>{article.category}</span>
        <span>{article.readingTime}</span>
      </p>
      <h3>
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.deck}</p>
      <Link className="arrow-link" href={`/articles/${article.slug}`}>
        Read article <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}

export function SourceList({ items }) {
  return (
    <ul className="source-list">
      {items.map((item) => (
        <li key={item.href}>
          <a href={item.href} target="_blank" rel="noreferrer">
            {item.label}
            <span aria-hidden="true"> ↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
