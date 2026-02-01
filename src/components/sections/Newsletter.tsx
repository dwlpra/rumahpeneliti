'use client'

import { Mail, Bell, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'motion/react'

export function Newsletter() {
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
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-10 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-yellow-400 rounded-full mb-4 sm:mb-6"
            >
              <Bell className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-900" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
              Jangan Lewatkan Info Riset & Beasiswa Terbaru
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Dapatkan ringkasan artikel terbaik, info beasiswa S2/S3, dan kesempatan kolaborasi langsung di inbox Anda.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@anda.com"
                    required
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Gabung</span>
                  </button>
                </div>

                <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-blue-100">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                    <span>Gratis selamanya</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                    <span>1 email/minggu</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                    <span>Unsubscribe kapan saja</span>
                  </div>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-md mx-auto py-6 sm:py-8"
              >
                <div className="bg-green-500 text-white rounded-xl p-4 sm:p-6 flex items-center justify-center gap-2 sm:gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold text-sm sm:text-base text-center">
                    Terima kasih! Anda telah terdaftar.
                  </span>
                </div>
              </motion.div>
            )}

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20 px-2">
              <p className="text-blue-200 text-xs sm:text-sm">
                Bergabung dengan <span className="font-semibold text-white">2,500+ peneliti</span> yang sudah berlangganan
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
