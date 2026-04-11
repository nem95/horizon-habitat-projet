const featuredReviews = [
  {
    name: 'Sophie L.',
    location: 'Paris 11e',
    text: "Un travail remarquable pour notre cuisine. M. Zitouni est à l'écoute, de bon conseil et le résultat dépasse nos attentes. Rapport qualité/prix imbattable.",
  },
  {
    name: 'Thomas R.',
    location: 'Cergy',
    text: 'Rénovation complète de la salle de bain réalisée dans les temps, avec une propreté exemplaire. Je recommande sans hésiter.',
  },
  {
    name: 'Nadia M.',
    location: 'Argenteuil',
    text: 'Pose de parquet et peinture dans tout l\'appartement. Finitions impeccables, tarifs transparents et une vraie gentillesse.',
  },
]

export function ReviewsSection() {
  return (
    <section id="avis" className="py-24 border-t border-veil">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-clay mb-4">
            Témoignages
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-bark leading-tight">
            Ils nous font <span className="text-terra">confiance</span>
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {featuredReviews.map((review) => (
            <div key={review.name} className="border-t border-veil pt-8">
              <p className="text-base font-sans font-light text-bark/80 leading-relaxed mb-8 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-display font-medium text-bark">{review.name}</p>
                <p className="text-xs font-sans uppercase tracking-[0.1em] text-clay mt-1">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-veil flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm font-sans text-clay tracking-wide">
            24 avis vérifiés · Google · Note Excellent
          </p>
          <a
            href="https://www.google.com/search?q=Horizon+Habitat+Projet+avis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-bark text-bark px-6 py-4 text-sm font-sans font-medium uppercase tracking-[0.12em] hover:bg-bark hover:text-canvas transition-colors duration-300"
          >
            Voir tous les avis
          </a>
        </div>
      </div>
    </section>
  )
}
