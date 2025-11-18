'use client'

import { useEffect } from 'react'
import SectionHeading from '@/components/SectionHeading'
import GalleryGrid from '@/components/GalleryGrid'
import { salonImages } from '@/data/salon'
import { useTranslation } from '@/contexts/TranslationContext'

export default function GinoSalonPage() {
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
  const peopleImages = salonImages
    .filter((img) => img.category === 'people')
    .map((img) => ({
      id: img.id,
      image: img.image,
      title: img.title,
    }))

  const interiorImages = salonImages
    .filter((img) => img.category === 'interior')
    .map((img) => ({
      id: img.id,
      image: img.image,
      title: img.title,
    }))

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionHeading
        title={t('ginoSalon.title')}
        subtitle={t('ginoSalon.subtitle')}
      />

      {/* People & Moments */}
      <section className="mb-16">
        <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">{t('ginoSalon.people')}</h3>
        <GalleryGrid items={peopleImages} columns={{ mobile: 1, tablet: 2, desktop: 3 }} />
      </section>

      {/* The Salon */}
      <section className="mb-16">
        <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">{t('ginoSalon.interior')}</h3>
        <GalleryGrid items={interiorImages} columns={{ mobile: 1, tablet: 2, desktop: 3 }} />
      </section>

      {/* Salon Info Card */}
      <div className="bg-neutral-50 rounded-xl p-8 max-w-2xl mx-auto premium-shadow border border-neutral-200/50 reveal">
        <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">{t('ginoSalon.visitUs')}</h3>
        <div className="space-y-4 mb-6">
          <div>
            <p className="font-semibold text-gray-900 mb-1">{t('ginoSalon.address')}</p>
            <p className="text-neutral-700">{t('ginoSalon.addressValue')}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">{t('ginoSalon.hours')}</p>
            <p className="text-neutral-700">{t('ginoSalon.hoursValue')}</p>
            <p className="text-neutral-700">{t('ginoSalon.sunday')}</p>
          </div>
        </div>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-all duration-300 hover:scale-105 premium-shadow hover:premium-shadow-lg overflow-hidden"
        >
          <span className="relative z-10">{t('ginoSalon.getDirections')}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </div>
    </div>
  )
}

