import Link from 'next/link'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const collections = [
  {
    name: 'The Atelier',
    tagline: 'Intimate Celebrations',
    investment: 'From $12,500',
    features: [
      'Lead photographer & cinematographer',
      'Up to 8 hours of coverage',
      'Hand-finished gallery of 400+ images',
      'Highlight film (3–5 minutes)',
      'Linen-bound proof book',
    ],
  },
  {
    name: 'The Maison',
    tagline: 'Signature Collection',
    investment: 'From $24,500',
    featured: true,
    features: [
      'Full creative team (5 artists)',
      'Two-day editorial coverage',
      'Cinema-grade documentary film',
      'Aerial & Steadicam units',
      'Italian leather heirloom album',
      'Private film premiere screening',
    ],
  },
  {
    name: 'The Heritage',
    tagline: 'Multi-Day Affairs',
    investment: 'By Invitation',
    features: [
      'Bespoke production design',
      'Unlimited destination coverage',
      'Feature-length cinematic film',
      'Editorial fashion direction',
      'Curated archival print suite',
      'Dedicated creative director',
    ],
  },
]

export function PackagesSection() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-20 bg-card/30 border-y border-border">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-label-caps text-primary tracking-[0.3em] block mb-4">
            Private Collections
          </span>
          <h2 className="text-headline-lg text-foreground mb-4">
            CURATED <span className="italic gold-gradient-text">Investments</span>
          </h2>
          <div className="w-24 h-px bg-primary mx-auto opacity-50 mb-6" />
          <p className="text-body-md text-muted-foreground max-w-2xl mx-auto">
            Three editions designed for couples who consider every detail an act of taste.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((c, i) => (
            <Reveal
              key={i}
              delay={i * 150}
              className={`relative p-8 md:p-10 transition-all duration-500 ${
                c.featured
                  ? 'bg-background border-2 border-primary md:-translate-y-4'
                  : 'bg-background border border-border hover:border-primary lift'
              }`}
            >
              {c.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient text-obsidian text-[10px] tracking-[0.25em] uppercase px-4 py-1 font-medium">
                  Most Requested
                </div>
              )}

              <div className="text-center mb-8 pb-8 border-b border-border/60">
                <span className="text-label-caps text-primary tracking-[0.3em] block mb-3">
                  {c.tagline}
                </span>
                <h3 className="font-serif text-3xl text-foreground mb-4">
                  {c.name}
                </h3>
                <div className="font-mono text-sm text-muted-foreground tracking-wider">
                  {c.investment}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {c.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/booking"
                className={`block text-center px-6 py-3 text-sm tracking-wider uppercase transition-colors duration-300 ${
                  c.featured
                    ? 'bg-primary text-primary-foreground hover:bg-accent'
                    : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Enquire Privately
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground/70 tracking-wider uppercase mt-12">
          All commissions tailored upon consultation · Limited to 18 weddings per annum
        </p>
      </div>
    </section>
  )
}
