import { Badge } from '@/app/components/ui/badge';
import { Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface Article {
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
}

interface ArticlesGridProps {
  articles: Article[];
}

export function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <motion.section
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
          className="text-2xl sm:text-3xl font-bold text-gray-900"
        >
          Terbaru di Rumah Peneliti
        </motion.h2>
        <motion.a
          href="#"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ x: 3 }}
          className="text-blue-900 hover:text-blue-700 font-semibold transition-all"
        >
          Lihat Semua →
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {articles.map((article, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer bg-white rounded-xl border border-gray-200 hover:border-blue-700 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <motion.img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <Badge className={`absolute top-4 left-4 ${article.categoryColor}`}>
                {article.category}
              </Badge>
            </div>

            {/* Content */}
            <div className="p-6">
              <motion.h3
                className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-900 transition-colors"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                {article.title}
              </motion.h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
