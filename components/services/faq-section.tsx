'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const faqs = [
  {
    q: 'How far in advance should we reserve a date?',
    a: 'Most signature dates are reserved 9–18 months in advance. We accept only a limited number of commissions per season to preserve the quality of our craft.',
  },
  {
    q: 'Do you travel internationally?',
    a: 'Yes. We routinely produce in Italy, France, the UAE, India, the Maldives, and the United States. All travel, accommodation, and insurance are coordinated by our production office.',
  },
  {
    q: 'How long until we receive our gallery and film?',
    a: 'A preview suite arrives within 14 days. Your final gallery is delivered in 6–8 weeks, and your feature film in 10–12 weeks. Heirloom albums follow approximately four weeks thereafter.',
  },
  {
    q: 'May we request a particular cinematographer or photographer?',
    a: 'Absolutely. Couples commissioning at the Maison level and above may select their lead artist subject to availability. We will gladly arrange a private introduction.',
  },
  {
    q: 'What is your approach to privacy and discretion?',
    a: 'Every member of our team signs comprehensive non-disclosure agreements. Imagery is never published without your explicit written consent, and high-profile clients may request a fully private engagement.',
  },
  {
    q: 'How is the investment structured?',
    a: 'A 30% retainer reserves your date. The balance is divided into milestone payments leading up to your event, with optional financing through our concierge partner.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mt-24 md:mt-32">
      <Reveal className="text-center mb-16">
        <span className="text-label-caps text-primary tracking-[0.3em] block mb-4">
          Considered Questions
        </span>
        <h2 className="text-headline-lg text-foreground mb-4">
          MATTERS OF <span className="italic gold-gradient-text">Refinement</span>
        </h2>
        <div className="w-24 h-px bg-primary mx-auto opacity-50" />
      </Reveal>

      <div className="max-w-3xl mx-auto">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <Reveal
              key={i}
              delay={i * 80}
              className="border-b border-border"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              >
                <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                  {f.q}
                </span>
                <span className="w-10 h-10 shrink-0 border border-primary/40 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  {isOpen ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4 text-primary" />}
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-body-md text-muted-foreground leading-relaxed max-w-2xl pr-12">
                    {f.a}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
