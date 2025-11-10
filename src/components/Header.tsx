import styles from './Header.module.css'
import { sectionIds } from '../constants/sections'
import type {
  HeaderTranslation,
  NavigationItem,
  Locale,
  Theme,
} from '../types/content'

const AVAILABLE_LOCALES: Locale[] = ['es', 'en', 'de']

export type HeaderProps = {
  header: HeaderTranslation
  navigation: NavigationItem[]
  locale: Locale
  theme: Theme
  isMenuOpen: boolean
  languageNames: Record<Locale, string>
  onLocaleChange: (locale: Locale) => void
  onToggleTheme: () => void
  onToggleMenu: () => void
  onNavLinkClick: () => void
}

export function Header({
  header,
  navigation,
  locale,
  theme,
  isMenuOpen,
  languageNames,
  onLocaleChange,
  onToggleTheme,
  onToggleMenu,
  onNavLinkClick,
}: HeaderProps) {
  const themeToggleLabel = theme === 'dark' ? header.themeLightLabel : header.themeDarkLabel
  const menuButtonLabel = isMenuOpen ? header.closeMenu : header.openMenu

  return (
    <header className={styles.modernHeader}>
      <div className={styles.headerContainer}>
        {/* Logo/Brand Section */}
        <div className={styles.headerBrand}>
          <a href="#top" className={styles.brandLogo} aria-label={header.brandDescription}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L6 12L16 22L26 12L16 2Z" fill="currentColor" opacity="0.9"/>
                <path d="M16 12L6 22L16 30L26 22L16 12Z" fill="currentColor" opacity="0.6"/>
              </svg>
            </div>
            <span className={styles.brandText}>{header.brandName}</span>
          </a>
        </div>

        {/* Navigation Section */}
        <nav
          id="primary-navigation"
          className={`${styles.headerNav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label={header.navAria}
        >
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.id} className={styles.navItem}>
                <a
                  href={`#${item.id}`}
                  className={styles.navLink}
                  onClick={onNavLinkClick}
                >
                  <span className={styles.navLinkText}>{item.label}</span>
                  <span className={styles.navLinkIndicator} aria-hidden="true"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions Section */}
        <div className={styles.headerActions}>
          {/* Language Switcher */}
          <div className={styles.languageSwitcher}>
            <button
              type="button"
              className={styles.languageButton}
              aria-label={header.languageLabel}
              title={languageNames[locale]}
            >
              <svg className={styles.languageIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className={styles.languageCode}>{locale.toUpperCase()}</span>
            </button>
            <div className={styles.languageDropdown}>
              {AVAILABLE_LOCALES.map((availableLocale) => (
                <button
                  key={availableLocale}
                  type="button"
                  className={`${styles.languageOption} ${locale === availableLocale ? styles.active : ''}`}
                  onClick={() => onLocaleChange(availableLocale)}
                >
                  <span className={styles.optionCode}>{availableLocale.toUpperCase()}</span>
                  <span className={styles.optionName}>{languageNames[availableLocale]}</span>
                  {locale === availableLocale && (
                    <svg className={styles.checkIcon} viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            className={styles.themeButton}
            aria-label={themeToggleLabel}
            aria-pressed={theme === 'dark'}
            onClick={onToggleTheme}
            title={themeToggleLabel}
          >
            <svg className={`${styles.themeIcon} ${styles.themeIconLight}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2V4M12 20V22M22 12H20M4 12H2M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg className={`${styles.themeIcon} ${styles.themeIconDark}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* CTA Button */}
          <a className={styles.ctaButton} href={`#${sectionIds.contact}`}>
            <span className={styles.ctaText}>{header.ctaLabel}</span>
            <svg className={styles.ctaArrow} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2L14 8L8 14M14 8H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={onToggleMenu}
            aria-label={menuButtonLabel}
          >
            <span className={`${styles.menuBar} ${styles.menuBar1}`}></span>
            <span className={`${styles.menuBar} ${styles.menuBar2}`}></span>
            <span className={`${styles.menuBar} ${styles.menuBar3}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className={styles.mobileOverlay} 
          onClick={onToggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </header>
  )
}
