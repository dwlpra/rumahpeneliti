import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Navbar, Footer } from '@/components'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Rumah Peneliti - Platform Komunitas Peneliti Indonesia',
    template: '%s | Rumah Peneliti'
  },
  description: 'Platform media digital yang menghubungkan peneliti muda Indonesia. Berbagi pengetahuan, membangun kolaborasi, dan mengakselerasi karier riset Anda.',
  keywords: ['peneliti', 'riset', 'beasiswa', 'akademik', 'jurnal', 'publikasi', 'Indonesia'],
  authors: [{ name: 'Rumah Peneliti' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://rumahpeneliti.com',
    siteName: 'Rumah Peneliti',
    title: 'Rumah Peneliti - Platform Komunitas Peneliti Indonesia',
    description: 'Platform media digital yang menghubungkan peneliti muda Indonesia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rumah Peneliti',
    description: 'Platform Komunitas Peneliti Indonesia',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
