import { Navbar } from '@/app/components/Navbar';
import { HeroSection } from '@/app/components/HeroSection';
import { ProgramsBanner } from '@/app/components/ProgramBanner';
import { Statistics } from '@/app/components/Statistics';
import { ArticlesGrid } from '@/app/components/ArticlesGrid';
import { FeaturedResearchers } from '@/app/components/FeaturedResearchers';
import { Newsletter } from '@/app/components/Newsletter';
import { CTASection } from '@/app/components/CtaSection';
import { Footer } from '@/app/components/footer';
import { getFeaturedArticles, getAllArticles } from '@/app/utils/articles';
import type { Article } from '@/app/types/article';

export function HomePage() {
  // Get data from articles JSON
  const allArticles = getAllArticles();

  // Main article (first one)
  const mainArticle = allArticles[0];

  // Trending articles (next 5)
  const trendingArticles = allArticles.slice(1, 6).map((article: Article) => ({
    title: article.title,
    image: article.image,
    category: article.category,
    readTime: article.readTime,
    slug: article.slug
  }));

  // Latest articles (all with proper format for ArticlesGrid)
  const latestArticles = allArticles.map((article: Article) => ({
    image: article.image,
    category: article.category,
    categoryColor: article.categoryColor,
    title: article.title,
    excerpt: article.excerpt,
    readTime: article.readTime,
    slug: article.slug
  }));

  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section id="beranda">
        <HeroSection mainArticle={{
          image: mainArticle.image,
          category: mainArticle.category,
          title: mainArticle.title,
          excerpt: mainArticle.excerpt,
          readTime: mainArticle.readTime,
          views: mainArticle.views
        }} trendingArticles={trendingArticles} />
      </section>

      {/* Statistics Section */}
      <section id="statistik">
        <Statistics />
      </section>

      {/* Programs Banner */}
      <section id="program">
        <ProgramsBanner />
      </section>

      {/* Featured Researchers */}
      <section id="kontributor">
        <FeaturedResearchers />
      </section>

      {/* Articles Grid */}
      <section id="artikel">
        <ArticlesGrid articles={latestArticles} />
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* CTA Section */}
      <section id="tentang">
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
