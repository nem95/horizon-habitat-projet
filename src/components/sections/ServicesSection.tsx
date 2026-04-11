import Image from 'next/image'

const services = [
  {
    title: 'Cuisine',
    desc: 'De la conception 3D à la pose complète, chaque détail compte.',
    img: '/images/cuisine_cergy_pontoise.webp',
  },
  {
    title: 'Salle de bain',
    desc: 'Douche italienne, carrelage, plomberie — un espace repensé.',
    img: '/images/salle_de_bain_paris.webp',
  },
  {
    title: 'Sols & revêtements',
    desc: 'Parquet, carrelage ou vinyle — posés avec soin sur supports préparés.',
    img: '/images/pose_carrelage_ile_de_france.webp',
  },
  {
    title: 'Peinture & décoration',
    desc: "Couleurs, enduits décoratifs et finitions qui transforment l'ambiance.",
    img: '/images/peinture_val_oise.webp',
  },
  {
    title: 'Électricité',
    desc: 'Mise aux normes, nouveaux circuits et installations modernes.',
    img: '/images/electricien_argenteuil.webp',
  },
  {
    title: 'Aménagement',
    desc: "Cloisons, rangements sur mesure et optimisation de chaque mètre carré.",
    img: '/images/déco_interieur.webp',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20 max-w-lg">
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-clay mb-4">
            Savoir-faire
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-bark leading-tight">
            Chaque espace
            <br />
            <span className="text-terra">mérite attention</span>
          </h2>
        </div>

        {/* Asymmetric grid — portfolio style */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group ${i % 3 === 0 ? 'md:pt-12' : ''}`}
            >
              <div className="relative overflow-hidden mb-5 aspect-[4/3]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-display font-medium text-bark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base font-sans font-light text-clay max-w-xs leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                {/* Arrow icon */}
                <svg
                  className="w-5 h-5 text-clay/40 group-hover:text-terra transition-colors duration-300 mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-veil">
          <a
            href="#contact"
            className="inline-block bg-bark text-canvas px-7 py-4 text-sm font-sans font-medium uppercase tracking-[0.12em] hover:bg-bark/80 transition-colors duration-300"
          >
            Demander un devis gratuit
          </a>
        </div>
      </div>
    </section>
  )
}
