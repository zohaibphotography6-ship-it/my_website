import { ShieldCheck, Lock, Award, HeartHandshake } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const promises = [
  {
    icon: Lock,
    title: 'Absolute Discretion',
    body: 'NDAs as standard. Your celebration is yours alone &mdash; never published without consent.',
  },
  {
    icon: ShieldCheck,
    title: 'Insured & Indemnified',
    body: 'Full international liability cover, backup equipment, and contingency teams.',
  },
  {
    icon: Award,
    title: 'Award-Winning Atelier',
    body: 'A decade of recognition from Vogue, Junebug, and the International Film Honors.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Concierge',
    body: 'A single creative director from first call to final delivery &mdash; no handoffs.',
  },
]

export function BookingPromise() {
  return (
    <section className="mt-20 md:mt-28">
      <Reveal className="text-center mb-12">
        <span className="text-label-caps text-primary tracking-[0.3em] block mb-4">
          Our Promise
        </span>
        <h2 className="text-headline-md text-foreground">
          ENTRUST US WITH YOUR <span className="italic gold-gradient-text">Legacy</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {promises.map((p, i) => {
          const Icon = p.icon
          return (
            <Reveal
              key={i}
              delay={i * 120}
              className="border border-border p-6 bg-card/40 hover:border-primary transition-colors duration-500 lift text-center"
            >
              <div className="w-12 h-12 border border-primary/40 mx-auto flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{p.title}</h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
