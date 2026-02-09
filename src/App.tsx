import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Extracurricular } from './sections/Extracurricular';
import { Contact } from './sections/Contact';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { isDark, toggle } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply dark mode to body element for background color
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`w-full min-h-screen flex flex-col overflow-x-hidden ${isDark ? 'bg-gray-900 text-white dark' : 'bg-white text-gray-900'}`}>
      <Navbar isDark={isDark} onToggleDarkMode={toggle} />

      {/* Main Content */}
      <main className="w-full flex-1 pt-16">
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Experience isDark={isDark} />
        <Education isDark={isDark} />
        <Extracurricular isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      <Footer isDark={isDark} />

        {/* Scroll to Top Button */}
        {scrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all hover:scale-110 ${
              isDark
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
    </div>
  );
}

export default App;
