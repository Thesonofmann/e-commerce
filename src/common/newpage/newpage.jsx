import React, { useState } from 'react';
import { FaHeart, FaStar, FaPlus, FaArrowDown, FaShoppingCart } from 'react-icons/fa';
import './newpage.scss';

import Balenciaga from '../../asset/items/balenciaga.jpg';
import Brogue from '../../asset/items/brogue.jpg';
import Desktop from '../../asset/items/desktop.jpg';
import Jacket from "../../asset/items/jacket.jpg";
import Jean from '../../asset/items/jean.jpg';
import Jesey from '../../asset/items/jesey.jpg';
import Crocs from '../../asset/items/crocs.jpg';
import Slide from '../../asset/items/slide.jpg';

const Data = {
  productItems: [
    {
      id: 1,
      discount: 50,
      cover: Balenciaga,
      name: "Sneakers",
      price: 100,
    },
    {
      id: 2,
      discount: 40,
      cover: Brogue,
      name: "Shoe",
      price: 20,
    },
    {
      id: 3,
      discount: 40,
      cover: Desktop,
      name: "Gadget",
      price: 200,
    },
    {
      id: 4,
      discount: 40,
      cover: Jacket,
      name: "Cloth",
      price: 50,
    },
    {
      id: 5,
      discount: 50,
      cover: Jean,
      name: "Cloth",
      price: 100,
    },
    {
      id: 6,
      discount: 50,
      cover: Jesey,
      name: "Cloth",
      price: 100,
    },
    {
      id: 7,
      discount: 20,
      cover: Crocs,
      name: "Cloth",
      price: 80,
    },
    {
      id: 8,
      discount: 30,
      cover: Slide,
      name: "Slide",
      price: 70,
    },
  ],
};

const NewPage = () => {
  const [counts, setCounts] = useState({});
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const increment = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const toggleCart = () => {
    setIsCartVisible((prev) => !prev);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flashcard-container">
      <h1 className='flash'>Hot Deals</h1>
      <div className="box">
        {Data.productItems?.map((product) => (
          <div key={product.id} className="product mtop">
            <div className="img-card">
              <span className="discount">{product.discount}% Off</span>
              <img src={product.cover} alt={product.name} />
              <div className="product-like">
                <label>{counts[product.id] || 0}</label> <br />
                <FaHeart onClick={() => increment(product.id)} />
              </div>
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <div className="rate">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="price">
                <h4>${product.price}.00</h4>
                <button onClick={() => addToCart(product)}>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Scroll to Bottom Button */}
        <button className="scroll-button" onClick={scrollToBottom}>
          <FaArrowDown />
        </button>
      </div>

      {/* Cart Button */}
      <button className="cart-button" onClick={toggleCart}>
        <FaShoppingCart />
        <span>{cart.length}</span>
      </button>

      {/* Cart Modal/Overlay */}
      {isCartVisible && (
        <div className="cart-modal">
          <div className="cart-header">
            <h3>Shopping Cart</h3>
            <button className="close-cart" onClick={toggleCart}>
              &times;
            </button>
          </div>
          <div className="cart-items">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.cover} alt={item.name} />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price}.00</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div className="cart-footer">
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPage;
