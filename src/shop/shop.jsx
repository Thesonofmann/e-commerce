import React, { useState } from "react";
import './shop.scss';
import iphone15 from "../asset/shops/iphone15.jpg"
import iphone16 from "../asset/shops/iphone16.jpg";
import s22ultra from "../asset/shops/s22utra.jpg";
import s24ultra from "../asset/shops/s24.jpg";
import Gionee from "../asset/shops/gionee.jpg";
import gionee from "../asset/shops/gionee2.jpg";
import googlepixel from "../asset/shops/googlepixel1.jpg";
import googlepixel1 from "../asset/shops/googlepixel2.jpg";
import redmi from "../asset/shops/redmi.jpg";
import redmi2 from "../asset/shops/redmi2.jpg";
import nokia from "../asset/shops/nokia.jpg";
import nokia2 from "../asset/shops/nokia2.jpg";

// Shop Data
const Sdata = {
  shopItems: [
    { id: 7, cover: iphone15, name: "iPhone", price: "180", discount: "25" },
    { id: 8, cover: iphone16, name: "iPhone", price: "200", discount: "30" },
    { id: 9, cover: s22ultra, name: "Samsung", price: "300", discount: "20" },
    { id: 10, cover: s24ultra, name: "Samsung", price: "500", discount: "30" },
    { id: 11, cover: Gionee, name: "Gionee", price: "300", discount: "15" },
    { id: 12, cover: gionee, name: "Gionee", price: "100", discount: "30" },
    { id: 13, cover: googlepixel, name: "Google Pixel", price: "250", discount: "20" },
    { id: 14, cover: googlepixel1, name: "Google Pixel", price: "10", discount: "30" },
    { id: 15, cover: redmi, name: "Redmi", price: "180", discount: "10" },
    { id: 16, cover: redmi2, name: "Redmi", price: "90", discount: "10" },
    { id: 17, cover: nokia, name: "Nokia", price: "10", discount: "5" },
    { id: 18, cover: nokia2, name: "Nokia", price: "10", discount: "5" },
  ],
};

// Cart Component
const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} (Quantity: {item.quantity})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Category Component
const Catg = ({ cart }) => {
  const data = [
    { cateIcon: "fab fa-apple", cateName: "Apple" },
    { cateIcon: "fab fa-samsung", cateName: "Samsung" },
    { cateIcon: "fas fa-laptop", cateName: "Gionee" },
    { cateIcon: "fab fa-google", cateName: "Google Pixel" },
    { cateIcon: "fas fa-mobile-alt", cateName: "Redmi" },
    { cateIcon: "fas fa-phone", cateName: "Nokia" },
  ];

  return (
    <div className="category">
      <div className="chead d_flex">
        <h1>Brands</h1>
        <h1>Shops</h1>
      </div>
      {data.map((value, index) => (
        <div className="box f_flex" key={index}>
          <i className={value.cateIcon}></i>
          <span>{value.cateName}</span>
        </div>
      ))}
      <div className="box box2">
        <button>View All Brands</button>
      </div>
      <Cart cart={cart} />
    </div>
  );
};

// ShopCart Component
const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <>
      {shopItems.map((item, index) => (
        <div className="box" key={index}>
          <div className="enter">
            <div className="img-not">
              <span className="discount">{item.discount}% Off</span>
              <img src={item.cover} alt={item.name} />
              <div className="product-like">
                <label>{count}</label>
                <br />
                <i className="fa-regular fa-heart" onClick={increment}></i>
              </div>
            </div>
            <div className="product-details">
              <h3>{item.name}</h3>
              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <h4>${item.price}.00 </h4>
                <button onClick={() => addToCart(item)}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// Main Shop Component
const Shop = () => {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    const itemExists = cart.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...itemExists, quantity: itemExists.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <section className="shop background">
      <div className="container d_flex">
        <Catg cart={cart} />
        <div className="contentWidth">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <h2>Mobile Phones</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <div className="product-content grid1">
            <ShopCart addToCart={addToCart} shopItems={Sdata.shopItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;