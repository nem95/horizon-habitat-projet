import { Button } from '@/components/ui/Button'
import { COMPANY_INFO } from '@/types'

export function AboutSection() {
  const keyPoints = [
    {
      title: 'Savoir-faire et qualité',
      description: 'Une équipe d\'artisans qualifiés pour des finitions impeccables.',
    },
    {
      title: 'Solutions sur mesure',
      description: 'Un accompagnement personnalisé pour chaque projet.',
    },
    {
      title: 'Matériaux sélectionnés',
      description: 'Des produits durables et esthétiques pour un rendu optimal.',
    },
    {
      title: 'Respect des délais et du budget',
      description: 'Une gestion efficace des travaux, sans mauvaises surprises.',
    },
    {
      title: 'Clients satisfaits',
      description: 'Nos réalisations et recommandations sont notre meilleure publicité.',
    },
  ]

  return (
    <section id="apropos" className="bg-charcoal py-20 lg:py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <h2 className="font-display text-5xl lg:text-6xl text-ivory mb-8 font-light">
          À propos de nous
        </h2>

        {/* About text */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-6">
          <h3 className="font-display text-2xl lg:text-3xl text-gold font-light">
            Horizon Habitat Projet – Votre Expert en Rénovation Intérieure
          </h3>

          <p className="font-sans text-lg text-ivory/90 leading-relaxed">
            Chez <span className="text-gold font-semibold">Horizon Habitat Projet</span>, nous transformons vos espaces
            avec expertise et passion. Spécialistes de la{' '}
            <span className="text-gold font-semibold">rénovation intérieure</span>, nous intervenons pour la{' '}
            <span className="text-gold font-semibold">modernisation de maisons, d'appartements et de locaux professionnels</span>.
          </p>

          <p className="font-sans text-base text-ivory/80 leading-relaxed">
            De la <span className="text-gold font-semibold">rénovation de salle de bain et cuisine</span> à la{' '}
            <span className="text-gold font-semibold">pose de revêtements de sol et muraux</span>, en passant par l'
            <span className="text-gold font-semibold">aménagement intérieur et les travaux d'électricité</span>, nous
            vous garantissons un travail soigné et durable.
          </p>
        </div>

        {/* Key points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {keyPoints.map((point, index) => (
            <div key={index} className="space-y-2">
              <h4 className="font-sans font-semibold text-gold text-sm uppercase tracking-wide">
                — {point.title}
              </h4>
              <p className="font-sans text-ivory/80 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-gold/20 pt-12 flex flex-col sm:flex-row items-center gap-6">
          <div>
            <p className="font-sans text-gold text-sm uppercase tracking-wide mb-2">
              Besoin d'un devis ?
            </p>
            <p className="font-display text-2xl text-ivory font-light">
              Contactez-nous dès aujourd'hui
            </p>
          </div>
          <a href="#nous_contacter" className="flex-shrink-0">
            <Button variant="primary" size="lg">
              Demander un devis
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
