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
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-xs font-sans uppercase tracking-[0.2em] text-terra">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs font-sans text-terra mt-1">{error}</p>
      )}
    </div>
  )
}

const inputClass = [
  'w-full',
  'bg-canvas/8',
  'border border-canvas/25',
  'px-4 py-3.5',
  'text-base font-sans text-canvas',
  'placeholder:text-canvas/30',
  'focus:outline-none focus:border-terra focus:bg-canvas/14',
  'hover:border-canvas/40',
  'transition-all duration-300',
  'disabled:opacity-30',
].join(' ')

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactForm, initialState)

  return (
    <form action={formAction}>
      {/* Honeypot */}
      <input type="hidden" name="website" value="" />

      {/* Form card */}
      <div className="border border-canvas/10 p-6 lg:p-8 space-y-6">

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4">
          <Field label="Prénom" htmlFor="prenom" error={state?.fieldErrors?.prenom?.[0]}>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              disabled={isPending}
              placeholder="Jean"
              className={inputClass}
            />
          </Field>
          <Field label="Nom" htmlFor="nom" error={state?.fieldErrors?.nom?.[0]}>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              disabled={isPending}
              placeholder="Dupont"
              className={inputClass}
            />
          </Field>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-4">
          <Field label="Téléphone" htmlFor="telephone" error={state?.fieldErrors?.telephone?.[0]}>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              disabled={isPending}
              placeholder="06 00 00 00 00"
              className={inputClass}
            />
          </Field>
          <Field label="Email" htmlFor="email" error={state?.fieldErrors?.email?.[0]}>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isPending}
              placeholder="jean@email.com"
              className={inputClass}
            />
          </Field>
        </div>

        {/* Row 3 */}
        <Field label="Type de travaux" htmlFor="travaux">
          <select
            id="travaux"
            name="travaux"
            disabled={isPending}
            className={inputClass}
          >
            <option value="" className="bg-bark text-canvas">Choisir…</option>
            <option value="cuisine" className="bg-bark text-canvas">Cuisine</option>
            <option value="sdb" className="bg-bark text-canvas">Salle de bain</option>
            <option value="sol" className="bg-bark text-canvas">Sols &amp; revêtements</option>
            <option value="peinture" className="bg-bark text-canvas">Peinture</option>
            <option value="electricite" className="bg-bark text-canvas">Électricité</option>
            <option value="amenagement" className="bg-bark text-canvas">Aménagement</option>
            <option value="autre" className="bg-bark text-canvas">Autre</option>
          </select>
        </Field>

        {/* Message */}
        <Field label="Votre projet" htmlFor="message" error={state?.fieldErrors?.message?.[0]}>
          <textarea
            id="message"
            name="message"
            required
            disabled={isPending}
            rows={5}
            placeholder="Décrivez brièvement votre projet — surface, type de travaux, délais souhaités..."
            className={`${inputClass} resize-none`}
          />
        </Field>

        {/* Divider */}
        <div className="h-px bg-canvas/10" />

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
          className="group w-full flex items-center justify-between bg-terra text-canvas px-6 py-4 hover:bg-terra/85 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span className="text-sm font-sans font-medium uppercase tracking-[0.15em]">
            {isPending ? 'Envoi en cours…' : 'Envoyer ma demande'}
          </span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </form>
  )
}
