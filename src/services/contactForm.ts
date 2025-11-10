// src/services/contactForm.ts
import emailjs from '@emailjs/browser'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface FormSubmissionResult {
  success: boolean
  message: string
}

/**
 * Primary handler: EmailJS via Gmail.
 * Falls back to mailto if EmailJS fails (optional, can remove if undesired).
 */
export async function submitContactForm(data: ContactFormData): Promise<FormSubmissionResult> {
  try {
    validateData(data)
    const result = await submitWithEmailJS(data)
    return result
  } catch (err) {
    console.error('EmailJS send failed, trying mailto fallback...', err)
    try {
      // Optional fallback — comment out if you prefer to surface the error instead
      return await submitWithMailto(data)
    } catch (fallbackErr) {
      console.error('Mailto fallback failed:', fallbackErr)
      return {
        success: false,
        message: 'Failed to send message. Please try again.',
      }
    }
  }
}

/** Basic client-side validation */
function validateData(d: ContactFormData) {
  if (!d.name?.trim()) throw new Error('Name is required')
  if (!d.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) throw new Error('Valid email is required')
  if (!d.subject?.trim()) throw new Error('Subject is required')
  if (!d.message?.trim()) throw new Error('Message is required')
}

// --- EmailJS implementation ---
async function submitWithEmailJS(data: ContactFormData): Promise<FormSubmissionResult> {
  const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS environment variables are not configured')
  }

  const templateParams = {
    from_name:  data.name,
    from_email: data.email,
    subject:    data.subject,
    message:    data.message,
    reply_to:   data.email,
  }

  const res = await emailjs.send(serviceId, templateId, templateParams, { publicKey })
  if ((res?.status ?? 0) === 200) {
    return { success: true, message: 'Message sent successfully!' }
  }
  throw new Error('EmailJS send returned a non-200 status')
}

// --- Mailto fallback (optional) ---
async function submitWithMailto(data: ContactFormData): Promise<FormSubmissionResult> {
  const toEmail = import.meta.env.VITE_CONTACT_TO_EMAIL || 'example@example.com'

  const mailtoLink = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(
    data.subject || 'Contact from portfolio'
  )}&body=${encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
  )}`

  // Open user's email client
  window.location.href = mailtoLink

  return {
    success: true,
    message: 'Email client opened successfully',
  }
}
