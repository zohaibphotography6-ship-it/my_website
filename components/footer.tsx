import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Book Now', href: '/booking' },
]

const services = [
  { label: 'Wedding Photography', href: '/services' },
  { label: 'Cinematography', href: '/services' },
  { label: 'Pre-Wedding Shoots', href: '/services' },
  { label: 'Engagement Sessions', href: '/services' },
  { label: 'Commercial Projects', href: '/services' },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main grid */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-5">
            <Image
              src="/Zohaib_Cinematics_logo.png"
              alt="Zohaib Cinematics logo"
              width={80}
              height={80}
              className="min-w-[44px]"
            />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Capturing love stories with a cinematic eye. Every frame crafted to last
            a lifetime.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/zohaib_cinematics/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@zohaib_cinematics?_r=1&_t=ZS-96g9GNTVKDQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/zohaibcinematics?rdid=WrayvofeYo4wHWKY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CUbUmQHzK%2F#"
              aria-label="Facebook"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-label-caps text-primary tracking-[0.25em] mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-label-caps text-primary tracking-[0.25em] mb-6">
            Services
          </h3>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-label-caps text-primary tracking-[0.25em] mb-6">
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground leading-relaxed">
                Taxila, Pakistan<br />
                Islamabad — F-7 Enclave
              </span>
            </li>
            <li>
              <a
                href="tel:0339-8515585"
                className="flex items-center gap-3 group"
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  0339-8515585
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:zohaibphotography6@gmail.com"
                className="flex items-center gap-3 group"
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300 break-all">
                  zohaibphotography6@gmail.com
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground leading-relaxed">
                Mon – Sat, 10 AM – 7 PM PKT
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            &copy; {new Date().getFullYear()} Zohaib Cinematics. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 tracking-wider">
            Crafted with care · Taxila, Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}

