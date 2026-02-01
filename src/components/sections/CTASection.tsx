'use client'

import { Send, Sparkles, Mail, CheckCircle, Bell } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { motion } from 'motion/react'
import { useState } from 'react'

export function CTASection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      // In real app, send to API
    }
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

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-900">
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
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100"
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

            {!subscribed ? (
              <>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Dapatkan ringkasan artikel terbaik, info beasiswa S2/S3, dan kesempatan kolaborasi langsung di inbox Anda.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@anda.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 !text-gray-900 placeholder:!text-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 btn-yellow font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-md hover:shadow-lg"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Berlangganan Gratis
                  </button>
                </form>

                <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-yellow-500" />
                    <span>Gratis selamanya</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-yellow-500" />
                    <span>1 email/minggu</span>
                  </div>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-6 text-center"
              >
                <div className="bg-green-500 !text-white rounded-xl p-4 flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold text-sm sm:text-base">
                    Terima kasih! Anda telah terdaftar.
                  </span>
                </div>
              </motion.div>
            )}

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
