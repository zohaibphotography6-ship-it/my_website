import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-nav'
import { HeroSection } from '@/components/home/hero-section'
import { StatsBar } from '@/components/home/stats-bar'
import { ServicesSection } from '@/components/home/services-section'
import { SignatureExperience } from '@/components/home/signature-experience'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { PackagesSection } from '@/components/home/packages-section'
import { PressSection } from '@/components/home/press-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <SignatureExperience />
      <TestimonialsSection />
      <PackagesSection />
      <PressSection />
      <CTASection />
      <Footer />
      <MobileNav />
    </>
  )
}
