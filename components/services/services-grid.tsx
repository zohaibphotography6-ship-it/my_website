import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Film, Plane, Clapperboard } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Photography Card */}
      <Reveal className="md:col-span-7 bg-card border border-border relative overflow-hidden group lift">
        <div className="aspect-video overflow-hidden">
          <Image
            src="/out_door_shoot.jpeg"
            alt="Wedding Photography"
            width={800}
            height={450}
            className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <div>
              <h3 className="font-serif text-3xl mb-2 text-foreground">PHOTOGRAPHY</h3>
              <p className="text-body-md text-muted-foreground max-w-md">
                High-end editorial coverage that captures the soul of your event through timeless, silver-screen aesthetics.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-label-caps text-primary block mb-1">STARTS FROM</span>
              <span className="font-serif text-3xl text-primary">50,000 PKR</span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-10">
            {[
              '10 Hours of Professional Coverage',
              'Professional Post-Production & Color Grading',
              'Private Digital Gallery for Sharing',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 border-b border-border pb-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-body-md text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link
            href="/booking"
            className="w-full border border-primary text-primary py-4 text-label-caps text-center block hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            REQUEST QUOTE
          </Link>
        </div>
      </Reveal>

      {/* Cinematography Card */}
      <Reveal delay={150} className="md:col-span-5 flex flex-col bg-card border border-border relative overflow-hidden group lift">
        <div className="p-8 flex-grow">
          <span className="inline-block px-3 py-1 border border-primary/30 text-primary text-label-caps text-[10px] mb-6">
            BESTSELLER
          </span>
          <h3 className="font-serif text-3xl mb-2 text-foreground">CINEMATOGRAPHY</h3>
          <p className="text-body-md text-muted-foreground mb-8">
            Professional filmmaking using 4K cinema cameras and storytelling techniques used in major motion pictures.
          </p>
          
          <div className="space-y-6">
            {[
              {
                icon: Film,
                title: 'PREMIUM CINEMATIC COVERAGE',
                description: 'Multi-cam setups with cinema-grade lenses for a true film feel.',
              },
              {
                icon: Plane,
                title: 'DRONE COVERAGE',
                description: '4K Aerial perspectives to capture the grandeur of your venue.',
              },
              {
                icon: Clapperboard,
                title: 'PROFESSIONAL EDITING',
                description: 'Narrative-driven montage with custom sound design.',
              },
            ].map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <feature.icon className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="text-label-caps text-foreground mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-between items-end mb-8">
              <span className="font-serif text-3xl text-primary">160,000 PKR</span>
              <span className="text-label-caps text-muted-foreground">THREE DAY</span>
            </div>
            <Link
              href="/booking"
              className="w-full bg-primary text-primary-foreground py-4 text-label-caps text-center block active:scale-[0.98] transition-transform hover:bg-accent"
            >
              BOOK CINEMATOGRAPHY
            </Link>
          </div>
        </div>
        
        <div className="h-48 overflow-hidden">
          <Image
            src="/couple.jpg"
            alt="Cinematographer at work"
            width={500}
            height={192}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </Reveal>

      {/* Commercial & Custom Card */}
      <Reveal delay={300} className="md:col-span-12 bg-secondary border border-border p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="max-w-xl text-center md:text-left">
          <h3 className="font-serif text-3xl mb-4 uppercase tracking-tight text-foreground">
            COMMERCIAL &amp; CUSTOM PROJECTS
          </h3>
          <p className="text-body-lg text-muted-foreground mb-8">
            For high-end fashion campaigns, corporate storytelling, or bespoke creative visions that require a tailored approach. 
            Our team crafts unique visual languages for every client.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {['BRAND FILMS', 'FASHION EDITORIALS', 'MUSIC VIDEOS'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 border border-border text-muted-foreground text-label-caps text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="shrink-0">
          <Link
            href="/booking"
            className="bg-transparent border-2 border-primary text-primary px-12 py-5 text-label-caps hover:bg-primary/10 transition-colors tracking-widest inline-block text-center"
          >
            ENQUIRE FOR CUSTOM RATE
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
