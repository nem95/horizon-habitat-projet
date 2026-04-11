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

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-veil py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src="/logo.webp"
                alt="Horizon Habitat Projet"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-xs font-sans font-light text-clay leading-relaxed max-w-xs">
              Artisan en rénovation intérieure. Qualité artisanale,
              transparence et respect des délais en Île-de-France.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-clay mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-sans text-clay hover:text-bark transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-clay mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-xs font-sans text-clay">
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-terra shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={COMPANY_INFO.phoneHref} className="hover:text-bark transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-terra shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 text-terra mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Paris · Cergy · Pontoise · Argenteuil · Val&nbsp;d&apos;Oise</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-veil mt-12 pt-8 text-center">
          <p className="text-[10px] font-sans uppercase tracking-[0.1em] text-clay/50">
            &copy; {currentYear} Horizon Habitat Projet
          </p>
        </div>
      </div>
    </footer>
  )
}
