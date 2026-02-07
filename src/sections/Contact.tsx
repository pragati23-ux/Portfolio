import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (integrate with backend)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pragatisingh56786@gmail.com',
      link: 'mailto:pragatisingh56786@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6392367340',
      link: 'tel:+916392367340',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/pragati23-ux',
      link: 'https://github.com/pragati23-ux',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/pragati-singh-35bb1b286/',
      link: 'https://www.linkedin.com/in/pragati-singh-35bb1b286/',
    },
  ];

  return (
    <section
      id="contact"
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
              Get In Touch
            </h2>
            <p className={`text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Let's collaborate and create something amazing together
            </p>
            <div className={`h-1 w-20 mx-auto rounded mt-4 ${
              isDark ? 'bg-blue-400' : 'bg-blue-600'
            }`} />
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Connect With Me
              </h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                        isDark
                          ? 'bg-gray-900 hover:bg-gray-700 border border-gray-700'
                          : 'bg-white hover:bg-blue-50 border border-gray-200'
                      }`}
                    >
                      <div className={`p-3 rounded-lg ${
                        isDark ? 'bg-blue-900' : 'bg-blue-100'
                      }`}>
                        <Icon
                          className={isDark ? 'text-blue-400' : 'text-blue-600'}
                          size={24}
                        />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {method.label}
                        </p>
                        <p className={`font-medium ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className={`text-sm font-semibold mb-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Follow on Social Media
                </p>
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
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                        isDark
                          ? 'bg-gray-700 text-white hover:bg-blue-600'
                          : 'bg-gray-200 text-gray-900 hover:bg-blue-600 hover:text-white'
                      }`}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:border-blue-600 ${
                      isDark
                        ? 'bg-gray-900 border-gray-700 text-white focus:bg-gray-800'
                        : 'bg-white border-gray-300 text-gray-900 focus:bg-blue-50'
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:border-blue-600 ${
                      isDark
                        ? 'bg-gray-900 border-gray-700 text-white focus:bg-gray-800'
                        : 'bg-white border-gray-300 text-gray-900 focus:bg-blue-50'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:border-blue-600 ${
                      isDark
                        ? 'bg-gray-900 border-gray-700 text-white focus:bg-gray-800'
                        : 'bg-white border-gray-300 text-gray-900 focus:bg-blue-50'
                    }`}
                    placeholder="Your message here..."
                  />
                </div>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 font-semibold"
                  >
                    ✓ Message sent successfully!
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-colors ${
                    isDark
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
