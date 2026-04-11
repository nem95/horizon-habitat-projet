import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBanner } from '@/components/sections/TrustBanner'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-canvas">
      <Header />
      <main className="flex-1 pt-20">
        <HeroSection />
        <TrustBanner />
        <ServicesSection />
        <GallerySection />
        <ProcessSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
