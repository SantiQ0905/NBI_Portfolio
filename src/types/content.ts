import type { sectionIds } from '../constants/sections'

export type Locale = 'es' | 'en' | 'de'
export type Theme = 'light' | 'dark'

export type HeaderTranslation = {
  brandName: string
  brandDescription: string
  navAria: string
  ctaLabel: string
  languageLabel: string
  openMenu: string
  closeMenu: string
  themeLightLabel: string
  themeDarkLabel: string
}

export type NavigationItem = {
  id: (typeof sectionIds)[keyof typeof sectionIds]
  label: string
}

export type HeroTranslation = {
  eyebrow: string
  title: string
  description: {
    intro: string
    highlight: string
    body: string
  }
  ctas: {
    cv: string
    linkedin: string
    researchGate: string
  }
  floatingBadges: string[]
}

export type ProfileTranslation = {
  eyebrow: string
  title: string
  body: string
  chips: string[]
}

export type AvailabilityTranslation = {
  eyebrow: string
  title: string
  items: string[]
  link: string
}

export type ExperienceItem = {
  role: string
  place: string
  dates: string
  bullets: string[]
}

export type ExperienceTranslation = {
  eyebrow: string
  title: string
  intro: string
  items: ExperienceItem[]
}

export type TimelineItem = {
  period: string
  description: string
}

export type TimelineTranslation = {
  eyebrow: string
  title: string
  items: TimelineItem[]
}

export type ResearchProject = {
  badge: string
  title: string
  venue: string
  link: string
}

export type ResearchTranslation = {
  eyebrow: string
  title: string
  description: string
  projects: ResearchProject[]
  linkLabel: string
}

export type ContactDetail = {
  term: string
  description: string
}

export type ContactTranslation = {
  eyebrow: string
  title: string
  body: string
  form: {
    title: string
    fields: {
      name: {
        label: string
        placeholder: string
      }
      email: {
        label: string
        placeholder: string
      }
      subject: {
        label: string
        placeholder: string
      }
      message: {
        label: string
        placeholder: string
      }
    }
    submitButton: string
    submitting: string
    success: string
    error: string
  }
  info: {
    title: string
    emailSubtitle: string
    scheduleSubtitle: string
  }
  buttons: {
    primary: string
    schedule: string
  }
  scheduleSubject: string
  details: ContactDetail[]
  chips: string[]
  emailLabel: string
}

export type FooterTranslation = {
  brand: {
    tagline: string
    description: string
  }
  links: {
    title: string
    profile: string
    experience: string
    research: string
    contact: string
  }
  social: {
    title: string
    linkedin: string
    researchGate: string
    email: string
  }
  settings: {
    title: string
    theme: string
    language: string
    light: string
    dark: string
  }
  copyright: string
  builtWith: string
  backToTop: string
}

export type Translation = {
  header: HeaderTranslation
  navigation: NavigationItem[]
  hero: HeroTranslation
  profile: ProfileTranslation
  availability: AvailabilityTranslation
  experience: ExperienceTranslation
  timeline: TimelineTranslation
  research: ResearchTranslation
  contact: ContactTranslation
  footer: FooterTranslation
}
