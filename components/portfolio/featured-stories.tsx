import Image from 'next/image'
import { Reveal } from '@/components/ui/reveal'

const features = [
  {
    title: 'Anaya & Vikram',
    location: 'Taj Lake Palace · Udaipur',
    image: '/candit.jpg',
    span: 'lg:col-span-7 lg:row-span-2',
    height: 'h-[420px] lg:h-full',
  },
  {
    title: 'Sophia & Alexander',
    location: 'Villa Balbiano · Lake Como',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80',
    span: 'lg:col-span-5',
    height: 'h-[280px]',
  },
  {
    title: 'Priya & Arjun',
    location: 'Amanbagh · Aravalli Hills',
    image: '/birthday (2).jpg',
    span: 'lg:col-span-5',
    height: 'h-[280px]',
  },
]

export function FeaturedStories() {
  return (
    <section className="mb-20">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-label-caps text-primary tracking-[0.3em] block mb-3">
            Featured Stories
          </span>
          <h2 className="text-headline-lg text-foreground">
            CHAPTERS WORTH <span className="italic gold-gradient-text">Revisiting</span>
          </h2>
        </div>
        <div className="h-px flex-1 bg-border max-w-xs hidden md:block" />
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {features.map((f, i) => (
          <Reveal
            key={i}
            delay={i * 150}
            className={`relative overflow-hidden group cursor-pointer border border-border hover:border-primary transition-colors duration-500 ${f.span} ${f.height}`}
          >
            <Image
              src={f.image}
              alt={f.title}
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-label-caps text-primary tracking-[0.25em] block mb-2">
                {f.location}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                {f.title}
              </h3>
              <div className="mt-4 w-0 group-hover:w-16 h-px bg-primary transition-all duration-700" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
