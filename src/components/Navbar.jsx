import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/navbar.css';

const navItems = [
  { label: 'About', to: '#about', id: 'about' },
  { label: 'Projects', to: '#projects', id: 'projects' },
  { label: 'Contact', to: '#contact', id: 'contact' },
];

const mobileMenu = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.24, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const Navbar = ({ activeSection = 'about' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <nav className="nav-container" aria-label="Main navigation">

        {/* LOGO */}
        <a href="#about" className="brand" onClick={closeMenu}>
          <img src="/my-logo.png" alt="logo" className="logo-img" />
        </a>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        {/* DESKTOP NAV */}
        <ul className="nav-links nav-links-desktop">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.to}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="nav-links nav-links-mobile open"
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.to}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};

export default Navbar;