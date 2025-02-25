import React, { useState } from 'react';
import { FaTh, FaArrowDown, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [CategoriesOpen, setCategoriesOpen] = useState(false);

  const toggleCategories = () => {
    setCategoriesOpen(!CategoriesOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!MobileMenu);
  };

  return (
    <header className='header'>
      <div className='container_d_flex'>
        {/* Categories Section with Dropdown */}
        <div className="categories_d_flex">
          <FaTh size={25} />
          <h1 onClick={toggleCategories}>
            Categories
            <FaArrowDown size={20} className={CategoriesOpen ? 'rotate' : ''} />
          </h1>
          {CategoriesOpen && (
            <ul className="dropdown">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          )}
        </div>

        {/* Navbar Links */}
        <nav className={`nav ${MobileMenu ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMobileMenu(false)}>Home</Link></li>
            <li><Link to="/new" onClick={() => setMobileMenu(false)}>Pages</Link></li>
            <li><Link to="/login" onClick={() => setMobileMenu(false)}>Login</Link></li>
            <li><Link to="/track" onClick={() => setMobileMenu(false)}>Track My Order</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenu(false)}>Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button className='toggle' onClick={toggleMobileMenu}>
          {MobileMenu ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;