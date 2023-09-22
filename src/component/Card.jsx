import React from 'react';
import '../App.css';

const Card = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto mt-4 mb-8 bg-base-200" id="weserve">
        <div className="text-center p-10">
          <h1 className="font-bold font-serif text-4xl mb-4 mt-8">Baked With Love</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card bg-neutral-200 hover:bg-primary shadow-md">
            <figure className="px-10 pt-10">
              <span className="material-symbols-outlined">local_shipping</span>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg lg:text-xl">Fastest Delivery</h2>
              <p className="text-sm lg:text-base">Get your donuts delivered hot and fresh.</p>
            </div>
          </div>
          <div className="card bg-neutral-200 hover:bg-primary shadow-md">
            <figure className="px-10 pt-10">
              <span className="material-symbols-outlined">verified</span>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg lg:text-xl">Best Quality</h2>
              <p className="text-sm lg:text-base">Experience the melt-in-your-mouth goodness of our donuts.</p>
            </div>
          </div>
          <div className="card bg-neutral-200 hover:bg-primary shadow-md">
            <figure className="px-10 pt-10">
              <span className="material-symbols-outlined">bakery_dining</span>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg lg:text-xl">Delicious Taste</h2>
              <p className="text-sm lg:text-base">Satisfy your sweet cravings with our irresistibly delicious donuts.</p>
            </div>
          </div>
          <div className="card bg-neutral-200 hover:bg-primary shadow-md">
            <figure className="px-10 pt-10">
              <span className="material-symbols-outlined">menu_book</span>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg lg:text-xl">Best Ingredients</h2>
              <p className="text-sm lg:text-base">Our donuts are made with the finest and freshest ingredients.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;