import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../photo/yardim.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Projelerimiz', href: '#projects' },
    { name: 'İletişim', href: '#contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Umut Eli" className="navbar-logo-img" />
          <div>
            <div className="navbar-logo-text">Umut Eli</div>
            <div className="navbar-logo-subtext">Yardımlaşma Derneği</div>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="navbar-desktop-menu">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="navbar-link">{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Menü">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className="navbar-mobile-link" onClick={closeMenu}>
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;