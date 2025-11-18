'use client'

import { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import Lightbox from '@/components/Lightbox'
import { pressItems } from '@/data/press'

export default function PressPage() {
  const [selectedItem, setSelectedItem] = useState<typeof pressItems[0] | null>(null)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionHeading
        title="Press"
        subtitle="Selected magazines and features showcasing Alexandros' work in the fashion and beauty industry."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pressItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="aspect-[3/4] placeholder-gradient overflow-hidden relative">
              <img
                src={item.image}
                alt={item.magazine}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="absolute inset-0 hidden items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="placeholder-text text-xs">{item.magazine}</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{item.magazine}</h3>
              {item.issue && <p className="text-sm text-gray-600 mb-1">{item.issue}</p>}
              {item.year && <p className="text-xs text-gray-500">{item.year}</p>}
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Lightbox
          image={selectedItem.image}
          title={selectedItem.magazine}
          caption={selectedItem.issue ? `${selectedItem.issue}${selectedItem.year ? ` • ${selectedItem.year}` : ''}` : undefined}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  )
}

