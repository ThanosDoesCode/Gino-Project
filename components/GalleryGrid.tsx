'use client'

import { useState } from 'react'
import Lightbox from './Lightbox'

interface GalleryItem {
  id: string
  image: string
  title?: string
  caption?: string
}

interface GalleryGridProps {
  items: GalleryItem[]
  columns?: {
    mobile: number
    tablet: number
    desktop: number
  }
  onItemClick?: (item: GalleryItem) => void
}

export default function GalleryGrid({ items, columns = { mobile: 1, tablet: 2, desktop: 3 }, onItemClick }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const handleClick = (item: GalleryItem) => {
    setSelectedItem(item)
    onItemClick?.(item)
  }

  // Map column numbers to Tailwind classes
  const getGridCols = (cols: number) => {
    const colMap: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
    }
    return colMap[cols] || 'grid-cols-1'
  }

  const mobileCols = getGridCols(columns.mobile)
  const tabletCols = `md:${getGridCols(columns.tablet)}`
  const desktopCols = `lg:${getGridCols(columns.desktop)}`

  return (
    <>
      <div className={`grid ${mobileCols} ${tabletCols} ${desktopCols} gap-4 md:gap-6`}>
        {items.map((item, index) => (
          <div
            key={item.id}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="group relative aspect-[4/5] overflow-hidden cursor-pointer placeholder-gradient rounded-lg premium-shadow hover:premium-shadow-lg premium-hover reveal border border-neutral-200/50"
            onClick={() => handleClick(item)}
          >
            {/* Fallback placeholder - always visible behind image */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {item.title && (
                  <span className="placeholder-text text-xs block">{item.title}</span>
                )}
              </div>
            </div>
            
            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img
              src={item.image}
              alt={item.title || 'Gallery image'}
              className="absolute inset-0 z-10 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
            {(item.title || item.caption) && (
              <div className="absolute inset-0 flex items-end z-20 pointer-events-none">
                <div className="w-full p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {item.title && (
                    <h3 className="font-semibold mb-2 text-white text-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {item.title}
                    </h3>
                  )}
                  {item.caption && (
                    <p className="text-sm text-white/90 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-150">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            )}
            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-lg z-30 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Lightbox
          image={selectedItem.image}
          title={selectedItem.title}
          caption={selectedItem.caption}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  )
}

