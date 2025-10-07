import type { ContactTranslation } from '../types/content'

export type ContactSectionProps = {
  contact: ContactTranslation
  sectionId: string
  scheduleMailTo: string
}

export function ContactSection({ contact, sectionId, scheduleMailTo }: ContactSectionProps) {
  return (
    <section id={sectionId} className="section contact reveal">
      <div className="section-header">
        <span className="eyebrow">{contact.eyebrow}</span>
        <h2>{contact.title}</h2>
        <p>{contact.body}</p>
      </div>
      <div className="contact-layout">
        <div className="contact-actions">
          <a href="mailto:nath@example.com" className="button button-primary">
            {contact.buttons.primary}
          </a>
          <a href={scheduleMailTo} className="button button-primary ghost">
            {contact.buttons.schedule}
          </a>
          <span className="contact-email">{contact.emailLabel}</span>
        </div>
        <div className="contact-meta">
          <dl>
            {contact.details.map((item) => (
              <div key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
          <div className="chip-grid">
            {contact.chips.map((chip) => (
              <span key={chip} className="chip chip-tag">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
