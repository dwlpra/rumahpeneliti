'use client'

import { Send, Sparkles, Mail, CheckCircle, Bell, Loader2 } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

// Confetti component
function Confetti() {
  const confetti = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
    color: ['#facc15', '#3b82f6', '#22c55e', '#f97316'][Math.floor(Math.random() * 4)]
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confetti.map((c) => (
        <motion.div
          key={c.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${c.x}%`,
            backgroundColor: c.color
          }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [1, 1, 0],
            rotate: [0, 360, 720]
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: c.delay,
            ease: 'easeOut'
          }}
        />
      ))}
    </div>
  )
}

export function CTASection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!email) {
      setEmailError('Email tidak boleh kosong')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError('Format email tidak valid')
      return
    }

    setIsSubmitting(true)
    setEmailError('')

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setSubscribed(true)
    setIsSubmitting(false)
    setEmail('')
  }

  return (
    <section id="tentang" className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: Contributor CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mb-6 shadow-lg"
            >
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-blue-900" />
            </motion.div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-tight text-gray-900">
              Jadilah Bagian dari
              <span className="block bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Gerakan Ini
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              Rumah Peneliti adalah wadah milik bersama. Kirim tulisanmu, bagikan idemu, dan bantu membangun ekosistem riset yang lebih kuat.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <PrimaryButton
                href="#"
                variant="solid"
                size="lg"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Jadi Kontributor
              </PrimaryButton>
              <PrimaryButton
                href="#"
                variant="outline"
                size="lg"
              >
                Panduan Menulis
              </PrimaryButton>
            </div>
          </motion.div>

          {/* Right: Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Newsletter Mingguan
                </h3>
                <p className="text-sm text-gray-600">
                  Info riset & beasiswa terbaru
                </p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Dapatkan ringkasan artikel terbaik, info beasiswa S2/S3, dan kesempatan kolaborasi langsung di inbox Anda.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailError('')
                      }}
                      placeholder="email@anda.com"
                      className={`w-full px-4 py-4 rounded-xl bg-gray-50 border !text-gray-900 placeholder:!text-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all ${
                        emailError ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {emailError && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm"
                      >
                        {emailError}
                      </motion.p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 btn-yellow font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-md hover:shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                          Memproses...
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                          Berlangganan Gratis
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-yellow-500" />
                      <span>Gratis selamanya</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-yellow-500" />
                      <span>1 email/minggu</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative py-8 text-center"
                >
                  <Confetti />
                  <div className="relative z-10 bg-green-500 !text-white rounded-2xl p-6 sm:p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="flex justify-center mb-4"
                    >
                      <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      Terima kasih! 🎉
                    </h3>
                    <p className="text-green-50 text-sm sm:text-base">
                      Anda telah terdaftar. Cek inbox untuk konfirmasi.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-4 pt-4 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-xs sm:text-sm">
                Bergabung dengan <span className="font-semibold text-gray-900">2,500+ peneliti</span> yang sudah berlangganan
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
