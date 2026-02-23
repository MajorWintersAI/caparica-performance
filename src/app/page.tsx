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
              className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 font-medium tracking-wide transition-colors uppercase text-sm"
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
            <h1 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
              CAPARICA PERFORMANCE
            </h1>
            <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight text-gray-400">
              Fisioterapia & <span className="text-red-500">Performance</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed text-gray-300">
              Centro especializado em RPG, fisioterapia e treino funcional. 
              Recupere, fortaleça e optimize o seu corpo com profissionais qualificados.
            </p>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-red-600 text-white hover:bg-red-700 px-12 py-4 font-medium tracking-wide transition-colors uppercase text-sm"
            >
              Marcar Consulta
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-light mb-8 tracking-tight">Nossos Serviços</h3>
            <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tratamentos especializados e programas personalizados para otimizar sua performance e bem-estar.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {[
              {
                title: "RPG",
                subtitle: "Reeducação Postural Global",
                description: "Método científico para correção postural e alívio de dores crônicas. Tratamento que aborda a causa raiz dos problemas posturais.",
                image: "/rpg-treatment.jpg"
              },
              {
                title: "FISIOTERAPIA",
                subtitle: "Tratamento Personalizado",
                description: "Protocolos individuais de tratamento focados na sua recuperação específica com técnicas avançadas.",
                image: "/physiotherapy.jpg"
              },
              {
                title: "TREINO FUNCIONAL",
                subtitle: "Otimização de Performance", 
                description: "Programas personalizados para otimizar performance física e condição atlética de forma segura.",
                image: "/functional-training.jpg"
              },
              {
                title: "NUTRIÇÃO",
                subtitle: "Consultoria Nutricional",
                description: "Orientação nutricional para complementar seus objetivos de treino e acelerar a recuperação.",
                image: "/nutrition.jpg"
              }
            ].map((service, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden mb-8 bg-gray-800 h-64 rounded-lg">
                  {/* Placeholder for clean work photos - iPhone commercial style */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-red-500 rounded opacity-60"></div>
                      </div>
                      <p className="text-gray-400 text-sm">Professional Photo</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <h5 className="text-sm font-medium tracking-widest text-red-400 mb-2">{service.subtitle.toUpperCase()}</h5>
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
            <h3 className="text-4xl font-light mb-8 tracking-tight">Condições Tratadas</h3>
            <p className="text-xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Nossa experiência abrange um amplo espectro de condições relacionadas ao movimento e recuperação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-1 max-w-5xl mx-auto">
            {[
              "Escoliose", "Hipercifose Dorsal", "Hiperlordose",
              "Lombalgia", "Dor Ciática", "Hérnia Discal", 
              "Joelhos Valgos", "Pé Plano/Cavo", "Tendinopatia", "Dor Cervical"
            ].map((condition, idx) => (
              <div key={idx} className="bg-gray-900 hover:bg-gray-800 border border-gray-700 p-6 text-center transition-colors group">
                <span className="text-gray-300 font-light tracking-wide group-hover:text-white transition-colors">{condition}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 font-medium tracking-wide transition-colors uppercase text-sm"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-8 tracking-tight">Contacte-nos</h3>
            <p className="text-xl font-light text-gray-400">Agende sua consulta e inicie sua jornada de recuperação.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="text-sm font-medium tracking-widest text-gray-400 mb-6 uppercase">Localização</h4>
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
              <h4 className="text-sm font-medium tracking-widest text-gray-400 mb-6 uppercase">Horários</h4>
              <div className="space-y-4 text-gray-300 font-light">
                <div className="flex justify-between max-w-xs mx-auto">
                  <span>Segunda - Sexta</span>
                  <span className="text-red-400">07:00 - 21:00</span>
                </div>
                <div className="flex justify-between max-w-xs mx-auto">
                  <span>Sábado</span>
                  <span className="text-red-400">07:00 - 13:00</span>
                </div>
                <div className="flex justify-between max-w-xs mx-auto">
                  <span>Domingo</span>
                  <span className="text-gray-500">Encerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Image 
              src="/logo.jpg" 
              alt="Caparica Performance" 
              width={80} 
              height={80} 
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