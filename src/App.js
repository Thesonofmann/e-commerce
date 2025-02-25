import './App.css';
import Header from './common/header/header';
import Pages from './common/pages/pages';
import Data from './Flashcard/Data';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './common/login/login';
import Track from './common/track/track'
import Contact from './common/contact/contact'
import Newpage from './common/newpage/newpage';

function App() {
  const [productItems] = useState(Data.productItems); 

  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<Pages productItems={productItems} />} />   
        <Route path='/login' element={<Login/>} />
        <Route path='/track' element={<Track/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/new' element={<Newpage/>} />
      </Routes>
    </Router>
  );
}

export default App;
