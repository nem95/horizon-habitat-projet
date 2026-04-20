import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'
import { servicesSEO } from '@/lib/services-seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://new.horizon-habitat-projet.com'
  const now = new Date()

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: post.featured ? 0.8 : 0.7,
  }))

  const serviceRoutes = servicesSEO.map((service) => ({
    url: `${baseUrl}/services/${service.seoSlug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...serviceRoutes,
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...blogRoutes,
  ]
}
