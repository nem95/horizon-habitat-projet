'use client'

import { useActionState } from 'react'
import { sendContactForm } from '@/app/actions/contact'
import type { ContactFormState } from '@/types'

const initialState: ContactFormState = {
  success: false,
  message: '',
}

const inputClass =
  'w-full h-10 border-0 border-b border-veil bg-transparent text-sm font-sans text-bark placeholder:text-clay/50 focus:outline-none focus:border-bark transition-colors duration-300 disabled:opacity-40'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactForm, initialState)

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot */}
      <input type="hidden" name="website" value="" />

      {/* Row 1: Prénom + Nom */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            disabled={isPending}
            placeholder="Prénom"
            className={inputClass}
          />
          {state?.fieldErrors?.prenom && (
            <p className="text-red-500 text-xs mt-1">{state.fieldErrors.prenom[0]}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            disabled={isPending}
            placeholder="Nom"
            className={inputClass}
          />
          {state?.fieldErrors?.nom && (
            <p className="text-red-500 text-xs mt-1">{state.fieldErrors.nom[0]}</p>
          )}
        </div>
      </div>

      {/* Row 2: Téléphone + Email */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            disabled={isPending}
            placeholder="Téléphone"
            className={inputClass}
          />
          {state?.fieldErrors?.telephone && (
            <p className="text-red-500 text-xs mt-1">{state.fieldErrors.telephone[0]}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isPending}
            placeholder="Email"
            className={inputClass}
          />
          {state?.fieldErrors?.email && (
            <p className="text-red-500 text-xs mt-1">{state.fieldErrors.email[0]}</p>
          )}
        </div>
      </div>

      {/* Type de travaux */}
      <div>
        <select
          name="travaux"
          disabled={isPending}
          className="w-full h-10 border-0 border-b border-veil bg-transparent text-sm font-sans text-clay focus:outline-none focus:border-bark transition-colors duration-300 disabled:opacity-40"
        >
          <option value="">Type de travaux</option>
          <option value="cuisine">Cuisine</option>
          <option value="sdb">Salle de bain</option>
          <option value="sol">Sols &amp; revêtements</option>
          <option value="peinture">Peinture</option>
          <option value="electricite">Électricité</option>
          <option value="amenagement">Aménagement</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <textarea
          id="message"
          name="message"
          required
          disabled={isPending}
          rows={4}
          placeholder="Décrivez votre projet..."
          className="w-full border-0 border-b border-veil bg-transparent text-sm font-sans text-bark placeholder:text-clay/50 focus:outline-none focus:border-bark transition-colors duration-300 resize-none pt-2 disabled:opacity-40"
        />
        {state?.fieldErrors?.message && (
          <p className="text-red-500 text-xs mt-1">{state.fieldErrors.message[0]}</p>
        )}
      </div>

      {/* Status message */}
      {state?.message && (
        <p className={`text-sm font-sans ${state.success ? 'text-green-700' : 'text-red-600'}`}>
          {state.message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="text-xs font-sans uppercase tracking-[0.15em] text-bark border-b border-bark/30 pb-1 hover:border-terra hover:text-terra transition-colors duration-300 mt-4 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isPending ? 'Envoi en cours...' : 'Envoyer ma demande →'}
      </button>
    </form>
  )
}
