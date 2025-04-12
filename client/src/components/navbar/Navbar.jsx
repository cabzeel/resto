import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSun, FaMoon } from 'react-icons/fa';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useTheme } from '../ThemeContext'; // Add this import
import images from '../../constants/images';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Get theme context

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`app__navbar ${scrollDirection === 'down' ? 'hidden' : 'visible'}`}>
      <div className='app__navbar-logo'>
        <img src={images.logo1} alt='app logo' />
      </div>
      
      <div className='app__navbar-links'>
        <Link to='/' className='app__navbar-link'>Home</Link>
        <Link to='/about' className='app__navbar-link'>About</Link>
        <Link to='/services' className='app__navbar-link'>Services</Link>
        <Link to='/menu' className='app__navbar-link'>Menu</Link>
        <Link to='/contact' className='app__navbar-link'>Contact</Link>
        <button 
          onClick={toggleTheme}
          className="app__navbar-theme-toggle"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button> 
      </div>

      

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='#f3b806'
          fontSize={27}
          className='app__navbar-menu-icon'
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className='app__navbar-smallscreen-overlay flex-center slide-bottom'>
            <MdOutlineRestaurantMenu 
              fontSize={27}
              className='overlay__close app__navbar-menu-icon'
              onClick={() => setToggleMenu(false)}
            />

            <div className='app__navbar-smallscreen-links'>
              <Link to='/' className='app__navbar-smallscreen-link' onClick={handleLinkClick}>Home</Link>
              <Link to='/about' className='app__navbar-smallscreen-link' onClick={handleLinkClick}>About</Link>
              <Link to='/services' className='app__navbar-smallscreen-link' onClick={handleLinkClick}>Services</Link>
              <Link to='/menu' className='app__navbar-smallscreen-link' onClick={handleLinkClick}>Menu</Link>
              <Link to='/contact' className='app__navbar-smallscreen-link' onClick={handleLinkClick}>Contact</Link>
              
              {/* Add Theme Toggle to Mobile Menu */}
              <button 
                onClick={() => {
                  toggleTheme();
                  setToggleMenu(false);
                }}
                className="app__navbar-theme-toggle mobile"
              >
                {theme === 'light' ? <FaMoon /> : <FaSun />}
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;