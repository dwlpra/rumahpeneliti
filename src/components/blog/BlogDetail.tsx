'use client'

import Image from 'next/image'
import { Share2, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Article, ArticleContent } from '@/types/article'

interface BlogDetailProps {
  article: Article
  showHeader?: boolean
}

export function BlogDetail({ article, showHeader = true }: BlogDetailProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = article.title

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const renderContent = (content: ArticleContent[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          const HeadingTag = item.level === 2 ? 'h2' : 'h3'
          return (
            <HeadingTag
              key={index}
              className={`font-bold text-gray-900 mt-8 mb-4 ${
                item.level === 2 ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
              }`}
            >
              {item.content as string}
            </HeadingTag>
          )

        case 'paragraph':
          return (
            <p key={index} className="text-gray-700 leading-relaxed mb-4 text-base">
              {item.content as string}
            </p>
          )

        case 'list':
          return (
            <ul key={index} className="list-disc list-outside ml-6 mb-4 space-y-2 text-gray-700">
              {Array.isArray(item.content) ? (
                item.content.map((listItem, i) => (
                  <li key={i} className="text-base leading-relaxed">
                    {listItem}
                  </li>
                ))
              ) : (
                <li className="text-base">{item.content}</li>
              )}
            </ul>
          )

        case 'quote':
          return (
            <blockquote
              key={index}
              className="border-l-4 border-blue-600 pl-4 py-2 my-6 bg-blue-50 text-gray-700 text-base italic"
            >
              &ldquo;{item.content as string}&rdquo;
            </blockquote>
          )

        case 'code':
          return (
            <pre
              key={index}
              className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm"
            >
              <code>{item.content as string}</code>
            </pre>
          )

        default:
          return null
      }
    })
  }

  return (
    <div className="article-content">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Article Content */}
      <div className="prose-content">
        {renderContent(article.content)}
      </div>

      {/* Share Section */}
      <div className="mt-10 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Bagikan:
          </span>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(shareLinks.facebook, '_blank')}
              className="gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
            >
              <Facebook className="w-4 h-4" />
              <span className="hidden sm:inline">Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(shareLinks.twitter, '_blank')}
              className="gap-2 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200"
            >
              <Twitter className="w-4 h-4" />
              <span className="hidden sm:inline">Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(shareLinks.linkedin, '_blank')}
              className="gap-2 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={copyLink} 
              className="gap-2 hover:bg-gray-100"
            >
              <Link2 className="w-4 h-4" />
              <span className="hidden sm:inline">Salin Link</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Author Box */}
      <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-100">
        <div className="flex items-center gap-4">
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="text-sm text-gray-500 mb-0.5">Ditulis oleh</p>
            <h3 className="font-semibold text-gray-900">{article.author.name}</h3>
            <p className="text-gray-600 text-sm">{article.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
