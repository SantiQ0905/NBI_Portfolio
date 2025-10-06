import { useEffect, useMemo, useState } from 'react'
import './App.css'

type LanguageKey = 'en' | 'es' | 'de'
type ThemeMode = 'light' | 'dark'

type NavigationItem = {
  id: string
  label: string
}

type Statistic = {
  value: string
  label: string
}

type Highlight = {
  title: string
  text: string
}

type TimelineItem = {
  title: string
  period: string
  description: string
}

type ShowcaseItem = {
  title: string
  description: string
  badge: string
}

type LocaleContent = {
  brand: string
  navigation: NavigationItem[]
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryAction: string
    secondaryAction: string
    stats: Statistic[]
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    highlights: Highlight[]
    signature: string
  }
  journey: {
    eyebrow: string
    title: string
    items: TimelineItem[]
  }
  showcase: {
    eyebrow: string
    title: string
    description: string
    items: ShowcaseItem[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    primaryAction: string
    secondaryAction: string
  }
  footer: string
}

const localeContent: Record<LanguageKey, LocaleContent> = {
  en: {
    brand: 'Lorem Ipsum',
    navigation: [
      { id: 'hero', label: 'Lorem' },
      { id: 'about', label: 'Ipsum' },
      { id: 'journey', label: 'Dolor' },
      { id: 'showcase', label: 'Sit' },
      { id: 'contact', label: 'Amet' },
    ],
    hero: {
      eyebrow: 'Lorem ipsum dolor sit amet',
      title: 'Consectetur adipiscing elit vestibulum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra lorem at nulla facilisis, et dictum ipsum gravida. Vestibulum sed lorem posuere, posuere justo sed, pharetra ipsum.',
      primaryAction: 'Lorem ipsum',
      secondaryAction: 'Dolor sit',
      stats: [
        { value: '12+', label: 'Lorem ipsum habitant' },
        { value: '24K', label: 'Dolor sit amet luctus' },
        { value: '∞', label: 'Consectetur adipiscing' },
      ],
    },
    about: {
      eyebrow: 'Sed cursus',
      title: 'Phasellus lorem sapien vehicula',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed lorem ac felis volutpat cursus. Suspendisse potenti viverra urna vitae mattis dignissim.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nunc suscipit ipsum vel sem vulputate hendrerit. Duis vitae lorem sed velit sagittis molestie.',
      ],
      highlights: [
        {
          title: 'Lorem class aptent',
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit duis.',
        },
        {
          title: 'Dolor integer',
          text: 'Lorem ipsum dolor sit amet curabitur imperdiet lacus nec.',
        },
        {
          title: 'Sit amet posuere',
          text: 'Lorem ipsum dolor sit amet sed dictum sapien non maximus.',
        },
      ],
      signature: 'Lorem Ipsum Dolor',
    },
    journey: {
      eyebrow: 'Erat egestas',
      title: 'Maecenas lorem cursus etiam',
      items: [
        {
          title: 'Lorem ipsum lacinia',
          period: '2020 — 2021',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta lorem id augue condimentum, vel lobortis arcu ornare.',
        },
        {
          title: 'Dolor sit vestibulum',
          period: '2021 — 2022',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu lorem risus. Praesent pulvinar lorem sed orci dapibus pretium.',
        },
        {
          title: 'Amet faucibus pharetra',
          period: '2022 — Present',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus lorem ac urna faucibus tristique in at urna.',
        },
      ],
    },
    showcase: {
      eyebrow: 'Ligula aptent',
      title: 'Aliquam lorem dictum viverra',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lorem et ipsum blandit cursus. Pellentesque lorem ipsum, faucibus sed sapien quis, dapibus congue lorem.',
      items: [
        {
          title: 'Lorem sapien interdum',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed.',
          badge: 'Lorem',
        },
        {
          title: 'Dolor arcu placerat',
          description: 'Lorem ipsum dolor sit amet tristique habitasse platea dictumst.',
          badge: 'Ipsum',
        },
        {
          title: 'Sit amet congue',
          description: 'Lorem ipsum dolor sit amet donec ultricies vehicula blandit.',
          badge: 'Dolor',
        },
      ],
    },
    contact: {
      eyebrow: 'Pulvinar lorem',
      title: 'Vivamus lorem sodales dictum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim lorem a dolor posuere, ac finibus ipsum ultrices.',
      primaryAction: 'Lorem message',
      secondaryAction: 'Ipsum details',
    },
    footer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
  },
  es: {
    brand: 'Lorem Ipsum',
    navigation: [
      { id: 'hero', label: 'Lórem' },
      { id: 'about', label: 'Ípsum' },
      { id: 'journey', label: 'Dólor' },
      { id: 'showcase', label: 'Sít' },
      { id: 'contact', label: 'Ámet' },
    ],
    hero: {
      eyebrow: 'Lorem ipsum dolor sit amet',
      title: 'Consectetur adipiscing elit curabitur',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem ipsum, egestas in lorem vel, ornare fermentum ipsum. Aenean laoreet lorem ac lorem faucibus tristique.',
      primaryAction: 'Lorem mensaje',
      secondaryAction: 'Dolor visita',
      stats: [
        { value: '12+', label: 'Lorem ipsum habitant' },
        { value: '24K', label: 'Dolor sit amet luctus' },
        { value: '∞', label: 'Consectetur adipiscing' },
      ],
    },
    about: {
      eyebrow: 'Sed cursus',
      title: 'Phasellus lorem sapien feugiat',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem ipsum, cursus at lorem sed, maximus gravida lorem. Aliquam erat volutpat curabitur lorem ipsum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis lorem id lorem elementum bibendum. Cras lorem velit, feugiat at lorem ut, feugiat vulputate lorem.',
      ],
      highlights: [
        {
          title: 'Lorem class aptent',
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit duis.',
        },
        {
          title: 'Dolor integer',
          text: 'Lorem ipsum dolor sit amet curabitur imperdiet lacus nec.',
        },
        {
          title: 'Sit amet posuere',
          text: 'Lorem ipsum dolor sit amet sed dictum sapien non maximus.',
        },
      ],
      signature: 'Lorem Ipsum Dolor',
    },
    journey: {
      eyebrow: 'Erat egestas',
      title: 'Maecenas lorem cursus etiam',
      items: [
        {
          title: 'Lorem ipsum lacinia',
          period: '2020 — 2021',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem sem, hendrerit vitae lorem sit amet, dignissim elementum lorem.',
        },
        {
          title: 'Dolor sit vestibulum',
          period: '2021 — 2022',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem sapien, ornare vel lorem vitae, pharetra luctus lorem.',
        },
        {
          title: 'Amet faucibus pharetra',
          period: '2022 — Presente',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lorem sed lorem aliquam volutpat quis quis lorem.',
        },
      ],
    },
    showcase: {
      eyebrow: 'Ligula aptent',
      title: 'Aliquam lorem dictum viverra',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lorem et ipsum blandit cursus. Pellentesque lorem ipsum, faucibus sed sapien quis, dapibus congue lorem.',
      items: [
        {
          title: 'Lorem sapien interdum',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed.',
          badge: 'Lorem',
        },
        {
          title: 'Dolor arcu placerat',
          description: 'Lorem ipsum dolor sit amet tristique habitasse platea dictumst.',
          badge: 'Ípsum',
        },
        {
          title: 'Sit amet congue',
          description: 'Lorem ipsum dolor sit amet donec ultricies vehicula blandit.',
          badge: 'Dólor',
        },
      ],
    },
    contact: {
      eyebrow: 'Pulvinar lorem',
      title: 'Vivamus lorem sodales dictum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim lorem a dolor posuere, ac finibus ipsum ultrices.',
      primaryAction: 'Lorem mensaje',
      secondaryAction: 'Ípsum detalles',
    },
    footer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
  },
  de: {
    brand: 'Lorem Ipsum',
    navigation: [
      { id: 'hero', label: 'Lörem' },
      { id: 'about', label: 'Ípsum' },
      { id: 'journey', label: 'Dôlor' },
      { id: 'showcase', label: 'Sît' },
      { id: 'contact', label: 'Ämet' },
    ],
    hero: {
      eyebrow: 'Lorem ipsum dolor sit amet',
      title: 'Consectetur adipiscing elit egestas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem ipsum, hendrerit in lorem non, aliquet ullamcorper lorem. Mauris lorem nunc, bibendum eu lorem sed, aliquet vulputate lorem.',
      primaryAction: 'Lorem impulsum',
      secondaryAction: 'Dolor notam',
      stats: [
        { value: '12+', label: 'Lorem ipsum habitant' },
        { value: '24K', label: 'Dolor sit amet luctus' },
        { value: '∞', label: 'Consectetur adipiscing' },
      ],
    },
    about: {
      eyebrow: 'Sed cursus',
      title: 'Phasellus lorem sapien aliquet',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem urna, vestibulum in lorem at, tempus pharetra lorem. Vivamus lorem nulla, porta eu lorem vitae, egestas condimentum lorem.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem ipsum, tincidunt sit amet lorem non, lacinia semper lorem. Donec vitae lorem lacus, sed posuere lorem.',
      ],
      highlights: [
        {
          title: 'Lorem class aptent',
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit duis.',
        },
        {
          title: 'Dolor integer',
          text: 'Lorem ipsum dolor sit amet curabitur imperdiet lacus nec.',
        },
        {
          title: 'Sit amet posuere',
          text: 'Lorem ipsum dolor sit amet sed dictum sapien non maximus.',
        },
      ],
      signature: 'Lorem Ipsum Dolor',
    },
    journey: {
      eyebrow: 'Erat egestas',
      title: 'Maecenas lorem cursus etiam',
      items: [
        {
          title: 'Lorem ipsum lacinia',
          period: '2020 — 2021',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim lorem sed lorem cursus, sed fringilla lorem tincidunt.',
        },
        {
          title: 'Dolor sit vestibulum',
          period: '2021 — 2022',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lorem non lorem molestie lobortis sed eu lorem.',
        },
        {
          title: 'Amet faucibus pharetra',
          period: '2022 — Gegenwart',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lorem a lorem aliquam porta quis vel lorem.',
        },
      ],
    },
    showcase: {
      eyebrow: 'Ligula aptent',
      title: 'Aliquam lorem dictum viverra',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lorem et ipsum blandit cursus. Pellentesque lorem ipsum, faucibus sed sapien quis, dapibus congue lorem.',
      items: [
        {
          title: 'Lorem sapien interdum',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed.',
          badge: 'Lörem',
        },
        {
          title: 'Dolor arcu placerat',
          description: 'Lorem ipsum dolor sit amet tristique habitasse platea dictumst.',
          badge: 'Ípsum',
        },
        {
          title: 'Sit amet congue',
          description: 'Lorem ipsum dolor sit amet donec ultricies vehicula blandit.',
          badge: 'Dôlor',
        },
      ],
    },
    contact: {
      eyebrow: 'Pulvinar lorem',
      title: 'Vivamus lorem sodales dictum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim lorem a dolor posuere, ac finibus ipsum ultrices.',
      primaryAction: 'Lorem nachricht',
      secondaryAction: 'Ípsum notizen',
    },
    footer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
  },
}

