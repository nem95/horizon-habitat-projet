interface SectionLabelProps {
  number: string | number
  label: string
  color?: 'gold' | 'ivory'
}

export function SectionLabel({
  number,
  label,
  color = 'gold',
}: SectionLabelProps) {
  const numberColor = color === 'gold' ? 'text-gold' : 'text-ivory'
  const labelColor = color === 'gold' ? 'text-charcoal' : 'text-ivory'

  return (
    <div className="flex items-baseline gap-3">
      <div
        className={`${numberColor} text-6xl lg:text-7xl font-display font-300 leading-none opacity-60`}
      >
        {String(number).padStart(2, '0')}
      </div>
      <div
        className={`${labelColor} text-sm lg:text-base font-sans font-medium tracking-wide uppercase`}
      >
        — {label}
      </div>
    </div>
  )
}
