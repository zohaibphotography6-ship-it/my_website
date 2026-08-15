import { CalendarCheck, FileText, Sparkles, MailOpen } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const steps = [
  {
    icon: MailOpen,
    title: 'We Receive Your Brief',
    body: 'Your enquiry is reviewed personally &mdash; never automated &mdash; within 24 hours.',
  },
  {
    icon: CalendarCheck,
    title: 'Private Consultation',
    body: 'A 60-minute conversation to align on vision, scale, and cinematic direction.',
  },
  {
    icon: FileText,
    title: 'Bespoke Proposal',
    body: 'A tailored investment brief and creative blueprint, delivered as a leather portfolio.',
  },
  {
    icon: Sparkles,
    title: 'Your Date is Reserved',
    body: 'A 30% retainer secures the calendar and unlocks your dedicated creative director.',
  },
]

export function BookingTimeline() {
  return (
    <section className="mt-20 md:mt-32">
      <Reveal className="text-center mb-16">
        <span className="text-label-caps text-primary tracking-[0.3em] block mb-4">
          What Happens Next
        </span>
        <h2 className="text-headline-lg text-foreground mb-4">
          A CONSIDERED <span className="italic gold-gradient-text">Beginning</span>
        </h2>
        <div className="w-24 h-px bg-primary mx-auto opacity-50" />
      </Reveal>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border">
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <Reveal
              key={i}
              delay={i * 150}
              className="bg-background p-8 group hover:bg-card transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 border border-primary/40 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground/60 tracking-[0.3em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">{s.title}</h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
