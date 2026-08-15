'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Instagram, Facebook } from 'lucide-react'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/booking', label: 'Booking' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Zohaib_Cinematics_logo.png"
            alt="Zohaib Cinematics logo"
            width={60}
            height={60}
            className="w-[40px] h-[40px] object-contain"
          />
          <div className="hidden sm:block">
            <span className="text-foreground font-serif text-lg tracking-wider">ZOHAIB</span>
            <span className="text-primary font-serif text-lg tracking-wider ml-1">CINEMATICS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wider uppercase transition-colors duration-300 hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: social icons (visible only on mobile) */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://www.instagram.com/zohaib_cinematics/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@zohaib_cinematics?_r=1&_t=ZS-96g9GNTVKDQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <TikTokIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/zohaibcinematics?rdid=WrayvofeYo4wHWKY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CUbUmQHzK%2F#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Desktop CTA Button */}
        <Link
          href="/booking"
          className="hidden md:inline-flex px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-wider uppercase hover:bg-accent transition-colors duration-300"
        >
          Book Now
        </Link>
      </div>
    </header>
  )
}
