'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/contexts/TranslationContext'

export default function Home() {
  const { t } = useTranslation()
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1 })

    reveals.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-neutral-50 via-white to-neutral-50/50">
        <div className="max-w-6xl mx-auto px-4 py-12 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Portrait */}
            <div className="order-2 md:order-1 reveal">
              <div className="aspect-[3/4] placeholder-gradient flex items-center justify-center rounded-2xl premium-shadow-lg overflow-hidden group hover:premium-shadow-xl transition-all duration-700 border border-neutral-200/50">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="placeholder-text block">Portrait</span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2 space-y-6 reveal">
              <h1 className="text-5xl md:text-7xl font-serif font-semibold text-gray-900 leading-tight animate-fade-in-up">
                <span className="text-gradient">Alexandros</span>
                <br />
                <span className="text-gray-900">Liakos</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {t('home.subtitle')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {t('home.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-accent text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-accent-dark hover:scale-105 text-center premium-shadow hover:premium-shadow-lg"
                >
                  <span className="relative z-10">{t('home.bookAppointment')}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
                <Link
                  href="/hair-art"
                  className="group relative px-8 py-4 border-2 border-accent text-accent font-medium rounded-lg hover:bg-accent/5 transition-all duration-300 hover:scale-105 text-center backdrop-blur-sm"
                >
                  <span className="relative z-10">{t('home.viewPortfolio')}</span>
                  <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="border-t border-neutral-200/50 py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { href: '/celebrities', key: 'home.highlights.celebrities' },
              { href: '/hair-art', key: 'home.highlights.hairArt' },
              { href: '/gino-salon', key: 'home.highlights.ginoSalon' },
              { href: '/press', key: 'home.highlights.press' },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="group text-center p-6 hover:bg-white rounded-xl premium-shadow hover:premium-shadow-lg premium-hover reveal"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full flex items-center justify-center group-hover:from-accent-subtle group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 border border-neutral-200/50">
                  <span className="text-neutral-500 text-xs font-medium group-hover:text-accent transition-colors duration-300">Icon</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-accent transition-all duration-300 text-lg">
                  {t(item.key)}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

