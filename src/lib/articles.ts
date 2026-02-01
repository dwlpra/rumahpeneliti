import articlesData from '@/data/articles.json'
import type { Article } from '@/types/article'

const articles = articlesData as Article[]

export function getAllArticles(): Article[] {
  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id)
}

export function getFeaturedArticles(count: number = 5): Article[] {
  return articles.slice(0, count)
}

export function getRelatedArticles(article: Article): Article[] {
  if (!article.relatedArticles) return []
  return article.relatedArticles
    .map((id) => getArticleById(id))
    .filter((a): a is Article => a !== undefined)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category)
}

export function getAllCategories(): string[] {
  const categories = new Set(articles.map((article) => article.category))
  return Array.from(categories)
}

export function getAllSlugs(): string[] {
  return articles.map((article) => article.slug)
}
