import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const headingClass = isDark ? 'text-white' : 'text-gray-900';
  const subTextClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const linkClass = isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-700 hover:text-blue-500';

  return (
    <footer className={`w-full transition-colors duration-300 ${isDark ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-700'} border-t`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold ${headingClass} mb-2`}>
              <span className="text-blue-400">PS</span>.
            </h3>
            <p className={`${subTextClass} text-sm`}>
              Full Stack Web Developer | MERN Stack Enthusiast
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className={`${headingClass} font-semibold mb-4`}>Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`${linkClass} transition-colors`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={`${headingClass} font-semibold mb-4`}>Follow Me</h4>
            <div className="flex gap-4">
              {[
                { name: 'GitHub', url: 'https://github.com/pragati23-ux' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pragati-singh-35bb1b286/' },
                { name: 'Twitter', url: 'https://x.com/PragatiSin62718' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`${linkClass} transition-colors`}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`flex flex-col md:flex-row justify-between items-center gap-4 text-sm ${subTextClass}`}
        >
          <p>
            &copy; {currentYear} Pragati Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            Made with
            <Heart size={16} className="text-red-500" fill="currentColor" />
            using React & Tailwind CSS
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
