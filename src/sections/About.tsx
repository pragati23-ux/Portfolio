import { motion } from 'framer-motion';

interface AboutProps {
  isDark: boolean;
}

export function About({ isDark }: AboutProps) {
  return (
    <section
      id="about"
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
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              About Me
            </h2>
            <div className={`h-1 w-20 mx-auto rounded ${
              isDark ? 'bg-blue-400' : 'bg-blue-600'
            }`} />
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a passionate B.Tech Computer Science student
                at KIET Group of Institutions with a strong drive to master
                full-stack development. My journey in web development has been
                marked by continuous learning and practical application of
                concepts.
              </p>

              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                With hands-on experience in the MERN stack, I've developed a
                deep understanding of building scalable, efficient web
                applications. I'm particularly interested in creating solutions
                that solve real-world problems while maintaining clean,
                maintainable code.
              </p>

              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Beyond coding, I'm an active participant in tech communities,
                have organized hackathons.
                 I believe in the power of collaborative learning and
                sharing knowledge with the developer community.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className={`p-6 rounded-lg ${
                isDark
                  ? 'bg-gray-900 border border-gray-700'
                  : 'bg-white border border-gray-200'
              }`}>
                <div className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    B.Tech CS
                  </div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Degree
                  </p>
              </div>

              <div className={`p-6 rounded-lg ${
                isDark
                  ? 'bg-gray-900 border border-gray-700'
                  : 'bg-white border border-gray-200'
              }`}>
                <div className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Class XII
                </div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Higher Secondary
                </p>
              </div>

              <div className={`p-6 rounded-lg ${
                isDark
                  ? 'bg-gray-900 border border-gray-700'
                  : 'bg-white border border-gray-200'
              }`}>
                <div className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Class X
                </div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Secondary Education
                </p>
              </div>

              <div className={`p-6 rounded-lg ${
                isDark
                  ? 'bg-gray-900 border border-gray-700'
                  : 'bg-white border border-gray-200'
              }`}>
                <div className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  2023–2027
                </div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Study Period
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
