import React, { useRef } from 'react';
import Sdata from './Sdata';
import './slider.scss';

const Slidecard = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="scroll-btn-left" onClick={scrollLeft}>&lt;</button>
      
      <div className="carousel-container" ref={carouselRef}>
        {Sdata.map((value, index) => (
          <div key={index} className="box-top">
            <div className="left">
              <h1>{value.title}</h1>
              <p>{value.desc}</p>
              <button className="btn-primary">Visit Collection</button>
            </div>
            <div className="right">
              <img src={value.cover} alt={value.title} />
            </div>
          </div>
        ))}
      </div>
      
      <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
    </div>
  );
};

export default Slidecard;