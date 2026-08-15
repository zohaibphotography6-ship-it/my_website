import { Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export function PortfolioQuote() {
  return (
    <Reveal className="my-24 md:my-32 max-w-4xl mx-auto text-center px-4">
      <Quote className="w-10 h-10 text-primary/40 mx-auto mb-8" />
      <blockquote className="font-serif text-2xl md:text-4xl text-foreground italic leading-relaxed mb-8">
        &ldquo;We do not photograph weddings. We compose <span className="gold-gradient-text">heirlooms</span> &mdash; frame by frame, breath by breath.&rdquo;
      </blockquote>
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-12 bg-primary/60" />
        <span className="text-label-caps text-primary tracking-[0.3em]">Zohaib · Founder</span>
        <div className="h-px w-12 bg-primary/60" />
      </div>
    </Reveal>
  )
}
