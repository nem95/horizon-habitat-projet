'use server'

import type { ContactFormState } from '@/types'

interface ContactFormInput {
  nom: string
  prenom: string
  telephone: string
  email: string
  message: string
}

export async function sendContactForm(
  _prevState: ContactFormState | undefined,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Extract form data
    const nom = formData.get('nom') as string
    const prenom = formData.get('prenom') as string
    const telephone = formData.get('telephone') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    const website = formData.get('website') as string // Honeypot

    // Validate honeypot (spam protection)
    if (website) {
      console.warn('Honeypot field filled - likely bot submission')
      return {
        success: false,
        message: 'Erreur lors de l\'envoi du formulaire',
      }
    }

    // Validate required fields
    const errors: Record<string, string[]> = {}

    if (!nom || nom.trim().length < 2) {
      errors.nom = ['Veuillez entrer un nom valide']
    }
    if (!prenom || prenom.trim().length < 2) {
      errors.prenom = ['Veuillez entrer un prénom valide']
    }
    if (!telephone || !/^[0-9\s\-\+\.]{8,}$/.test(telephone.replace(/\s/g, ''))) {
      errors.telephone = ['Veuillez entrer un numéro de téléphone valide']
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = ['Veuillez entrer une adresse email valide']
    }
    if (!message || message.trim().length < 10) {
      errors.message = ['Veuillez entrer un message de au moins 10 caractères']
    }

    // Return validation errors if any
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: 'Veuillez corriger les erreurs du formulaire',
        fieldErrors: errors,
      }
    }

    // Prepare email payload
    const contactData: ContactFormInput = {
      nom: nom.trim(),
      prenom: prenom.trim(),
      telephone: telephone.trim(),
      email: email.trim(),
      message: message.trim(),
    }

    // Send email via configured email service
    // To enable email sending, configure one of the services in src/lib/send-email.ts
    // and uncomment the code below
    // const { sendContactEmail } = await import('@/lib/send-email')
    // const emailResult = await sendContactEmail(contactData)
    // if (!emailResult.success) {
    //   return { success: false, message: emailResult.message }
    // }

    // For now, log to console (email sending is ready to be enabled)
    console.log('Contact form submission:', contactData)

    return {
      success: true,
      message: 'Merci ! Votre message a été envoyé. Nous vous recontacterons très bientôt.',
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      message: 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.',
    }
  }
}
