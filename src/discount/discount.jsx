import React from "react";
import blender from '../asset/discount/blender.jpg'
import canon from '../asset/discount/canon.jpg'
import couch from '../asset/discount/couch.jpg'
import dinning from '../asset/discount/dinning.jpg'
import fridge from '../asset/discount/fridge.jpg'
import headset from '../asset/discount/headset.jpg'
import lg from '../asset/discount/lg.jpg'
import ps5 from '../asset/discount/ps5.jpg'
import samsung from '../asset/discount/samsung.jpg'
import wireless from '../asset/discount/wiresless.jpg'
import './discount.scss'

const Ddata = [
  {
    cover: blender,
    name: "Blender",
    price: "$250",
  },
  {
    cover: canon,
    name: "Camera",
    price: "$450",
  },
  {
    cover: couch,
    name: "Interior",
    price: "$50",
  },
  {
    cover: dinning,
    name: "Interior",
    price: "$100",
  },
  {
    cover: fridge,
    name: "Sony",
    price: "$20",
  },
  {
    cover: headset,
    name: "Gadget",
    price: "$200",
  },
  {
    cover: lg,
    name: "Sony",
    price: "$300",
  },
  {
    cover: ps5,
    name: "Sony",
    price: "$30",
  },
  {
    cover: samsung,
    name: "Samsung",
    price: "$80",
  },
  {
    cover: wireless,
    name: "Samsung",
    price: "$40",
  },
];

// Discount Section
const Discount = () => {
  return (
    <section className='Discount background NewArrivals'>
      <div className='container-man'>
        <div className='heading'>
          <div className='heading-left row f_flex'>
            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt="gift-icon" />
            <h2>Big Discounts</h2>
          </div>
          <div className='heading-right row'>
            <span>View all</span>
            <i className='fa-solid'></i>
          </div>
        </div>

        {/* Display Discount Products */}
        <div className='grid'>
          {Ddata.map((value, index) => {
            return (
              <div className='box' key={index}>
                <div className='img'>
                  <img src={value.cover} alt={value.name} width='100%' />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Discount;
