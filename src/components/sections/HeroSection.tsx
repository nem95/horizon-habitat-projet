import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden -mt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cuisine_cergy_pontoise.webp"
          alt="Cuisine moderne rénovée en Île-de-France"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark/70 via-bark/20 to-transparent" />
      </div>

      {/* Content — bottom-left */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 lg:px-10 pb-20 md:pb-28">
        <div className="max-w-2xl">
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-canvas/60 mb-6 animate-fade-in-up">
            Artisan rénovation · Île-de-France
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-normal text-canvas leading-[0.95] mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Votre intérieur,
            <br />
            <span className="text-terra">réinventé.</span>
          </h1>

          <p
            className="text-base md:text-lg font-sans font-light text-canvas/70 max-w-md leading-relaxed mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Cuisine, salle de bain, sols, peinture — un interlocuteur unique
            pour transformer votre espace de vie.
          </p>

          <div
            className="flex items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.35s' }}
          >
            <a
              href="#contact"
              className="inline-block bg-canvas text-bark px-7 py-4 text-sm font-sans font-medium uppercase tracking-[0.12em] hover:bg-canvas/90 transition-colors duration-300"
            >
              Demander un devis
            </a>
            <a
              href="#realisations"
              className="inline-block border border-canvas/60 text-canvas px-7 py-4 text-sm font-sans uppercase tracking-[0.12em] hover:border-canvas hover:text-canvas transition-colors duration-300"
            >
              Voir les projets
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-4 h-4 text-canvas/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
