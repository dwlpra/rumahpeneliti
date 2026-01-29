import { Navbar } from '@/app/components/Navbar';
import { HeroSection } from '@/app/components/HeroSection';
import { ProgramsBanner } from '@/app/components/ProgramBanner';
import { Statistics } from '@/app/components/Statistics';
import { ArticlesGrid } from '@/app/components/ArticlesGrid';
import { FeaturedResearchers } from '@/app/components/FeaturedResearchers';
import { Newsletter } from '@/app/components/Newsletter';
import { CTASection } from '@/app/components/CtaSection';
import { Footer } from '@/app/components/footer';

function App() {
  // Hero Section Data
  const mainArticle = {
    image: 'https://images.unsplash.com/photo-1758270704840-0ac001215b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBkaXNjdXNzaW5nJTIwY2FtcHVzJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3Njk2NjA0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Opini Mahasiswa',
    title: 'Mengapa Kolaborasi Lintas Disiplin Adalah Kunci Bertahan di Era AI?',
    excerpt: 'Refleksi mahasiswa pascasarjana tentang pentingnya keluar dari silo keilmuan dan membangun jejaring yang luas.',
    readTime: '6 menit baca',
    views: '2.5K'
  };

  const trendingArticles = [
    {
      title: '5 Tools AI Etis untuk Membantu Literature Review Tesis Anda',
      image: 'https://images.unsplash.com/photo-1753613648109-791ed9c85b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHJlc2VhcmNoZXIlMjB0ZWNobm9sb2d5JTIwbGFwdG9wfGVufDF8fHx8MTc2OTY2MDQ2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Tips Akademik',
      readTime: '5 menit'
    },
    {
      title: 'Riset Terbaru: Dampak Media Sosial pada Kesehatan Mental Gen Z di Jakarta',
      image: 'https://images.unsplash.com/photo-1523582407565-efee5cf4a353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG1lbnRhbCUyMGhlYWx0aCUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzY5NjYwNDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Kesehatan',
      readTime: '7 menit'
    }
  ];

  // Latest Articles Data
  const latestArticles = [
    {
      image: 'https://images.unsplash.com/photo-1766297248122-5957c51b1f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMHJlc2VhcmNoJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3Njk2NjA0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Sains & Teknologi',
      categoryColor: 'bg-blue-600 text-white hover:bg-blue-700',
      title: 'Inovasi Terbaru: Mahasiswa ITB Ciptakan Biosensor Deteksi Polusi Air',
      excerpt: 'Tim peneliti muda mengembangkan sensor berbasis bakteria untuk mendeteksi kontaminan logam berat dalam air minum.',
      readTime: '5 menit baca'
    },
    {
      image: 'https://images.unsplash.com/photo-1758270705290-62b6294dd044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2OTYyMDE1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Tips Akademik',
      categoryColor: 'bg-teal-600 text-white hover:bg-teal-700',
      title: 'Panduan Lengkap: Cara Menulis Proposal Penelitian yang Lolos Funding',
      excerpt: 'Strategi dan tips dari reviewer berpengalaman untuk menyusun proposal penelitian yang menarik dan kompetitif.',
      readTime: '8 menit baca'
    },
    {
      image: 'https://images.unsplash.com/photo-1758685848587-7bc7487b6e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcmVzZWFyY2hlciUyMHNjaWVuY2UlMjB0ZWFtfGVufDF8fHx8MTc2OTY2MDQ3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Riset Sosial',
      categoryColor: 'bg-yellow-600 text-white hover:bg-yellow-700',
      title: 'Studi Kasus: Mengapa Program Literasi Digital Gagal di Desa?',
      excerpt: 'Analisis mendalam tentang tantangan implementasi program digital di komunitas rural Indonesia.',
      readTime: '10 menit baca'
    },
    {
      image: 'https://images.unsplash.com/photo-1758685848894-1da9f8c151d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGFjYWRlbWljJTIwd3JpdGluZ3xlbnwxfHx8fDE3Njk2NjA0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Kabar Riset',
      categoryColor: 'bg-purple-600 text-white hover:bg-purple-700',
      title: 'Publikasi Internasional: 3 Peneliti Indonesia Masuk Top 2% Scientists',
      excerpt: 'Prestasi membanggakan peneliti Indonesia dalam daftar ilmuwan paling berpengaruh versi Stanford University.',
      readTime: '4 menit baca'
    },
    {
      image: 'https://images.unsplash.com/photo-1758270704763-22072a90d3b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY29tbXVuaXR5JTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3Njk2NjA0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Opini',
      categoryColor: 'bg-pink-600 text-white hover:bg-pink-700',
      title: 'Dilema Mahasiswa S3: Antara Passion Riset dan Tuntutan Publikasi',
      excerpt: 'Pengalaman personal tentang tekanan akademik dan pentingnya menjaga keseimbangan mental di dunia riset.',
      readTime: '6 menit baca'
    },
    {
      image: 'https://images.unsplash.com/photo-1523582407565-efee5cf4a353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG1lbnRhbCUyMGhlYWx0aCUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzY5NjYwNDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Kesehatan',
      categoryColor: 'bg-green-600 text-white hover:bg-green-700',
      title: 'Burnout Akademik: Mengenali Tanda dan Cara Mengatasinya',
      excerpt: 'Panduan praktis untuk peneliti muda mengelola stres dan menjaga kesehatan mental selama menjalani riset.',
      readTime: '7 menit baca'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section id="beranda">
        <HeroSection mainArticle={mainArticle} trendingArticles={trendingArticles} />
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

export default App;
