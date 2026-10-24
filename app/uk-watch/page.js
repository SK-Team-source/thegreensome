import { ukMilestones } from '@/data/guide';
import { PageIntro } from '@/components/EditorialComponents';

export const metadata = {
  title: 'UK watch',
  description: 'A dated log of UK regulatory and industry milestones for novel proteins.',
};

export default function UKWatchPage() {
  return (
    <>
      <PageIntro
        eyebrow="Regulation & industry"
        title="UK watch"
        description="A plain-English log of the decisions, guidance and milestones shaping novel foods and protein production in the UK."
        image={{
          src: '/images/guide/editorial-research.jpg',
          alt: 'A scientist looking through a microscope',
        }}
      />
      <section className="section">
        <div className="section__inner timeline">
          {ukMilestones.map((milestone) => (
            <article className="timeline-item" key={milestone.title}>
              <div className="timeline-item__date">{milestone.date}</div>
              <div className="timeline-item__body">
                <h2>{milestone.title}</h2>
                <p>{milestone.description}</p>
                <a href={milestone.href} target="_blank" rel="noreferrer">
                  {milestone.source} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
          <p className="timeline__note">
            This log distinguishes regulatory guidance and sandbox activity from formal
            market authorisation. Check the linked regulator source for the latest status.
          </p>
        </div>
      </section>
    </>
  );
}
