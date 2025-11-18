'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/contexts/TranslationContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useTranslation()
  const pathname = usePathname()

  const navLinks = [
    { href: '/', key: 'nav.home' },
    { href: '/celebrities', key: 'nav.celebrities' },
    { href: '/hair-art', key: 'nav.hairArt' },
    { href: '/gino-salon', key: 'nav.ginoSalon' },
    { href: '/collections', key: 'nav.collections' },
    { href: '/training', key: 'nav.training' },
    { href: '/video', key: 'nav.video' },
    { href: '/press', key: 'nav.press' },
    { href: '/about', key: 'nav.about' },
    { href: '/contact', key: 'nav.contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-gray-200/50 backdrop-blur-md animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-serif font-semibold text-gray-900 hover:text-accent transition-all duration-300 hover:scale-105 relative group whitespace-nowrap"
            >
              <span className="relative z-10">Alexandros Liakos</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-3">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  className={`relative text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300 group whitespace-nowrap ${
                    isActive
                      ? 'text-accent bg-accent/10'
                      : 'text-gray-700 hover:text-accent hover:bg-gray-50/50'
                  }`}
                >
                  <span className="relative z-10">{t(link.key)}</span>
                  {isActive && (
                    <span className="absolute inset-0 bg-accent/10 rounded-lg animate-scale-in"></span>
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4"></span>
                </Link>
              )
            })}
          </div>
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-xs text-gray-600 bg-gray-50/50 px-3 py-1.5 rounded-full">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-md transition-all duration-300 ${
                  language === 'en' 
                    ? 'text-accent font-medium bg-white premium-shadow' 
                    : 'hover:text-accent hover:bg-white/50'
                }`}
              >
                English
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLanguage('el')}
                className={`px-2 py-1 rounded-md transition-all duration-300 ${
                  language === 'el' 
                    ? 'text-accent font-medium bg-white premium-shadow' 
                    : 'hover:text-accent hover:bg-white/50'
                }`}
              >
                Greek
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-accent hover:bg-gray-50/50 focus:outline-none transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-1 pt-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 0.05}s` }}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 animate-slide-in-right ${
                      isActive
                        ? 'text-accent bg-accent/10 premium-shadow'
                        : 'text-gray-700 hover:text-accent hover:bg-gray-50/50 active:scale-95'
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                )
              })}
              <div className="flex items-center space-x-2 px-3 py-2 text-xs text-gray-600">
                <button
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'text-accent font-medium' : 'hover:text-accent'}
                >
                  English
                </button>
                <span>|</span>
                <button
                  onClick={() => setLanguage('el')}
                  className={language === 'el' ? 'text-accent font-medium' : 'hover:text-accent'}
                >
                  Greek
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

