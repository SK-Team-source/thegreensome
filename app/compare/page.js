import Link from 'next/link';
import { sources } from '@/data/guide';
import { PageIntro } from '@/components/EditorialComponents';

export const metadata = {
  title: 'Compare protein footprints',
  description:
    'How to compare land, water and climate impacts per 100 grams of protein without hiding uncertainty.',
};

const drivers = {
  'pulses-legumes': ['Crop area and rotation', 'Growing region and irrigation', 'Fertiliser, soil and processing'],
  'mycoprotein-biomass-fermentation': ['Feedstock and facility', 'Process water and cleaning', 'Electricity and downstream processing'],
  'precision-fermentation': ['Feedstock and factory footprint', 'Process and purification water', 'Energy mix and purification'],
  'cultivated-meat': ['Inputs and production scale', 'Culture process and cleaning', 'Energy demand and scale'],
  insects: ['Substrate sourcing and rearing', 'Feed and rearing conditions', 'Substrate and drying energy'],
  'algae-seaweed': ['Species and cultivation method', 'Freshwater needs by process', 'Nutrients, drying and processing'],
  'air-fermentation': ['Gases, nutrients and equipment', 'Process water and cooling', 'Hydrogen and electricity source'],
  'livestock-done-better': ['Grazing, feed and land-use change', 'Feed, rainfall and local scarcity', 'Methane, feed and manure'],
};

export default function ComparePage() {
  return (
    <>
      <PageIntro
        eyebrow="The same basis"
        title="Compare protein footprints"
        description="Land, water and climate impacts should be compared per 100 g of protein—not per kilogram of food. But a common unit alone cannot make different studies directly comparable."
        image={{
          src: '/images/guide/comparison.jpg',
          alt: 'A meal with vegetables, grains and other foods',
        }}
      />
      <section className="section compare-section">
        <div className="section__inner">
          <div className="compare-callout">
            <span className="compare-callout__mark" aria-hidden="true">
              ≈
            </span>
            <div>
              <p className="eyebrow">An honest launch chart</p>
              <h2>No false precision.</h2>
              <p>
                There is no single independent dataset that gives directly comparable
                land, water and climate values for every route below. Rather than combine
                incompatible estimates into one leaderboard, this static comparison shows
                the main drivers that each measurement must include. Numerical values will
                be added only when the source, system boundary and protein basis can be
                checked together.
              </p>
            </div>
          </div>

          <div className="comparison-legend" aria-label="Comparison metric headings">
            <span>Protein route</span>
            <span>Land · what to include</span>
            <span>Water · what to check</span>
            <span>Climate · key drivers</span>
          </div>
          <div className="comparison-table">
            {sources.map((source) => {
              const [land, water, climate] = drivers[source.slug];
              return (
                <div className="comparison-row" key={source.slug}>
                  <Link href={`/protein-sources/${source.slug}`} className="comparison-row__name">
                    <span>{source.number}</span>
                    {source.name}
                  </Link>
                  <span data-label="Land">{land}</span>
                  <span data-label="Water">{water}</span>
                  <span data-label="Climate">{climate}</span>
                </div>
              );
            })}
          </div>

          <p className="compare-footnote">
            A driver is not a result. For background on established food-system
            assessments, see{' '}
            <a href="https://ourworldindata.org/environmental-impacts-of-food" target="_blank" rel="noreferrer">
              Our World in Data’s environmental impacts overview
            </a>{' '}
            and the life-cycle study by{' '}
            <a href="https://www.science.org/doi/10.1126/science.aaq0216" target="_blank" rel="noreferrer">
              Poore and Nemecek (2018)
            </a>
            . These sources do not provide like-for-like measurements for every emerging
            protein route.
          </p>
        </div>
      </section>
      <section className="section section--tint">
        <div className="section__inner compare-method">
          <div>
            <p className="eyebrow">How to read the chart</p>
            <h2>Same denominator. Clear boundaries.</h2>
          </div>
          <ol>
            <li>Use edible protein as the functional unit—not total food weight.</li>
            <li>Keep land-use change, feedstock, energy and processing in view.</li>
            <li>Separate measured commercial data from projections and pilot results.</li>
            <li>Treat water with location in mind; withdrawal and consumption differ.</li>
          </ol>
        </div>
      </section>
    </>
  );
}
