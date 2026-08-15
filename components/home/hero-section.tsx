import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cover_image.png"
          alt="Cinematic Wedding Shot"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 hero-overlay animate-fade-in" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 md:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          <p className="text-label-caps text-primary tracking-[0.3em] mb-4 opacity-80 animate-fade-down delay-100">
            ESTABLISHED 2022
          </p>

          <h1 className="text-headline-lg-mobile md:text-headline-xl mb-6 leading-tight text-on-background animate-fade-up delay-200">
            CAPTURING <span className="italic font-normal block md:inline gold-gradient-text">Moments.</span>
            <br />
            CREATING <span className="italic font-normal block md:inline gold-gradient-text">Memories.</span>
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-xl mb-12 border-l-2 border-primary/30 pl-6 animate-fade-up delay-400">
            We turn every event, every smile, and every emotion into cinematic memories. Our lens doesn&apos;t just record; it narrates your legacy.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-600">
            <Link
              href="/portfolio"
              className="bg-primary-container text-on-primary text-label-caps px-10 py-4 active:scale-95 transition-transform hover:bg-accent"
            >
              EXPLORE PORTFOLIO
            </Link>
            <button className="border border-primary/30 text-primary text-label-caps px-10 py-4 hover:bg-primary/5 hover:border-primary transition-all">
              WATCH FILMS
            </button>
          </div>

          <div className="mt-16 h-px w-32 bg-primary/60 animate-line-grow delay-800" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-5 md:right-20 hidden lg:block text-right animate-fade-in delay-1000">
        <p className="text-label-caps text-secondary/40 rotate-90 origin-right translate-x-12 tracking-[0.5em] animate-float">
          SCROLL TO DISCOVER
        </p>
      </div>
    </section>
  )
}
