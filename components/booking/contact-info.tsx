import Image from 'next/image'
import { MapPin, Building, Phone, Mail, Video, Camera, Clapperboard } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="lg:col-span-4 flex flex-col gap-6 animate-fade-up delay-200">
      {/* Map Card */}
      <div className="bg-card h-64 border border-border relative group overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
          alt="Studio Location Map"
          fill
          className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute bottom-6 left-6">
          <span className="text-label-caps text-primary flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            STUDIO LOCATIONS
          </span>
        </div>
      </div>
      
      {/* Info Card */}
      <div className="bg-card p-8 border border-border flex-grow">
        <div className="space-y-8">
          {/* Locations */}
          <div>
            <h3 className="text-label-caps text-primary mb-4">LOCATIONS</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary/60 shrink-0" />
                <div>
                  <p className="text-body-md text-foreground font-bold">WAH CANTT</p>
                  <p className="text-body-md text-muted-foreground text-sm">
                    Main Commercial District, Studio Prime
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Building className="w-5 h-5 text-primary/60 shrink-0" />
                <div>
                  <p className="text-body-md text-foreground font-bold">ISLAMABAD</p>
                  <p className="text-body-md text-muted-foreground text-sm">
                    Executive Sector, F-7 Enclave
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-px bg-border" />
          
          {/* Direct Contact */}
          <div>
            <h3 className="text-label-caps text-primary mb-4">DIRECT CONNECT</h3>
            <div className="space-y-4">
              <a href="tel:03398515585" className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors shrink-0" />
                <span className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                  0339-8515585
                </span>
              </a>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary/60 shrink-0" />
                <span className="text-body-md text-muted-foreground break-all">
                  hello@zohaibcinematics.com
                </span>
              </div>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="pt-4 flex gap-4">
            {[Video, Camera, Clapperboard].map((Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary transition-colors cursor-pointer group"
              >
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
