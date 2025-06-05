import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // menu toggle state

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false); // optional: close menu after click

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <Link to='hero' smooth={true} offset={0} duration={500}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <ul className={menuOpen ? 'open' : ''}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={closeMenu}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Campus</Link></li>
        <li><Link to='testimonials-container' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Testimonials</Link></li>
        <li>
          <Link to='contact-container' smooth={true} offset={0} duration={500} className="btn" onClick={closeMenu}>
            Contact us
          </Link>
        </li>
      </ul>

      <img
        src={menu}
        alt="Menu"
        className='menu-icon'
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </nav>
  );
};

export default Navbar;
