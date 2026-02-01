'use client'

import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import Link from 'next/link'

export function HeroHeadline() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 sm:py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/90 font-medium">
              Platform untuk Peneliti Muda Indonesia
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight break-words"
            style={{ color: 'white' }}
          >
            <span style={{ color: 'white' }}>Temukan Kolaborator.</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text" style={{ color: 'transparent', WebkitBackgroundClip: 'text' }}>
              Kembangkan Riset.
            </span>
            <br />
            <span style={{ color: 'white' }}>Akselerasi Karier.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
          >
            Rumah Peneliti adalah wadah berbagi pengetahuan, membangun kolaborasi,
            dan mengakselerasi karier riset Anda bersama komunitas peneliti Indonesia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <PrimaryButton
              href="/artikel"
              variant="yellow"
              size="lg"
              className="w-full sm:w-auto"
            >
              Mulai Eksplorasi
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </PrimaryButton>
            <PrimaryButton
              href="#tentang"
              variant="outline-on-dark"
              size="lg"
              className="w-full sm:w-auto"
            >
              Jadi Kontributor
            </PrimaryButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
