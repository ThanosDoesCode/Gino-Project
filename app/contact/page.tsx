'use client'

import { useState, FormEvent } from 'react'
import SectionHeading from '@/components/SectionHeading'

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'Booking',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors: FormErrors = {}

    // Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    // Simulate form submission
    console.log('Form submitted:', formData)

    // Show toast
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
      setIsSubmitting(false)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Booking',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionHeading
        title="Contact"
        subtitle="Bookings, collaborations and press requests. We'd love to hear from you."
      />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 ${
                  errors.name ? 'border-red-500' : 'border-gray-300 focus:border-accent'
                }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 ${
                  errors.email ? 'border-red-500' : 'border-gray-300 focus:border-accent'
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
              >
                <option value="Booking">Booking</option>
                <option value="Training">Training</option>
                <option value="Press">Press</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 ${
                  errors.message ? 'border-red-500' : 'border-gray-300 focus:border-accent'
                }`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full px-6 py-4 bg-accent text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-accent-dark hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 premium-shadow hover:premium-shadow-lg"
            >
              <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </form>

          {/* Toast Notification */}
          {showToast && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
              Message sent (demo) - Thank you for contacting us!
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Get in Touch</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Salon Address</h4>
              <p className="text-gray-700">Kolonaki Square</p>
              <p className="text-gray-700">Athens, Greece</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <a href="mailto:info@alexandrosliakos.com" className="text-accent hover:text-accent-dark">
                info@alexandrosliakos.com
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <a href="tel:+302101234567" className="text-accent hover:text-accent-dark">
                +30 210 123 4567
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Opening Hours</h4>
              <p className="text-gray-700">Monday - Saturday: 9:00 AM - 8:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="aspect-video placeholder-gradient rounded-xl flex items-center justify-center premium-shadow border border-neutral-200/50">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="placeholder-text block">Map Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

