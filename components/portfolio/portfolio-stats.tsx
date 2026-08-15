import { Reveal } from '@/components/ui/reveal'

const stats = [
  { value: '32', label: 'Countries' },
  { value: '500+', label: 'Stories Told' },
  { value: '120K', label: 'Frames Curated' },
  { value: '18', label: 'Commissions / Year' },
]

export function PortfolioStats() {
  return (
    <section className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
      {stats.map((s, i) => (
        <Reveal
          key={i}
          delay={i * 100}
          className="bg-background py-10 px-4 text-center group hover:bg-card transition-colors duration-500"
        >
          <span className="font-serif text-4xl md:text-5xl gold-gradient-text block mb-2 group-hover:scale-105 transition-transform duration-500">
            {s.value}
          </span>
          <span className="text-xs text-muted-foreground tracking-[0.25em] uppercase">
            {s.label}
          </span>
        </Reveal>
      ))}
    </section>
  )
}
