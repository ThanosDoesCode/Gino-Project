'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import { TranslationProvider } from '@/contexts/TranslationContext'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TranslationProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </TranslationProvider>
  )
}

