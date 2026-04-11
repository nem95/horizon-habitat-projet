import { ContactForm } from '@/components/ui/ContactForm'
import { COMPANY_INFO } from '@/types'

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
          {/* Left — intro */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-clay mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-normal text-bark leading-tight mb-6">
              Parlons de
              <br />
              <em className="font-light">votre projet</em>
            </h2>
            <p className="text-sm font-sans font-light text-clay leading-relaxed mb-8 max-w-sm">
              Devis gratuit, réponse sous 24 heures, sans engagement.
              Chaque projet commence par une conversation.
            </p>
            <div className="space-y-3 text-sm font-sans text-clay">
              <p>
                <span className="text-bark font-medium">Tél.</span>{' '}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="hover:text-bark transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p>
                <span className="text-bark font-medium">Zone</span>{' '}
                Paris · Val d&apos;Oise · Île-de-France
              </p>
              <p>
                <span className="text-bark font-medium">Email</span>{' '}
                {COMPANY_INFO.email}
              </p>
              <p>
                <span className="text-bark font-medium">Horaires</span>{' '}
                Lun–Ven 8h–19h, Sam 9h–17h
              </p>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
