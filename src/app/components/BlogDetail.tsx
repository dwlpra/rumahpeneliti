import { Clock, Eye, Calendar, User, Share2, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import type { Article, ArticleContent } from '@/app/types/article';
import { motion } from 'motion/react';

interface BlogDetailProps {
  article: Article;
}

export function BlogDetail({ article }: BlogDetailProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = article.title;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  const renderContent = (content: ArticleContent[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          const Tag = item.level === 2 ? 'h2' : 'h3';
          return (
            <Tag
              key={index}
              className={`font-bold text-gray-900 mt-8 mb-4 ${
                item.level === 2 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
              }`}
            >
              {item.content}
            </Tag>
          );

        case 'paragraph':
          return (
            <p key={index} className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
              {item.content}
            </p>
          );

        case 'list':
          return (
            <ul key={index} className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              {Array.isArray(item.content) ? (
                item.content.map((listItem, i) => (
                  <li key={i} className="text-base md:text-lg">
                    {listItem}
                  </li>
                ))
              ) : (
                <li className="text-base md:text-lg">{item.content}</li>
              )}
            </ul>
          );

        case 'quote':
          return (
            <blockquote
              key={index}
              className="border-l-4 border-blue-900 pl-4 py-2 my-6 bg-blue-50 italic text-gray-800 text-base md:text-lg"
            >
              "{item.content}"
            </blockquote>
          );

        case 'code':
          return (
            <pre
              key={index}
              className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm"
            >
              <code>{item.content}</code>
            </pre>
          );

        default:
          return null;
      }
    });
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <Badge className={article.categoryColor}>{article.category}</Badge>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          {article.title}
        </motion.h1>

        {/* Excerpt */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed"
        >
          {article.excerpt}
        </motion.p>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-600 mb-6"
        >
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 md:w-5 md:h-5" />
            <span>{article.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
            <span>{article.publishedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            <span>{article.readTime}</span>
          </div>
          {article.views && (
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 md:w-5 md:h-5" />
              <span>{article.views} dilihat</span>
            </div>
          )}
        </motion.div>

        {/* Share Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share:
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareLinks.facebook, '_blank')}
            className="gap-2"
          >
            <Facebook className="w-4 h-4" />
            <span className="hidden sm:inline">Facebook</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareLinks.twitter, '_blank')}
            className="gap-2"
          >
            <Twitter className="w-4 h-4" />
            <span className="hidden sm:inline">Twitter</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareLinks.linkedin, '_blank')}
            className="gap-2"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Button>
          <Button variant="outline" size="sm" onClick={copyLink} className="gap-2">
            <Link2 className="w-4 h-4" />
            <span className="hidden sm:inline">Copy Link</span>
          </Button>
        </motion.div>
      </div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
          >
            #{tag}
          </span>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="prose prose-lg max-w-none"
      >
        {renderContent(article.content)}
      </motion.div>

      {/* Author Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200"
      >
        <div className="flex items-start gap-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-900/10"
          />
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{article.author.name}</h3>
            <p className="text-gray-600 text-sm">{article.author.role}</p>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
