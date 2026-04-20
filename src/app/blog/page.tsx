import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Blog rénovation intérieure Argenteuil',
  description:
    'Articles et conseils sur la rénovation intérieure en Île-de-France. Cuisine, salle de bain, peinture, électricité et revêtements de sol par nos artisans.',
  keywords: [
    'rénovation intérieure Argenteuil',
    'conseils rénovation Île-de-France',
    'guide rénovation cuisine',
  ],
  openGraph: {
    title: 'Blog — Horizon Habitat Projet',
    description: 'Articles et conseils sur la rénovation intérieure en Île-de-France',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function BlogPage() {
  const allPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const featuredPosts = allPosts.filter((post) => post.featured)
  const otherPosts = allPosts.filter((post) => !post.featured)

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-charcoal text-ivory py-16 lg:py-24 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-display text-5xl lg:text-6xl font-light mb-4">
              Conseils et Guides
            </h1>
            <p className="font-sans text-lg text-ivory/70">
              Découvrez nos articles d'expert sur la rénovation intérieure en Île-de-France
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="bg-ivory py-16 lg:py-24 px-6 lg:px-24">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-12 font-light">
                Articles en vedette
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <article className="bg-surface text-ivory p-8 rounded-sm hover:border-gold border-2 border-transparent transition-colors h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-gold font-semibold text-sm">
                          {post.readingTime} min de lecture
                        </span>
                        <time className="text-ivory/60 text-sm">
                          {new Date(post.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <h3 className="font-display text-2xl text-ivory mb-3 group-hover:text-gold transition-colors font-light">
                        {post.title}
                      </h3>
                      <p className="font-sans text-ivory/70 mb-6 flex-1">
                        {post.description}
                      </p>
                      <span className="inline-flex items-center text-gold font-semibold">
                        Lire l'article →
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="bg-surface py-16 lg:py-24 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl text-ivory mb-12 font-light">
              Tous les articles
            </h2>
            <div className="space-y-4">
              {allPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="border-l-4 border-gold/40 pl-6 py-4 hover:border-gold transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4">
                      <div className="flex-1">
                        <h3 className="font-display text-xl text-ivory group-hover:text-gold transition-colors font-light">
                          {post.title}
                        </h3>
                        <p className="font-sans text-ivory/60 text-sm mt-2">
                          {post.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-ivory/60 whitespace-nowrap">
                        <span>{post.readingTime} min</span>
                        <time>
                          {new Date(post.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
