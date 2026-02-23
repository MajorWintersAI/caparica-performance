'use client'

import { useState } from 'react'
import Image from 'next/image'
import BookingModal from '@/components/BookingModal'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image 
                src="/logo.jpg" 
                alt="Caparica Performance" 
                width={60} 
                height={60} 
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-black">Caparica Performance</h1>
                <p className="text-gray-600">Fisioterapia & Performance</p>
              </div>
            </div>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="btn-primary"
            >
              Marcar Consulta
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6">
              Transforme a Sua Performance
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Centro especializado em RPG, fisioterapia e treino funcional. 
              Recupere, fortaleça e optimize o seu corpo com profissionais qualificados.
            </p>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Agendar Avaliação
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">Nossos Serviços</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "RPG - Reeducação Postural Global",
                description: "Método científico para correção postural e alívio de dores crônicas",
                icon: "🧘‍♀️"
              },
              {
                title: "Fisioterapia Personalizada",
                description: "Tratamento individual focado na sua recuperação específica",
                icon: "🏥"
              },
              {
                title: "Treino Funcional",
                description: "Programas personalizados para otimizar performance e condição física",
                icon: "💪"
              },
              {
                title: "Avaliação Nutricional",
                description: "Consultoria nutricional para complementar seus objetivos de treino",
                icon: "🥗"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-black">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">Condições Tratadas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Escoliose", "Hipercifose Dorsal", "Hiperlordose Cervical e Lombar",
              "Lombalgia", "Dor Ciática", "Hérnia Discal", "Joelhos Valgos",
              "Pé Plano/Cavo", "Tendinopatia", "Dor Cervical"
            ].map((condition, idx) => (
              <div key={idx} className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
                <span className="text-red-700 font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contacte-nos</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-red-400">📍</span>
                  <span>R. António Correia 2 A, 2825-291 Costa da Caparica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-400">📞</span>
                  <span>+351 934 614 334</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-400">✉️</span>
                  <span>caparicaperformance@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Horários</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span className="text-red-400">07:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-red-400">07:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-gray-400">Encerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Image 
              src="/logo.jpg" 
              alt="Caparica Performance" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
            <span className="text-xl font-bold">Caparica Performance</span>
          </div>
          <p className="text-red-100">© 2026 Caparica Performance. Todos os direitos reservados.</p>
          <p className="text-red-200 mt-2">Fisioterapeuta: Inês Dias</p>
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