import { Home, Sparkles, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  'Tentang': ['Visi & Misi', 'Tim Kami', 'Kebijakan Editorial', 'Kontak'],
  'Kontribusi': ['Panduan Menulis', 'Submit Artikel', 'Jadi Reviewer', 'Kolaborasi'],
  'Topik': ['Riset Sosial', 'Sains & Teknologi', 'Kesehatan', 'Tips Akademik']
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
                <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-white">
                rumahpeneliti.com
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Platform media digital yang menghubungkan peneliti muda Indonesia. Berbagi pengetahuan, membangun kolaborasi, dan mengakselerasi karier riset Anda.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:hello@rumahpeneliti.com" className="hover:text-white transition-colors">
                hello@rumahpeneliti.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} rumahpeneliti.com. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
