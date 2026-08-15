import Link from 'next/link'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export function PortfolioCTA() {
  return (
    <section className="mt-24 relative overflow-hidden">
      <Reveal className="relative aspect-video md:aspect-[21/9] overflow-hidden">
        <Image
          src="/photo_shoot.jpg"
          alt="Wedding cinematography reel"
          fill
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-background/60" />

        {/* Play Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <button className="w-20 h-20 border-2 border-primary flex items-center justify-center mb-6 hover:bg-primary/10 transition-colors duration-300 group animate-pulse-gold">
            <Play className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
          </button>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Watch Our Showreel
          </h3>
          <p className="text-muted-foreground text-sm max-w-md">
            Experience the magic of our cinematic storytelling
          </p>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal delay={200} className="mt-12 text-center">
        <Link
          href="/booking"
          className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-sm tracking-wider uppercase hover:bg-accent transition-colors duration-300"
        >
          Book Your Session
        </Link>
      </Reveal>
    </section>
  )
}
