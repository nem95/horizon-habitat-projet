'use client'

import { useActionState } from 'react'
import { sendContactForm } from '@/app/actions/contact'
import type { ContactFormState } from '@/types'

const initialState: ContactFormState = {
  success: false,
  message: '',
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-canvas/40">
        {label}
      </p>
      {children}
      {error && (
        <p className="text-xs font-sans text-terra/80">{error}</p>
      )}
    </div>
  )
}

const inputClass =
  'w-full bg-transparent border-b border-canvas/20 py-3 text-sm font-sans text-canvas placeholder:text-canvas/25 focus:outline-none focus:border-terra transition-colors duration-300 disabled:opacity-30'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactForm, initialState)

  return (
    <form action={formAction} className="space-y-8">
      {/* Honeypot */}
      <input type="hidden" name="website" value="" />

      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-6">
        <Field label="Prénom" error={state?.fieldErrors?.prenom?.[0]}>
          <input
            type="text"
            name="prenom"
            required
            disabled={isPending}
            placeholder="Jean"
            className={inputClass}
          />
        </Field>
        <Field label="Nom" error={state?.fieldErrors?.nom?.[0]}>
          <input
            type="text"
            name="nom"
            required
            disabled={isPending}
            placeholder="Dupont"
            className={inputClass}
          />
        </Field>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-6">
        <Field label="Téléphone" error={state?.fieldErrors?.telephone?.[0]}>
          <input
            type="tel"
            name="telephone"
            required
            disabled={isPending}
            placeholder="06 00 00 00 00"
            className={inputClass}
          />
        </Field>
        <Field label="Type de travaux">
          <select
            name="travaux"
            disabled={isPending}
            className="w-full bg-transparent border-b border-canvas/20 py-3 text-sm font-sans text-canvas/60 focus:outline-none focus:border-terra transition-colors duration-300 disabled:opacity-30"
          >
            <option value="" className="bg-bark text-canvas">Choisir…</option>
            <option value="cuisine" className="bg-bark text-canvas">Cuisine</option>
            <option value="sdb" className="bg-bark text-canvas">Salle de bain</option>
            <option value="sol" className="bg-bark text-canvas">Sols & revêtements</option>
            <option value="peinture" className="bg-bark text-canvas">Peinture</option>
            <option value="electricite" className="bg-bark text-canvas">Électricité</option>
            <option value="amenagement" className="bg-bark text-canvas">Aménagement</option>
            <option value="autre" className="bg-bark text-canvas">Autre</option>
          </select>
        </Field>
      </div>

      {/* Message */}
      <Field label="Votre projet" error={state?.fieldErrors?.message?.[0]}>
        <textarea
          name="message"
          required
          disabled={isPending}
          rows={4}
          placeholder="Décrivez brièvement votre projet, la surface, vos envies..."
          className={`${inputClass} resize-none`}
        />
      </Field>

      {/* Status */}
      {state?.message && (
        <p className={`text-sm font-sans ${state.success ? 'text-canvas/70' : 'text-terra'}`}>
          {state.message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="group flex items-center gap-4 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <span className="bg-terra text-canvas px-8 py-4 text-xs font-sans font-medium uppercase tracking-[0.15em] group-hover:bg-terra/80 transition-colors duration-300">
          {isPending ? 'Envoi…' : 'Envoyer ma demande'}
        </span>
        <span className="w-8 h-px bg-canvas/20 group-hover:w-14 group-hover:bg-terra transition-all duration-500" />
      </button>
    </form>
  )
}
