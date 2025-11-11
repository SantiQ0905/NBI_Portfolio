import styles from './HeroSection.module.css'
import type { HeroTranslation } from '../types/content'

export type HeroSectionProps = {
  hero: HeroTranslation
  portraitSrc?: string
}

const DEFAULT_PORTRAIT = '/Media/Images/NathCoverImage.jpg'

export function HeroSection({ hero, portraitSrc = DEFAULT_PORTRAIT }: HeroSectionProps) {
  return (
    <section id="hero" className={`${styles.hero} reveal`}>
      <div className={styles.heroContent}>
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p>
          {hero.description.intro}
          <strong>{hero.description.highlight}</strong>
          {hero.description.body}
        </p>
        <div className={styles.heroActions}>
          <a href="/Media/Documents/nath-cv.pdf" className="button button-primary" target="_blank" rel="noreferrer">
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
        <div className={styles.floatingBadges} aria-hidden>
          {hero.floatingBadges.map((badge) => (
            <span key={badge} className={styles.floatingBadge}>
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.heroVisual} aria-hidden>
        <div className={styles.portraitFrame}>
          <div className={styles.frameGlow} />
          <div className={styles.frameBorder}>
            <img
              src={portraitSrc}
              alt="Nath - Medical Student Portrait"
              className={styles.portraitImage}
            />
            <div className={styles.frameOverlay} />
          </div>
          <div className={`${styles.frameSparkle} ${styles.sparkle1}`} />
          <div className={`${styles.frameSparkle} ${styles.sparkle2}`} />
          <div className={`${styles.frameSparkle} ${styles.sparkle3}`} />
          <div className={`${styles.frameSparkle} ${styles.sparkle4}`} />
        </div>
      </div>
    </section>
  )
}
