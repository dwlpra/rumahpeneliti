import {
  HeroSection,
  Statistics,
  ProgramsBanner,
  FeaturedResearchers,
  ArticlesGrid,
  Newsletter,
  CTASection
} from '@/components'
import { getAllArticles } from '@/lib/articles'
import type { ArticleCard } from '@/types/article'

export default function HomePage() {
  const allArticles = getAllArticles()
  
  const mainArticle = allArticles[0]
  
  const trendingArticles: ArticleCard[] = allArticles.slice(1, 6).map((article) => ({
    title: article.title,
    image: article.image,
    category: article.category,
    readTime: article.readTime,
    slug: article.slug
  }))
  
  const latestArticles: ArticleCard[] = allArticles.map((article) => ({
    title: article.title,
    image: article.image,
    category: article.category,
    categoryColor: article.categoryColor,
    excerpt: article.excerpt,
    readTime: article.readTime,
    slug: article.slug
  }))

  const heroArticle: ArticleCard = {
    title: mainArticle.title,
    image: mainArticle.image,
    category: mainArticle.category,
    excerpt: mainArticle.excerpt,
    readTime: mainArticle.readTime,
    views: mainArticle.views,
    slug: mainArticle.slug
  }

  return (
    <>
      <HeroSection mainArticle={heroArticle} trendingArticles={trendingArticles} />
      <Statistics />
      <ProgramsBanner />
      <FeaturedResearchers />
      <ArticlesGrid articles={latestArticles} />
      <Newsletter />
      <CTASection />
    </>
  )
}
