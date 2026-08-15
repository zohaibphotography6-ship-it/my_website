import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-nav'
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid'
import { PortfolioCTA } from '@/components/portfolio/portfolio-cta'
import { PortfolioStats } from '@/components/portfolio/portfolio-stats'
import { FeaturedStories } from '@/components/portfolio/featured-stories'
import { PortfolioQuote } from '@/components/portfolio/portfolio-quote'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | ZOHAIB CINEMATICS',
  description: 'Explore our collection of wedding photography and cinematography work. Where light meets emotion.',
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-5 md:px-20 max-w-[1440px] mx-auto mb-16 md:mb-0">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <span className="text-label-caps text-primary tracking-[0.3em] uppercase block mb-4 animate-fade-down">
            Our Work
          </span>
          <h1 className="text-headline-xl mb-6 text-foreground animate-fade-up delay-200">
            WHERE LIGHT MEETS <span className="italic gold-gradient-text">Emotion</span>
          </h1>
          <div className="w-24 h-px bg-primary mx-auto opacity-50 animate-line-grow delay-500" />
        </section>

        <PortfolioStats />
        <FeaturedStories />
        <PortfolioGrid />
        <PortfolioQuote />
        <PortfolioCTA />
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}
