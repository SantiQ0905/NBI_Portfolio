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
      <div className="experience-grid">
        {experience.items.map((item) => (
          <article key={item.role} className="experience-card">
            <div className="experience-header">
              <h3>{item.role}</h3>
              <span className="experience-place">{item.place}</span>
              <span className="experience-dates">{item.dates}</span>
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
