import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-medium transition-colors duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold'

  const variants = {
    primary:
      'bg-gold text-charcoal hover:bg-gold-light focus:ring-gold/50',
    outline:
      'border-2 border-gold text-gold hover:bg-gold hover:text-charcoal focus:ring-gold/50',
    ghost:
      'text-gold hover:bg-gold/10 focus:ring-gold/50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
