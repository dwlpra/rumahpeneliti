'use client'

import { BookOpen, CheckCircle, Users, TrendingUp, ExternalLink } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { motion } from 'motion/react'
import Link from 'next/link'

const features = [
  {
    icon: <CheckCircle className="w-5 h-5" />,
    text: 'Sistem peer review profesional'
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: 'Editor & reviewer berpengalaman'
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    text: 'Proses publikasi cepat & transparan'
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    text: 'Open access untuk semua'
  }
]

const stats = [
  { value: '5+', label: 'Jurnal Aktif' },
  { value: '200+', label: 'Artikel Published' },
  { value: '100+', label: 'Reviewer' }
]

export function RumahJurnalSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 sm:py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo/Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-blue-900" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'white' }}>
                  Rumah Jurnal
                </h3>
                <p className="text-sm text-blue-200">jurnal.rumahpeneliti.com</p>
              </div>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{ color: 'white' }}>
              Platform Publikasi Jurnal
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text mt-2" style={{ color: 'transparent', WebkitBackgroundClip: 'text' }}>
                Berkualitas Indonesia
              </span>
            </h2>

            <p className="text-base sm:text-lg mb-6 sm:mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Sistem manajemen jurnal ilmiah dengan standar internasional. Memudahkan peneliti Indonesia untuk mempublikasikan hasil riset berkualitas.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm sm:text-base"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  <div className="text-yellow-400">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <PrimaryButton
                href="https://jurnal.rumahpeneliti.com"
                external
                variant="yellow"
                size="lg"
              >
                Kunjungi Rumah Jurnal
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </PrimaryButton>
              <PrimaryButton
                href="#"
                variant="outline-on-dark"
                size="lg"
              >
                Pelajari Lebih Lanjut
              </PrimaryButton>
            </div>
          </motion.div>

          {/* Right: Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-yellow-400">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 sm:mt-8 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base mb-1" style={{ color: 'white' }}>
                    Untuk Jurnal Manager & Editor
                  </h4>
                  <p className="text-xs sm:text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Kelola jurnal Anda dengan sistem OJS modern. Gratis untuk institusi Indonesia.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold !text-yellow-400 mt-2 hover:!text-yellow-300 transition-colors"
                  >
                    Daftarkan Jurnal Anda
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
