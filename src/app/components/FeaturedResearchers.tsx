import { Quote, ExternalLink } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';

interface Researcher {
  name: string;
  role: string;
  institution: string;
  avatar: string;
  quote: string;
  topics: string[];
  articles: number;
}

const featuredResearchers: Researcher[] = [
  {
    name: 'Dr. Sarah Putri',
    role: 'Dosen & Peneliti',
    institution: 'Universitas Indonesia',
    avatar: 'https://i.pravatar.cc/150?img=1',
    quote: 'Rumah Peneliti membantu saya menemukan kolaborator lintas disiplin untuk riset terbaru saya tentang AI dan kesehatan.',
    topics: ['AI & Kesehatan', 'Data Science'],
    articles: 24
  },
  {
    name: 'Ahmad Fauzi, M.Si',
    role: 'Mahasiswa S3',
    institution: 'ITB',
    avatar: 'https://i.pravatar.cc/150?img=3',
    quote: 'Berkat artikel beasiswa di sini, saya berhasil tembus LPDP dan sekarang sedang S3 di Jepang.',
    topics: ['Material Science', 'Beasiswa'],
    articles: 18
  },
  {
    name: 'Dr. Budi Santoso',
    role: 'Postdoctoral Researcher',
    institution: 'Institut Teknologi Bandung',
    avatar: 'https://i.pravatar.cc/150?img=5',
    quote: 'Platform yang tepat untuk berbagi ilmu dan menginspirasi peneliti muda Indonesia.',
    topics: ['Nanoteknologi', 'Akademik'],
    articles: 35
  }
];

export function FeaturedResearchers() {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 text-xs sm:text-sm">
            Kontributor Unggulan
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Temukan Peneliti & Kolaborator
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Pelajari dari pengalaman peneliti yang telah berhasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredResearchers.map((researcher, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-900/20 mb-3 sm:mb-4" />

              {/* Quote */}
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed line-clamp-4 sm:line-clamp-none">
                "{researcher.quote}"
              </p>

              {/* Profile */}
              <div className="flex items-start gap-3 sm:gap-4">
                <img
                  src={researcher.avatar}
                  alt={researcher.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-blue-900/10 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors text-sm sm:text-base truncate">
                    {researcher.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">{researcher.role}</p>
                  <p className="text-xs sm:text-sm text-blue-900 font-medium truncate">{researcher.institution}</p>
                </div>
              </div>

              {/* Topics */}
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {researcher.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-white text-gray-700 text-[10px] sm:text-xs rounded-full border border-gray-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600">
                  <span className="font-semibold text-blue-900">{researcher.articles}</span> artikel
                </span>
                <a
                  href="#"
                  className="text-blue-900 hover:text-blue-700 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span className="hidden sm:inline">Lihat Profil</span>
                  <span className="sm:hidden">Profil</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12 px-2">
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            Ingin menjadi kontributor dan profil Anda ditampilkan?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-800 hover:to-blue-600 transition-all text-sm sm:text-base"
          >
            Mulai Menulis
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
