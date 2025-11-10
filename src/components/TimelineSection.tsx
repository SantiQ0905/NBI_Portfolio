import styles from './TimelineSection.module.css'
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
      <div className={styles.timeline}>
        {timeline.items.map((item) => (
          <article key={item.period} className={styles.timelineItem}>
            <div className={styles.timelineMarker} />
            <div className={styles.timelineContent}>
              <span className={styles.timelinePeriod}>{item.period}</span>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
