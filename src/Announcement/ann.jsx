import React from "react";
import "./ann.scss";
import bulb from "../asset/announcement/buib.jpg";
import series from "../asset/announcement/samsungseries.jpg";

const Anno = () => {
  return (
    <section className="annocument background">
      <div className="container">
        <div className="img-rat">
          <img src={bulb} alt="Bulb" />
          <h2>30% OFF Hot Deals</h2>
          <button>Shop Now</button>
        </div>
        <div className="img-rat">
          <img src={series} alt="Series" />
          <h2>Light Interior</h2>
          <p>Limited Edition Sale</p>
          <span>$50.00</span>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Anno;