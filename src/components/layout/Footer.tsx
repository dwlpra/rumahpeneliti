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
    <footer className="bg-gray-900 text-gray-300 pt-8 pb-6 sm:pt-12 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Section - Full Width */}
        <div className="mb-8 sm:mb-10">
          <Link href="/" className="flex items-center gap-2 mb-3">
            <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
              <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">
              rumahpeneliti.com
            </span>
          </Link>
          <p className="text-gray-400 text-sm mb-4 max-w-md">
            Platform media digital yang menghubungkan peneliti muda Indonesia. Berbagi pengetahuan, membangun kolaborasi.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
            <a href="mailto:hello@rumahpeneliti.com" className="hover:text-white transition-colors">
              hello@rumahpeneliti.com
            </a>
          </div>
        </div>

        {/* Links Section - 2 Columns on Mobile (hide Topik), 5 on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className={category === 'Topik' ? 'hidden sm:block' : ''}>
              <h3 className="font-bold text-white mb-3 text-sm">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
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
                  className="hover:text-white transition-colors p-3 -m-3"
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
