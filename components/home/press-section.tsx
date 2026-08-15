import { Award } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const features = [
  'Vogue Weddings',
  'Harper&rsquo;s Bazaar',
  'Condé Nast Traveller',
  'Brides Magazine',
  'Architectural Digest',
  'Tatler',
]

const accolades = [
  { year: '2025', title: 'Atelier of the Year', body: 'Luxury Wedding Awards' },
  { year: '2024', title: 'Cinematography Grand Prix', body: 'International Film Honors' },
  { year: '2024', title: 'Top 10 Worldwide', body: 'Junebug Best of the Best' },
  { year: '2023', title: 'Editor&rsquo;s Choice', body: 'Vogue Global Weddings' },
]

export function PressSection() {
  return (
    <section className="py-24 px-5 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Press */}
        <Reveal className="text-center mb-12">
          <span className="text-label-caps text-primary tracking-[0.3em] block mb-4">
            As Featured In
          </span>
          <div className="w-16 h-px bg-primary mx-auto opacity-50" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border mb-24 border border-border">
          {features.map((name, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="bg-background py-8 px-4 flex items-center justify-center text-center"
            >
              <span
                className="font-serif text-lg md:text-xl text-foreground/80 italic tracking-wide"
                dangerouslySetInnerHTML={{ __html: name }}
              />
            </Reveal>
          ))}
        </div>

        {/* Accolades */}
        <Reveal className="text-center mb-12">
          <span className="text-label-caps text-primary tracking-[0.3em] block mb-4">
            Recognition
          </span>
          <h2 className="text-headline-md text-foreground">
            A DECADE OF <span className="italic gold-gradient-text">Distinction</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accolades.map((a, i) => (
            <Reveal
              key={i}
              delay={i * 120}
              className="border border-border hover:border-primary transition-colors duration-500 p-6 text-center bg-card/40 lift"
            >
              <Award className="w-6 h-6 text-primary mx-auto mb-4" />
              <div className="font-mono text-xs text-muted-foreground tracking-[0.3em] mb-3">
                {a.year}
              </div>
              <div
                className="font-serif text-lg text-foreground mb-2"
                dangerouslySetInnerHTML={{ __html: a.title }}
              />
              <div className="text-xs text-muted-foreground tracking-wider uppercase">
                {a.body}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
