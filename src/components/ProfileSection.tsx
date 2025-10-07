import type { ProfileTranslation } from '../types/content'

export type ProfileSectionProps = {
  profile: ProfileTranslation
  sectionId: string
}

export function ProfileSection({ profile, sectionId }: ProfileSectionProps) {
  return (
    <section id={sectionId} className="section reveal">
      <div className="section-header">
        <span className="eyebrow">{profile.eyebrow}</span>
        <h2>{profile.title}</h2>
      </div>
      <div className="section-body">
        <div className="section-text">
          <p>{profile.body}</p>
        </div>
        <div className="chip-grid">
          {profile.chips.map((chip) => (
            <span key={chip} className="chip chip-tag">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
