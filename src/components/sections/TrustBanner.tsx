const stats = [
  { value: '24', label: 'avis vérifiés' },
  { value: '50+', label: 'projets livrés' },
  { value: '100%', label: 'délais tenus' },
  { value: '<24h', label: 'de réponse' },
]

export function TrustBanner() {
  return (
    <section className="py-16 border-b border-veil">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-terra text-terra" viewBox="0 0 20 20">
                  <path d="M10 15L3.82 19.02L5.97 12.52L0 8.49L7.19 8.02L10 1L12.81 8.02L20 8.49L14.03 12.52L16.18 19.02L10 15Z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-sans text-clay tracking-wide">
              Note Excellent · Google
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-12 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-display font-normal text-bark">
                  {stat.value}
                </p>
                <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-clay mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
