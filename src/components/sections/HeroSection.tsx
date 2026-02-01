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
    <section id="beranda" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Main Featured Article */}
        <Link href={`/artikel/${mainArticle.slug}`} className="lg:col-span-2 block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 mb-3 sm:mb-4 shadow-lg text-xs sm:text-sm">
                    {mainArticle.category}
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 leading-tight group-hover:text-yellow-400 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {mainArticle.title}
                </motion.h1>

                <motion.p
                  className="hidden sm:block text-gray-200 text-base md:text-lg mb-4 sm:mb-6 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {mainArticle.excerpt}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
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

                  <div className="flex items-center gap-1 sm:gap-2 text-yellow-400 font-semibold text-sm sm:text-base">
                    <span className="hidden sm:inline">Baca Selengkapnya</span>
                    <span className="sm:hidden">Baca</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Trending Carousel */}
        <TrendingCarousel articles={trendingArticles} />
      </div>
    </section>
  )
}
