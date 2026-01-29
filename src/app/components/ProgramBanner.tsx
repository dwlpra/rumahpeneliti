import { PenTool, DollarSign, Users, GraduationCap } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { motion } from 'motion/react';

interface ProgramCard {
  icon: React.ReactNode;
  title: string;
  iconBg: string;
}

const programs: ProgramCard[] = [
  {
    icon: <PenTool className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Bootcamp: Menembus Jurnal Scopus Q1',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },
  {
    icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Workshop: Strategi Tembus Hibah Riset',
    iconBg: 'bg-gradient-to-br from-teal-500 to-teal-600'
  },
  {
    icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Panduan Beasiswa S2/S3 Luar Negeri',
    iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600'
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Mentorship Eksklusif Profesor & Praktisi',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-yellow-600'
  }
];

export function ProgramsBanner() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
            Akselerasi Karier Peneliti Anda
          </h2>
          <motion.p
            className="text-lg sm:text-xl text-blue-200"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Segera Hadir! 🚀
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-xl sm:rounded-2xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-0 right-0 z-10 p-2 sm:p-3">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 shadow-sm">
                    SEGERA HADIR
                  </Badge>
                </motion.div>
              </div>

              <div className="p-4 pt-6 sm:p-6 sm:pt-8 text-center">
                {/* Icon - Centered with hover animation */}
                <motion.div
                  className={`${program.iconBg} w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto transition-transform`}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {program.icon}
                </motion.div>

                {/* Title - Centered */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {program.title}
                </h3>

                {/* Coming Soon Label - Centered */}
                <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
                  Daftar sekarang untuk notifikasi peluncuran
                </div>
              </div>

              {/* Decorative gradient */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
