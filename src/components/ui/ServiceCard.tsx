import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  isEven?: boolean
}

export function ServiceCard({ service, isEven = false }: ServiceCardProps) {
  const bgColor = isEven ? 'bg-surface' : 'bg-charcoal'
  const borderColor = isEven ? 'border-gold' : 'border-transparent'

  return (
    <div className={`${bgColor} border-l-4 ${borderColor} p-8 transition-transform duration-300 hover:scale-105`}>
      <h3 className="font-display text-2xl lg:text-3xl text-ivory mb-4 font-light">
        {service.title}
      </h3>
      <p className="text-ivory/80 font-sans text-base leading-relaxed">
        {service.description}
      </p>
    </div>
  )
}
