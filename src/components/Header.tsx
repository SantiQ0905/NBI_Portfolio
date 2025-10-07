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
    <header className="site-header">
      <div className="brand" aria-label={header.brandDescription}>
        <span className="brand-mark">
          <span className="brand-mark-glint" aria-hidden />
        </span>
        <span className="brand-name">
          {header.brandName}
          <span className="brand-star" aria-hidden>
            ✶
          </span>
        </span>
      </div>

      <nav
        id="primary-navigation"
        className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
        aria-label={header.navAria}
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="nav-link"
            onClick={onNavLinkClick}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-utilities">
        <div className="control-cluster">
          <label htmlFor="language-select" className="sr-only">
            {header.languageLabel}
          </label>
          <select
            id="language-select"
            className="language-select"
            value={locale}
            onChange={(event) => {
              const nextLocale = event.target.value as Locale
              if (AVAILABLE_LOCALES.includes(nextLocale)) {
                onLocaleChange(nextLocale)
              }
            }}
          >
            {Object.entries(languageNames).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="theme-toggle"
            aria-label={themeToggleLabel}
            aria-pressed={theme === 'dark'}
            onClick={onToggleTheme}
          >
            <span aria-hidden>{theme === 'dark' ? '🌞' : '🌙'}</span>
            <span className="sr-only">{themeToggleLabel}</span>
          </button>
        </div>

        <a className="button button-primary" href={`#${sectionIds.contact}`}>
          {header.ctaLabel}
        </a>

        <button
          type="button"
          className="menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={onToggleMenu}
        >
          <span className="menu-icon" aria-hidden />
          <span className="sr-only">{menuButtonLabel}</span>
        </button>
      </div>
    </header>
  )
}
