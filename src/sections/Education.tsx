import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';

interface EducationProps {
  isDark: boolean;
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  percentage?: string;
}

export function Education({ isDark }: EducationProps) {
  const education: EducationItem[] = [
    {
      degree: 'B.Tech CS',
      institution: 'KIET Group of Institutions',
      period: '2023 – 2027',
    },
    {
      degree: 'Class XII',
      institution: 'Central Board of Secondary Education (CBSE)',
      period: 'Completed',
      percentage: '90%',
    },
    {
      degree: 'Class X',
      institution: 'Central Board of Secondary Education (CBSE)',
      period: 'Completed',
      percentage: '91.5%',
    },
  ];

  const certifications = [
    {
      name: 'IBM SkillsBuild – Web Development Fundamentals',
      issuer: 'IBM',
    },
    {
      name: 'MongoDB Atlas – Introduction to MongoDB',
      issuer: 'MongoDB',
    },
  ];

  return (
    <section
      id="education"
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
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
              Education & Certifications
            </h2>
            <div className={`h-1 w-20 mx-auto rounded ${
              isDark ? 'bg-blue-400' : 'bg-blue-600'
            }`} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-lg ${
                      isDark
                        ? 'bg-gray-900 border border-gray-700'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        isDark ? 'bg-blue-900' : 'bg-blue-100'
                      }`}>
                        <BookOpen
                          className={isDark ? 'text-blue-400' : 'text-blue-600'}
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {edu.degree}
                        </h4>
                        <p className={`font-semibold ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {edu.institution}
                        </p>
                        <p className={`text-sm ${
                          isDark ? 'text-gray-500' : 'text-gray-500'
                        } mb-2`}>
                          {edu.period}
                        </p>
                        {edu.percentage && (
                          <p className={`text-sm font-semibold ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            Percentage: {edu.percentage}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Certifications
              </h3>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-lg ${
                      isDark
                        ? 'bg-gray-900 border border-gray-700'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        isDark ? 'bg-green-900' : 'bg-green-100'
                      }`}>
                        <Award
                          className={isDark ? 'text-green-400' : 'text-green-600'}
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {cert.name}
                        </h4>
                        <p className={`font-semibold ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
