import { Mail, MessageSquare, Pencil, Camera, Sparkles, Send } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const steps = [
  {
    icon: Mail,
    title: 'Private Enquiry',
    body: 'A confidential brief is reviewed personally by our creative director within 24 hours.',
  },
  {
    icon: MessageSquare,
    title: 'Discovery Consultation',
    body: 'An intimate meeting &mdash; in person or by video &mdash; to understand your story, taste, and circle.',
  },
  {
    icon: Pencil,
    title: 'Bespoke Proposal',
    body: 'A tailored creative blueprint, including shot architecture, mood, and crew composition.',
  },
  {
    icon: Camera,
    title: 'Production Day',
    body: 'A discreet, choreographed team executes flawlessly while you remain entirely present.',
  },
  {
    icon: Sparkles,
    title: 'Post-Production Atelier',
    body: 'Hand-graded frames, custom-scored films, and editorial sequencing reviewed scene by scene.',
  },
  {
    icon: Send,
    title: 'Heirloom Delivery',
    body: 'Your finished works arrive in linen and leather &mdash; with a private screening for loved ones.',
  },
]

export function ProcessSection() {
  return (
    <section className="mt-24 md:mt-32">
      <Reveal className="text-center mb-16">
        <span className="text-label-caps text-primary tracking-[0.3em] block mb-4">
          The Process
        </span>
        <h2 className="text-headline-lg text-foreground mb-4">
          A SIX-CHAPTER <span className="italic gold-gradient-text">Journey</span>
        </h2>
        <div className="w-24 h-px bg-primary mx-auto opacity-50" />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <Reveal
              key={i}
              delay={i * 100}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 border border-primary/40 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground/60 tracking-[0.3em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.body }}
              />
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
