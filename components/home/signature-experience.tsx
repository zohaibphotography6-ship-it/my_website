import Image from 'next/image'
import Link from 'next/link'
import { Gem, Plane, Crown, Film } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const pillars = [
  {
    icon: Crown,
    title: 'White-Glove Concierge',
    description:
      'A dedicated creative director curates every detail, from wardrobe styling to bespoke shot lists.',
  },
  {
    icon: Plane,
    title: 'Destination Worldwide',
    description:
      'From Lake Como villas to Rajasthani palaces, our team travels globally with zero compromise on craft.',
  },
  {
    icon: Film,
    title: 'Cinema-Grade Production',
    description:
      'ARRI cinema cameras, Steadicam operators, drone pilots, and a full post-production atelier.',
  },
  {
    icon: Gem,
    title: 'Heirloom Deliverables',
    description:
      'Italian leather-bound albums, archival prints, and private film premieres for your closest circle.',
  },
]

export function SignatureExperience() {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <Reveal className="relative h-[520px] hidden lg:block">
            <div className="absolute top-0 left-0 w-3/5 h-2/3 border border-primary/20 overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80"
                alt="Luxury wedding setup"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/5 h-2/3 border border-primary/40 overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80"
                alt="Bridal couture"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
            </div>
            <div className="absolute top-1/3 right-8 w-16 h-16 gold-gradient flex items-center justify-center animate-float">
              <Gem className="w-6 h-6 text-obsidian" />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={200}>
            <span className="text-label-caps text-primary tracking-[0.3em] block mb-4">
              The Signature Experience
            </span>
            <h2 className="text-headline-lg text-foreground mb-6">
              A LEGACY <span className="italic gold-gradient-text">crafted</span> for the few.
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10 border-l-2 border-primary/30 pl-6">
              We accept fewer than twenty private commissions each year. Every couple is given the
              attention of an atelier, not a studio &mdash; producing work worthy of a museum wall
              and a family vault.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={index}
                    className="border border-border hover:border-primary transition-colors duration-500 p-5 bg-card/40 lift"
                  >
                    <div className="w-10 h-10 border border-primary/60 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Discover the Atelier
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
