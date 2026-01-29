import articles from '@/data/articles.json';
import type { Article } from '@/app/types/article';

const typedArticles = articles as Article[];

export function getArticleBySlug(slug: string): Article | undefined {
  return typedArticles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return typedArticles.filter((article) => article.category === category);
}

export function getRelatedArticles(currentArticleId: string): Article[] {
  const article = typedArticles.find((a) => a.id === currentArticleId);
  if (!article || !article.relatedArticles) {
    // Fallback: return articles from same category
    return typedArticles
      .filter((a) => a.id !== currentArticleId && a.category === article?.category)
      .slice(0, 3);
  }

  return article.relatedArticles
    .map((id) => typedArticles.find((a) => a.id === id))
    .filter((a): a is Article => a !== undefined)
    .slice(0, 3);
}

export function getAllArticles(): Article[] {
  return typedArticles;
}

export function getFeaturedArticles(): Article[] {
  return typedArticles.slice(0, 3);
}

export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase();
  return typedArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
