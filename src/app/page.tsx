import {
  HeroHeadline,
  HeroSection,
  ProgramsShowcase,
  EventsSection,
  FeaturedResearchers,
  ArticlesGrid,
  RumahJurnalSection,
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
      {/* 1. Hero dengan Value Proposition - Hook pertama */}
      <HeroHeadline />
      
      {/* 2. Featured Articles - Preview konten berkualitas */}
      <HeroSection mainArticle={heroArticle} trendingArticles={trendingArticles} />
      
      {/* 3. Programs Showcase - Apa yang kami tawarkan */}
      <ProgramsShowcase />
      
      {/* 4. Events - Aktivitas & komunitas (FOMO trigger) */}
      <EventsSection />
      
      {/* 5. Featured Researchers - Social proof & testimonial */}
      <FeaturedResearchers />
      
      {/* 6. Latest Articles Grid - Lebih banyak konten */}
      <ArticlesGrid articles={latestArticles} />
      
      {/* 7. Rumah Jurnal - Sub-platform highlight */}
      <RumahJurnalSection />
      
      {/* 8. CTA & Newsletter - Final conversion */}
      <CTASection />
    </>
  )
}
