import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuBars from '../assets/menu_FILL0_wght400_GRAD0_opsz48.svg';
import { StyledMenuBarButton } from './NavbarStyling';

const NavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <StyledMenuBarButton type="button" onClick={toggleMenu}>
        <img src={menuBars} alt="Menu" />
      </StyledMenuBarButton>
      <div className={`navbar-overlay ${isMenuOpen ? 'active' : ''}`}>
        {isMenuOpen && ( // Render the links only when the menu is open
          <div className="navbar-links">
            <ul>
              <li>
                <NavLink to="/" activeClassName="active" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarMenu;
