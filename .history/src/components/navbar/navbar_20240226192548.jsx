import './navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 864);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 864);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    scroll.scrollTo(document.getElementById(sectionId).offsetTop, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  const navStyle = {
    height: !menuOpen ? '0' : '100px',
    overflowY: 'hidden',
    transition: 'height 0.3s ease-in',
 padding: !menuOpen ? '0' : '1rem',
    marginTop: '-0.5rem',
  };

  return (
    <div className='nav-wrapper'>
      <nav className='navbar-container'>
        <div className='navbar-contents'>
          <div className='desktop-menu'>
            <p onClick={() => scrollToSection('full-video-1')}>Projects</p>
            <p onClick={() => scrollToSection('skills')}>Skills</p>
            <p onClick={() => scrollToSection('big-content-1')}>Experience</p>
            <p onClick={() => scrollToSection('booking')}>Contact</p>
          </div>
          <p className='name'>Thomas Musial</p>
          {isMobile && (
            <div className='list-search-box'>
              <div className={`menu-icon ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
              </div>
            </div>
          )}
        </div>
        {isMobile && (
          <ul style={navStyle} className='nav-list'>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('big-1')}>Experience</li>
            <li onClick={() => scrollToSection('booking')}>Contact</li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
