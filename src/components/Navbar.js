import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from "./Assets/Images/lumiteclogo.png";


const menuItems = ['About', 'Client', 'Gallery', 'Pricing', 'Teams', 'Testimonials'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 786);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="NewRoot" className={` ${isMenuOpen && isMobile ? 'show-menu' : ''}`}>
      <div className="navbar-container">
        <img src={Logo} id="LUMITECHLOGO" className="logo" />
        {isMobile && (
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
        {(isMenuOpen || !isMobile) && (
          <div className="menu-items">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-item">
                {item}
              </div>
            ))}
            <div className="button">
              GET STARTED
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
