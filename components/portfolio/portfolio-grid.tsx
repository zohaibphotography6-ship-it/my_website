'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/reveal'

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Engagement', 'Cinematography']

const portfolioItems = [
  {
    id: 1,
    title: 'Sarah & James',
    category: 'Wedding',
    image: '/wedding-1.jpg',
    aspect: 'tall',
  },
  {
    id: 2,
    title: 'Golden Hour Romance',
    category: 'Engagement',
    image: '/engagement-1.jpg',
    aspect: 'square',
  },
  {
    id: 3,
    title: 'Timeless Elegance',
    category: 'Wedding',
    image: '/wedding-2.jpg',
    aspect: 'wide',
  },
  {
    id: 4,
    title: 'Royal Affair',
    category: 'Pre-Wedding',
    image: '/pre-wedding-1.jpg',
    aspect: 'tall',
  },
  {
    id: 5,
    title: 'Cinematic Love Story',
    category: 'Cinematography',
    image: '/dance.jpg',
    aspect: 'square',
  },
  {
    id: 6,
    title: 'Eternal Moments',
    category: 'Wedding',
    image: '/nikah.jpg',
    aspect: 'wide',
  },
  {
    id: 7,
    title: 'Sunset Vows',
    category: 'Engagement',
    image: 'engagement-2.jpg',
    aspect: 'square',
  },
  {
    id: 8,
    title: 'Love in Bloom',
    category: 'Pre-Wedding',
    image: '/pre-wedding-2.jpg',
    aspect: 'tall',
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-6 py-2 text-label-caps text-sm transition-all duration-300",
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item, index) => (
          <Reveal
            key={item.id}
            delay={(index % 6) * 100}
            className="break-inside-avoid group relative overflow-hidden bg-card border border-border cursor-pointer hover:border-primary transition-colors duration-500"
          >
            <div className={cn(
              "relative overflow-hidden",
              item.aspect === 'tall' && "aspect-[3/4]",
              item.aspect === 'square' && "aspect-square",
              item.aspect === 'wide' && "aspect-[4/3]"
            )}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-label-caps text-primary text-xs mb-2">{item.category}</span>
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
