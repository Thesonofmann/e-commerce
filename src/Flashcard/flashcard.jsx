import React, { useState } from 'react';
import { FaHeart, FaStar, FaPlus, FaArrowDown, FaShoppingCart } from 'react-icons/fa';
import './flash.scss';

const Flashcard = ({ productItems }) => {
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
        {productItems?.map((product) => (
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

export default Flashcard;
