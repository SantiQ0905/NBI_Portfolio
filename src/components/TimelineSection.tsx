import type { TimelineTranslation } from '../types/content'

export type TimelineSectionProps = {
  timeline: TimelineTranslation
}

export function TimelineSection({ timeline }: TimelineSectionProps) {
  return (
    <section className="section reveal" aria-labelledby="timeline-heading">
      <div className="section-header">
        <span className="eyebrow" id="timeline-heading">
          {timeline.eyebrow}
        </span>
        <h2>{timeline.title}</h2>
      </div>
      <div className="timeline">
        {timeline.items.map((item) => (
          <article key={item.period} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
