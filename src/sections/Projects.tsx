import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
}

export function Projects({ isDark }: ProjectsProps) {
  const projects: Project[] = [
    {
      title: 'E-Commerce Website',
      description:
        'A full-featured e-commerce platform built with MERN stack featuring user authentication, product listing, shopping cart functionality, and secure checkout process with integrated REST APIs.',
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Stripe API',
        'Redux',
      ],
      githubLink: 'https://github.com/pragati23-ux/Shopex',
      liveLink: '#',
      image: new URL('../assets/projects/ecommerce-preview.png', import.meta.url).href,
    },
    {
      title: 'Medical Appointment System',
      description:
        'A comprehensive healthcare platform enabling patients to search for doctors, book appointments, and manage their medical records. Features secure authentication, real-time notifications, and admin dashboard.',
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Socket.io',
        'JWT',
      ],
      githubLink: 'https://github.com/pragati23-ux/Medical-Appointment-System',
      liveLink: '#',
      image: new URL('../assets/projects/medical-preview.png', import.meta.url).href,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
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
              Featured Projects
            </h2>
            <div className={`h-1 w-20 mx-auto rounded ${
              isDark ? 'bg-blue-400' : 'bg-blue-600'
            }`} />
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-900 border border-gray-700'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {/* Project Image Container */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-800 rounded-t-lg">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="text-white text-lg font-semibold"
                    >
                      View Project
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Header */}
                <div className={`p-6 pb-0 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className={`leading-relaxed mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className={`text-sm font-semibold mb-3 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDark
                              ? 'bg-blue-900 text-blue-200'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-300 dark:border-gray-600">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                        isDark
                          ? 'bg-gray-700 text-white hover:bg-blue-600'
                          : 'bg-gray-200 text-gray-900 hover:bg-blue-600 hover:text-white'
                      }`}
                    >
                      <Github size={18} />
                      GitHub
                    </motion.a>

                    {project.liveLink && project.liveLink !== '#' && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                          isDark
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
