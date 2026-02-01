'use client'

import { Home, Sparkles, Menu, Search, X, BookOpen, Users, GraduationCap } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'

interface MenuItem {
  name: string
  href: string
  icon: typeof Home | null
}

const menuItems: MenuItem[] = [
  { name: 'Beranda', href: '/', icon: Home },
  { name: 'Artikel', href: '/artikel', icon: BookOpen },
  { name: 'Kontributor', href: '/#kontributor', icon: Users },
  { name: 'Tentang Kami', href: '/#tentang', icon: null },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                <Home className="w-5 h-5 text-white" />
                <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  rumahpeneliti
                </span>
                <span className="text-xs text-gray-500 block -mt-1">.com</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <motion.button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden sm:flex p-2 rounded-lg text-gray-600 hover:text-blue-900 hover:bg-blue-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <PrimaryButton href="/#kontributor" size="sm">
                  Jadi Kontributor
                </PrimaryButton>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="py-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <motion.input
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                      type="text"
                      placeholder="Cari artikel, beasiswa, atau topik riset..."
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                      autoFocus
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="lg:hidden overflow-hidden border-t border-gray-100"
              >
                <div className="py-4">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.icon && <item.icon className="w-5 h-5" />}
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 px-4"
                  >
                    <PrimaryButton href="/#kontributor" className="w-full">
                      Jadi Kontributor
                    </PrimaryButton>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Search Overlay for Mobile */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSearchOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
