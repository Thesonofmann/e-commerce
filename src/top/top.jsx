import React from 'react';
import './top.scss';
import laptop1 from '../asset/laptop/laptop1.jpg';
import laptop2 from '../asset/laptop/laptop2.jpg';
import laptop3 from '../asset/laptop/laptop3.jpg';
import laptop4 from '../asset/laptop/laptop4.jpg';
import laptop5 from '../asset/laptop/laptop5.jpg';
import laptop6 from '../asset/laptop/laptop6.jpg';
import laptop7 from '../asset/laptop/laptop7.jpg';

const Tdata = [
    { cover: laptop1, para: 'Gaming Laptop', desc: '5k orders this week' },
    { cover: laptop2, para: 'Business Laptop', desc: '3k orders this week' },
    { cover: laptop3, para: '2-in-1 Laptop', desc: '8k orders this week' },
    { cover: laptop4, para: 'Ultrabook', desc: '4.5k orders this week' },
    { cover: laptop5, para: 'Laptop for Students', desc: '7k orders this week' },
    { cover: laptop6, para: 'MacBook', desc: '3.5k orders this week' },
    { cover: laptop7, para: 'Laptop for Creatives', desc: '9k orders this week' },
];

const Top = () => {
  return (
    <section className="TopCate background">
      <h2 className='low'>Top Categories</h2>
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left row f_flex">
            <i className="fa-solid fa-border-all"></i>
            
          </div>
        </div>
        <div className="topcart-wrapper">
          <div className="topcart">
            {Tdata.map((value, index) => (
              <div className="box" key={index}>
                <div className="nametop d_flex">
                  <span className="tleft">{value.para}</span>
                  <span className="tright">{value.desc}</span>
                </div>
                <div className="MAM">
                  <img className="topcart-image" src={value.cover} alt={value.para} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;