import React, { useEffect } from 'react';
import Logo from '../../asset/watch/e-commerce.jpg';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './search.scss';

const Search = () => {
  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector('.search');
      if (search) {
        search.classList.toggle('active', window.scrollY > 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="search">
      <div className="container_c_flex">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Bonik Logo" />
        </div>

        {/* Search Box */}
        <div className="search-box f_flex">
          <FaSearch size={20} className="search-icon" />
          <input type="text" placeholder="Search and hit enter..." />
          <button className="category-btn">All Categories</button>
        </div>

        {/* User and Cart Icons */}
        <div className="icons f_flex">
          <FaUser size={20} />
          <FaShoppingBag size={20} className="ant" />
          <Link to="/cart">
  <span 
    className="cart-badge" 
    style={{ color: 'red',  position: 'relative', bottom: '15px', right: '15px' }}
  >
    0
  </span>
</Link>


        </div>
      </div>
    </section>
  );
};

export default Search;