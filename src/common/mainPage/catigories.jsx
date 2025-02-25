import React, { useState } from "react";
import { FaBook, FaTshirt, FaPlug, FaCar, FaCouch, FaGift, FaMusic, FaHeartbeat, FaPaw, FaBabyCarriage, FaAppleAlt, FaBars, FaTimes } from "react-icons/fa";
import './catigories.scss';

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategories = () => {
    setIsOpen(!isOpen); // Toggle the categories visibility
  };

  const data = [
    { catImg: <FaTshirt color="grey" size={20} />, cartName: "Fashion" },
    { catImg: <FaCar color="grey" size={20} />, cartName: "Cars" },
    { catImg: <FaPlug color="grey" size={20} />, cartName: "Electronics" },
    { catImg: <FaCouch color="grey" size={20} />, cartName: "Home & Garden" },
    { catImg: <FaGift color="grey" size={20} />, cartName: "Gifts" },
    { catImg: <FaMusic color="grey" size={20} />, cartName: "Music" },
    { catImg: <FaHeartbeat color="grey" size={20} />, cartName: "Health & Beauty" },
    { catImg: <FaPaw color="grey" size={20} />, cartName: "Pets" },
    { catImg: <FaBabyCarriage color="grey" size={20} />, cartName: "Baby Toys" },
    { catImg: <FaAppleAlt color="grey" size={20} />, cartName: "Groceries" },
    { catImg: <FaBook color="grey" size={20} />, cartName: "Books" },
  ];

  return (
    <div className="categories-container">
      {/* Toggle Button */}
      <button className="toggle-btn" onClick={toggleCategories}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Category List */}
      <div className={`category ${isOpen ? "active" : ""}`}>
        {data.map((value, index) => (
          <div className="box-flex" key={index}>
            <div className="can">{value.catImg}</div>
            <span>{value.cartName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