const languages: { code: LanguageKey; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'de', label: 'DE' },
]

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem('theme-mode')
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  const prefersDark =
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

const getInitialLanguage = (): LanguageKey => {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem('portfolio-language') as LanguageKey | null
  return stored && ['en', 'es', 'de'].includes(stored) ? stored : 'en'
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)
  const [language, setLanguage] = useState<LanguageKey>(getInitialLanguage)

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.body.classList.remove('theme-light', 'theme-dark')
    document.body.classList.add(`theme-${theme}`)
    window.localStorage.setItem('theme-mode', theme)
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.2 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [language])

  const content = useMemo(() => localeContent[language], [language])

  return (
    <div className="app-shell">
      <div className="orb orb-one" aria-hidden />
      <div className="orb orb-two" aria-hidden />
      <header className="site-header">
        <div className="brand" aria-label={content.brand}>
          <span className="brand-mark" />
          <span className="brand-name">{content.brand}</span>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {content.navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <div className="language-switcher" role="group" aria-label="Language selector">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                className={`chip ${language === lang.code ? 'chip-active' : ''}`}
                onClick={() => setLanguage(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="icon-button"
            aria-label={theme === 'light' ? 'Activate dark mode' : 'Activate light mode'}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" aria-hidden className="icon">
                <path d="M12 4a1 1 0 0 1 1 1v1.05a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1Zm6.36 2.64a1 1 0 0 1 0 1.41l-.74.74a1 1 0 1 1-1.41-1.41l.74-.74a1 1 0 0 1 1.41 0ZM19 11a1 1 0 0 1 1 1 6 6 0 0 1-6 6 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 0 1 1-1Zm-7 7a1 1 0 0 1 1 1v1.05a1 1 0 0 1-2 0V19a1 1 0 0 1 1-1Zm-7-7a1 1 0 0 1 1-1h1.05a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm2.11-6.36a1 1 0 0 1 1.41 0l.74.74A1 1 0 1 1 8.41 8l-.74-.74a1 1 0 0 1 0-1.41ZM7.05 16.6a1 1 0 0 1 1.41 0l.74.74A1 1 0 1 1 7.8 18.8l-.74-.74a1 1 0 0 1 0-1.41Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden className="icon">
                <path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-8.94-8.05 1 1 0 0 1 1.53-.93 5.5 5.5 0 0 0 7.62-7.62 1 1 0 0 1-.93-1.53A9 9 0 0 1 21 12Z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="hero reveal">
          <div className="hero-content">
            <span className="eyebrow">{content.hero.eyebrow}</span>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.description}</p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                {content.hero.primaryAction}
              </a>
              <a href="#showcase" className="button button-secondary">
                {content.hero.secondaryAction}
              </a>
            </div>
            <dl className="hero-stats">
              {content.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero-visual" aria-hidden>
            <div className="hero-planet" />
            <div className="hero-trail" />
            <div className="hero-glow" />
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="section-header">
            <span className="eyebrow">{content.about.eyebrow}</span>
            <h2>{content.about.title}</h2>
          </div>
          <div className="section-body">
            <div className="section-text">
              {content.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="signature">{content.about.signature}</div>
            </div>
            <div className="highlight-grid">
              {content.about.highlights.map((highlight) => (
                <article key={highlight.title} className="highlight-card">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="section reveal">
          <div className="section-header">
            <span className="eyebrow">{content.journey.eyebrow}</span>
            <h2>{content.journey.title}</h2>
          </div>
          <div className="timeline">
            {content.journey.items.map((item) => (
              <article key={item.title} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="showcase" className="section reveal">
          <div className="section-header">
            <span className="eyebrow">{content.showcase.eyebrow}</span>
            <h2>{content.showcase.title}</h2>
            <p>{content.showcase.description}</p>
          </div>
          <div className="card-grid">
            {content.showcase.items.map((item) => (
              <article key={item.title} className="project-card">
                <span className="badge">{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <div className="section-header">
            <span className="eyebrow">{content.contact.eyebrow}</span>
            <h2>{content.contact.title}</h2>
            <p>{content.contact.description}</p>
          </div>
          <div className="contact-actions">
            <a href="mailto:lorem@ipsum.com" className="button button-primary">
              {content.contact.primaryAction}
            </a>
            <a href="#hero" className="button button-secondary">
              {content.contact.secondaryAction}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{content.footer}</p>
      </footer>
    </div>
  )
}

export default App
