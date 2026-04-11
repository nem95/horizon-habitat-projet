const steps = [
  {
    num: '01',
    title: 'Échange',
    desc: 'On discute de votre projet, de vos envies et de votre budget. Un premier contact simple et sans engagement.',
  },
  {
    num: '02',
    title: 'Devis',
    desc: 'Visite sur place, prise de mesures et devis détaillé transmis sous 24 heures.',
  },
  {
    num: '03',
    title: 'Réalisation',
    desc: 'Travaux soignés, chantier propre, suivi régulier et livraison dans les temps.',
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 border-y border-veil">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          {/* Left */}
          <div>
            <p className="text-sm font-sans uppercase tracking-[0.2em] text-clay mb-4">
              Approche
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-normal text-bark leading-tight">
              Simple,
              <br />
              <span className="text-terra">transparent.</span>
            </h2>
          </div>

          {/* Right — steps */}
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-8 items-start">
                <span className="text-5xl font-display font-light text-veil select-none leading-none shrink-0">
                  {step.num}
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-display font-medium text-bark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base font-sans font-light text-clay leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
