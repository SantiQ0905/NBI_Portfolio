import styles from './ResearchSection.module.css'
import type { ResearchTranslation } from '../types/content'

export type ResearchSectionProps = {
  research: ResearchTranslation
  sectionId: string
}

export function ResearchSection({ research, sectionId }: ResearchSectionProps) {
  return (
    <section id={sectionId} className="section reveal">
      <div className="section-header">
        <span className="eyebrow">{research.eyebrow}</span>
        <h2>{research.title}</h2>
        <p>{research.description}</p>
      </div>
      <div className={styles.cardGrid}>
        {research.projects.map((item) => (
          <article key={item.title} className={styles.projectCard}>
            <span className={styles.badge}>{item.badge}</span>
            <h3>{item.title}</h3>
            <p>{item.venue}</p>
            <a href={item.link} className={styles.projectLink}>
              {research.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
