import React from 'react';
import Home from '../mainPage/home';
import Flashdeals from '../../Flashcard/flashdeals';
import Top from '../../top/top';
import NewArrivals from '../../newarrival/newarrival';
import Discount from '../../discount/discount';
import Shop from '../../shop/shop'
import Ann from '../../Announcement/ann'
import Wrapper from "../../wrapper/wrapper"
import Footer from "../../foooter/footer"


const Pages = ({ productItems }) => {
  return (
    <div>
      <Home />
      <Flashdeals productItems={productItems} />
      <Top/>
      <NewArrivals/>
      <Discount/>
      <Shop/>
      <Ann/>
      <Wrapper/>
      <Footer/>
    
    </div>
  );
};

export default Pages;
