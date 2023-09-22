import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import HeroSection from './component/Hero';
import Card from './component/Card';
import Carousel from './component/Carousel';

function App() {
  return (
    <div data-theme="pastel" className="container mx-auto bg-base-200">
      <Navbar />
      <HeroSection />
      <Card />
      <Carousel />
    </div>
  );
}

export default App;
