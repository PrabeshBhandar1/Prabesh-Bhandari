import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on initial load and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <div className={`nav-wrapper ${menuOpen ? 'nav-active' : ''}`}>
      <a href="#">
        <div className="dots-wrapper">
          <div id="dot-1" className="browser-dot"></div>
          <div id="dot-2" className="browser-dot"></div>
          <div id="dot-3" className="browser-dot"></div>
        </div>
      </a>
      
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul id="navigation">
        <li><Link smooth to="#home" onClick={closeMenu}>Home</Link></li>
        <li><Link smooth to="#education" onClick={closeMenu}>Education</Link></li>
        <li><Link smooth to="#contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;