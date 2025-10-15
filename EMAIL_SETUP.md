# Email Integration Setup

This portfolio includes a contact form with multiple email integration options. By default, it uses a mailto fallback, but you can easily integrate with professional email services.

## Current Setup

The form currently uses a **mailto** fallback that opens the user's default email client. This works immediately but provides a basic experience.

## Professional Email Integration Options

### Option 1: EmailJS (Recommended for client-side)

EmailJS allows you to send emails directly from the frontend without a backend server.

1. **Sign up** at [EmailJS](https://www.emailjs.com/)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template**
4. **Install EmailJS**: `npm install emailjs-com`
5. **Update the service**:
   - Uncomment the EmailJS implementation in `src/services/contactForm.ts`
   - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_USER_ID` with your actual values
   - Update the `submitContactForm` function to use `submitWithEmailJS`

### Option 2: Formspree (Recommended for simplicity)

Formspree provides a simple form backend service.

1. **Sign up** at [Formspree](https://formspree.io/)
2. **Create a new form** and get your form endpoint
3. **Update the service**:
   - Uncomment the Formspree implementation in `src/services/contactForm.ts`
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID
   - Update the `submitContactForm` function to use `submitWithFormspree`

### Option 3: Netlify Forms (If hosted on Netlify)

If you're hosting on Netlify, you can use their built-in form handling.

1. **Add** `netlify` attribute to the form in `ContactSection.tsx`
2. **Add** hidden input with `name="form-name" value="contact"`
3. **Update** form action to point to your Netlify site

### Option 4: Custom Backend API

For maximum control, create your own email API endpoint.

1. **Create** a backend service (Node.js, Python, etc.)
2. **Implement** an email API endpoint using services like:
   - SendGrid
   - Mailgun
   - AWS SES
   - Nodemailer (for Node.js)
3. **Update the service**:
   - Uncomment the custom API implementation in `src/services/contactForm.ts`
   - Update the endpoint URL to match your API
   - Update the `submitContactForm` function to use `submitWithAPI`

## Configuration

The current email is set to `nath@example.com`. Update this in:
- `src/services/contactForm.ts` (in the mailto implementation)
- `src/data/translations.ts` (in the `emailLabel` fields)
- `src/components/Footer.tsx` (in the social links)

## Environment Variables

If using EmailJS or similar services, consider using environment variables for API keys:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

Then use them in your code:
```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
```

## Testing

After setting up email integration:
1. **Test** the form submission
2. **Verify** emails are received
3. **Check** spam folders initially
4. **Test** on different devices and browsers

## Security Considerations

- Never expose API keys in client-side code
- Use environment variables for sensitive data
- Implement rate limiting if using a custom backend
- Consider adding CAPTCHA for spam protection
- Validate and sanitize form inputs

## Need Help?

If you need assistance setting up email integration:
1. Check the service documentation (EmailJS, Formspree, etc.)
2. Ensure your email service is properly configured
3. Test with a simple implementation first
4. Check browser console for any errors