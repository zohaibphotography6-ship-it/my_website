import { Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const testimonials = [
  {
    quote:
      'They didn&rsquo;t simply photograph our wedding &mdash; they composed it. Every frame feels like a still from a feature film. An heirloom we will treasure for generations.',
    name: 'Anaya & Vikram Mehta',
    event: 'Udaipur Palace Wedding',
    location: 'Taj Lake Palace · Rajasthan',
  },
  {
    quote:
      'Discreet, refined, and astonishingly talented. Their team moved through our guests like ghosts and returned with art. Worth every consideration.',
    name: 'Sophia & Alexander Rothwell',
    event: 'Private Estate Ceremony',
    location: 'Villa Balbiano · Lake Como',
  },
  {
    quote:
      'From the first consultation to the final velvet-bound album, the experience felt impossibly bespoke. They captured the soul of our family, not just the day.',
    name: 'Priya & Arjun Kapoor',
    event: 'Three-Day Celebration',
    location: 'Amanbagh · Aravalli Hills',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-20 bg-card/30 border-y border-border">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-label-caps text-primary tracking-[0.3em] block mb-4">
            Whispered Endorsements
          </span>
          <h2 className="text-headline-lg text-foreground mb-4">
            VOICES OF THE <span className="italic gold-gradient-text">Discerning</span>
          </h2>
          <div className="w-24 h-px bg-primary mx-auto opacity-50" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <Reveal
              key={index}
              as="figure"
              delay={index * 150}
              className="relative bg-background border border-border p-8 md:p-10 hover:border-primary transition-colors duration-500 lift"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <blockquote
                className="text-body-md text-foreground/90 italic font-serif leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
              />
              <figcaption className="border-t border-border/60 pt-5">
                <div className="text-sm font-medium text-primary tracking-wider uppercase mb-1">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground tracking-wide">
                  {t.event}
                </div>
                <div className="text-xs text-muted-foreground/70 tracking-wide mt-1">
                  {t.location}
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
