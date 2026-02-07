import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceProps {
  isDark: boolean;
}

export function Experience({ isDark }: ExperienceProps) {
  const experiences = [
    {
      title: 'Full Stack Web Developer',
      company: 'MLSA KIET',
      period: 'Completed',
      description:
        'Developing full-cycle web applications using MERN stack. Working on real-world projects with hands-on experience in backend development, API design, database management, and frontend optimization.',
      highlights: [
        'MERN Stack Development',
        'Real-world Project Experience',
        'Full-cycle Web Development'
        
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Experience
            </h2>
            <div className={`h-1 w-20 mx-auto rounded ${
              isDark ? 'bg-blue-400' : 'bg-blue-600'
            }`} />
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg border-l-4 ${
                  isDark
                    ? 'bg-gray-800 border-blue-400'
                    : 'bg-gray-50 border-blue-600'
                }`}
              >
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase
                        className={isDark ? 'text-blue-400' : 'text-blue-600'}
                        size={24}
                      />
                      <h3 className={`text-2xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h3>
                    </div>
                    <p className={`text-lg font-semibold ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Calendar
                      className={isDark ? 'text-blue-400' : 'text-blue-600'}
                      size={18}
                    />
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className={`mb-4 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDark
                          ? 'bg-blue-900 text-blue-200'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
