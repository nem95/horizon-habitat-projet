import type { ContactFormInput } from '@/types'

export interface SendEmailResult {
  success: boolean
  message: string
  error?: string
}

/**
 * Sends a contact form email
 *
 * To enable email sending, set up one of the following:
 *
 * Option 1: Resend (recommended for Next.js)
 * - Install: npm install resend
 * - Get API key: https://resend.com
 * - Add to .env.local: RESEND_API_KEY=your_key_here
 *
 * Option 2: Nodemailer
 * - Install: npm install nodemailer
 * - Add to .env.local:
 *   SMTP_HOST=smtp.gmail.com
 *   SMTP_PORT=587
 *   SMTP_USER=your-email@gmail.com
 *   SMTP_PASS=your-app-password
 *
 * Option 3: SendGrid
 * - Install: npm install @sendgrid/mail
 * - Get API key: https://sendgrid.com
 * - Add to .env.local: SENDGRID_API_KEY=your_key_here
 */

export async function sendContactEmail(
  data: ContactFormInput
): Promise<SendEmailResult> {
  try {
    // TODO: Implement one of the email services below

    // Option 1: Using Resend (recommended)
    // Uncomment the code below and set RESEND_API_KEY in .env.local
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)

    const result = await resend.emails.send({
      from: 'noreply@horizon-habitat-projet.com',
      to: process.env.CONTACT_EMAIL || 'process.env.CONTACT_EMAIL',
      replyTo: data.email,
      subject: `Nouvelle demande de contact de ${data.prenom} ${data.nom}`,
      html: generateEmailHTML(data),
    })

    if (result.error) {
      return {
        success: false,
        message: 'Erreur lors de l\'envoi du message',
        error: result.error.message,
      }
    }

    return {
      success: true,
      message: 'Email envoyé avec succès',
    }
    */

    // Option 2: Using Nodemailer
    // Uncomment the code below and set SMTP_* variables in .env.local
    /*
    import nodemailer from 'nodemailer'

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const result = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'process.env.CONTACT_EMAIL',
      replyTo: data.email,
      subject: `Nouvelle demande de contact de ${data.prenom} ${data.nom}`,
      html: generateEmailHTML(data),
    })

    return {
      success: true,
      message: 'Email envoyé avec succès',
    }
    */

    // Option 3: Using SendGrid
    // Uncomment the code below and set SENDGRID_API_KEY in .env.local
    /*
    import sgMail from '@sendgrid/mail'
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

    const result = await sgMail.send({
      to: process.env.CONTACT_EMAIL || 'process.env.CONTACT_EMAIL',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@horizon-habitat-projet.com',
      replyTo: data.email,
      subject: `Nouvelle demande de contact de ${data.prenom} ${data.nom}`,
      html: generateEmailHTML(data),
    })

    return {
      success: true,
      message: 'Email envoyé avec succès',
    }
    */

    // Placeholder: Log to console and return success
    // Remove this when you implement one of the email services above
    console.log('📧 Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...data,
    })

    return {
      success: true,
      message: 'Votre message a été reçu. Nous vous recontacterons très bientôt.',
    }
  } catch (error) {
    console.error('Email send error:', error)
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi du message',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Generates HTML email template
 */
function generateEmailHTML(data: ContactFormInput): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1C1917; color: #F5EFE0; padding: 20px; border-radius: 4px; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { margin: 20px 0; }
          .field { margin: 15px 0; }
          .field-label { color: #C9A058; font-weight: 600; font-size: 12px; text-transform: uppercase; }
          .field-value { color: #333; margin-top: 5px; }
          .footer { color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nouvelle demande de contact</h1>
          </div>

          <div class="content">
            <div class="field">
              <div class="field-label">Nom</div>
              <div class="field-value">${escapeHTML(data.nom)}</div>
            </div>

            <div class="field">
              <div class="field-label">Prénom</div>
              <div class="field-value">${escapeHTML(data.prenom)}</div>
            </div>

            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${escapeHTML(data.email)}">${escapeHTML(data.email)}</a></div>
            </div>

            <div class="field">
              <div class="field-label">Téléphone</div>
              <div class="field-value"><a href="tel:${escapeHTML(data.telephone)}">${escapeHTML(data.telephone)}</a></div>
            </div>

            <div class="field">
              <div class="field-label">Message</div>
              <div class="field-value">${escapeHTML(data.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>

          <div class="footer">
            <p>Message reçu le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}</p>
          </div>
        </div>
      </body>
    </html>
  `
}

/**
 * Escapes HTML special characters to prevent XSS
 */
function escapeHTML(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
