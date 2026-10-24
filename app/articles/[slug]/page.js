import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { articles } from '@/data/guide';
import { SourceList } from '@/components/EditorialComponents';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article
    ? { title: article.title, description: article.deck, openGraph: { type: 'article' } }
    : { title: 'Article not found' };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  const references = article.sections.flatMap((section) => section.references);

  return (
    <>
      <article>
        <header className="article-hero">
          <Image
            className="article-hero__image"
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="100vw"
          />
          <div className="article-hero__inner">
            <Link className="article-back" href="/articles">
              ← All articles
            </Link>
            <p className="eyebrow">
              {article.category} <span aria-hidden="true">·</span> {article.readingTime}
            </p>
            <h1>{article.title}</h1>
            <p className="article-hero__deck">{article.deck}</p>
            <div className="article-hero__byline">
              <span>The Greensome</span>
              <span>{article.date}</span>
            </div>
          </div>
        </header>
        <div className="article-body">
          {article.sections.map((section) => (
            <section className="prose article-section-body" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.references.length ? (
                <SourceList items={section.references} />
              ) : null}
            </section>
          ))}
          {references.length ? (
            <aside className="article-references">
              <p className="eyebrow">Sources and further reading</p>
              <SourceList items={references} />
            </aside>
          ) : null}
          <aside className="article-disclosure">
            <p>
              Editorial note: these articles are evidence-led drafts for The Greensome.
              They are not a substitute for product-specific assessment or regulatory
              advice. Read our <Link href="/editorial-standards">editorial standards</Link>.
            </p>
          </aside>
        </div>
      </article>
    </>
  );
}
