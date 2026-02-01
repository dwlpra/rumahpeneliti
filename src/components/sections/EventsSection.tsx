'use client'

import { Calendar, Users, FileText, Award, MapPin, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { PrimaryButton } from '@/components/ui/primary-button'
import { motion } from 'motion/react'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface Event {
  type: 'call-for-paper' | 'seminar' | 'workshop' | 'webinar'
  title: string
  organizer: string
  date: string
  deadline?: string
  location: string
  participants?: string
  icon: ReactNode
  color: string
  bgColor: string
  status: 'open' | 'closing-soon' | 'upcoming'
}

const events: Event[] = [
  {
    type: 'call-for-paper',
    title: 'Call for Papers: Konferensi Nasional Riset Sosial 2026',
    organizer: 'Universitas Indonesia',
    date: '15-16 Mei 2026',
    deadline: '31 Maret 2026',
    location: 'Hybrid (Jakarta & Online)',
    icon: <FileText className="w-5 h-5" />,
    color: 'text-blue-700',
    bgColor: 'from-blue-500 to-blue-600',
    status: 'open'
  },
  {
    type: 'seminar',
    title: 'Seminar Internasional: AI in Research Methodology',
    organizer: 'Rumah Peneliti x ITB',
    date: '20 Februari 2026',
    location: 'Online via Zoom',
    participants: '500+ peserta',
    icon: <Users className="w-5 h-5" />,
    color: 'text-blue-700',
    bgColor: 'from-blue-600 to-blue-700',
    status: 'closing-soon'
  },
  {
    type: 'workshop',
    title: 'Workshop: Teknik Visualisasi Data untuk Publikasi',
    organizer: 'Dr. Budi Santoso',
    date: '10 Maret 2026',
    location: 'Bandung',
    participants: 'Maks 30 orang',
    icon: <Award className="w-5 h-5" />,
    color: 'text-blue-700',
    bgColor: 'from-blue-500 to-blue-600',
    status: 'open'
  },
  {
    type: 'webinar',
    title: 'Webinar Series: Strategi Publikasi Jurnal Q1',
    organizer: 'Prof. Sarah Putri',
    date: 'Setiap Sabtu, Maret 2026',
    location: 'Online',
    icon: <Calendar className="w-5 h-5" />,
    color: 'text-yellow-700',
    bgColor: 'from-yellow-500 to-yellow-600',
    status: 'upcoming'
  }
]

const statusConfig = {
  'open': { label: 'Pendaftaran Dibuka', color: 'bg-green-500', pulse: true },
  'closing-soon': { label: 'Segera Ditutup', color: 'bg-red-500', pulse: true },
  'upcoming': { label: 'Segera Hadir', color: 'bg-blue-500', pulse: false }
}

export function EventsSection() {
  return (
    <section id="event" className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 text-xs sm:text-sm px-4 py-1.5">
            Event & Kegiatan
          </Badge>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Bergabung dengan Komunitas Aktif
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Seminar, workshop, dan kesempatan kolaborasi untuk peneliti Indonesia
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <motion.div
                  className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${event.bgColor} rounded-xl flex items-center justify-center text-white shadow-md`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  {event.icon}
                </motion.div>

                <div className="flex-1 min-w-0">
                  {/* Status Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`${statusConfig[event.status].color} text-white text-[10px] sm:text-xs px-2 py-0.5`}>
                      {statusConfig[event.status].label}
                    </Badge>
                    {statusConfig[event.status].pulse && (
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusConfig[event.status].color} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${statusConfig[event.status].color}`}></span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-900 transition-colors">
                    {event.title}
                  </h3>

                  {/* Organizer */}
                  <p className="text-sm text-gray-600 mb-3">
                    Oleh: <span className="font-semibold">{event.organizer}</span>
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    {event.deadline && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span>Deadline: <strong>{event.deadline}</strong></span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                    {event.participants && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span>{event.participants}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-4">
                    <PrimaryButton
                      href="#"
                      variant={event.status === 'upcoming' ? 'outline' : 'solid'}
                      size="sm"
                    >
                      {event.status === 'upcoming' ? 'Lihat Detail' : 'Daftar Sekarang'}
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 sm:mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            Ingin Mengadakan Event di Rumah Peneliti?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Kami terbuka untuk kolaborasi seminar, workshop, atau call for papers
          </p>
          <PrimaryButton href="#" size="lg">
            Ajukan Event
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  )
}
