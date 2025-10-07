import { useEffect } from 'react'
import './App.css'

const navigation = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'investigacion', label: 'Investigación' },
  { id: 'contacto', label: 'Contacto' },
]

const availability = [
  'Tardes entre semana (presencial o híbrido)',
  'Sábados por la mañana',
  'Estancias cortas o proyectos por objetivos',
]

const experience = [
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
]

const timeline = [
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
]

const research = [
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
]

function App() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    document.body.classList.add('theme-light')
    return () => {
      document.body.classList.remove('theme-light')
    }
  }, [])

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

  return (
    <div className="app-shell">
      <div className="orb orb-one" aria-hidden />
      <div className="orb orb-two" aria-hidden />
      <header className="site-header">
        <div className="brand" aria-label="Nath — Medicina">
          <span className="brand-mark" />
          <span className="brand-name">Nath — Medicina</span>
        </div>
        <nav className="site-nav" aria-label="Principal">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <a className="button button-primary" href="#contacto">
            Escríbeme
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="hero reveal">
          <div className="hero-content">
            <span className="eyebrow">Estudiante de Medicina • Clínica • Investigación</span>
            <h1>Cuidar con ciencia, liderar con humanidad.</h1>
            <p>
              Soy <strong>Nath</strong>, estudiante de Medicina con vocación por la atención integral, la educación para la salud y la investigación clínica. Creo en la medicina basada en evidencia y en el trato humano que escucha, explica y acompaña.
            </p>
            <div className="hero-actions">
              <a href="/nath-cv.pdf" className="button button-primary" target="_blank" rel="noreferrer">
                Ver CV
              </a>
              <a
                href="https://www.linkedin.com/in/<usuario>"
                className="button button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.researchgate.net/profile/<usuario>"
                className="button button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                ResearchGate
              </a>
            </div>
            <div className="floating-badges" aria-hidden>
              <span className="floating-badge">Atención centrada en la persona</span>
              <span className="floating-badge">Evidencia + empatía</span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden>
            <div className="hero-planet" />
            <div className="hero-trail" />
            <div className="hero-glow" />
          </div>
        </section>

        <section id="perfil" className="section reveal">
          <div className="section-header">
            <span className="eyebrow">Perfil</span>
            <h2>Perfil</h2>
          </div>
          <div className="section-body">
            <div className="section-text">
              <p>
                Soy estudiante de Medicina con interés en medicina familiar y salud pública. Me motiva traducir la evidencia científica a un lenguaje claro para que cada paciente entienda su diagnóstico, tratamiento y opciones. He participado en iniciativas de promoción de la salud, campañas de vacunación y proyectos de alfabetización en salud. Busco integrarme a equipos multidisciplinarios donde la ética, la calidad y la comunicación sean pilares del cuidado.
              </p>
            </div>
            <div className="chip-grid">
              {['Atención primaria', 'Promoción de la salud', 'Educación para pacientes', 'Investigación clínica'].map((chip) => (
                <span key={chip} className="chip chip-tag">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" aria-labelledby="disponibilidad">
          <div className="section-header">
            <span className="eyebrow" id="disponibilidad">
              Disponibilidad
            </span>
            <h2>Rotaciones y voluntariado</h2>
          </div>
          <div className="availability">
            <ul>
              {availability.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contacto" className="availability-link">
              Proponer colaboración →
            </a>
          </div>
        </section>

        <section id="experiencia" className="section reveal">
          <div className="section-header">
            <span className="eyebrow">Experiencia</span>
            <h2>Experiencia clínica, educativa e investigadora</h2>
            <p>
              Acompaño procesos de salud en entornos comunitarios, escolares y académicos con un enfoque que integra ciencia, pedagogía y empatía.
            </p>
          </div>
          <div className="experience-grid">
            {experience.map((item) => (
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

        <section className="section reveal" aria-labelledby="linea-tiempo">
          <div className="section-header">
            <span className="eyebrow" id="linea-tiempo">
              Línea de tiempo
            </span>
            <h2>Hitos de formación</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
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

        <section id="investigacion" className="section reveal">
          <div className="section-header">
            <span className="eyebrow">Investigación</span>
            <h2>Proyectos y difusión científica</h2>
            <p>¿Tienes un nuevo proyecto o publicación? Añádelo aquí con un enlace o PDF.</p>
          </div>
          <div className="card-grid">
            {research.map((item) => (
              <article key={item.title} className="project-card">
                <span className="badge">{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.venue}</p>
                <a href={item.link} className="project-link">
                  Consultar proyecto →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="section contact reveal">
          <div className="section-header">
            <span className="eyebrow">Contacto</span>
            <h2>Conversemos</h2>
            <p>
              Para oportunidades clínicas, investigación o proyectos de educación para la salud, escríbeme y con gusto responderé. Me interesan equipos colaborativos con enfoque en calidad, ética y comunicación clara.
            </p>
          </div>
          <div className="contact-layout">
            <div className="contact-actions">
              <a href="mailto:nath@example.com" className="button button-primary">
                Escríbeme
              </a>
              <a
                href="mailto:nath@example.com?subject=Solicitud%20de%20reunión"
                className="button button-primary ghost"
              >
                Agendar una reunión
              </a>
              <span className="contact-email">nath@example.com</span>
            </div>
            <div className="contact-meta">
              <dl>
                <div>
                  <dt>Ciudad</dt>
                  <dd>Monterrey, MX</dd>
                </div>
                <div>
                  <dt>Intereses</dt>
                  <dd>medicina familiar, educación en salud, geriatría</dd>
                </div>
                <div>
                  <dt>Idiomas</dt>
                  <dd>español, inglés</dd>
                </div>
              </dl>
              <div className="chip-grid">
                {['Empatía', 'Ética', 'Trabajo en equipo', 'Aprendizaje continuo'].map((chip) => (
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
        <p>Nath — Medicina. Atención basada en evidencia y trato humano.</p>
      </footer>
    </div>
  )
}

export default App
