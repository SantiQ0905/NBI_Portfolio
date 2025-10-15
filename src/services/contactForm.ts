// Simple form submission service
// This can be extended to use services like EmailJS, Formspree, or Netlify Forms

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

// For now, using mailto as a fallback, but this can be easily extended
export async function submitContactForm(data: ContactFormData): Promise<FormSubmissionResult> {
  try {
    // Option 1: EmailJS (requires setup)
    // return await submitWithEmailJS(data)
    
    // Option 2: Formspree (requires setup)
    // return await submitWithFormspree(data)
    
    // Option 3: Custom API endpoint
    // return await submitWithAPI(data)
    
    // Option 4: Mailto fallback (current implementation)
    return await submitWithMailto(data)
    
  } catch (error) {
    console.error('Form submission error:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again.'
    }
  }
}

// Mailto fallback implementation
async function submitWithMailto(data: ContactFormData): Promise<FormSubmissionResult> {
  const mailtoLink = `mailto:nath@example.com?subject=${encodeURIComponent(
    data.subject || 'Contact from portfolio'
  )}&body=${encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
  )}`
  
  // Open mailto link
  window.location.href = mailtoLink
  
  return {
    success: true,
    message: 'Email client opened successfully'
  }
}

// EmailJS implementation (commented out - requires setup)
/*
async function submitWithEmailJS(data: ContactFormData): Promise<FormSubmissionResult> {
  // Requires: npm install emailjs-com
  // import emailjs from 'emailjs-com'
  
  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'nath@example.com'
      },
      'YOUR_USER_ID'
    )
    
    return {
      success: true,
      message: 'Message sent successfully!'
    }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send message. Please try again.'
    }
  }
}
*/

// Formspree implementation (commented out - requires setup)
/*
async function submitWithFormspree(data: ContactFormData): Promise<FormSubmissionResult> {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      })
    })
    
    if (response.ok) {
      return {
        success: true,
        message: 'Message sent successfully!'
      }
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send message. Please try again.'
    }
  }
}
*/

// Custom API implementation (commented out - requires backend)
/*
async function submitWithAPI(data: ContactFormData): Promise<FormSubmissionResult> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    
    const result = await response.json()
    
    if (response.ok) {
      return {
        success: true,
        message: result.message || 'Message sent successfully!'
      }
    } else {
      throw new Error(result.message || 'Form submission failed')
    }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send message. Please try again.'
    }
  }
}
*/