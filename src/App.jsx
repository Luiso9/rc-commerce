import { useState } from 'react';
import './App.css';
import NavigationBar from './component/NavigationBar';
import HeroSection from './component/Hero';
import Card from './component/Card';
import Carousel from './component/Carousel';
import {ScrollShadow} from "@nextui-org/react";
import Footers from './component/Footer';


function App() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <Card />
      <Carousel />
      <Footers />
    </div>
  );
}

export default App;
