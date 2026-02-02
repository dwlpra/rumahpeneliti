'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Clock, TrendingUp, ChevronLeft, ChevronRight, Dot } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface Article {
  title: string
  image: string
  category?: string
  readTime?: string
  slug?: string
}

interface TrendingCarouselProps {
  articles: Article[]
  autoSlideInterval?: number
}

export function TrendingCarousel({ articles, autoSlideInterval = 4000 }: TrendingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length)
    }, autoSlideInterval)

    return () => clearInterval(timer)
  }, [articles.length, autoSlideInterval, isPaused])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length)
  }, [articles.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % articles.length)
  }, [articles.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrevious, goToNext])

  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    const diff = touchStart - touchEnd
    if (diff > 50) goToNext()
    if (diff < -50) goToPrevious()
  }

  if (articles.length === 0) return null

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" />
          <span className="hidden sm:inline">Trending Minggu Ini</span>
          <span className="sm:hidden">Trending</span>
        </h2>
        <Link href="/artikel" className="text-xs sm:text-sm text-blue-900 hover:text-blue-700 font-medium">
          Lihat Semua
        </Link>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.slug ? `/artikel/${article.slug}` : '#'}
              className="w-full flex-shrink-0"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-xl lg:rounded-2xl border border-gray-100 hover:border-blue-900 hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
              >
                <div className="relative h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {article.category && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-blue-900/90 text-white hover:bg-blue-800 text-xs px-3 py-1.5">
                        {article.category}
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors leading-snug mb-3 line-clamp-3">
                    {article.title}
                  </h3>

                  {article.readTime && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Navigation Arrows */}
        {articles.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/90 hover:bg-white border border-gray-200 hover:border-blue-900 rounded-full flex items-center justify-center shadow-lg transition-all sm:opacity-0 opacity-100 hover:opacity-100 focus:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/90 hover:bg-white border border-gray-200 hover:border-blue-900 rounded-full flex items-center justify-center shadow-lg transition-all sm:opacity-0 opacity-100 hover:opacity-100 focus:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {articles.length > 1 && (
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 mt-3 sm:mt-4">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex ? (
                <Dot className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-blue-900 fill-blue-900" />
              ) : (
                <Dot className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-gray-300 hover:text-gray-400" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {articles.length > 1 && (
        <div className="text-center mt-2 text-xs text-gray-500">
          {currentIndex + 1} dari {articles.length}
        </div>
      )}
    </div>
  )
}
