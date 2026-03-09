import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../photo/yardim.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Projelerimiz', href: '#projects' },
    { name: 'İletişim', href: '#contact' }
  ];

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '90px'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
      color: '#1f2937'
    },
    logoImage: {
      height: '70px',
      width: 'auto',
      objectFit: 'contain'
    },
    logoText: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: '#1e40af',
      lineHeight: '1.2'
    },
    logoSubtext: {
      fontSize: '0.75rem',
      fontWeight: '400',
      color: '#6b7280'
    },
    desktopMenu: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      textDecoration: 'none',
      color: '#1f2937',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      position: 'relative',
      padding: '5px 0'
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#1e40af',
      zIndex: 1001
    },
    mobileMenu: {
      display: isOpen ? 'flex' : 'none',
      position: 'fixed',
      top: '90px',
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      padding: '20px',
      flexDirection: 'column',
      gap: '1rem'
    },
    mobileLinkContainer: {
      borderBottom: '1px solid #e5e7eb',
      paddingBottom: '1rem'
    },
    mobileLink: {
      textDecoration: 'none',
      color: '#1f2937',
      fontSize: '1.1rem',
      fontWeight: '500',
      display: 'block',
      padding: '10px 0',
      transition: 'color 0.3s ease'
    }
  };

  const mediaQuery = '@media (max-width: 768px)';

  return (
    <>
      <style>
        {`
          .nav-link:hover {
            color: #1e40af;
          }
          
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: #1e40af;
            transition: width 0.3s ease;
          }
          
          .nav-link:hover::after {
            width: 100%;
          }
          
          .mobile-link:hover {
            color: #1e40af;
            padding-left: 10px;
          }
          
          .logo-container:hover {
            transform: scale(1.05);
          }
          
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            
            .mobile-menu-button {
              display: block !important;
            }
          }
          
          @media (min-width: 769px) {
            .mobile-menu {
              display: none !important;
            }
          }
        `}
      </style>
      
      <nav style={styles.nav}>
        <div style={styles.container}>
          {/* Logo */}
          <a href="#home" style={styles.logoContainer} className="logo-container">
            <img src={logo} alt="Umut Eli" style={styles.logoImage} />
            <div>
              <div style={styles.logoText}>Umut Eli</div>
              <div style={styles.logoSubtext}>Yardımlaşma Derneği</div>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul style={styles.desktopMenu} className="desktop-menu">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} style={styles.navLink} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            style={styles.mobileMenuButton} 
            className="mobile-menu-button"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={styles.mobileMenu} className="mobile-menu">
          {navLinks.map((link, index) => (
            <div key={index} style={styles.mobileLinkContainer}>
              <a 
                href={link.href} 
                style={styles.mobileLink} 
                className="mobile-link"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;