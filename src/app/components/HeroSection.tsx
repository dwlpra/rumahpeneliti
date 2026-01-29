import { Badge } from '@/app/components/ui/badge';
import { ArrowRight, TrendingUp, Clock, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  mainArticle: {
    image: string;
    category: string;
    title: string;
    excerpt: string;
    readTime?: string;
    views?: string;
  };
  trendingArticles: {
    title: string;
    image: string;
    category?: string;
    readTime?: string;
  }[];
}

export function HeroSection({ mainArticle, trendingArticles }: HeroSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Main Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 group cursor-pointer"
        >
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
            {/* Image */}
            <motion.img
              src={mainArticle.image}
              alt={mainArticle.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 mb-3 sm:mb-4 shadow-lg text-xs sm:text-sm">
                  {mainArticle.category}
                </Badge>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 leading-tight group-hover:text-yellow-400 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {mainArticle.title}
              </motion.h1>

              {/* Excerpt - Hidden on small mobile */}
              <motion.p
                className="hidden sm:block text-gray-200 text-base md:text-lg mb-4 sm:mb-6 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {mainArticle.excerpt}
              </motion.p>

              {/* Meta & CTA */}
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

        {/* Trending Articles */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between mb-2 sm:mb-4">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" />
              <span className="hidden sm:inline">Trending Minggu Ini</span>
              <span className="sm:hidden">Trending</span>
            </h2>
            <a href="#" className="text-xs sm:text-sm text-blue-900 hover:text-blue-700 font-medium">
              Lihat Semua
            </a>
          </div>

          {trendingArticles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group cursor-pointer bg-white rounded-xl lg:rounded-2xl border border-gray-100 hover:border-blue-900 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                {article.category && (
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <Badge className="bg-blue-900/90 text-white hover:bg-blue-800 text-[10px] sm:text-xs px-2 py-1">
                      {article.category}
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-900 transition-colors leading-snug mb-2 line-clamp-2 sm:line-clamp-3">
                  {article.title}
                </h3>

                {article.readTime && (
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{article.readTime}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
