'use client'

import { useEffect } from 'react'

interface LightboxProps {
  image: string
  title?: string
  caption?: string
  onClose: () => void
}

export default function Lightbox({ image, title, caption, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-accent transition-all duration-300 z-10 p-2 rounded-full hover:bg-white/10 active:scale-95 group"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="relative max-w-6xl max-h-full animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title || 'Lightbox image'}
          className="max-w-full max-h-[90vh] object-contain rounded-lg premium-shadow-lg"
        />
        {(title || caption) && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white p-6 rounded-b-lg animate-fade-in-up">
            {title && <h3 className="font-semibold mb-2 text-lg">{title}</h3>}
            {caption && <p className="text-sm opacity-90">{caption}</p>}
          </div>
        )}
      </div>
    </div>
  )
}

