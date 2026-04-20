import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { servicesSEO } from '@/lib/services-seo'
import { blogPosts } from '@/lib/blog-posts'
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema'

const BASE_URL = 'https://new.horizon-habitat-projet.com'

export function generateStaticParams() {
  return servicesSEO.map((s) => ({ slug: s.seoSlug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = servicesSEO.find((s) => s.seoSlug === slug)
  if (!service) return { title: 'Service non trouvé' }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.seoSlug.replace(/-/g, ' '), service.title, 'artisan Argenteuil', 'Val-d\'Oise', 'Île-de-France'],
    alternates: { canonical: `${BASE_URL}/services/${service.seoSlug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
      locale: 'fr_FR',
      url: `${BASE_URL}/services/${service.seoSlug}`,
      siteName: 'Horizon Habitat Projet',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = servicesSEO.find((s) => s.seoSlug === slug)
  if (!service) notFound()

  const relatedPosts = blogPosts.filter((p) => service.relatedBlogSlugs.includes(p.slug))

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: BASE_URL },
    { name: 'Services', url: `${BASE_URL}/services` },
    { name: service.title, url: `${BASE_URL}/services/${service.seoSlug}` },
  ])
  const faqSchema = buildFAQSchema(service.faqs)
  const localBusinessSchema = buildLocalBusinessSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="flex flex-col min-h-screen bg-canvas">
        <Header />

        <main className="flex-1 pt-20">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="bg-pearl border-b border-veil px-6 lg:px-10 py-3">
            <ol className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-clay font-sans">
              <li>
                <Link href="/" className="hover:text-terra transition-colors">Accueil</Link>
              </li>
              <li aria-hidden="true" className="text-veil">›</li>
              <li>
                <Link href="/services" className="hover:text-terra transition-colors">Services</Link>
              </li>
              <li aria-hidden="true" className="text-veil">›</li>
              <li className="text-bark font-medium" aria-current="page">{service.title}</li>
            </ol>
          </nav>

          {/* Hero */}
          <section className="bg-bark text-canvas py-16 lg:py-24 px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
              <p className="font-sans text-sm text-terra tracking-widest uppercase mb-4">
                Horizon Habitat Projet — Argenteuil & Val-d&apos;Oise
              </p>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light mb-6 leading-tight">
                {service.h1}
              </h1>
              <p className="font-sans text-lg text-canvas/75 max-w-2xl leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#nous_contacter"
                  className="inline-flex items-center justify-center bg-terra text-canvas px-8 py-4 font-sans font-semibold hover:bg-terra/90 transition-colors rounded-sm"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:0766415639"
                  className="inline-flex items-center justify-center border border-canvas/40 text-canvas px-8 py-4 font-sans font-medium hover:border-canvas/70 transition-colors rounded-sm"
                >
                  07 66 41 56 39
                </a>
              </div>
            </div>
          </section>

          {/* Prestations */}
          <section className="bg-canvas py-16 lg:py-20 px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div>
                  <p className="font-sans text-xs text-terra tracking-widest uppercase mb-3">Nos prestations</p>
                  <h2 className="font-display text-3xl lg:text-4xl text-bark mb-6 font-light">
                    Ce que nous réalisons
                  </h2>
                  <ul className="space-y-3">
                    {service.prestations.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-sans text-clay">
                        <span className="text-terra mt-1 flex-shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-pearl border border-veil rounded-sm p-8">
                  <p className="font-sans text-xs text-terra tracking-widest uppercase mb-4">Devis gratuit</p>
                  <h3 className="font-display text-2xl text-bark mb-4 font-light">
                    Un projet en tête ?
                  </h3>
                  <p className="font-sans text-clay mb-6 text-sm leading-relaxed">
                    Contactez-nous pour une visite et un devis gratuit. Nous vous répondons sous 24h.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/#nous_contacter"
                      className="block text-center bg-terra text-canvas px-6 py-3 font-sans font-semibold hover:bg-terra/90 transition-colors rounded-sm text-sm"
                    >
                      Formulaire de contact
                    </Link>
                    <a
                      href="tel:0766415639"
                      className="block text-center border border-veil text-bark px-6 py-3 font-sans font-medium hover:border-terra hover:text-terra transition-colors rounded-sm text-sm"
                    >
                      Appeler le 07 66 41 56 39
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Zone d'intervention */}
          <section className="bg-pearl border-y border-veil py-12 lg:py-16 px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
              <p className="font-sans text-xs text-terra tracking-widest uppercase mb-3">Zone d&apos;intervention</p>
              <h2 className="font-display text-2xl lg:text-3xl text-bark mb-6 font-light">
                Nous intervenons dans votre secteur
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.areas.map((area) => (
                  <span
                    key={area}
                    className="bg-canvas border border-veil text-clay font-sans text-sm px-4 py-2 rounded-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-canvas py-16 lg:py-20 px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
              <p className="font-sans text-xs text-terra tracking-widest uppercase mb-3">Questions fréquentes</p>
              <h2 className="font-display text-3xl lg:text-4xl text-bark mb-10 font-light">
                Vos questions, nos réponses
              </h2>
              <div className="space-y-6 max-w-3xl">
                {service.faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-veil pb-6">
                    <h3 className="font-display text-lg text-bark mb-3 font-medium">
                      {faq.question}
                    </h3>
                    <p className="font-sans text-clay leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Articles liés */}
          {relatedPosts.length > 0 && (
            <section className="bg-pearl border-t border-veil py-16 lg:py-20 px-6 lg:px-10">
              <div className="max-w-6xl mx-auto">
                <p className="font-sans text-xs text-terra tracking-widest uppercase mb-3">Ressources</p>
                <h2 className="font-display text-2xl lg:text-3xl text-bark mb-8 font-light">
                  Articles liés
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group bg-canvas border border-veil rounded-sm p-6 hover:border-terra transition-colors"
                    >
                      <p className="font-sans text-xs text-terra mb-2">{post.readingTime} min de lecture</p>
                      <h3 className="font-display text-base text-bark group-hover:text-terra transition-colors font-medium leading-snug mb-2">
                        {post.title}
                      </h3>
                      <p className="font-sans text-clay text-xs leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA final */}
          <section className="bg-bark text-canvas py-16 px-6 lg:px-10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="font-display text-3xl lg:text-4xl font-light mb-4">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="font-sans text-canvas/70 mb-8 max-w-xl mx-auto">
                Devis gratuit sous 24h. Nous vous répondons rapidement et nous déplaçons à Argenteuil et dans tout le Val-d&apos;Oise.
              </p>
              <Link
                href="/#nous_contacter"
                className="inline-flex items-center justify-center bg-terra text-canvas px-10 py-4 font-sans font-semibold hover:bg-terra/90 transition-colors rounded-sm"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
