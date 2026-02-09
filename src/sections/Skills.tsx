import { motion } from 'framer-motion';

interface SkillsProps {
  isDark: boolean;
}

export function Skills({ isDark }: SkillsProps) {
  const skillCategories = [
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js','Tailwind CSS'],
    },
    {
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'NoSQL', 'MySQL', 'REST APIs','Cloudinary','Multer','Authentication','Authorisation','JWT'],
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'C++', 'TypeScript'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Redux', 'GSAP', 'Nginx'],
    },
    {
      title: 'Data & Algorithms',
      skills: ['Data Structures', 'Algorithms', 'DSA', 'Database Management'],
    },
    {
      title: 'Machine Learning',
      skills: ['ML Basics', 'Python', 'Pandas', 'Numpy','Matplotlib'],
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
      id="skills"
      className={`py-20 transition-colors duration-300`}
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
              Skills & Expertise
            </h2>
            <div className={`h-1 w-20 mx-auto rounded ${
              isDark ? 'bg-blue-400' : 'bg-blue-600'
            }`} />
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg ${
                  isDark
                    ? 'bg-gray-800 border border-gray-700 hover:border-blue-400'
                    : 'bg-gray-50 border border-gray-200 hover:border-blue-600'
                } transition-all duration-300 hover:shadow-lg`}
              >
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        isDark
                          ? 'bg-gray-700 text-gray-200 hover:bg-blue-600 hover:text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
