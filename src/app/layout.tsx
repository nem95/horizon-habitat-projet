import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import { buildLocalBusinessSchema, buildOrganizationSchema } from '@/lib/schema'
import { COMPANY_INFO } from '@/types'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://new.horizon-habitat-projet.com'),
  icons: {
    icon: '/favicon.webp',
    apple: '/favicon.webp',
  },
  title: {
    default: 'Rénovation Intérieure à Argenteuil | Horizon Habitat Projet',
    template: '%s | Horizon Habitat Projet',
  },
  description:
    'Artisan en rénovation intérieure à Argenteuil, Île-de-France. Cuisine, salle de bain, peinture, électricité, revêtements de sol. Devis gratuit sous 24h.',
  keywords: [
    'rénovation intérieure Argenteuil',
    'artisan rénovation Île-de-France',
    'cuisine sur mesure 95',
    'rénovation salle de bain Val-d\'Oise',
    'entreprise rénovation Argenteuil',
    'rénovation Argenteuil prix',
    'électricité Argenteuil',
    'peinture Île-de-France',
  ],
  authors: [
    {
      name: COMPANY_INFO.name,
      url: 'https://new.horizon-habitat-projet.com',
    },
  ],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://new.horizon-habitat-projet.com',
    siteName: COMPANY_INFO.name,
    title: 'Horizon Habitat Projet — Rénovation Intérieure de Qualité',
    description:
      'Entreprise de rénovation intérieure à Argenteuil. Cuisine, salle de bain, peinture, électricité. Devis gratuit, artisan qualifié.',
    images: [
      {
        url: 'https://new.horizon-habitat-projet.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Horizon Habitat Projet - Rénovation Intérieure Argenteuil',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horizon Habitat Projet — Rénovation Intérieure',
    description:
      'Artisan en rénovation intérieure à Argenteuil et Île-de-France. Devis gratuit.',
    images: ['https://new.horizon-habitat-projet.com/opengraph-image'],
  },
  alternates: {
    canonical: 'https://new.horizon-habitat-projet.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport = {
  themeColor: '#F8F4EF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = buildLocalBusinessSchema()
  const organizationSchema = buildOrganizationSchema()

  return (
    <html
      lang="fr"
      className={`${syne.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c'),
          }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
          }}
          suppressHydrationWarning
        />
      </head>
      <body className="bg-canvas text-bark">{children}</body>
    </html>
  )
}
