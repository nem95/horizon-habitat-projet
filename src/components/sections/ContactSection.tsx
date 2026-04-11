import { ContactForm } from '@/components/ui/ContactForm'
import { COMPANY_INFO } from '@/types'

export function ContactSection() {
  return (
    <section id="contact" className="bg-bark">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-[5fr_7fr] min-h-[600px]">

          {/* Left — info */}
          <div className="flex flex-col justify-center py-20 md:pr-16 border-b md:border-b-0 md:border-r border-canvas/10">
            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-terra mb-6">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-normal text-canvas leading-tight mb-8">
              Parlons de
              <br />
              <span className="text-canvas/50">votre projet</span>
            </h2>
            <p className="text-base font-sans font-light text-canvas/60 leading-relaxed mb-10 max-w-xs">
              Devis gratuit, réponse sous 24 heures,
              sans engagement. Chaque projet commence
              par une conversation.
            </p>

            <div className="space-y-4">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-3 group min-h-[44px]"
              >
                <span className="w-8 h-px bg-canvas/20 group-hover:bg-terra group-hover:w-12 transition-all duration-300" />
                <span className="text-lg font-sans font-medium text-canvas/90 group-hover:text-canvas transition-colors">
                  {COMPANY_INFO.phone}
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-canvas/20" />
                <span className="text-base font-sans text-canvas/50">
                  Paris · Val d&apos;Oise · Île-de-France
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-canvas/20" />
                <span className="text-base font-sans text-canvas/50">
                  Lun–Ven 8h–19h &nbsp;·&nbsp; Sam 9h–17h
                </span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex flex-col justify-center py-20 md:pl-16">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
