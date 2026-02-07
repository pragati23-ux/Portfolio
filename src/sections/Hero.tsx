import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.h1
              variants={itemVariants}
              className={`text-5xl md:text-6xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Hi, I'm{' '}
              <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Pragati Singh
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className={`text-2xl md:text-3xl font-semibold mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Full Stack Web Developer (MERN)
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className={`text-lg mb-8 leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              I'm a passionate B.Tech CS student specializing in building
              scalable web applications using the MERN stack. I love creating
              elegant solutions to complex problems and turning ideas into
              reality through clean, efficient code.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                View Projects
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="https://github.com/pragati23-ux/resume"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-colors ${
                  isDark
                    ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 mt-8"
            >
              <a
                href="https://github.com/pragati23-ux"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-gray-400 hover:text-blue-400'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pragati-singh-35bb1b286/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-gray-400 hover:text-blue-400'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/PragatiSin62718"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-gray-400 hover:text-blue-400'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Twitter
              </a>
              <a
                href="mailto:pragatisingh56786@gmail.com"
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-gray-400 hover:text-blue-400'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Email
              </a>
            </motion.div>
          </div>

          {/* Right Side - Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center pt-8 md:pt-0"
          >
            <div className="relative">
              {/* Glow Effect Background */}
              <div className={`absolute inset-0 rounded-full blur-2xl opacity-40 ${
                isDark ? 'bg-blue-500' : 'bg-blue-400'
              }`} />
              
              {/* Profile Image Container */}
              <div className={`relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 shadow-2xl ${
                isDark 
                  ? 'border-blue-400 shadow-blue-900/50' 
                  : 'border-blue-300 shadow-blue-300/50'
              }`}>
                <img 
                  src="/profile.jpg" 
                  alt="Pragati Singh - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%233B82F6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="white"%3EProfile Photo%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
