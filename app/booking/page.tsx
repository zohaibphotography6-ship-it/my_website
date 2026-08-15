import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-nav'
import { BookingForm } from '@/components/booking/booking-form'
import { ContactInfo } from '@/components/booking/contact-info'
import { BookingTimeline } from '@/components/booking/booking-timeline'
import { BookingPromise } from '@/components/booking/booking-promise'
import { Calendar } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Now | ZOHAIB CINEMATICS',
  description: 'Secure your date with Zohaib Cinematics. Exceptional storytelling begins with a conversation.',
}

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 md:pb-32 px-5 md:px-20 max-w-[1440px] mx-auto mb-16 md:mb-0">
        {/* Hero Section */}
        <section className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-label-caps text-primary tracking-[0.3em] block mb-4 animate-fade-down">
                Private Enquiries
              </span>
              <h1 className="text-headline-xl text-foreground mb-4 uppercase animate-fade-up delay-200">
                SECURE YOUR <span className="italic gold-gradient-text">Date</span>
              </h1>
              <p className="text-body-lg text-muted-foreground animate-fade-up delay-400">
                Exceptional storytelling begins with a conversation. Let us transform your vision into a cinematic masterpiece.
              </p>
            </div>
            <div className="flex items-center gap-4 border-l-2 border-primary/30 pl-6 h-fit py-2 animate-fade-up delay-600">
              <Calendar className="w-8 h-8 text-primary animate-float" />
              <span className="text-label-caps text-foreground">CALENDAR OPEN FOR 2026/2027</span>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <BookingForm />
          <ContactInfo />
        </div>

        <BookingTimeline />
        <BookingPromise />
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}
