'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Clock, Eye } from 'lucide-react'
import { motion } from 'motion/react'
import { TrendingCarousel } from './TrendingCarousel'
import type { ArticleCard } from '@/types/article'

interface HeroSectionProps {
  mainArticle: ArticleCard
  trendingArticles: ArticleCard[]
}

export function HeroSection({ mainArticle, trendingArticles }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6 sm:mb-8"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Artikel Pilihan
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Bacaan terbaik dari para peneliti Indonesia
            </p>
          </div>
          <Link
            href="/artikel"
            className="hidden sm:flex items-center gap-2 text-blue-900 hover:text-blue-700 font-semibold transition-colors"
          >
            Semua Artikel
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Main Featured Article */}
          <Link href={`/artikel/${mainArticle.slug}`} className="lg:col-span-2 block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />

                {/* Gradient Overlay - More opaque untuk readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 mb-3 sm:mb-4 shadow-lg text-xs sm:text-sm">
                    {mainArticle.category}
                  </Badge>

                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 leading-tight group-hover:text-yellow-400 transition-colors"
                    style={{ color: 'white' }}
                  >
                    {mainArticle.title}
                  </h3>

                  <p 
                    className="hidden sm:block text-base md:text-lg mb-4 sm:mb-6 leading-relaxed max-w-2xl"
                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    {mainArticle.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {mainArticle.readTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{mainArticle.readTime}</span>
                        </div>
                      )}
                      {mainArticle.views && (
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{mainArticle.views} dilihat</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2 font-semibold text-sm sm:text-base" style={{ color: '#facc15' }}>
                      <span className="hidden sm:inline">Baca Selengkapnya</span>
                      <span className="sm:hidden">Baca</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Trending Carousel */}
          <TrendingCarousel articles={trendingArticles} />
        </div>

        {/* Mobile: See All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="sm:hidden mt-6 text-center"
        >
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-blue-900 font-semibold"
          >
            Lihat Semua Artikel
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
