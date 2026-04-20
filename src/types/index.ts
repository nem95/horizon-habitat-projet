/* ============================================================================
   Shared TypeScript Types
   ============================================================================ */

export interface Review {
  id: number
  author: string
  rating: 5 | 4 | 3 | 2 | 1
  date: string // ISO 8601
  text: string
  avatarInitials: string
}

export interface Service {
  id: number
  slug: string
  title: string
  description: string
  icon?: string
}

export interface BlogPost {
  slug: string
  title: string
  metaTitle?: string // Short SEO title (≤35 chars, full title used for h1)
  description: string
  date: string // ISO 8601
  author?: string
  readingTime?: number // minutes
  featured?: boolean
}

export interface ContactFormInput {
  nom: string
  prenom: string
  telephone: string
  email: string
  message: string
}

export interface ContactFormState {
  success: boolean
  message: string
  fieldErrors?: Record<string, string[]>
}

export interface SocialLink {
  label: string
  url: string
  icon: 'instagram' | 'tiktok' | 'facebook' | 'linkedin'
}

export const COMPANY_INFO = {
  name: 'Horizon Habitat Projet',
  phone: '07 66 41 56 39',
  phoneHref: 'tel:0766415639',
  email: '',
  address: {
    street: 'Argenteuil',
    city: 'Argenteuil',
    postalCode: '95100',
    region: 'Île-de-France',
    country: 'France',
  },
  coordinates: {
    latitude: 48.9479,
    longitude: 2.2461,
  },
  socialLinks: [
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/horizon_habitat_projet/',
      icon: 'instagram' as const,
    },
    {
      label: 'TikTok',
      url: 'https://www.tiktok.com/@horizon.habitat.projet',
      icon: 'tiktok' as const,
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/Horizon.Habitat.Projet/',
      icon: 'facebook' as const,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hichem-zitouni-022116260/',
      icon: 'linkedin' as const,
    },
  ] satisfies SocialLink[],
} as const
