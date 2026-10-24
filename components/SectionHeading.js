export default function SectionHeading({ title, lead, as: Tag = 'h2', align = 'start', id }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <Tag className="section-heading__title" id={id}>
        {title}
      </Tag>
      {lead && <p className="section-heading__lead">{lead}</p>}
    </div>
  );
}
