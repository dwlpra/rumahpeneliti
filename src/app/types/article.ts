export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: ArticleContent[];
  image: string;
  category: string;
  categoryColor: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedDate: string;
  readTime: string;
  views?: string;
  tags: string[];
  relatedArticles?: string[]; // article IDs
}

export type ContentType = 'heading' | 'paragraph' | 'list' | 'quote' | 'code';

export interface ArticleContent {
  type: ContentType;
  content: string | string[];
  level?: number; // for heading (h2, h3, etc.)
}

export interface ArticleCard {
  title: string;
  image: string;
  category?: string;
  readTime?: string;
}
