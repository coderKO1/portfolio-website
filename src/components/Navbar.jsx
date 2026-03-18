import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from "../images/my-logo.png";

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <nav className="nav-container" aria-label="Main navigation">
      <NavLink to="/" className="brand" onClick={closeMenu}>
  <img src={logo} alt="logo" className="logo-img" />
</NavLink>

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

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
