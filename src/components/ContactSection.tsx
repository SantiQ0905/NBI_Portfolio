import { useState, useRef } from 'react'
import type { ContactTranslation } from '../types/content'
import { submitContactForm, type ContactFormData } from '../services/contactForm'
import styles from './ContactSection.module.css'

export type ContactSectionProps = {
  contact: ContactTranslation
  sectionId: string
  scheduleMailTo: string
}

export function ContactSection({ contact, sectionId, scheduleMailTo }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const result = await submitContactForm(formData as ContactFormData)
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id={sectionId} className={`${styles.contactSection} reveal`}>
      <div className={styles.contactContainer}>
        {/* Header */}
        <div className={styles.contactHeader}>
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 className={styles.contactTitle}>{contact.title}</h2>
          <p className={styles.contactDescription}>{contact.body}</p>
        </div>

        {/* Main Contact Content */}
        <div className={styles.contactContent}>
          {/* Contact Form */}
          <div className={styles.contactFormWrapper}>
            <h3>{contact.form.title}</h3>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroupRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name">{contact.form.fields.name.label}</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder={contact.form.fields.name.placeholder}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-email">{contact.form.fields.email.label}</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder={contact.form.fields.email.placeholder}
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="contact-subject">{contact.form.fields.subject.label}</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder={contact.form.fields.subject.placeholder}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="contact-message">{contact.form.fields.message.label}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={styles.formTextarea}
                  rows={6}
                  placeholder={contact.form.fields.message.placeholder}
                />
              </div>

              <button 
                type="submit" 
                className={styles.formSubmitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? contact.form.submitting : contact.form.submitButton}
              </button>

              {submitStatus === 'success' && (
                <div className={`${styles.formStatus} ${styles.success}`}>
                  {contact.form.success}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className={`${styles.formStatus} ${styles.error}`}>
                  {contact.form.error}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className={styles.contactInfoWrapper}>
            <h3>{contact.info.title}</h3>
            
            <div className={styles.contactQuickActions}>
              <a href="mailto:nath@example.com" className={`${styles.contactActionBtn} ${styles.primary}`}>
                <span className={styles.contactActionIcon}>✉</span>
                <div>
                  <div className={styles.contactActionTitle}>{contact.buttons.primary}</div>
                  <div className={styles.contactActionSubtitle}>{contact.info.emailSubtitle}</div>
                </div>
              </a>
              
              <a href={scheduleMailTo} className={`${styles.contactActionBtn} ${styles.secondary}`}>
                <span className={styles.contactActionIcon}>📅</span>
                <div>
                  <div className={styles.contactActionTitle}>{contact.buttons.schedule}</div>
                  <div className={styles.contactActionSubtitle}>{contact.info.scheduleSubtitle}</div>
                </div>
              </a>
            </div>

            {/* Contact Details */}
            <div className={styles.contactDetails}>
              <h4>{contact.details.length > 0 ? 'Details' : ''}</h4>
              <dl className={styles.contactDetailsList}>
                {contact.details.map((item) => (
                  <div key={item.term} className={styles.contactDetailItem}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Skills/Values Tags */}
            <div className={styles.contactValues}>
              <h4>{contact.chips.length > 0 ? 'Values' : ''}</h4>
              <div className={styles.contactValuesGrid}>
                {contact.chips.map((chip) => (
                  <span key={chip} className={styles.contactValueTag}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
