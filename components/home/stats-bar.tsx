import { Reveal } from '@/components/ui/reveal'

const stats = [
  { value: '500+', label: 'Weddings Captured' },
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Awards Won' },
  { value: '100%', label: 'Client Satisfaction' },
]

export function StatsBar() {
  return (
    <section className="bg-card border-y border-border py-12 px-5 md:px-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <Reveal key={index} delay={index * 120} className="text-center">
            <span className="text-3xl md:text-4xl font-serif text-primary block mb-2">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground tracking-wider uppercase">
              {stat.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
