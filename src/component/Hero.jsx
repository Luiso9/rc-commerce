import React from "react";
import {Image, Button} from "@nextui-org/react";
import Donat from '../assets/donat.png';
import Bg from '../assets/cool-background.svg';
import styles from '../modules/hero.module.css';

const HeroSection = () => {
  return (
    <>
      <div className="grid">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img src={Bg} alt="Overlay Image" className="object-cover w-full h-full opacity-60" loading="lazy"/>
        </div>
        <div className="container mx-auto px-4 py-16 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
            <div>
              <h1 className="text-5xl font-extrabold text-orange-400 mb-4 z-10 font-['Lalezar']">
                Discover Our Delicious Donuts Today!
              </h1>
              <p className="text-lg text-black mb-8 z-10">
                Our donuts are perfect for any occasion, whether you're grabbing a quick breakfast on the go or ordering a dozen for a special event.
              </p>
              <Button 
              radius="medium"
              variant="bordered"
              size="lg"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-bold py-2 px-4"
              >
                Get Started
              </Button>
            </div>
            <div className="md:order-first">
              <div className="relative h-64 md:h-auto max-sm:hidden z-0 transition duration-400 hover:scale-105">
                <Image src={Donat} alt="Hero Image" layout="fill" objectFit="cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
