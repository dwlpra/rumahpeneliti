'use client'

import { FileText, Users, Building2, Award } from 'lucide-react'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface StatCard {
  icon: ReactNode
  value: string
  label: string
  description: string
  color: string
}

const statistics: StatCard[] = [
  {
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: '500+',
    label: 'Artikel Berkualitas',
    description: 'Tulisan dari peneliti terverifikasi',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: '200+',
    label: 'Kontributor Aktif',
    description: 'Dari berbagai disiplin ilmu',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: '50+',
    label: 'Institusi Terwakili',
    description: 'Universitas & lembaga riset',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: '30+',
    label: 'Beasiswa Tercatat',
    description: 'Info terbaru S2/S3 luar negeri',
    color: 'from-yellow-500 to-yellow-600'
  }
]

export function Statistics() {
  return (
    <section id="statistik" className="bg-gradient-to-br from-gray-50 to-blue-50 py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Dukung Perjalanan Riset Anda
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Bergabung dengan komunitas peneliti muda Indonesia yang terus berkembang
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className={`mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${stat.color} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-white`}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>

              <motion.div
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
              >
                {stat.value}
              </motion.div>

              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 sm:mt-12 px-4"
        >
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
            Jadilah bagian dari gerakan ini. Mulai berkontribusi hari ini.
          </p>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-900">
            <span>100+ peneliti baru bergabung setiap bulan</span>
            <motion.span
              className="text-yellow-500"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
