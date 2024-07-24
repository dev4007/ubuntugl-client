import React from "react";
import computer from "../../../assets/Logo/tv.png";

const ShopLaptop = () => {
  return (
    <div className="flex max-sm:flex-col  items-center">
      <div className="ml-10">
        <div className="max-sm:mt-5">
          <div className="flex gap-2">
            <p className="text-2xl lg:text-2xl md:text-xl max-sm:text-lg">
              From
            </p>
            <p className="text-2xl lg:text-2xl md:text-xl max-sm:text-lg font-bold">
              ₹2200
            </p>
          </div>
          <h1 className="text-4xl lg:text-4xl md:text-2xl max-sm:text-xl font-bold mt-4">
            <span className="block">Elevate Your</span>
            <span className="block">Digital Lifestyle</span>
          </h1>
          <p className="text-base mt-2">
            Brand new MacBook Pro for the pros. Now available at a discount
            price for a limited time.
          </p>
        </div>
        <button className="bg-btn-yellow text-black text-2xl lg:text-2xl md:text-xl max-sm:text-lg font-medium rounded-3xl md:rounded-full w-full md:w-[196px] h-[54px] md:h-[54px] mt-12 max-sm:mt-5">
          Shop Now
        </button>
      </div>

      <div className="mr-0">
        <img
          className="object-cover xl:max-w-screen-xl max-lg:w-auto h-auto rounded-t-lg md:rounded-none md:rounded-s-lg"
          src={computer}
          alt=""
        />
      </div>
    </div>
  );
};

export default ShopLaptop;
