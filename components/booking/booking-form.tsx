'use client'

import { useState } from 'react'
import { MessageCircle, Check, Loader2, AlertTriangle } from 'lucide-react'

type FormState = {
  name: string
  email: string
  whatsapp: string
  date: string
  serviceType: string
  details: string
}

const INITIAL: FormState = {
  name: '',
  email: '',
  whatsapp: '',
  date: '',
  serviceType: 'Wedding Cinematography',
  details: '',
}

export function BookingForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  )
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [customerDelivered, setCustomerDelivered] = useState(true)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    setErrorMessage(null)

    try {
      const res = await fetch('/api/whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data: {
        ok?: boolean
        error?: string
        customerDelivered?: boolean
      } = await res.json().catch(() => ({}))

      if (!res.ok || !data.ok) {
        setStatus('error')
        setErrorMessage(
          data.error ||
            'We could not deliver your enquiry. Please try again in a moment.'
        )
        return
      }

      setCustomerDelivered(data.customerDelivered !== false)
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage(
        'A network error occurred. Please check your connection and try again.'
      )
    }
  }

  const handleReset = () => {
    setFormData(INITIAL)
    setStatus('idle')
    setErrorMessage(null)
    setCustomerDelivered(true)
  }

  const sending = status === 'sending'

  return (
    <div className="lg:col-span-8 bg-card p-8 md:p-12 border border-border relative overflow-hidden animate-fade-up">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

      {status === 'success' ? (
        <div className="relative z-10 animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 border border-primary bg-primary/10 flex items-center justify-center animate-pulse-gold">
              <Check className="w-5 h-5 text-primary" />
            </div>
            <span className="text-label-caps text-primary tracking-[0.3em]">
              Enquiry Delivered
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Thank you. Your story is in our hands.
          </h2>
          <p className="text-body-md text-muted-foreground mb-6 max-w-xl">
            Your enquiry has been delivered to our atelier on WhatsApp. Our
            creative director will respond personally within 24 hours to arrange
            your private consultation.
          </p>

          {!customerDelivered && (
            <p className="text-xs text-muted-foreground/80 border border-border bg-card/60 p-4 mb-6 max-w-xl">
              We could not deliver an automatic confirmation to your WhatsApp at
              this moment, but rest assured — your enquiry has reached our team
              and we will be in touch shortly.
            </p>
          )}

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 border border-primary/40 text-primary text-label-caps px-8 py-4 uppercase tracking-widest hover:border-primary hover:bg-primary/5 transition-colors duration-300"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-label-caps text-primary mb-2">
                FULL NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                disabled={sending}
                className="bg-transparent border-0 border-b border-border text-body-md text-foreground py-3 px-0 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40 disabled:opacity-60"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-label-caps text-primary mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required
                disabled={sending}
                className="bg-transparent border-0 border-b border-border text-body-md text-foreground py-3 px-0 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40 disabled:opacity-60"
              />
            </div>

            {/* WhatsApp Field */}
            <div className="flex flex-col">
              <label
                htmlFor="whatsapp"
                className="text-label-caps text-primary mb-2 flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WHATSAPP NUMBER
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="e.g. 0300 1234567 or +92 300 1234567"
                required
                inputMode="tel"
                autoComplete="tel"
                pattern="[\d\s+()-]{7,}"
                disabled={sending}
                className="bg-transparent border-0 border-b border-border text-body-md text-foreground py-3 px-0 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40 disabled:opacity-60"
              />
              <span className="text-[10px] text-muted-foreground/60 tracking-widest uppercase mt-2">
                Include country code · Pakistan numbers may start with 0
              </span>
            </div>

            {/* Event Date Field */}
            <div className="flex flex-col">
              <label htmlFor="date" className="text-label-caps text-primary mb-2">
                EVENT DATE
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                disabled={sending}
                className="bg-transparent border-0 border-b border-border text-body-md text-foreground py-3 px-0 focus:outline-none focus:border-primary transition-colors [color-scheme:dark] disabled:opacity-60"
              />
            </div>

            {/* Service Type */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="serviceType" className="text-label-caps text-primary mb-2">
                SERVICE TYPE
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                disabled={sending}
                className="bg-transparent border-0 border-b border-border text-body-md text-foreground py-3 px-0 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer disabled:opacity-60"
              >
                <option value="Wedding Cinematography" className="bg-card text-foreground">Wedding Cinematography</option>
                <option value="Commercial Production" className="bg-card text-foreground">Commercial Production</option>
                <option value="Fashion Film" className="bg-card text-foreground">Fashion Film</option>
                <option value="Portrait Documentary" className="bg-card text-foreground">Portrait Documentary</option>
              </select>
            </div>
          </div>

          {/* Details Field */}
          <div className="flex flex-col">
            <label htmlFor="details" className="text-label-caps text-primary mb-2">
              EVENT DETAILS &amp; VISION
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your story..."
              rows={4}
              disabled={sending}
              className="bg-transparent border-0 border-b border-border text-body-md text-foreground py-3 px-0 focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/40 disabled:opacity-60"
            />
          </div>

          {status === 'error' && errorMessage && (
            <div
              role="alert"
              className="flex items-start gap-3 border border-destructive/40 bg-destructive/10 p-4 text-sm text-foreground"
            >
              <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground text-label-caps px-12 py-5 uppercase tracking-widest hover:bg-accent transition-all duration-300 w-full sm:w-auto active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <MessageCircle className="w-4 h-4" />
                  Submit Inquiry
                </>
              )}
            </button>
            <p className="text-xs text-muted-foreground/70 tracking-wider">
              Your details are sent securely to our atelier and to your WhatsApp.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
