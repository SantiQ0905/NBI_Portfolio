import type { HeroTranslation } from '../types/content'

export type HeroSectionProps = {
  hero: HeroTranslation
  portraitSrc?: string
}

const DEFAULT_PORTRAIT = '/Media/Images/NathCoverImage.jpg'

export function HeroSection({ hero, portraitSrc = DEFAULT_PORTRAIT }: HeroSectionProps) {
  return (
    <section id="hero" className="hero reveal">
      <div className="hero-content">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p>
          {hero.description.intro}
          <strong>{hero.description.highlight}</strong>
          {hero.description.body}
        </p>
        <div className="hero-actions">
          <a href="/nath-cv.pdf" className="button button-primary" target="_blank" rel="noreferrer">
            {hero.ctas.cv}
          </a>
          <a
            href="https://www.linkedin.com/in/<usuario>"
            className="button button-secondary"
            target="_blank"
            rel="noreferrer"
          >
            {hero.ctas.linkedin}
          </a>
          <a
            href="https://www.researchgate.net/profile/<usuario>"
            className="button button-secondary"
            target="_blank"
            rel="noreferrer"
          >
            {hero.ctas.researchGate}
          </a>
        </div>
        <div className="floating-badges" aria-hidden>
          {hero.floatingBadges.map((badge) => (
            <span key={badge} className="floating-badge">
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="hero-visual" aria-hidden>
        <div className="portrait-frame">
          <div className="frame-glow" />
          <div className="frame-border">
            <img
              src={portraitSrc}
              alt="Nath - Medical Student Portrait"
              className="portrait-image"
            />
            <div className="frame-overlay" />
          </div>
          <div className="frame-sparkle sparkle-1" />
          <div className="frame-sparkle sparkle-2" />
          <div className="frame-sparkle sparkle-3" />
          <div className="frame-sparkle sparkle-4" />
        </div>
      </div>
    </section>
  )
}
