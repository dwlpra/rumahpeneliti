export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: ArticleContent[]
  image: string
  category: string
  categoryColor: string
  author: Author
  publishedDate: string
  readTime: string
  views?: string
  tags: string[]
  relatedArticles?: string[]
}

export interface Author {
  name: string
  avatar: string
  role: string
}

export type ContentType = 'heading' | 'paragraph' | 'list' | 'quote' | 'code'

export interface ArticleContent {
  type: ContentType
  content: string | string[]
  level?: number
}

export interface ArticleCard {
  title: string
  image: string
  category?: string
  categoryColor?: string
  excerpt?: string
  readTime?: string
  slug: string
  views?: string
}
