import React, { useState, useEffect } from 'react';
import '../App.css';
import Donat from '../assets/donat.png';
import Bg from '../assets/cool-background.svg'
import styles from '../modules/hero.module.css';

function HeroSection() {
  return (
    <React.Fragment>
      <section className="container mx-5 my-5 px-5 py-5 mx-auto bg-base-200 lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="z-10 order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className={styles.title}>Discover Our Delicious Donuts Today!</p>
            <p className="text-xl md:text-2xl text-black mt-2">Our donuts are perfect for any occasion, whether you're grabbing a quick breakfast on the go or ordering a dozen for a special event.</p>
            <p className="mt-2 text-sm text-center md:text-lg"></p>
            <button className={styles.button}>Order Now</button>
          </div>
          <div className="z-10 order-1 lg:order-2">
            <img className="h-80 max-w-md object-cover lg:w-[500px] lg:h-[500px]" src={Donat} alt="" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;