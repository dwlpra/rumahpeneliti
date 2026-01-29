import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { motion } from 'motion/react';
import type { Article } from '@/app/types/article';

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Artikel Terkait</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={`/blog/${article.slug}`}
              className="group block bg-white rounded-xl border border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute top-3 left-3">
                  <Badge className={article.categoryColor}>{article.category}</Badge>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors leading-snug mb-3 line-clamp-3">
                  {article.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-900 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
