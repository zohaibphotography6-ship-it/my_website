import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '@/components/ui/reveal'

export function CTASection() {
  return (
    <section className="relative py-32 px-5 md:px-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80"
          alt="Wedding background"
          fill
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <Reveal className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="text-label-caps text-primary tracking-[0.3em] block mb-6">
          Ready to Create Magic?
        </span>

        <h2 className="text-headline-lg text-foreground mb-6">
          LET&apos;S CAPTURE YOUR <span className="italic gold-gradient-text">Story</span>
        </h2>

        <p className="text-body-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Every love story deserves to be told beautifully. Book your consultation today and let us create something extraordinary together.
        </p>

        <Link
          href="/booking"
          className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-sm tracking-wider uppercase hover:bg-accent transition-colors duration-300 animate-pulse-gold"
        >
          Start Your Journey
        </Link>
      </Reveal>
    </section>
  )
}
