import type { Locale, FooterTranslation } from '../types/content'

export type FooterProps = {
  footer: FooterTranslation
  locale: Locale
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Footer({ footer, locale, theme, onToggleTheme }: FooterProps) {
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

  const getLanguageLabel = (locale: Locale) => {
    switch (locale) {
      case 'es': return 'Español'
      case 'en': return 'English'
      case 'de': return 'Deutsch'
      default: return 'English'
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <span>N</span>
              </div>
              <div className="footer-brand-text">
                <div className="footer-brand-name">Nath</div>
                <div className="footer-brand-tagline">{footer.brand.tagline}</div>
              </div>
            </div>
            <p className="footer-description">
              {footer.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>{footer.links.title}</h4>
            <nav className="footer-nav">
              <a href="#profile" className="footer-link">{footer.links.profile}</a>
              <a href="#experience" className="footer-link">{footer.links.experience}</a>
              <a href="#research" className="footer-link">{footer.links.research}</a>
              <a href="#contact" className="footer-link">{footer.links.contact}</a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4>{footer.social.title}</h4>
            <div className="footer-social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.name}`}
                >
                  <span className="footer-social-icon">{link.icon}</span>
                  <span className="footer-social-text">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="footer-settings">
            <h4>{footer.settings.title}</h4>
            <div className="footer-controls">
              <div className="footer-control">
                <label htmlFor="footer-theme" className="footer-control-label">
                  {footer.settings.theme}
                </label>
                <button
                  id="footer-theme"
                  onClick={onToggleTheme}
                  className="footer-theme-toggle"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  <span className="footer-theme-icon">
                    {theme === 'dark' ? '🌙' : '☀️'}
                  </span>
                  <span>{theme === 'dark' ? footer.settings.dark : footer.settings.light}</span>
                </button>
              </div>
              
              <div className="footer-control">
                <label className="footer-control-label">{footer.settings.language}</label>
                <div className="footer-language-display">
                  <span className="footer-language-icon">🌐</span>
                  <span>{getLanguageLabel(locale)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Nath. {footer.copyright}</p>
              <p className="footer-built-with">
                {footer.builtWith}
              </p>
            </div>
            
            <div className="footer-meta">
              <a href="#top" className="footer-back-to-top">
                <span className="footer-back-icon">↑</span>
                <span>{footer.backToTop}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}