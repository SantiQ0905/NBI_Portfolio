import { useEffect, useState } from 'react'
import './App.css'

const sectionIds = {
  profile: 'perfil',
  experience: 'experiencia',
  research: 'investigacion',
  contact: 'contacto',
} as const

type Locale = 'es' | 'en' | 'de'
type Theme = 'light' | 'dark'

type Translation = {
  header: {
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
  navigation: Array<{ id: string; label: string }>
  hero: {
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
  profile: {
    eyebrow: string
    title: string
    body: string
    chips: string[]
  }
  availability: {
    eyebrow: string
    title: string
    items: string[]
    link: string
  }
  experience: {
    eyebrow: string
    title: string
    intro: string
    items: Array<{
      role: string
      place: string
      dates: string
      bullets: string[]
    }>
  }
  timeline: {
    eyebrow: string
    title: string
    items: Array<{
      period: string
      description: string
    }>
  }
  research: {
    eyebrow: string
    title: string
    description: string
    projects: Array<{
      badge: string
      title: string
      venue: string
      link: string
    }>
    linkLabel: string
  }
  contact: {
    eyebrow: string
    title: string
    body: string
    buttons: {
      primary: string
      schedule: string
    }
    scheduleSubject: string
    details: Array<{
      term: string
      description: string
    }>
    chips: string[]
    emailLabel: string
  }
  footer: string
}

const languageNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  de: 'Deutsch',
}

const translations: Record<Locale, Translation> = {
  es: {
    header: {
      brandName: 'Nath — Medicina',
      brandDescription: 'Nath — Medicina',
      navAria: 'Navegación principal',
      ctaLabel: 'Escríbeme',
      languageLabel: 'Seleccionar idioma',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      themeLightLabel: 'Cambiar a modo claro',
      themeDarkLabel: 'Cambiar a modo oscuro',
    },
    navigation: [
      { id: sectionIds.profile, label: 'Perfil' },
      { id: sectionIds.experience, label: 'Experiencia' },
      { id: sectionIds.research, label: 'Investigación' },
      { id: sectionIds.contact, label: 'Contacto' },
    ],
    hero: {
      eyebrow: 'Estudiante de Medicina • Clínica • Investigación',
      title: 'Cuidar con ciencia, liderar con humanidad.',
      description: {
        intro: 'Soy ',
        highlight: 'Nath',
        body: ', estudiante de Medicina con vocación por la atención integral, la educación para la salud y la investigación clínica. Creo en la medicina basada en evidencia y en el trato humano que escucha, explica y acompaña.',
      },
      ctas: {
        cv: 'Ver CV',
        linkedin: 'LinkedIn',
        researchGate: 'ResearchGate',
      },
      floatingBadges: ['Atención centrada en la persona', 'Evidencia + empatía'],
    },
    profile: {
      eyebrow: 'Perfil',
      title: 'Perfil',
      body: 'Soy estudiante de Medicina con interés en medicina familiar y salud pública. Me motiva traducir la evidencia científica a un lenguaje claro para que cada paciente entienda su diagnóstico, tratamiento y opciones. He participado en iniciativas de promoción de la salud, campañas de vacunación y proyectos de alfabetización en salud. Busco integrarme a equipos multidisciplinarios donde la ética, la calidad y la comunicación sean pilares del cuidado.',
      chips: ['Atención primaria', 'Promoción de la salud', 'Educación para pacientes', 'Investigación clínica'],
    },
    availability: {
      eyebrow: 'Disponibilidad',
      title: 'Rotaciones y voluntariado',
      items: ['Tardes entre semana (presencial o híbrido)', 'Sábados por la mañana', 'Estancias cortas o proyectos por objetivos'],
      link: 'Proponer colaboración →',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Experiencia clínica, educativa e investigadora',
      intro: 'Acompaño procesos de salud en entornos comunitarios, escolares y académicos con un enfoque que integra ciencia, pedagogía y empatía.',
      items: [
        {
          role: 'Voluntariado clínico',
          place: 'Clínica Comunitaria Luz Azul',
          dates: '2024 — Presente',
          bullets: [
            'Registro de signos vitales y triage básico con EMR.',
            'Consejería breve sobre adherencia terapéutica.',
            'Apoyo en campañas de vacunación y detección oportuna.',
          ],
        },
        {
          role: 'Educación para la salud',
          place: 'Programa Escolar Vida Sana',
          dates: '2023 — 2024',
          bullets: [
            'Talleres de hábitos saludables para adolescentes.',
            'Diseño de infografías y materiales didácticos.',
            'Coordinación con docentes y personal de salud local.',
          ],
        },
        {
          role: 'Asistente de investigación',
          place: 'Instituto Universitario de Ciencias Médicas',
          dates: '2023 — 2025',
          bullets: [
            'Revisión bibliográfica y construcción de bases de datos.',
            'Apoyo en protocolos y consentimientos informados.',
            'Presentación de póster en congreso estudiantil.',
          ],
        },
      ],
    },
    timeline: {
      eyebrow: 'Línea de tiempo',
      title: 'Hitos de formación',
      items: [
        {
          period: '2023 — Inicio de carrera',
          description: 'Primeros semestres, fundamentos clínicos, servicio comunitario.',
        },
        {
          period: '2024 — Primer proyecto de investigación',
          description: 'Revisión narrativa y presentación de póster.',
        },
        {
          period: '2025 — Contacto clínico ampliado',
          description: 'Rotaciones, educación para pacientes y trabajo interdisciplinario.',
        },
      ],
    },
    research: {
      eyebrow: 'Investigación',
      title: 'Proyectos y difusión científica',
      description: '¿Tienes un nuevo proyecto o publicación? Añádelo aquí con un enlace o PDF.',
      projects: [
        {
          badge: 'Póster',
          title: 'Adherencia al tratamiento en diabetes tipo 2: revisión narrativa',
          venue: 'Congreso Estudiantil de Salud, 2024',
          link: '#',
        },
        {
          badge: 'Revisión',
          title: 'Estrategias de educación para pacientes con hipertensión arterial',
          venue: 'En preparación | 2025',
          link: '#',
        },
        {
          badge: 'Caso clínico',
          title: 'Abordaje integral de paciente geriátrico con fragilidad',
          venue: 'Portafolio docente, 2025',
          link: '#',
        },
      ],
      linkLabel: 'Consultar proyecto →',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Conversemos',
      body: 'Para oportunidades clínicas, investigación o proyectos de educación para la salud, escríbeme y con gusto responderé. Me interesan equipos colaborativos con enfoque en calidad, ética y comunicación clara.',
      buttons: {
        primary: 'Escríbeme',
        schedule: 'Agendar una reunión',
      },
      scheduleSubject: 'Solicitud de reunión',
      details: [
        { term: 'Ciudad', description: 'Monterrey, MX' },
        { term: 'Intereses', description: 'medicina familiar, educación en salud, geriatría' },
        { term: 'Idiomas', description: 'español, inglés, alemán' },
      ],
      chips: ['Empatía', 'Ética', 'Trabajo en equipo', 'Aprendizaje continuo'],
      emailLabel: 'nath@example.com',
    },
    footer: 'Nath — Medicina. Atención basada en evidencia y trato humano.',
  },
  en: {
    header: {
      brandName: 'Nath — Medicine',
      brandDescription: 'Nath — Medicine portfolio',
      navAria: 'Primary navigation',
      ctaLabel: 'Contact me',
      languageLabel: 'Select language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      themeLightLabel: 'Switch to light mode',
      themeDarkLabel: 'Switch to dark mode',
    },
    navigation: [
      { id: sectionIds.profile, label: 'Profile' },
      { id: sectionIds.experience, label: 'Experience' },
      { id: sectionIds.research, label: 'Research' },
      { id: sectionIds.contact, label: 'Contact' },
    ],
    hero: {
      eyebrow: 'Medical Student • Clinical • Research',
      title: 'Care with science, lead with humanity.',
      description: {
        intro: "I'm ",
        highlight: 'Nath',
        body: ', a medical student passionate about comprehensive care, health education, and clinical research. I believe in evidence-based medicine paired with a human approach that listens, explains, and walks alongside each person.',
      },
      ctas: {
        cv: 'View résumé',
        linkedin: 'LinkedIn',
        researchGate: 'ResearchGate',
      },
      floatingBadges: ['Person-centered care', 'Evidence + empathy'],
    },
    profile: {
      eyebrow: 'Profile',
      title: 'Profile',
      body: 'I am a medical student interested in family medicine and public health. I love translating scientific evidence into clear language so every patient understands their diagnosis, treatment, and options. I have contributed to health-promotion initiatives, vaccination drives, and health-literacy projects. I seek multidisciplinary teams where ethics, quality, and communication guide every decision.',
      chips: ['Primary care', 'Health promotion', 'Patient education', 'Clinical research'],
    },
    availability: {
      eyebrow: 'Availability',
      title: 'Rotations and volunteering',
      items: ['Weekday afternoons (on-site or hybrid)', 'Saturday mornings', 'Short rotations or objective-based projects'],
      link: 'Propose a collaboration →',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Clinical, educational, and research experience',
      intro: 'I support health journeys in community, school, and academic settings with an approach that integrates science, pedagogy, and empathy.',
      items: [
        {
          role: 'Clinical volunteer',
          place: 'Luz Azul Community Clinic',
          dates: '2024 — Present',
          bullets: [
            'Recorded vital signs and completed basic triage in the EMR.',
            'Provided brief counseling to reinforce treatment adherence.',
            'Supported vaccination campaigns and early-detection fairs.',
          ],
        },
        {
          role: 'Health education lead',
          place: 'Vida Sana School Program',
          dates: '2023 — 2024',
          bullets: [
            'Delivered healthy-habits workshops for teenagers.',
            'Designed infographics and teaching materials.',
            'Coordinated with teachers and local health professionals.',
          ],
        },
        {
          role: 'Research assistant',
          place: 'University Institute of Medical Sciences',
          dates: '2023 — 2025',
          bullets: [
            'Completed literature reviews and built research databases.',
            'Supported protocol design and informed-consent drafting.',
            'Presented a student-conference poster.',
          ],
        },
      ],
    },
    timeline: {
      eyebrow: 'Timeline',
      title: 'Training milestones',
      items: [
        {
          period: '2023 — Early training',
          description: 'First semesters, clinical fundamentals, community service.',
        },
        {
          period: '2024 — First research project',
          description: 'Narrative review and poster presentation.',
        },
        {
          period: '2025 — Expanded clinical exposure',
          description: 'Rotations, patient education, and interdisciplinary teamwork.',
        },
      ],
    },
    research: {
      eyebrow: 'Research',
      title: 'Projects and scientific outreach',
      description: 'Have a new project or publication? Add it here with a link or PDF.',
      projects: [
        {
          badge: 'Poster',
          title: 'Medication adherence in type 2 diabetes: narrative review',
          venue: 'Student Health Congress, 2024',
          link: '#',
        },
        {
          badge: 'Review',
          title: 'Education strategies for patients with hypertension',
          venue: 'In preparation | 2025',
          link: '#',
        },
        {
          badge: 'Case study',
          title: 'Comprehensive approach to frail geriatric patients',
          venue: 'Teaching portfolio, 2025',
          link: '#',
        },
      ],
      linkLabel: 'View project →',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's connect",
      body: 'For clinical, research, or health-education collaborations, send me a message and I will be happy to reply. I value collaborative teams focused on quality, ethics, and clear communication.',
      buttons: {
        primary: 'Email me',
        schedule: 'Schedule a meeting',
      },
      scheduleSubject: 'Meeting request',
      details: [
        { term: 'City', description: 'Monterrey, MX' },
        { term: 'Interests', description: 'family medicine, health education, geriatrics' },
        { term: 'Languages', description: 'Spanish, English, German' },
      ],
      chips: ['Empathy', 'Ethics', 'Teamwork', 'Continuous learning'],
      emailLabel: 'nath@example.com',
    },
    footer: 'Nath — Medicine. Evidence-based care with a human touch.',
  },
  de: {
    header: {
      brandName: 'Nath — Medizin',
      brandDescription: 'Portfolio von Nath — Medizin',
      navAria: 'Hauptnavigation',
      ctaLabel: 'Kontakt aufnehmen',
      languageLabel: 'Sprache wählen',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      themeLightLabel: 'Zum hellen Modus wechseln',
      themeDarkLabel: 'Zum dunklen Modus wechseln',
    },
    navigation: [
      { id: sectionIds.profile, label: 'Profil' },
      { id: sectionIds.experience, label: 'Erfahrung' },
      { id: sectionIds.research, label: 'Forschung' },
      { id: sectionIds.contact, label: 'Kontakt' },
    ],
    hero: {
      eyebrow: 'Medizinstudentin • Klinik • Forschung',
      title: 'Mit Wissenschaft handeln, mit Menschlichkeit führen.',
      description: {
        intro: 'Ich bin ',
        highlight: 'Nath',
        body: ', Medizinstudentin mit Leidenschaft für ganzheitliche Versorgung, Gesundheitsbildung und klinische Forschung. Ich glaube an evidenzbasierte Medizin kombiniert mit einem menschlichen Ansatz, der zuhört, erklärt und begleitet.',
      },
      ctas: {
        cv: 'Lebenslauf ansehen',
        linkedin: 'LinkedIn',
        researchGate: 'ResearchGate',
      },
      floatingBadges: ['Menschenzentrierte Versorgung', 'Evidenz + Empathie'],
    },
    profile: {
      eyebrow: 'Profil',
      title: 'Profil',
      body: 'Ich studiere Medizin mit einem Schwerpunkt auf Hausarztmedizin und öffentlicher Gesundheit. Mir liegt daran, wissenschaftliche Evidenz in eine verständliche Sprache zu übersetzen, damit jede Person Diagnose, Behandlung und Optionen nachvollziehen kann. Ich habe an Programmen zur Gesundheitsförderung, an Impfkampagnen und an Projekten zur Gesundheitskompetenz mitgewirkt. Ich suche interdisziplinäre Teams, in denen Ethik, Qualität und Kommunikation die Basis bilden.',
      chips: ['Primärversorgung', 'Gesundheitsförderung', 'Patientenschulung', 'Klinische Forschung'],
    },
    availability: {
      eyebrow: 'Verfügbarkeit',
      title: 'Rotationen und Ehrenamt',
      items: ['Unter der Woche am Nachmittag (vor Ort oder hybrid)', 'Samstagvormittage', 'Kurzzeitrotationen oder projektbasierte Mitarbeit'],
      link: 'Zusammenarbeit vorschlagen →',
    },
    experience: {
      eyebrow: 'Erfahrung',
      title: 'Klinische, pädagogische und Forschungserfahrung',
      intro: 'Ich begleite Gesundheitsprozesse in Gemeinden, Schulen und akademischen Räumen mit einem Ansatz, der Wissenschaft, Pädagogik und Empathie verbindet.',
      items: [
        {
          role: 'Klinische Freiwillige',
          place: 'Gemeindeklinik Luz Azul',
          dates: '2024 — Gegenwart',
          bullets: [
            'Erhebung von Vitalparametern und Basis-Triage im EMR.',
            'Kurzberatung zur Unterstützung der Therapietreue.',
            'Mitarbeit bei Impfkampagnen und Früherkennungsaktionen.',
          ],
        },
        {
          role: 'Leitung Gesundheitsbildung',
          place: 'Schulprogramm Vida Sana',
          dates: '2023 — 2024',
          bullets: [
            'Workshops zu gesunden Gewohnheiten für Jugendliche.',
            'Gestaltung von Infografiken und Unterrichtsmaterialien.',
            'Koordination mit Lehrkräften und lokalem Gesundheitspersonal.',
          ],
        },
        {
          role: 'Wissenschaftliche Hilfskraft',
          place: 'Universitäres Institut für Medizinische Wissenschaften',
          dates: '2023 — 2025',
          bullets: [
            'Literaturrecherchen und Aufbau von Forschungsdatenbanken.',
            'Unterstützung bei Protokollen und Einverständniserklärungen.',
            'Posterpräsentation auf einer Studierendenkonferenz.',
          ],
        },
      ],
    },
    timeline: {
      eyebrow: 'Zeitstrahl',
      title: 'Stationen der Ausbildung',
      items: [
        {
          period: '2023 — Studienbeginn',
          description: 'Erste Semester, klinische Grundlagen, Gemeindedienst.',
        },
        {
          period: '2024 — Erstes Forschungsprojekt',
          description: 'Narrative Übersichtsarbeit und Posterpräsentation.',
        },
        {
          period: '2025 — Erweiterte klinische Praxis',
          description: 'Rotationen, Patientenschulung und interdisziplinäre Zusammenarbeit.',
        },
      ],
    },
    research: {
      eyebrow: 'Forschung',
      title: 'Projekte und wissenschaftliche Kommunikation',
      description: 'Neues Projekt oder Publikation? Ergänze es hier mit Link oder PDF.',
      projects: [
        {
          badge: 'Poster',
          title: 'Therapietreue bei Typ-2-Diabetes: narrative Übersichtsarbeit',
          venue: 'Studierendenkongress Gesundheit, 2024',
          link: '#',
        },
        {
          badge: 'Übersicht',
          title: 'Bildungsstrategien für Menschen mit Hypertonie',
          venue: 'In Vorbereitung | 2025',
          link: '#',
        },
        {
          badge: 'Fallstudie',
          title: 'Ganzheitliche Betreuung einer gebrechlichen geriatrischen Patientin',
          venue: 'Lehrportfolio, 2025',
          link: '#',
        },
      ],
      linkLabel: 'Projekt ansehen →',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Lass uns sprechen',
      body: 'Für klinische Einsätze, Forschung oder Gesundheitsbildungsprojekte freue ich mich über deine Nachricht. Mir sind Teams wichtig, die Zusammenarbeit, Qualität, Ethik und klare Kommunikation leben.',
      buttons: {
        primary: 'E-Mail senden',
        schedule: 'Termin vereinbaren',
      },
      scheduleSubject: 'Terminanfrage',
      details: [
        { term: 'Stadt', description: 'Monterrey, MX' },
        { term: 'Interessen', description: 'Hausarztmedizin, Gesundheitsbildung, Geriatrie' },
        { term: 'Sprachen', description: 'Spanisch, Englisch, Deutsch' },
      ],
      chips: ['Empathie', 'Ethik', 'Teamarbeit', 'Lebenslanges Lernen'],
      emailLabel: 'nath@example.com',
    },
    footer: 'Nath — Medizin. Evidenzbasierte Versorgung mit menschlicher Nähe.',
  },
}

function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('locale') as Locale | null
      if (stored === 'es' || stored === 'en' || stored === 'de') {
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
    if (typeof window === 'undefined' || typeof document === 'undefined') return
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

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleNavLinkClick = () => {
    setIsMenuOpen(false)
  }

  const themeToggleLabel = theme === 'dark' ? t.header.themeLightLabel : t.header.themeDarkLabel
  const scheduleMailTo = `mailto:nath@example.com?subject=${encodeURIComponent(t.contact.scheduleSubject)}`
  const menuButtonLabel = isMenuOpen ? t.header.closeMenu : t.header.openMenu

  return (
    <div className="app-shell">
      <div className="orb orb-one" aria-hidden />
      <div className="orb orb-two" aria-hidden />
      <header className="site-header">
        <div className="brand" aria-label={t.header.brandDescription}>
          <span className="brand-mark" />
          <span className="brand-name">{t.header.brandName}</span>
        </div>

        <nav
          id="primary-navigation"
          className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label={t.header.navAria}
        >
          {t.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-utilities">
          <div className="control-cluster">
            <label htmlFor="language-select" className="sr-only">
              {t.header.languageLabel}
            </label>
            <select
              id="language-select"
              className="language-select"
              value={locale}
              onChange={(event) => {
                const nextLocale = event.target.value as Locale
                if (nextLocale === 'es' || nextLocale === 'en' || nextLocale === 'de') {
                  setLocale(nextLocale)
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
              onClick={toggleTheme}
            >
              <span aria-hidden>{theme === 'dark' ? '🌞' : '🌙'}</span>
              <span className="sr-only">{themeToggleLabel}</span>
            </button>
          </div>

          <a className="button button-primary" href={`#${sectionIds.contact}`}>
            {t.header.ctaLabel}
          </a>

          <button
            type="button"
            className="menu-button"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={handleMenuToggle}
          >
            <span className="menu-icon" aria-hidden />
            <span className="sr-only">{menuButtonLabel}</span>
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="hero reveal">
          <div className="hero-content">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1>{t.hero.title}</h1>
            <p>
              {t.hero.description.intro}
              <strong>{t.hero.description.highlight}</strong>
              {t.hero.description.body}
            </p>
            <div className="hero-actions">
              <a
                href="/nath-cv.pdf"
                className="button button-primary"
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.ctas.cv}
              </a>
              <a
                href="https://www.linkedin.com/in/<usuario>"
                className="button button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.ctas.linkedin}
              </a>
              <a
                href="https://www.researchgate.net/profile/<usuario>"
                className="button button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.ctas.researchGate}
              </a>
            </div>
            <div className="floating-badges" aria-hidden>
              {t.hero.floatingBadges.map((badge) => (
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
                  src="/Media/Images/NathCoverImage.jpg" 
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

        <section id={sectionIds.profile} className="section reveal">
          <div className="section-header">
            <span className="eyebrow">{t.profile.eyebrow}</span>
            <h2>{t.profile.title}</h2>
          </div>
          <div className="section-body">
            <div className="section-text">
              <p>{t.profile.body}</p>
            </div>
            <div className="chip-grid">
              {t.profile.chips.map((chip) => (
                <span key={chip} className="chip chip-tag">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" aria-labelledby="availability-heading">
          <div className="section-header">
            <span className="eyebrow" id="availability-heading">
              {t.availability.eyebrow}
            </span>
            <h2>{t.availability.title}</h2>
          </div>
          <div className="availability">
            <ul>
              {t.availability.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={`#${sectionIds.contact}`} className="availability-link">
              {t.availability.link}
            </a>
          </div>
        </section>

        <section id={sectionIds.experience} className="section reveal">
          <div className="section-header">
            <span className="eyebrow">{t.experience.eyebrow}</span>
            <h2>{t.experience.title}</h2>
            <p>{t.experience.intro}</p>
          </div>
          <div className="experience-grid">
            {t.experience.items.map((item) => (
              <article key={item.role} className="experience-card">
                <div className="experience-header">
                  <h3>{item.role}</h3>
                  <span className="experience-place">{item.place}</span>
                  <span className="experience-dates">{item.dates}</span>
                </div>
                <ul>
                  {item.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" aria-labelledby="timeline-heading">
          <div className="section-header">
            <span className="eyebrow" id="timeline-heading">
              {t.timeline.eyebrow}
            </span>
            <h2>{t.timeline.title}</h2>
          </div>
          <div className="timeline">
            {t.timeline.items.map((item) => (
              <article key={item.period} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id={sectionIds.research} className="section reveal">
          <div className="section-header">
            <span className="eyebrow">{t.research.eyebrow}</span>
            <h2>{t.research.title}</h2>
            <p>{t.research.description}</p>
          </div>
          <div className="card-grid">
            {t.research.projects.map((item) => (
              <article key={item.title} className="project-card">
                <span className="badge">{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.venue}</p>
                <a href={item.link} className="project-link">
                  {t.research.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id={sectionIds.contact} className="section contact reveal">
          <div className="section-header">
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.body}</p>
          </div>
          <div className="contact-layout">
            <div className="contact-actions">
              <a href="mailto:nath@example.com" className="button button-primary">
                {t.contact.buttons.primary}
              </a>
              <a
                href={scheduleMailTo}
                className="button button-primary ghost"
              >
                {t.contact.buttons.schedule}
              </a>
              <span className="contact-email">{t.contact.emailLabel}</span>
            </div>
            <div className="contact-meta">
              <dl>
                {t.contact.details.map((item) => (
                  <div key={item.term}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="chip-grid">
                {t.contact.chips.map((chip) => (
                  <span key={chip} className="chip chip-tag">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
