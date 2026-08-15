import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-nav'
import { ServicesGrid } from '@/components/services/services-grid'
import { ProcessSection } from '@/components/services/process-section'
import { AddonsSection } from '@/components/services/addons-section'
import { FAQSection } from '@/components/services/faq-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | ZOHAIB CINEMATICS',
  description: 'Premium wedding photography and cinematography services. Investment and artistry for crafting your legacy.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-5 md:px-20 max-w-[1440px] mx-auto mb-16 md:mb-0">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <span className="text-label-caps text-primary tracking-[0.3em] uppercase block mb-4 animate-fade-down">
            Investment &amp; Artistry
          </span>
          <h1 className="text-headline-xl mb-6 text-foreground animate-fade-up delay-200">
            CRAFTING YOUR <span className="italic gold-gradient-text">Legacy</span>
          </h1>
          <div className="w-24 h-px bg-primary mx-auto opacity-50 animate-line-grow delay-500" />
        </section>

        <ServicesGrid />
        <ProcessSection />
        <AddonsSection />
        <FAQSection />
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}
