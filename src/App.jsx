import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SectionBubble from './components/SectionBubble';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/section-bubble.css';

const sections = ['home', 'about', 'projects', 'contact'];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const observerOptions = useMemo(
    () => ({
      root: null,
      rootMargin: '-40% 0px -45% 0px',
      threshold: 0,
    }),
    []
  );

  useEffect(() => {
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sectionElements.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target?.id) {
        setActiveSection(visibleEntry.target.id);
      }
    }, observerOptions);

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [observerOptions]);

  return (
    <div className="app-shell">
      <Navbar activeSection={activeSection} />
      <main className="main-content single-page">
        <section id="home" className="app-section">
          <Home />
        </section>

        <section id="about" className="app-section">
          <About />
        </section>

        <section id="projects" className="app-section">
          <Projects />
        </section>

        <section id="contact" className="app-section">
          <Contact />
        </section>
      </main>

      <SectionBubble activeSection={activeSection} />
      <Footer />
    </div>
  );
};

export default App;