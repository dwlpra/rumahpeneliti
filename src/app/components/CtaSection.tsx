import { Send, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-600 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
          <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
          Jangan Sekadar Membaca, Jadilah Bagian dari Gerakan Ini.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Rumah Peneliti adalah wadah milik bersama. Kirim tulisanmu, bagikan idemu, dan bantu membangun ekosistem riset yang lebih kuat.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
          <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-900 font-semibold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto">
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            Kirim Tulisan Sekarang
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 w-full sm:w-auto">
            Pelajari Lebih Lanjut
          </button>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-white/80 text-xs sm:text-sm px-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full" />
            <span>500+ Artikel Berkualitas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full" />
            <span>200+ Kontributor Aktif</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full" />
            <span>50+ Institusi Terwakili</span>
          </div>
        </div>
      </div>
    </section>
  );
}
