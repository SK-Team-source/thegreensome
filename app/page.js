import Link from 'next/link';
import Image from 'next/image';
import { articles, sources, ukMilestones } from '@/data/guide';
import { ArticleCard, Eyebrow } from '@/components/EditorialComponents';
import HomeHeroSlider from '@/components/HomeHeroSlider';

export const metadata = {
  alternates: { canonical: '/' },
};

const firstArticles = [articles[0], articles[1], articles[2], articles[3]];

export default function HomePage() {
  const latestMilestone = ukMilestones[0];

  return (
    <>
      <HomeHeroSlider />

      <section className="section intro-band">
        <div className="section__inner intro-band__grid">
          <div className="basis-visual">
            <Image
              src="/images/guide/comparison.jpg"
              alt="A meal with vegetables and other whole foods"
              fill
              sizes="(min-width: 700px) 34vw, 92vw"
            />
            <p className="basis-visual__caption">Food, measured fairly</p>
          </div>
          <div>
            <Eyebrow>The basis</Eyebrow>
            <h2>Compare protein, not the weight of the food.</h2>
            <p>
              Every route is considered against the same functional unit. It is a fairer
              starting point than comparing a kilo of one food with a kilo of another.
              Nutrition, production system and evidence quality still matter.
            </p>
            <Link className="arrow-link" href="/compare">
              See how comparisons work <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section source-section">
        <div className="section__inner">
          <div className="section-heading">
            <div>
              <Eyebrow>Eight routes. No easy answers.</Eyebrow>
              <h2>Explore protein sources</h2>
            </div>
            <Link className="text-link" href="/protein-sources">
              All protein sources <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="source-grid">
            {sources.map((source) => (
              <Link
                className="source-tile"
                href={`/protein-sources/${source.slug}`}
                key={source.slug}
              >
                <Image
                  className="source-tile__image"
                  src={source.image}
                  alt=""
                  fill
                  sizes="(min-width: 1020px) 22vw, (min-width: 700px) 45vw, 90vw"
                />
                <span className="source-tile__number">{source.number}</span>
                <span className="source-tile__content">
                  <strong>{source.name}</strong>
                  <small>{source.short}</small>
                </span>
                <span className="source-tile__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section comparison-teaser">
        <div className="section__inner comparison-teaser__grid">
          <div>
            <Eyebrow>Compare on a common basis</Eyebrow>
            <h2>Land. Water. Climate.</h2>
            <p>
              A useful comparison needs matching boundaries, reliable data and clear
              assumptions. We show what is known, and flag where the evidence is not yet
              comparable.
            </p>
            <Link className="button button--outline" href="/compare">
              Explore the comparison
            </Link>
          </div>
          <div className="metric-stack" aria-label="Comparison metrics">
            <div className="metric-row">
              <span className="metric-row__index">01</span>
              <span className="metric-row__name">Land use</span>
              <span className="metric-row__line" />
              <span className="metric-row__unit">m²</span>
            </div>
            <div className="metric-row">
              <span className="metric-row__index">02</span>
              <span className="metric-row__name">Water use</span>
              <span className="metric-row__line" />
              <span className="metric-row__unit">litres</span>
            </div>
            <div className="metric-row">
              <span className="metric-row__index">03</span>
              <span className="metric-row__name">Climate</span>
              <span className="metric-row__line" />
              <span className="metric-row__unit">CO₂e</span>
            </div>
            <p className="metric-stack__caption">All metrics use the same protein basis</p>
          </div>
        </div>
      </section>

      <section className="section uk-watch-teaser">
        <div className="section__inner uk-watch-card">
          <div className="uk-watch-card__date">
            <Eyebrow>UK watch</Eyebrow>
            <span>{latestMilestone.date}</span>
          </div>
          <div className="uk-watch-card__copy">
            <h2>{latestMilestone.title}</h2>
            <p>{latestMilestone.description}</p>
          </div>
          <Link className="arrow-link" href="/uk-watch">
            Follow the UK watch <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="section article-section">
        <div className="section__inner">
          <div className="section-heading">
            <div>
              <Eyebrow>Read the evidence</Eyebrow>
              <h2>From the journal</h2>
            </div>
            <Link className="text-link" href="/articles">
              All articles <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="article-grid">
            {firstArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
