import { BookOpen, Headphones, Image as ImageIcon, Plane, Users, Aperture } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const addons = [
  { icon: BookOpen, title: 'Heirloom Album', price: '+ $1,800', body: 'Italian leather, hand-bound; 40 archival pages.' },
  { icon: Aperture, title: 'Second Photographer', price: '+ $1,200', body: 'A dedicated second lens for parallel coverage.' },
  { icon: Plane, title: 'Aerial Cinema Unit', price: '+ $950', body: 'FAA-licensed drone pilot with 6K cinema rig.' },
  { icon: Headphones, title: 'Custom-Scored Film', price: '+ $1,500', body: 'Original composition by our in-house musicians.' },
  { icon: ImageIcon, title: 'Editorial Print Suite', price: '+ $850', body: 'Twelve museum-grade prints, individually matted.' },
  { icon: Users, title: 'Pre-Wedding Editorial', price: '+ $2,400', body: 'A half-day fashion-led shoot with stylist.' },
]

export function AddonsSection() {
  return (
    <section className="mt-24 md:mt-32">
      <Reveal className="text-center mb-16">
        <span className="text-label-caps text-primary tracking-[0.3em] block mb-4">
          Bespoke Enhancements
        </span>
        <h2 className="text-headline-lg text-foreground mb-4">
          ELEVATIONS &amp; <span className="italic gold-gradient-text">Indulgences</span>
        </h2>
        <div className="w-24 h-px bg-primary mx-auto opacity-50 mb-6" />
        <p className="text-body-md text-muted-foreground max-w-2xl mx-auto">
          Refine any commission with these atelier-crafted additions.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addons.map((a, i) => {
          const Icon = a.icon
          return (
            <Reveal
              key={i}
              delay={i * 100}
              className="border border-border bg-card/40 p-6 hover:border-primary transition-colors duration-500 lift group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 border border-primary/40 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-primary tracking-wider">{a.price}</span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
