import { PageIntro } from '@/components/EditorialComponents';

export const metadata = {
  title: 'Editorial standards',
  description: 'How The Greensome researches, checks and corrects its editorial work.',
};

export default function EditorialStandardsPage() {
  return (
    <>
      <PageIntro
        eyebrow="How we work"
        title="Editorial standards"
        description="The way we handle evidence is part of the story. These standards apply to every article, comparison and UK watch entry."
        image={{
          src: '/images/guide/editorial-research.jpg',
          alt: 'A scientist working with a microscope',
        }}
      />
      <section className="section">
        <div className="section__inner standards-layout">
          <nav className="standards-index" aria-label="On this page">
            <a href="#sources">Sources</a>
            <a href="#numbers">Numbers and claims</a>
            <a href="#ai">Use of AI</a>
            <a href="#balance">Balance and independence</a>
            <a href="#corrections">Corrections</a>
          </nav>
          <div className="prose standards-copy">
            <section id="sources">
              <h2>Start with sources</h2>
              <p>
                We favour primary research, regulator material, government data and
                transparent life-cycle assessments. Company statements can help explain a
                process, but are identified as company claims rather than independent
                findings.
              </p>
            </section>
            <section id="numbers">
              <h2>Numbers and claims</h2>
              <p>
                Important figures should link to their source and be presented with the
                relevant unit, date and context. Protein comparisons use 100 g of protein
                as a common starting point. We explain system boundaries and do not
                combine unlike studies into a misleading league table.
              </p>
              <p>
                If a claim cannot be traced to a reliable source, it does not belong in
                the published article. Uncertainty and data gaps are stated, not hidden.
              </p>
            </section>
            <section id="ai">
              <h2>Use of AI</h2>
              <p>
                AI tools may assist with research and drafting. They are not sources and
                do not verify their own output. A human editor must check every material
                claim against the cited evidence; unresolved claims are removed or sent
                back for further research. Salar has final editorial sign-off.
              </p>
            </section>
            <section id="balance">
              <h2>Balance and independence</h2>
              <p>
                We consider livestock and established crop systems alongside novel
                technologies. We do not accept payment to rank products or suppress
                inconvenient evidence. Company relationships and relevant interests are
                disclosed where they affect a story.
              </p>
            </section>
            <section id="corrections">
              <h2>Corrections</h2>
              <p>
                If you find an error or an unclear claim, email{' '}
                <a href="mailto:info@thegreensome.com">info@thegreensome.com</a> with
                the article link and the evidence. We will review it, correct material
                errors and make significant changes clear on the page.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
