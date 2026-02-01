'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'
import { motion } from 'motion/react'
import type { ArticleCard } from '@/types/article'

interface ArticlesGridProps {
  articles: ArticleCard[]
}

export function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <motion.section
      id="artikel"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
        >
          Terbaru di Rumah Peneliti
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/artikel"
            className="text-blue-900 hover:text-blue-700 font-semibold transition-all hover:translate-x-1 inline-block"
          >
            Lihat Semua →
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={`/artikel/${article.slug}`}
            className="block"
          >
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl border border-gray-200 hover:border-blue-700 hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge className={`absolute top-4 left-4 ${article.categoryColor}`}>
                  {article.category}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-900 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </motion.section>
  )
}
