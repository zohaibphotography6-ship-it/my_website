'use client'

import { useEffect, useRef, useState, type ReactNode, type ElementType, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Animation delay in milliseconds */
  delay?: number
  /** Threshold (0-1) of element visible before revealing */
  threshold?: number
  /** If true, animation plays only once (default true) */
  once?: boolean
}

/**
 * Scroll-triggered reveal wrapper. Uses IntersectionObserver and CSS classes
 * defined in globals.css (`reveal-init` / `reveal-visible`).
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className,
  delay = 0,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {}

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={cn('reveal-init', visible && 'reveal-visible', className)}
    >
      {children}
    </Tag>
  )
}
