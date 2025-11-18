'use client'

import { useState, useEffect } from 'react'
import SectionHeading from '@/components/SectionHeading'
import GalleryGrid from '@/components/GalleryGrid'
import { hairArtItems, categories, type HairArtItem } from '@/data/hairArt'
import { useTranslation } from '@/contexts/TranslationContext'

export default function HairArtPage() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<HairArtItem['category'] | 'All'>('All')

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    reveals.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const filteredItems =
    selectedCategory === 'All'
      ? hairArtItems
      : hairArtItems.filter((item) => item.category === selectedCategory)

  const galleryItems = filteredItems.map((item) => ({
    id: item.id,
    image: item.image,
    title: item.title,
    caption: item.category,
  }))

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionHeading
        title={t('hairArt.title')}
        subtitle={t('hairArt.subtitle')}
      />

      {/* Filter Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategory === 'All'
              ? 'bg-accent text-white premium-shadow'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900 border border-neutral-200/50'
          }`}
        >
          {t('hairArt.filter.all')}
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-accent text-white premium-shadow'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900 border border-neutral-200/50'
            }`}
          >
            {t(`hairArt.filter.${category.toLowerCase()}`)}
          </button>
        ))}
      </div>

      <GalleryGrid items={galleryItems} columns={{ mobile: 1, tablet: 2, desktop: 3 }} />
    </div>
  )
}

