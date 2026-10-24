import Link from 'next/link';
import { PageIntro } from '@/components/EditorialComponents';

export const metadata = {
  title: 'About',
  description: 'About The Greensome, the independent guide to greener protein.',
};

const brands = [
  { name: 'CleverBotanics', href: 'https://cleverbotanics.com' },
  { name: 'Eden Aromata', href: 'https://edenaromata.com' },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About the Greensome"
        title="A clear view of what comes next."
        description="The Greensome is an independent, plain-English guide to producing protein with less land, water, energy and carbon—with a particular eye on what is changing in the UK."
        image={{
          src: '/images/guide/about-yorkshire-fields.jpg',
          alt: 'A tractor working a field in the Yorkshire countryside',
        }}
      />
      <section className="section">
        <div className="section__inner about-grid">
          <div className="about-copy prose">
            <p className="eyebrow">The company</p>
            <h2>The Greensome Limited</h2>
            <p>
              The Greensome Limited is the parent company of{' '}
              <a href={brands[0].href} target="_blank" rel="noreferrer">
                CleverBotanics
              </a>{' '}
              and{' '}
              <a href={brands[1].href} target="_blank" rel="noreferrer">
                Eden Aromata
              </a>
              . This guide is a new editorial project; it does not sell food or take
              payment to recommend protein products.
            </p>
            <p>
              The work is shaped by Salar, whose physics background brings a focus on
              energy, efficiency and the assumptions behind confident claims. The aim is
              not to champion one technology, but to make comparisons understandable and
              fair.
            </p>
            <h2>Our point of view</h2>
            <p>
              Every protein route deserves the same questions. We look at established
              farming as well as newer technologies, distinguish measured results from
              projections, and say when the available evidence cannot support a neat
              answer.
            </p>
            <p>
              Our comparison basis is 100 g of protein. That is a starting point—not a
              claim that foods are nutritionally identical or that one footprint number
              captures the whole food system.
            </p>
            <Link className="arrow-link" href="/editorial-standards">
              Read our editorial standards <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <aside className="company-card">
            <p className="eyebrow">Registered company</p>
            <h2>The Greensome Ltd</h2>
            <dl>
              <div>
                <dt>Company number</dt>
                <dd>11743419</dd>
              </div>
              <div>
                <dt>Registered in</dt>
                <dd>England and Wales</dd>
              </div>
              <div>
                <dt>Registered office</dt>
                <dd>41 Brushfield Way, Knaphill, Woking, Surrey, GU21 2TQ</dd>
              </div>
            </dl>
            <a href="mailto:info@thegreensome.com">info@thegreensome.com</a>
          </aside>
        </div>
      </section>
      <section className="section section--tint">
        <div className="section__inner brand-links">
          <div>
            <p className="eyebrow">Our other brands</p>
            <h2>Independent businesses, shared parent.</h2>
          </div>
          <div className="brand-links__items">
            {brands.map((brand) => (
              <a href={brand.href} target="_blank" rel="noreferrer" key={brand.name}>
                {brand.name} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
