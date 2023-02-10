import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import OurWork from '../pages/OurWork';
import Services from '../pages/Services';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/ourwork" element={<OurWork />}/>
      <Route path="/contacts" element={<Contacts />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/" exec element={<Home />}/>
    </Routes>
  );
}

export default AppRouter;
