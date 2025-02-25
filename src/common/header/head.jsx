import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Flag from 'react-world-flags';

const Head = () => {
  const [isContactVisible, setIsContactVisible] = useState(true); // Toggle State

  return (
    <header className="head">
      <div className="container">
        {/* Left Side (Contact Info with Toggle) */}
        <div className="left-row">
          <button className="toggle-btn" onClick={() => setIsContactVisible(!isContactVisible)}>
            {isContactVisible ? 'Hide Contact' : 'Show Contact'}
          </button>

          {isContactVisible && (
            <div className="contact-info">
              <FaPhoneAlt className="icon" />
              <span>+234 083 456 5413</span>
              <FaEnvelope className="icon" />
              <span>dandosh2@gmail.com</span>
            </div>
          )}
        </div>

        {/* Right Side (Navigation & Flags) */}
        <div className="right-row">
          <span>Theme FAQ's</span>
          <span>Need Help?</span>
          <span>EN</span>
          <span>USD</span>
          <Flag code="NG" className="flag" />
        </div>
      </div>
    </header>
  );
};

export default Head;