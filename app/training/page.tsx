'use client'

import { useEffect } from 'react'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'
import { useTranslation } from '@/contexts/TranslationContext'

export default function TrainingPage() {
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionHeading
        title={t('training.title')}
        subtitle={t('training.subtitle')}
      />

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            id: '1',
            titleKey: 'training.masterclasses',
            descKey: 'training.masterclassesDesc',
            features: ['training.feature1', 'training.feature2', 'training.feature3', 'training.feature4', 'training.feature5'],
          },
          {
            id: '2',
            titleKey: 'training.coaching',
            descKey: 'training.coachingDesc',
            features: ['training.feature6', 'training.feature7', 'training.feature8', 'training.feature9', 'training.feature10'],
          },
          {
            id: '3',
            titleKey: 'training.workshops',
            descKey: 'training.workshopsDesc',
            features: ['training.feature11', 'training.feature12', 'training.feature13', 'training.feature14', 'training.feature15'],
          },
        ].map((service, index) => (
          <div
            key={service.id}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="bg-white border border-gray-200/50 rounded-xl p-8 premium-shadow hover:premium-shadow-lg premium-hover reveal group"
          >
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">
              {t(service.titleKey)}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{t(service.descKey)}</p>
            <ul className="space-y-3 mb-8">
              {service.features.map((featureKey, idx) => (
                <li key={idx} className="flex items-start group/item">
                  <span className="text-accent mr-3 mt-1 text-lg group-hover/item:scale-125 transition-transform duration-300">•</span>
                  <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{t(featureKey)}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="group/btn block w-full text-center px-6 py-3 border-2 border-accent text-accent font-medium rounded-lg hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">{t('training.requestInfo')}</span>
              <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

