'use client'

import { FileText, Users, Building2, Award } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

interface StatCard {
  icon: ReactNode
  value: number
  suffix: string
  label: string
  description: string
  color: string
}

const statistics: StatCard[] = [
  {
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: 500,
    suffix: '+',
    label: 'Artikel Berkualitas',
    description: 'Tulisan dari peneliti terverifikasi',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: 200,
    suffix: '+',
    label: 'Kontributor Aktif',
    description: 'Dari berbagai disiplin ilmu',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: 50,
    suffix: '+',
    label: 'Institusi Terwakili',
    description: 'Universitas & lembaga riset',
    color: 'from-blue-700 to-blue-800'
  },
  {
    icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: 30,
    suffix: '+',
    label: 'Beasiswa Tercatat',
    description: 'Info terbaru S2/S3 luar negeri',
    color: 'from-yellow-500 to-yellow-600'
  }
]

// CountUp component for animated numbers
function CountUp({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasStarted = useRef(false)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function Statistics() {
  return (
    <section id="statistik" className="bg-gradient-to-br from-gray-50 to-blue-50 py-10 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Dukung Perjalanan Riset Anda
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Bergabung dengan komunitas peneliti muda Indonesia yang terus berkembang
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-6">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                className={`mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${stat.color} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-white shadow-md`}
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>

              <motion.div
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
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
              animate={{ x: [0, 8, 0] }}
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
