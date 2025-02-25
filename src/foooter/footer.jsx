import React from "react";
import "./footer.scss";
import Bread from "../asset/watch/e-commerce.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <img src={Bread} alt="Bread" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
            id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus
            vel ut sollicitudin elit at amet.
          </p>
          <div className="icon">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="img"
            >
              <i className="fa-brands fa-google-play"></i>
              <span>Google Play</span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="img"
            >
              <i className="fa-brands fa-app-store-ios"></i>
              <span>App Store</span>
            </a>
          </div>
        </div>

        <div className="box">
          <h2>About Us</h2>
          <ul>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="box">
          <h2>Customer Care</h2>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Corporate & Bulk Purchasing</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>

        <div className="box">
          <h2>Contact Us</h2>
          <ul>
            <li>70 Washington Square South, New York, NY 10012, United States</li>
            <li>Email: oladayorichard1@Ggmail.com</li>
            <li>Phone: +2349037589818</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;