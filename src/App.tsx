import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProfileSection } from './components/ProfileSection'
import { AvailabilitySection } from './components/AvailabilitySection'
import { ExperienceSection } from './components/ExperienceSection'
import { TimelineSection } from './components/TimelineSection'
import { ResearchSection } from './components/ResearchSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { sectionIds } from './constants/sections'
import { languageNames, translations } from './data/translations'
import type { Locale, Theme } from './types/content'

function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('locale') as Locale | null
      if (stored && ['es', 'en', 'de'].includes(stored)) {
        return stored
      }
      const browserLanguage = window.navigator.language.slice(0, 2) as Locale
      if (browserLanguage === 'en' || browserLanguage === 'de') {
        return browserLanguage
      }
    }
    return 'es'
  })

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('theme') as Theme | null
      if (stored === 'light' || stored === 'dark') {
        return stored
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const t = translations[locale]

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('locale', locale)
  }, [locale])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.classList.remove('theme-light', 'theme-dark')
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light')
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])

  useEffect(() => {
    if (typeof document === 'undefined') return
    if (isMenuOpen) {
      document.body.style.setProperty('overflow', 'hidden')
    } else {
      document.body.style.removeProperty('overflow')
    }
    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [locale])

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
  }, [])

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale)
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleNavLinkClick = () => {
    setIsMenuOpen(false)
  }

  const scheduleMailTo = `mailto:nath@example.com?subject=${encodeURIComponent(t.contact.scheduleSubject)}`

  return (
    <div id="top" className="app-shell">
      <div className="orb orb-one" aria-hidden />
      <div className="orb orb-two" aria-hidden />

      <Header
        header={t.header}
        navigation={t.navigation}
        locale={locale}
        theme={theme}
        isMenuOpen={isMenuOpen}
        languageNames={languageNames}
        onLocaleChange={handleLocaleChange}
        onToggleTheme={toggleTheme}
        onToggleMenu={handleMenuToggle}
        onNavLinkClick={handleNavLinkClick}
      />

      <main>
        <HeroSection hero={t.hero} />
        <ProfileSection profile={t.profile} sectionId={sectionIds.profile} />
        <AvailabilitySection availability={t.availability} contactId={sectionIds.contact} />
        <ExperienceSection experience={t.experience} sectionId={sectionIds.experience} />
        <TimelineSection timeline={t.timeline} />
        <ResearchSection research={t.research} sectionId={sectionIds.research} />
      </main>

      <ContactSection
        contact={t.contact}
        sectionId={sectionIds.contact}
        scheduleMailTo={scheduleMailTo}
      />

      <Footer
        footer={t.footer}
        locale={locale}
        theme={theme}
        languageNames={languageNames}
        onToggleTheme={toggleTheme}
        onLocaleChange={handleLocaleChange}
      />
    </div>
  )
}

export default App
