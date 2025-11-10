import styles from './ExperienceSection.module.css'
import type { ExperienceTranslation } from '../types/content'

export type ExperienceSectionProps = {
  experience: ExperienceTranslation
  sectionId: string
}

export function ExperienceSection({ experience, sectionId }: ExperienceSectionProps) {
  return (
    <section id={sectionId} className="section reveal">
      <div className="section-header">
        <span className="eyebrow">{experience.eyebrow}</span>
        <h2>{experience.title}</h2>
        <p>{experience.intro}</p>
      </div>
      <div className={styles.experienceGrid}>
        {experience.items.map((item) => (
          <article key={item.role} className={styles.experienceCard}>
            <div className={styles.experienceHeader}>
              <h3>{item.role}</h3>
              <span className={styles.experiencePlace}>{item.place}</span>
              <span className={styles.experienceDates}>{item.dates}</span>
            </div>
            <ul>
              {item.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
