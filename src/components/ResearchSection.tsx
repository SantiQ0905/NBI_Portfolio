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
      <div className="card-grid">
        {research.projects.map((item) => (
          <article key={item.title} className="project-card">
            <span className="badge">{item.badge}</span>
            <h3>{item.title}</h3>
            <p>{item.venue}</p>
            <a href={item.link} className="project-link">
              {research.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
