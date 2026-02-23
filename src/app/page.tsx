'use client'

import { useState } from 'react'
import Image from 'next/image'
import BookingModal from '@/components/BookingModal'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image 
                src="/logo.jpg" 
                alt="Caparica Performance" 
                width={80} 
                height={80} 
                className="object-contain"
              />
            </div>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-black hover:bg-gray-200 px-6 py-3 font-medium tracking-wide transition-colors uppercase text-sm"
            >
              Reserve Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-black py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-7xl md:text-8xl font-light mb-8 tracking-tight">
              IT'S NOT FITNESS.
            </h1>
            <h2 className="text-6xl md:text-7xl font-light mb-12 tracking-tight text-gray-400">
              IT'S LIFE.
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed text-gray-300">
              Experience the intersection of luxury and performance. 
              Where precision meets passion, and every session transforms.
            </p>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-black hover:bg-gray-200 px-12 py-4 font-medium tracking-wide transition-colors uppercase text-sm"
            >
              Begin Your Transformation
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-light mb-6 tracking-tight">ONE MEMBERSHIP.</h3>
            <h4 className="text-4xl font-light mb-8 text-gray-400 tracking-tight">LIMITLESS POTENTIAL.</h4>
            <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Precision-backed treatments, exclusive methodologies, and regenerative amenities designed to elevate your body and mind.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {[
              {
                title: "RPG METHODOLOGY",
                subtitle: "Global Postural Reeducation",
                description: "Science-backed postural correction that addresses the root cause, not just symptoms. Transform chronic pain into lasting strength.",
                image: "/api/placeholder/600/400"
              },
              {
                title: "PRECISION THERAPY",
                subtitle: "Personalized Recovery",
                description: "Individual treatment protocols designed for your unique biomechanical blueprint. Where expertise meets innovation.",
                image: "/api/placeholder/600/400"
              },
              {
                title: "FUNCTIONAL TRAINING",
                subtitle: "Performance Optimization", 
                description: "Bespoke programs that don't just build muscle—they build resilience, power, and longevity.",
                image: "/api/placeholder/600/400"
              },
              {
                title: "WELLNESS INTEGRATION",
                subtitle: "Holistic Nutrition",
                description: "Nutritional strategies that fuel performance and accelerate recovery. Because greatness requires the right foundation.",
                image: "/api/placeholder/600/400"
              }
            ].map((service, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden mb-8 bg-gray-800 h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <h5 className="text-sm font-medium tracking-widest text-gray-300 mb-2">{service.subtitle.toUpperCase()}</h5>
                    <h4 className="text-2xl font-light tracking-tight">{service.title}</h4>
                  </div>
                </div>
                <p className="text-gray-400 font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-light mb-8 tracking-tight">WHERE SCIENCE MEETS ART.</h3>
            <p className="text-xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our expertise spans the full spectrum of human movement and recovery. Every challenge is an opportunity for transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-1 max-w-5xl mx-auto">
            {[
              "Scoliosis", "Spinal Curvature", "Postural Disorders",
              "Chronic Pain", "Sciatica", "Disc Pathology", 
              "Knee Alignment", "Foot Mechanics", "Tendinopathy", "Cervical Issues"
            ].map((condition, idx) => (
              <div key={idx} className="bg-gray-900 hover:bg-gray-800 border border-gray-700 p-6 text-center transition-colors group">
                <span className="text-gray-300 font-light tracking-wide group-hover:text-white transition-colors">{condition}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 font-medium tracking-wide transition-colors uppercase text-sm"
            >
              Discover Your Path
            </button>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-8 tracking-tight">VISIT OUR SANCTUARY.</h3>
            <p className="text-xl font-light text-gray-400">Where transformation begins and excellence never ends.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="text-sm font-medium tracking-widest text-gray-400 mb-6 uppercase">Location</h4>
              <div className="space-y-3 text-gray-300 font-light">
                <p className="text-lg">R. António Correia 2 A</p>
                <p className="text-lg">2825-291 Costa da Caparica</p>
                <p className="text-lg">Portugal</p>
              </div>
              <div className="mt-8 space-y-3">
                <p className="text-gray-400">+351 934 614 334</p>
                <p className="text-gray-400">caparicaperformance@gmail.com</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-sm font-medium tracking-widest text-gray-400 mb-6 uppercase">Hours</h4>
              <div className="space-y-4 text-gray-300 font-light">
                <div className="flex justify-between max-w-xs mx-auto">
                  <span>Monday - Friday</span>
                  <span>07:00 - 21:00</span>
                </div>
                <div className="flex justify-between max-w-xs mx-auto">
                  <span>Saturday</span>
                  <span>07:00 - 13:00</span>
                </div>
                <div className="flex justify-between max-w-xs mx-auto">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Image 
              src="/logo.jpg" 
              alt="Caparica Performance" 
              width={60} 
              height={60} 
              className="object-contain"
            />
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm font-light tracking-wide">© 2026 Caparica Performance. All rights reserved.</p>
            <p className="text-gray-600 mt-2 text-sm">Lead Physiotherapist: Inês Dias</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  )
}