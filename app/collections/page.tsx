'use client'

import { useState, useEffect } from 'react'
import SectionHeading from '@/components/SectionHeading'
import GalleryGrid from '@/components/GalleryGrid'
import { collections } from '@/data/collections'
import { useTranslation } from '@/contexts/TranslationContext'

export default function CollectionsPage() {
  const { t } = useTranslation()
  const [selectedCollection, setSelectedCollection] = useState(collections[0])

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

  const galleryItems = selectedCollection.images.map((image, index) => ({
    id: `${selectedCollection.id}-${index}`,
    image,
    title: `${selectedCollection.name} - Image ${index + 1}`,
  }))

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-4">{t('collections.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t('collections.subtitle')}
            </p>
          </div>
          <div>
            <select
              value={selectedCollection.id}
              onChange={(e) => {
                const collection = collections.find((c) => c.id === e.target.value)
                if (collection) setSelectedCollection(collection)
              }}
              className="px-6 py-3 border-2 border-gray-300 rounded-md text-gray-900 font-medium focus:outline-none focus:border-accent transition-colors bg-white"
            >
              {collections.map((collection) => (
                <option key={collection.id} value={collection.id}>
                  {collection.name} {collection.year && `(${collection.year})`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <GalleryGrid items={galleryItems} columns={{ mobile: 1, tablet: 2, desktop: 3 }} />
    </div>
  )
}

