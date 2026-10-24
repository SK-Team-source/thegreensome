import Link from 'next/link';
import Image from 'next/image';
import { sources } from '@/data/guide';
import { PageIntro } from '@/components/EditorialComponents';

export const metadata = {
  title: 'Protein sources',
  description: 'Explore eight protein routes, from pulses to fermentation and livestock.',
};

export default function ProteinSourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="The field guide"
        title="Protein sources"
        description="Eight routes to protein, examined with the same questions: what goes in, what comes out, and what does the evidence actually say?"
        image={{
          src: '/images/guide/protein-sources-beans.jpg',
          alt: 'A close-up of assorted dried beans',
        }}
      />
      <section className="section">
        <div className="section__inner source-listing">
          {sources.map((source) => (
            <article className="source-listing__item" key={source.slug}>
              <Link
                className="source-listing__image-link"
                href={`/protein-sources/${source.slug}`}
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image src={source.image} alt="" fill sizes="(min-width: 700px) 11rem, 28vw" />
              </Link>
              <span className="source-listing__number">{source.number}</span>
              <div>
                <p className="eyebrow">{source.short}</p>
                <h2>
                  <Link href={`/protein-sources/${source.slug}`}>{source.name}</Link>
                </h2>
                <p>{source.summary}</p>
              </div>
              <Link
                className="source-listing__open"
                href={`/protein-sources/${source.slug}`}
                aria-label={`Explore ${source.name}`}
              >
                ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
