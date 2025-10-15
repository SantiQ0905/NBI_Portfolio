import { useState, useRef } from 'react'
import type { ContactTranslation } from '../types/content'
import { submitContactForm, type ContactFormData } from '../services/contactForm'

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
    <section id={sectionId} className="contact-section reveal">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 className="contact-title">{contact.title}</h2>
          <p className="contact-description">{contact.body}</p>
        </div>

        {/* Main Contact Content */}
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3>{contact.form.title}</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="contact-name">{contact.form.fields.name.label}</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder={contact.form.fields.name.placeholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">{contact.form.fields.email.label}</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder={contact.form.fields.email.placeholder}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="contact-subject">{contact.form.fields.subject.label}</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder={contact.form.fields.subject.placeholder}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contact-message">{contact.form.fields.message.label}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  rows={6}
                  placeholder={contact.form.fields.message.placeholder}
                />
              </div>

              <button 
                type="submit" 
                className="form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? contact.form.submitting : contact.form.submitButton}
              </button>

              {submitStatus === 'success' && (
                <div className="form-status success">
                  {contact.form.success}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-status error">
                  {contact.form.error}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="contact-info-wrapper">
            <h3>{contact.info.title}</h3>
            
            <div className="contact-quick-actions">
              <a href="mailto:nath@example.com" className="contact-action-btn primary">
                <span className="contact-action-icon">✉</span>
                <div>
                  <div className="contact-action-title">{contact.buttons.primary}</div>
                  <div className="contact-action-subtitle">{contact.info.emailSubtitle}</div>
                </div>
              </a>
              
              <a href={scheduleMailTo} className="contact-action-btn secondary">
                <span className="contact-action-icon">📅</span>
                <div>
                  <div className="contact-action-title">{contact.buttons.schedule}</div>
                  <div className="contact-action-subtitle">{contact.info.scheduleSubtitle}</div>
                </div>
              </a>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <h4>{contact.details.length > 0 ? 'Details' : ''}</h4>
              <dl className="contact-details-list">
                {contact.details.map((item) => (
                  <div key={item.term} className="contact-detail-item">
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Skills/Values Tags */}
            <div className="contact-values">
              <h4>{contact.chips.length > 0 ? 'Values' : ''}</h4>
              <div className="contact-values-grid">
                {contact.chips.map((chip) => (
                  <span key={chip} className="contact-value-tag">
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
