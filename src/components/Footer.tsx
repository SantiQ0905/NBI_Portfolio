import type { Locale, FooterTranslation } from '../types/content'
import { sectionIds } from '../constants/sections'
import styles from './Footer.module.css'

export type FooterProps = {
  footer: FooterTranslation
  locale: Locale
  theme: 'light' | 'dark'
  languageNames: Record<Locale, string>
  onToggleTheme: () => void
  onLocaleChange: (locale: Locale) => void
}

export function Footer({ footer, locale, theme, languageNames, onToggleTheme, onLocaleChange }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: footer.social.linkedin,
      url: 'https://linkedin.com/in/nath-example',
      icon: '💼'
    },
    {
      name: footer.social.researchGate,
      url: 'https://researchgate.net/profile/nath-example',
      icon: '🔬'
    },
    {
      name: footer.social.email,
      url: 'mailto:nath@example.com',
      icon: '✉️'
    }
  ]

  const availableLocales: Locale[] = ['es', 'en', 'de']

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContainer}>
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          {/* Brand Section */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <div className={styles.footerLogoMark}>
                <span>N</span>
              </div>
              <div className={styles.footerBrandText}>
                <div className={styles.footerBrandName}>Nath</div>
                <div className={styles.footerBrandTagline}>{footer.brand.tagline}</div>
              </div>
            </div>
            <p className={styles.footerDescription}>
              {footer.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerLinks}>
            <h4>{footer.links.title}</h4>
            <nav className={styles.footerNav}>
              <a href={`#${sectionIds.profile}`} className={styles.footerLink}>{footer.links.profile}</a>
              <a href={`#${sectionIds.experience}`} className={styles.footerLink}>{footer.links.experience}</a>
              <a href={`#${sectionIds.research}`} className={styles.footerLink}>{footer.links.research}</a>
              <a href={`#${sectionIds.contact}`} className={styles.footerLink}>{footer.links.contact}</a>
            </nav>
          </div>

          {/* Social Links */}
          <div className={styles.footerSocial}>
            <h4>{footer.social.title}</h4>
            <div className={styles.footerSocialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={styles.footerSocialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.name}`}
                >
                  <span className={styles.footerSocialIcon}>{link.icon}</span>
                  <span className={styles.footerSocialText}>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className={styles.footerSettings}>
            <h4>{footer.settings.title}</h4>
            <div className={styles.footerControls}>
              <div className={styles.footerControl}>
                <label htmlFor="footer-theme" className={styles.footerControlLabel}>
                  {footer.settings.theme}
                </label>
                <button
                  id="footer-theme"
                  onClick={onToggleTheme}
                  className={styles.footerThemeToggle}
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  <span className={styles.footerThemeIcon}>
                    {theme === 'dark' ? '🌙' : '☀️'}
                  </span>
                  <span>{theme === 'dark' ? footer.settings.dark : footer.settings.light}</span>
                </button>
              </div>
              
              <div className={styles.footerControl}>
                <label className={styles.footerControlLabel}>{footer.settings.language}</label>
                <div className={styles.footerLanguageSelector}>
                  {availableLocales.map((availableLocale) => (
                    <button
                      key={availableLocale}
                      onClick={() => onLocaleChange(availableLocale)}
                      className={`${styles.footerLanguageOption} ${locale === availableLocale ? styles.active : ''}`}
                      aria-label={`Change language to ${languageNames[availableLocale]}`}
                    >
                      <span className={styles.footerLanguageCode}>{availableLocale.toUpperCase()}</span>
                      <span className={styles.footerLanguageName}>{languageNames[availableLocale]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <div className={styles.footerCopyright}>
              <p>&copy; {currentYear} Nath. {footer.copyright}</p>
              <p className={styles.footerBuiltWith}>
                {footer.builtWith}
              </p>
            </div>
            
            <div className={styles.footerMeta}>
              <a href="#top" className={styles.footerBackToTop}>
                <span className={styles.footerBackIcon}>↑</span>
                <span>{footer.backToTop}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}