import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllArticles, getAllCategories } from '@/lib/articles'
import { Badge } from '@/components/ui/badge'
import { Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Artikel',
  description: 'Kumpulan artikel, opini, dan tutorial dari para peneliti Indonesia.',
}

export default function ArtikelPage() {
  const articles = getAllArticles()
  const categories = getAllCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Artikel
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Temukan artikel terbaru, opini peneliti, dan tutorial untuk mendukung perjalanan riset Anda.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
          Semua
        </Badge>
        {categories.map((category) => (
          <Badge key={category} variant="outline" className="cursor-pointer hover:bg-blue-50">
            {category}
          </Badge>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/artikel/${article.slug}`}
            className="group block"
          >
            <article className="bg-white rounded-xl border border-gray-200 hover:border-blue-700 hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
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
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-900 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-900 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Baca
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
