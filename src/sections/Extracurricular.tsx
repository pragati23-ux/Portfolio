import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface ExtracurricularProps {
  isDark: boolean;
}

export function Extracurricular({ isDark }: ExtracurricularProps) {
  const activities = [
    {
      title: 'UI/UX Designer',
      organization: 'Google Developer Groups (GDG)',
      description:
        'Designing user interfaces and user experiences for web applications. Contributing to open-source design projects and mentoring junior designers.',
      icon: '✨',
    },
    {
      title: 'Hackathon Organizer',
      organization: 'SprintHacks 3.0',
      description:
        'Organizing and hosting hackathon events to promote innovation and collaboration among developers. Managing logistics, judging, and community engagement.',
      icon: '🎯',
    },
    {
      title: 'Active Community Member',
      organization: 'Tech Communities',
      description:
        'Actively participating in tech meetups, seminars, and online communities. Sharing knowledge and staying updated with the latest technologies and best practices.',
      icon: '🤝',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="extracurricular"
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
              Beyond Coding
            </h2>
            <p className={`text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Extracurricular Activities & Community Involvement
            </p>
            <div className={`h-1 w-20 mx-auto rounded mt-4 ${
              isDark ? 'bg-blue-400' : 'bg-blue-600'
            }`} />
          </div>

          {/* Activities Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`p-6 rounded-lg text-center transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800 border border-gray-700 hover:border-blue-400'
                    : 'bg-gray-50 border border-gray-200 hover:border-blue-600'
                }`}
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{activity.icon}</div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {activity.title}
                </h3>

                {/* Organization */}
                <p className={`text-sm font-semibold mb-3 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {activity.organization}
                </p>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className={`mt-12 p-8 rounded-lg border-l-4 ${
              isDark
                ? 'bg-gray-800 border-green-400'
                : 'bg-gray-50 border-green-600'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <Zap
                className={isDark ? 'text-green-400' : 'text-green-600'}
                size={28}
              />
              <h4 className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                What I Bring to the Table
              </h4>
            </div>
            <p className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Beyond technical expertise, I bring passion for innovation, leadership
              in community initiatives, and a commitment to continuous learning. I
              believe in collaborative problem-solving and am always eager to mentor
              others while staying at the forefront of web development trends.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
