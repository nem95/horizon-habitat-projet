import { COMPANY_INFO } from '@/types'
import { services } from './services'

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: COMPANY_INFO.name,
    description:
      'Entreprise de rénovation intérieure à Argenteuil et en Île-de-France. Cuisine, salle de bain, peinture, électricité, revêtements, aménagement intérieur.',
    url: 'https://new.horizon-habitat-projet.com',
    telephone: COMPANY_INFO.phone,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.region,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.coordinates.latitude,
      longitude: COMPANY_INFO.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: COMPANY_INFO.socialLinks.map((link) => link.url),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '24',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de rénovation intérieure',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
  }
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    logo: 'https://new.horizon-habitat-projet.com/logo.png',
    url: 'https://new.horizon-habitat-projet.com',
    sameAs: COMPANY_INFO.socialLinks.map((link) => link.url),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'Customer Service',
      areaServed: ['FR'],
      language: ['fr'],
    },
  }
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}
