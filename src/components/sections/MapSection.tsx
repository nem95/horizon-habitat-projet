import { SectionLabel } from '@/components/ui/SectionLabel'
import { COMPANY_INFO } from '@/types'

export function MapSection() {
  return (
    <section className="bg-charcoal py-20 lg:py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="mb-12 lg:mb-16">
          <SectionLabel number="05" label="LOCALISATION" color="gold" />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Map iframe */}
          <div className="order-2 lg:order-1 h-96 lg:h-full min-h-96 rounded-sm overflow-hidden border border-gold/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.548937437087!2d2.2461!3d48.9479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d4db8e8e8e7%3A0x3!2sArgenteuil%2C+France!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Horizon Habitat Projet"
            />
          </div>

          {/* Right: Address and info */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="font-display text-4xl lg:text-5xl text-ivory font-light">
              Nous sommes à votre écoute
            </h2>

            {/* Address block */}
            <div className="space-y-4 border-l-4 border-gold pl-6">
              <div>
                <h3 className="font-sans text-sm uppercase tracking-wide text-gold mb-2">
                  Adresse
                </h3>
                <p className="font-sans text-ivory text-lg">
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}
                  <br />
                  {COMPANY_INFO.address.region}
                </p>
              </div>

              <div>
                <h3 className="font-sans text-sm uppercase tracking-wide text-gold mb-2">
                  Contact
                </h3>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-sans text-ivory text-lg hover:text-gold-light transition-colors font-semibold"
                >
                  {COMPANY_INFO.phone}
                </a>
                <p className="font-sans text-ivory/70 text-sm mt-2">
                  Lundi à Vendredi : 8h - 19h
                  <br />
                  Samedi : 9h - 17h
                </p>
              </div>

              <div>
                <h3 className="font-sans text-sm uppercase tracking-wide text-gold mb-2">
                  Service
                </h3>
                <p className="font-sans text-ivory/80">
                  Nous couvrons l'ensemble de l'Île-de-France pour vos projets de rénovation intérieure.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-block px-8 py-3 bg-gold text-charcoal font-sans font-semibold hover:bg-gold-light transition-colors duration-200"
            >
              Appelez-nous maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
