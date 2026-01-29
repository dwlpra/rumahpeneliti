import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/footer';
import { BlogDetail } from '@/app/components/BlogDetail';
import { RelatedArticles } from '@/app/components/RelatedArticles';
import { getArticleBySlug, getRelatedArticles } from '@/app/utils/articles';
import { Button } from '@/app/components/ui/button';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const article = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = article ? getRelatedArticles(article.id) : [];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle 404
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Artikel Tidak Ditemukan</h1>
            <p className="text-gray-600 mb-8">Maaf, artikel yang Anda cari tidak tersedia.</p>
            <Button onClick={() => navigate('/')} className="gap-2">
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-blue-900 hover:text-blue-700 flex items-center gap-1">
              <Home className="w-4 h-4" />
              Beranda
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{article.category}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2 text-blue-900 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>
        </div>
      </div>

      {/* Content */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <BlogDetail article={article} />
        <RelatedArticles articles={relatedArticles} />
      </main>

      <Footer />
    </div>
  );
}
