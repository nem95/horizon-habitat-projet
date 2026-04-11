'use client'

import { useState } from 'react'
import Link from 'next/link'
import { COMPANY_INFO } from '@/types'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Témoignages', href: '#avis' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '/blog' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-20 px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo.webp"
            alt="Horizon Habitat Projet"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-clay hover:text-bark transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Phone — desktop */}
        <a
          href={COMPANY_INFO.phoneHref}
          className="hidden md:flex items-center gap-2 text-xs font-sans tracking-wide text-clay hover:text-bark transition-colors"
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {COMPANY_INFO.phone}
        </a>

        {/* Burger — mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-bark p-1"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Subtle divider */}
      <div className="h-px bg-bark/5" />

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-canvas px-6 py-8 space-y-4 border-b border-veil">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-sans uppercase tracking-[0.15em] text-clay hover:text-bark py-3 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={COMPANY_INFO.phoneHref}
            className="flex items-center gap-2 pt-4 text-base font-sans font-medium tracking-wide text-clay border-t border-veil mt-4 min-h-[44px]"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {COMPANY_INFO.phone}
          </a>
        </div>
      )}
    </nav>
  )
}
