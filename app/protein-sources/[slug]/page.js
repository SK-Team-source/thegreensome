import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, sources } from '@/data/guide';
import { PageIntro, SourceList } from '@/components/EditorialComponents';

export function generateStaticParams() {
  return sources.map((source) => ({ slug: source.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const source = sources.find((item) => item.slug === slug);

  return source
    ? { title: source.name, description: source.summary }
    : { title: 'Protein source not found' };
}

export default async function ProteinSourcePage({ params }) {
  const { slug } = await params;
  const source = sources.find((item) => item.slug === slug);

  if (!source) notFound();

  const relatedArticle = articles.find((article) => article.slug === source.articleSlug);

  return (
    <>
      <PageIntro
        eyebrow={`Protein source · ${source.number}`}
        title={source.name}
        description={source.summary}
        image={{ src: source.image, alt: source.imageAlt }}
      />
      <section className="section source-detail">
        <div className="section__inner source-detail__grid">
          <div className="prose">
            <p className="source-detail__standfirst">{source.short}</p>
            {source.detail.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="source-aside">
            <p className="eyebrow">What to watch</p>
            <p>{source.watch}</p>
            <div className="source-aside__evidence">
              <span className="eyebrow">Evidence note</span>
              <p>{source.evidence}</p>
            </div>
            <Link className="arrow-link" href="/compare">
              Compare the evidence <span aria-hidden="true">↗</span>
            </Link>
          </aside>
        </div>
      </section>
      {relatedArticle ? (
        <section className="section section--tint">
          <div className="section__inner related-reading">
            <div>
              <p className="eyebrow">Read next</p>
              <h2>{relatedArticle.title}</h2>
              <p>{relatedArticle.deck}</p>
            </div>
            <Link className="button button--dark" href={`/articles/${relatedArticle.slug}`}>
              Read the article <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      ) : null}
      <section className="section">
        <div className="section__inner citation-note">
          <p>
            This is an editorial overview, not a product-specific life-cycle assessment.
            See our <Link href="/editorial-standards">editorial standards</Link> for how
            claims and sources are handled.
          </p>
          <SourceList
            items={[
              {
                label: 'Our World in Data: Environmental impacts of food production',
                href: 'https://ourworldindata.org/environmental-impacts-of-food',
              },
              {
                label: 'Food Standards Agency: Novel foods guidance',
                href: 'https://www.food.gov.uk/business-guidance/regulated-products/novel-foods-guidance',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
