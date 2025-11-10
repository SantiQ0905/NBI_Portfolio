import styles from './AvailabilitySection.module.css'
import type { AvailabilityTranslation } from '../types/content'

export type AvailabilitySectionProps = {
  availability: AvailabilityTranslation
  contactId: string
}

export function AvailabilitySection({ availability, contactId }: AvailabilitySectionProps) {
  return (
    <section className="section reveal" aria-labelledby="availability-heading">
      <div className="section-header">
        <span className="eyebrow" id="availability-heading">
          {availability.eyebrow}
        </span>
        <h2>{availability.title}</h2>
      </div>
      <div className={styles.availability}>
        <ul>
          {availability.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a href={`#${contactId}`} className={styles.availabilityLink}>
          {availability.link}
        </a>
      </div>
    </section>
  )
}
