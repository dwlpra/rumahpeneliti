'use client'

import { PenTool, DollarSign, Users, GraduationCap, BookOpen, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { PrimaryButton } from '@/components/ui/primary-button'
import { motion } from 'motion/react'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface ProgramCard {
  icon: ReactNode
  title: string
  description: string
  duration: string
  level: string
  iconBg: string
  status: 'available' | 'coming-soon' | 'full'
}

const programs: ProgramCard[] = [
  {
    icon: <PenTool className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Bootcamp Jurnal Internasional',
    description: 'Panduan lengkap menulis dan publikasi di jurnal Scopus Q1/Q2',
    duration: '8 minggu',
    level: 'Intermediate',
    iconBg: 'from-blue-500 to-blue-600',
    status: 'coming-soon'
  },
  {
    icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Workshop Strategi Hibah Riset',
    description: 'Teknik jitu menyusun proposal hibah penelitian yang lolos',
    duration: '2 hari',
    level: 'All levels',
    iconBg: 'from-blue-700 to-blue-800',
    status: 'coming-soon'
  },
  {
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Mentorship Eksklusif',
    description: 'Bimbingan 1-on-1 dengan profesor dan reviewer berpengalaman',
    duration: '3 bulan',
    level: 'Advanced',
    iconBg: 'from-blue-600 to-blue-700',
    status: 'coming-soon'
  },
  {
    icon: <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Panduan Beasiswa S2/S3',
    description: 'Roadmap lengkap persiapan beasiswa luar negeri dari A-Z',
    duration: 'Self-paced',
    level: 'Beginner',
    iconBg: 'from-yellow-500 to-yellow-600',
    status: 'coming-soon'
  },
  {
    icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Metodologi Penelitian Modern',
    description: 'Training intensif metodologi kuantitatif dan kualitatif',
    duration: '4 minggu',
    level: 'Intermediate',
    iconBg: 'from-blue-500 to-blue-600',
    status: 'coming-soon'
  },
  {
    icon: <Target className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Webinar Series',
    description: 'Sesi mingguan dengan expert: publikasi & riset terkini',
    duration: 'Weekly',
    level: 'All levels',
    iconBg: 'from-yellow-500 to-yellow-600',
    status: 'coming-soon'
  }
]

const statusConfig = {
  'available': { label: 'Daftar Sekarang', color: 'bg-green-500', textColor: 'text-white' },
  'coming-soon': { label: 'Segera Hadir', color: 'bg-yellow-400', textColor: 'text-blue-900' },
  'full': { label: 'Penuh', color: 'bg-gray-400', textColor: 'text-white' }
}

export function ProgramsShowcase() {
  return (
    <section id="program" className="bg-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 text-xs sm:text-sm px-4 py-1.5">
            Program & Pelatihan
          </Badge>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Akselerasi Karier Peneliti Anda
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Program terstruktur untuk meningkatkan kemampuan riset dan publikasi Anda
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className={`${statusConfig[program.status].color} ${statusConfig[program.status].textColor} text-[11px] sm:text-xs px-2 py-1 shadow-sm`}>
                  {statusConfig[program.status].label}
                </Badge>
              </div>

              <div className="p-5 sm:p-6">
                {/* Icon */}
                <motion.div
                  className={`bg-gradient-to-br ${program.iconBg} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white mb-4 shadow-md`}
                  whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  {program.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-900 transition-colors">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {program.duration}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {program.level}
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href="#"
                  className={`block w-full text-center px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    program.status === 'available'
                      ? 'bg-blue-900 text-white hover:bg-blue-800'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {program.status === 'available' ? 'Daftar Sekarang' : 'Beritahu Saya'}
                </Link>
              </div>

              {/* Decorative Element */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Punya ide program pelatihan? Atau ingin jadi instruktur?
          </p>
          <PrimaryButton href="#" size="lg">
            Ajukan Program Baru
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  )
}
