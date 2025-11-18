'use client'

import { useEffect } from 'react'
import SectionHeading from '@/components/SectionHeading'
import GalleryGrid from '@/components/GalleryGrid'
import { celebrities } from '@/data/celebrities'
import { useTranslation } from '@/contexts/TranslationContext'

export default function CelebritiesPage() {
  const { t } = useTranslation()
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

  const galleryItems = celebrities.map((celebrity) => ({
    id: celebrity.id,
    image: celebrity.image,
    title: celebrity.name,
    caption: celebrity.role,
  }))

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionHeading
        title={t('celebrities.title')}
        subtitle={t('celebrities.subtitle')}
      />
      <GalleryGrid items={galleryItems} columns={{ mobile: 1, tablet: 2, desktop: 3 }} />
    </div>
  )
}

