import { motion } from 'framer-motion';

interface AboutProps {
  isDark: boolean;
}

export function About({ isDark }: AboutProps) {
  return (
    <section
      id="about"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Main Content - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <p className={`text-lg leading-relaxed mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a passionate B.Tech Computer Science student
                at KIET Group of Institutions with a strong drive to master
                full-stack development. My journey in web development has been
                marked by continuous learning and practical application of
                concepts.
              </p>

              <p className={`text-lg leading-relaxed mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                With hands-on experience in the MERN stack, I've developed a
                deep understanding of building scalable, efficient web
                applications. I'm particularly interested in creating solutions
                that solve real-world problems while maintaining clean,
                maintainable code.
              </p>

              <p className={`text-lg leading-relaxed mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Beyond coding, I'm an active participant in tech communities,
                have organized hackathons, and contribute to open-source
                projects. I believe in the power of collaborative learning and
                sharing knowledge with the developer community.
              </p>
            </motion.div>

            {/* Highlights - Takes 1 column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className={`p-6 rounded-lg backdrop-blur-sm ${
                isDark
                  ? 'bg-gray-900/50 border border-gray-700'
                  : 'bg-white/50 border border-gray-200'
              }`}>
                <h3 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Focus
                </h3>
                <p className={`text-lg font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Full Stack Development
                </p>
              </div>

              <div className={`p-6 rounded-lg backdrop-blur-sm ${
                isDark
                  ? 'bg-gray-900/50 border border-gray-700'
                  : 'bg-white/50 border border-gray-200'
              }`}>
                <h3 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Tech Stack
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  MERN (MongoDB, Express, React, Node.js)
                </p>
              </div>

              <div className={`p-6 rounded-lg backdrop-blur-sm ${
                isDark
                  ? 'bg-gray-900/50 border border-gray-700'
                  : 'bg-white/50 border border-gray-200'
              }`}>
                <h3 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Passion
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Building scalable solutions & Open Source
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
