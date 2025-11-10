import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Theme } from '../types/content'
import styles from './SecretLetterPage.module.css'

const placeholderLetter: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Aliquam euismod, nibh nec blandit convallis, odio quam pharetra lacus, non tempor mi velit ac sapien. Integer volutpat diam ut dignissim consectetur, at vulputate magna suscipit. Praesent vitae neque vel augue feugiat porta quis eu erat. Suspendisse potenti, et elementum erat volutpat at. Donec fringilla, velit quis gravida volutpat, ex massa tincidunt turpis, sed pulvinar sem magna nec augue. Mauris ac lacus feugiat, euismod felis sed, vestibulum augue. Fusce convallis, arcu non aliquet semper, ligula erat maximus lacus, id laoreet felis mauris eget purus. Vivamus et mi aliquam, porttitor arcu ut, tincidunt eros. Morbi ac mauris fringilla, tempus metus eget, ultrices dolor. Etiam pharetra sem sit amet vehicula dictum. Curabitur quis tellus eget sapien dictum facilisis sed id turpis. Vestibulum pharetra orci ac sapien dignissim, a efficitur eros cursus. Nam elementum.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Aliquam euismod, nibh nec blandit convallis, odio quam pharetra lacus, non tempor mi velit ac sapien. Integer volutpat diam ut dignissim consectetur, at vulputate magna suscipit. Praesent vitae neque vel augue feugiat porta quis eu erat. Suspendisse potenti, et elementum erat volutpat at. Donec fringilla, velit quis gravida volutpat, ex massa tincidunt turpis, sed pulvinar sem magna nec augue. Mauris ac lacus feugiat, euismod felis sed, vestibulum augue. Fusce convallis, arcu non aliquet semper, ligula erat maximus lacus, id laoreet felis mauris eget purus. Vivamus et mi aliquam, porttitor arcu ut, tincidunt eros. Morbi ac mauris fringilla, tempus metus eget, ultrices dolor. Etiam pharetra sem sit amet vehicula dictum. Curabitur quis tellus eget sapien dictum facilisis sed id turpis. Vestibulum pharetra orci ac sapien dignissim, a efficitur eros cursus. Nam elementum ipsum sed lacus ultrices, et lacinia est maximus.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Aliquam euismod, nibh nec blandit convallis, odio quam pharetra lacus, non tempor mi velit ac sapien. Integer volutpat diam ut dignissim consectetur, at vulputate magna suscipit. Praesent vitae neque vel augue feugiat porta quis eu erat. Suspendisse potenti, et elementum erat volutpat at. Donec fringilla, velit quis gravida volutpat, ex massa tincidunt turpis, sed pulvinar sem magna nec augue. Mauris ac lacus feugiat, euismod felis sed, vestibulum augue. Fusce convallis, arcu non aliquet semper, ligula erat maximus lacus, id laoreet felis mauris eget purus. Vivamus et mi aliquam, porttitor arcu ut, tincidunt eros. Morbi ac mauris fringilla, tempus metus eget, ultrices dolor. Etiam pharetra sem sit amet vehicula dictum. Curabitur quis tellus eget sapien dictum facilisis sed id turpis. Vestibulum pharetra orci ac sapien dignissim, a efficitur eros cursus. Nam elementum ipsum sed lacus ultrices, et lacinia est maximus. Aenean quis mi in justo facilisis viverra. Cras tempor neque ac.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Aliquam euismod, nibh nec blandit convallis, odio quam pharetra lacus, non tempor mi velit ac sapien. Integer volutpat diam ut dignissim consectetur, at vulputate magna suscipit. Praesent vitae neque vel augue feugiat porta quis eu erat. Suspendisse potenti, et elementum erat volutpat at. Donec fringilla, velit quis gravida volutpat, ex massa tincidunt turpis, sed pulvinar sem magna nec augue. Mauris ac lacus feugiat, euismod felis sed, vestibulum augue. Fusce convallis, arcu non aliquet semper, ligula erat maximus lacus, id laoreet felis mauris eget purus. Vivamus et mi aliquam, porttitor arcu ut, tincidunt eros. Morbi ac mauris fringilla, tempus metus eget, ultrices dolor. Etiam pharetra sem sit amet vehicula dictum. Curabitur quis tellus eget sapien dictum facilisis sed id turpis. Vestibulum pharetra orci ac sapien dignissim, a efficitur eros cursus. Nam elementum ipsum sed lacus ultrices, et lacinia est maximus. Aenean quis mi in justo facilisis viverra. Cras tempor neque ac sapien rhoncus, at vestibulum elit tincidunt. Integer scelerisque enim ac elementum pharetra. Phasellus nec arcu a urna.'
]

export type SecretLetterPageProps = {
  brandName: string
  password: string
  theme: Theme
  themeToggleLabel: string
  onToggleTheme: () => void
}

export function SecretLetterPage({
  brandName,
  password,
  theme,
  themeToggleLabel,
  onToggleTheme,
}: SecretLetterPageProps) {
  const [passwordInput, setPasswordInput] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Font size override removed - using responsive CSS instead

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (passwordInput.trim() === password) {
      setIsUnlocked(true)
      setError(null)
    } else {
      setError('La contraseña no coincide. Intenta de nuevo ♥')
    }
  }

  return (
    <div className={`app-shell ${styles.secretShell}`}>
      <div className="orb orb-one" aria-hidden />
      <div className="orb orb-two" aria-hidden />

      <header className={styles.secretHeader}>
        <div>
          <div className={styles.brand} aria-label={brandName}>
            <span className={styles.brandMark}>
              <span className={styles.brandMarkGlint} aria-hidden />
            </span>
            <span className={styles.brandName}>
              {brandName}
              <span className={styles.brandStar} aria-hidden>
                ✶
              </span>
            </span>
          </div>

          <div className={styles.secretControls}>
            <button
              type="button"
              className={styles.themeToggle}
              aria-label={themeToggleLabel}
              aria-pressed={theme === 'dark'}
              onClick={onToggleTheme}
            >
              <span aria-hidden>{theme === 'dark' ? '🌞' : '🌙'}</span>
            </button>
            <a className="button button-secondary" href="/">
              Volver al inicio
            </a>
          </div>
        </div>
      </header>

      <main className={styles.secretMain}>
        <section className={styles.secretCard}>
          <div className={styles.secretCardHeader}>
            <span className="eyebrow">Entrada privada</span>
            <h1>Cuaderno de sentimientos</h1>
            <p>
              Este rincón está reservado para alguien especial. Ingresa la contraseña para
              desbloquear el mensaje secreto y mantener la magia a salvo.
            </p>
          </div>

          {!isUnlocked ? (
            <form className={styles.secretForm} onSubmit={handleSubmit}>
              <label htmlFor="secret-password">Contraseña</label>
              <div className={styles.secretInputGroup}>
                <input
                  id="secret-password"
                  className={styles.secretInput}
                  type="password"
                  autoComplete="off"
                  value={passwordInput}
                  onChange={(event) => setPasswordInput(event.target.value)}
                  placeholder="••••••"
                  required
                />
                <button type="submit" className="button button-primary">
                  Desbloquear
                </button>
              </div>
              {error ? <p className={styles.secretError}>{error}</p> : null}
            </form>
          ) : (
            <article className={styles.secretLetter} aria-live="polite">
              <h2>Carta reservada</h2>
              {placeholderLetter.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </article>
          )}
        </section>
      </main>
    </div>
  )
}
