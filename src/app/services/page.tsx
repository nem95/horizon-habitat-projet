import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { servicesSEO } from '@/lib/services-seo'
import { buildBreadcrumbSchema } from '@/lib/schema'

const BASE_URL = 'https://new.horizon-habitat-projet.com'

export const metadata: Metadata = {
  title: 'Services de Rénovation Intérieure à Argenteuil — Horizon Habitat Projet',
  description:
    'Découvrez nos services : électricité, peinture, carrelage, salle de bain, cuisine sur mesure, verrière intérieure. Artisan à Argenteuil et Val-d\'Oise. Devis gratuit.',
  keywords: [
    'services rénovation Argenteuil',
    'artisan rénovation intérieure',
    'électricien Argenteuil',
    'peintre Argenteuil',
    'carreleur Argenteuil',
    'cuisiniste Argenteuil',
    'rénovation salle de bain Argenteuil',
    'verrière intérieure Argenteuil',
  ],
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: 'Services de Rénovation Intérieure — Horizon Habitat Projet',
    description: 'Électricité, peinture, carrelage, salle de bain, cuisine, verrière. Artisan à Argenteuil et Val-d\'Oise.',
    type: 'website',
    locale: 'fr_FR',
    url: `${BASE_URL}/services`,
    siteName: 'Horizon Habitat Projet',
  },
}

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: BASE_URL },
    { name: 'Services', url: `${BASE_URL}/services` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="flex flex-col min-h-screen bg-canvas">
        <Header />

        <main className="flex-1 pt-20">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="bg-pearl border-b border-veil px-6 lg:px-10 py-3">
            <ol className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-clay font-sans">
              <li>
                <Link href="/" className="hover:text-terra transition-colors">Accueil</Link>
              </li>
              <li aria-hidden="true" className="text-veil">›</li>
              <li className="text-bark font-medium" aria-current="page">Services</li>
            </ol>
          </nav>

          {/* Hero */}
          <section className="bg-bark text-canvas py-16 lg:py-24 px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
              <p className="font-sans text-sm text-terra tracking-widest uppercase mb-4">
                Argenteuil &amp; Val-d&apos;Oise (95)
              </p>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light mb-6 leading-tight">
                Nos Services de<br />Rénovation Intérieure
              </h1>
              <p className="font-sans text-lg text-canvas/75 max-w-2xl leading-relaxed">
                Artisan qualifié intervenant à Argenteuil et dans tout le Val-d&apos;Oise. Cuisine, salle de bain, peinture, électricité, carrelage, verrière intérieure.
              </p>
            </div>
          </section>

          {/* Services grid */}
          <section className="bg-canvas py-16 lg:py-24 px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesSEO.map((service) => (
                  <Link
                    key={service.seoSlug}
                    href={`/services/${service.seoSlug}`}
                    className="group bg-pearl border border-veil rounded-sm p-8 hover:border-terra transition-colors flex flex-col"
                  >
                    <h2 className="font-display text-xl text-bark group-hover:text-terra transition-colors font-medium mb-3 leading-snug">
                      {service.title}
                    </h2>
                    <p className="font-sans text-clay text-sm leading-relaxed flex-1 mb-6">
                      {service.description.slice(0, 130)}…
                    </p>
                    <span className="font-sans text-sm text-terra font-semibold inline-flex items-center gap-1">
                      En savoir plus <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Zone d'intervention */}
          <section className="bg-pearl border-y border-veil py-12 lg:py-16 px-6 lg:px-10">
            <div className="max-w-6xl mx-auto text-center">
              <p className="font-sans text-xs text-terra tracking-widest uppercase mb-3">Zone d&apos;intervention</p>
              <h2 className="font-display text-2xl lg:text-3xl text-bark mb-4 font-light">
                Nous intervenons près de chez vous
              </h2>
              <p className="font-sans text-clay mb-6 max-w-xl mx-auto text-sm">
                Argenteuil, Cergy, Saint-Gratien, Sartrouville, Cormeilles-en-Parisis, Herblay, Ermont, Enghien-les-Bains, Sannois, Franconville et toute l&apos;Île-de-France.
              </p>
              <Link
                href="/#nous_contacter"
                className="inline-flex items-center justify-center bg-terra text-canvas px-8 py-4 font-sans font-semibold hover:bg-terra/90 transition-colors rounded-sm"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
