import Image from 'next/image'
import Link from 'next/link'
import { Camera, Video, Sparkles, Heart } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const services = [
  {
    icon: Camera,
    title: 'Wedding Photography',
    description: 'Timeless portraits capturing every emotion and detail of your special day.',
    image: '/Wedding%20Photography.jpg',
  },
  {
    icon: Video,
    title: 'Cinematography',
    description: 'Cinematic films that tell your love story with artistic excellence.',
    image: '/Cinematography.jpg',
  },
  {
    icon: Sparkles,
    title: 'Pre-Wedding Shoots',
    description: 'Creative sessions that capture the excitement before the big day.',
    image: '/Pre-Wedding_Shoots.webp',
  },
  {
    icon: Heart,
    title: 'Engagement Sessions',
    description: 'Romantic portraits celebrating your journey to forever.',
    image: '/Engagement_Sessions.jpg',
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-5 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <Reveal className="text-center mb-16">
          <span className="text-label-caps text-primary tracking-[0.3em] block mb-4">
            What We Offer
          </span>
          <h2 className="text-headline-lg text-foreground mb-4">
            OUR <span className="italic gold-gradient-text">Services</span>
          </h2>
          <div className="w-24 h-px bg-primary mx-auto opacity-50" />
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal
                key={index}
                delay={index * 120}
                className="group relative bg-card border border-border overflow-hidden hover:border-primary transition-colors duration-500 lift"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-body-md text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
