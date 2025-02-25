import React, { useState } from "react";
import './newarrival.scss'; 
import belt from '../asset/newarrival/belt.jpg';
import glosses from '../asset/newarrival/glossses.jpg';
import facecap1 from '../asset/newarrival/facecap1.jpg';
import facecap2 from '../asset/newarrival/facecap2.jpg';
import glass from '../asset/newarrival/glass.jpg';
import glass2 from '../asset/newarrival/glass2.jpg';
import lv from '../asset/newarrival/lv.jpg';
import ring from '../asset/newarrival/ring.jpg';
import socks from '../asset/newarrival/socks.jpg';
import wormer from '../asset/newarrival/wormer.jpg';

const Ndata = [
  { cover: belt, name: "Belt", price: "20" },
  { cover: glosses, name: "Makeup", price: "30" },
  { cover: facecap1, name: "Face Cap", price: "50" },
  { cover: facecap2, name: "Face Cap 2", price: "40" },
  { cover: glass, name: "Glasses", price: "10" },
  { cover: glass2, name: "Glasses 2", price: "20" },
  { cover: lv, name: "LV Bag", price: "300" },
  { cover: ring, name: "Ring", price: "20" },
  { cover: socks, name: "Socks", price: "100" },
  { cover: wormer, name: "Wormer", price: "20" },
];

const NewArrivals = () => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className='NewArrivals background'>
        <div className='container-bag'>
          <div className='heading-d_flex'>
            <div className='heading-left row f_flex'>
              <img
                src='https://img.icons8.com/glyph-neue/64/26e07f/new.png'
                alt='New Icon'
              />
              <h2>New Arrivals</h2>
            </div>
            <div className='heading-right row'>
              <span>View all</span>
              <i className='fa-solid-fa-caret'></i>
            </div>
          </div>

          <div className='content'>
            {Ndata.map((val, index) => (
              <div className='box1' key={index}>
                <div className='img-name'>
                  <img src={val.cover} alt={val.name} />
                </div>
                <h4>{val.name}</h4>
                <span>${val.price}</span>
                <button className='add-to-cart-btn' onClick={() => addToCart(val)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Scroll to Top Button */}
          <button className='scroll-btn' onClick={scrollToTop}>
            ↑
          </button>
        </div>
      </section>
    </>
  );
};

export default NewArrivals;