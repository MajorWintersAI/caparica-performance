'use client'

import { useState, useEffect } from 'react'
import { format, addDays, startOfWeek, isSameDay, isAfter, startOfDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

interface TimeSlot {
  time: string
  available: boolean
}

interface Therapist {
  id: string
  name: string
  specialty: string
  avatar: string
}

const therapists: Therapist[] = [
  {
    id: 'ines',
    name: 'Dra. Inês Dias',
    specialty: 'RPG & Fisioterapia',
    avatar: '👩‍⚕️'
  },
  {
    id: 'joao',
    name: 'Dr. João Silva',
    specialty: 'Fisioterapia Desportiva',
    avatar: '👨‍⚕️'
  },
  {
    id: 'maria',
    name: 'Dra. Maria Santos',
    specialty: 'Reabilitação & RPG',
    avatar: '👩‍⚕️'
  },
  {
    id: 'ricardo',
    name: 'Dr. Ricardo Oliveira',
    specialty: 'Treino Funcional',
    avatar: '👨‍⚕️'
  }
]

const services = [
  { id: 'consulta', name: 'Consulta Inicial', duration: '60 min', price: '€50' },
  { id: 'rpg', name: 'Sessão RPG', duration: '60 min', price: '€45' },
  { id: 'fisio', name: 'Fisioterapia', duration: '45 min', price: '€40' },
  { id: 'treino', name: 'Treino Funcional', duration: '60 min', price: '€35' },
]

const generateTimeSlots = (date: Date): TimeSlot[] => {
  const slots: TimeSlot[] = []
  const isWeekday = date.getDay() >= 1 && date.getDay() <= 5
  const isSaturday = date.getDay() === 6
  const isSunday = date.getDay() === 0
  
  if (isSunday) return slots // Closed on Sunday
  
  const startHour = 7
  const endHour = isSaturday ? 13 : 21
  
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      // Randomly make some slots unavailable for demo
      const available = Math.random() > 0.3
      slots.push({ time: timeString, available })
    }
  }
  
  return slots
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1) // 1: Service, 2: Therapist, 3: Date/Time, 4: Details
  const [selectedService, setSelectedService] = useState('')
  const [selectedTherapist, setSelectedTherapist] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }))
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  })

  // Generate week days
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i))

  useEffect(() => {
    if (selectedDate) {
      setTimeSlots(generateTimeSlots(selectedDate))
    }
  }, [selectedDate])

  const handleClose = () => {
    setStep(1)
    setSelectedService('')
    setSelectedTherapist('')
    setSelectedDate(null)
    setSelectedTime('')
    setFormData({ name: '', email: '', phone: '', notes: '' })
    onClose()
  }

  const handleSubmit = async () => {
    // Here you would typically send to API
    console.log('Booking submitted:', {
      service: selectedService,
      therapist: selectedTherapist,
      date: selectedDate,
      time: selectedTime,
      ...formData
    })
    
    alert('Marcação realizada com sucesso! Receberá confirmação por email.')
    handleClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-black">
            {step === 1 && 'Escolha o Serviço'}
            {step === 2 && 'Escolha o Profissional'}
            {step === 3 && 'Escolha Data e Hora'}
            {step === 4 && 'Dados Pessoais'}
          </h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-6 border rounded-lg cursor-pointer transition-all ${
                    selectedService === service.id
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  <h3 className="font-semibold text-lg text-black">{service.name}</h3>
                  <p className="text-gray-600">{service.duration}</p>
                  <p className="text-red-600 font-bold mt-2">{service.price}</p>
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Therapist Selection */}
          {step === 2 && (
            <div className="grid md:grid-cols-2 gap-4">
              {therapists.map((therapist) => (
                <div
                  key={therapist.id}
                  onClick={() => setSelectedTherapist(therapist.id)}
                  className={`p-6 border rounded-lg cursor-pointer transition-all ${
                    selectedTherapist === therapist.id
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{therapist.avatar}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-black">{therapist.name}</h3>
                      <p className="text-gray-600">{therapist.specialty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 3: Date and Time Selection */}
          {step === 3 && (
            <div className="space-y-6">
              {/* Week Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentWeek(addDays(currentWeek, -7))}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  ← Semana Anterior
                </button>
                <h3 className="font-semibold text-lg">
                  {format(currentWeek, 'MMMM yyyy', { locale: ptBR })}
                </h3>
                <button
                  onClick={() => setCurrentWeek(addDays(currentWeek, 7))}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  Próxima Semana →
                </button>
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {weekDays.map((day, idx) => {
                  const isPast = !isAfter(day, startOfDay(new Date()))
                  const isSunday = day.getDay() === 0
                  const isSelected = selectedDate && isSameDay(day, selectedDate)
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => !isPast && !isSunday && setSelectedDate(day)}
                      disabled={isPast || isSunday}
                      className={`p-4 border rounded-lg text-center transition-all ${
                        isSelected
                          ? 'border-red-600 bg-red-600 text-white'
                          : isPast || isSunday
                          ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'border-gray-200 hover:border-red-300 text-black'
                      }`}
                    >
                      <div className="font-semibold">
                        {format(day, 'EEE', { locale: ptBR })}
                      </div>
                      <div className="text-lg">
                        {format(day, 'd')}
                      </div>
                      {isSunday && <div className="text-xs mt-1">Encerrado</div>}
                    </button>
                  )
                })}
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div>
                  <h4 className="font-semibold mb-4 text-black">
                    Horários Disponíveis - {format(selectedDate, 'dd/MM/yyyy')}
                  </h4>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                        disabled={!slot.available}
                        className={`p-3 border rounded-lg text-center transition-all ${
                          selectedTime === slot.time
                            ? 'border-red-600 bg-red-600 text-white'
                            : slot.available
                            ? 'border-gray-200 hover:border-red-300 text-black'
                            : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Personal Details */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-black">Resumo da Marcação</h3>
                <p><strong>Serviço:</strong> {services.find(s => s.id === selectedService)?.name}</p>
                <p><strong>Profissional:</strong> {therapists.find(t => t.id === selectedTherapist)?.name}</p>
                <p><strong>Data:</strong> {selectedDate && format(selectedDate, 'dd/MM/yyyy')} às {selectedTime}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Observações (opcional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    placeholder="Descreva brevemente a sua situação ou dúvidas..."
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="btn-secondary"
            >
              Voltar
            </button>
          )}
          
          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={
                (step === 1 && !selectedService) ||
                (step === 2 && !selectedTherapist) ||
                (step === 3 && (!selectedDate || !selectedTime))
              }
              className={`btn-primary ml-auto ${
                (step === 1 && !selectedService) ||
                (step === 2 && !selectedTherapist) ||
                (step === 3 && (!selectedDate || !selectedTime))
                  ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Continuar
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!formData.name || !formData.email || !formData.phone}
              className={`btn-primary ml-auto ${
                !formData.name || !formData.email || !formData.phone
                  ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Confirmar Marcação
            </button>
          )}
        </div>
      </div>
    </div>
  )
}