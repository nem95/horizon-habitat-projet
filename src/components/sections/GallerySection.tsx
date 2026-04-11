import Image from 'next/image'

const photos = [
  { src: '/images/cuisine_cergy_pontoise.webp', alt: 'Cuisine rénovée — Cergy Pontoise', tall: true },
  { src: '/images/salle_de_bain_paris.webp', alt: 'Salle de bain — Paris', tall: false },
  { src: '/images/pose_carrelage_ile_de_france.webp', alt: "Pose carrelage — Île-de-France", tall: false },
  { src: '/images/renovation-salon.jpg', alt: 'Salon ouvert — Pontoise', tall: true },
  { src: '/images/peinture_val_oise.webp', alt: 'Peinture intérieure — Val-d\'Oise', tall: false },
  { src: '/images/déco_interieur.webp', alt: 'Décoration intérieure — Île-de-France', tall: false },
]

export function GallerySection() {
  return (
    <section id="realisations" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-clay mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-normal text-bark leading-tight">
              Projets <span className="text-terra">réalisés</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-block bg-bark text-canvas px-6 py-3 text-xs font-sans font-medium uppercase tracking-[0.12em] hover:bg-bark/80 transition-colors duration-300 self-start md:self-auto shrink-0"
          >
            Demander un devis
          </a>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden group">
              <div className={`relative overflow-hidden ${photo.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                />
              </div>
              <p className="text-[10px] font-sans uppercase tracking-[0.1em] text-clay/60 mt-2">
                {photo.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
