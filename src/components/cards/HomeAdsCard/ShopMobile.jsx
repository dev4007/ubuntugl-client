import React from "react";
import iphone12 from "../../../assets/Logo/iphone12.png";

const ShopMobile = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <p className="text-2xl text-[#557DE4] ">Starting from $899.</p>
      <h3 className="text-4xl font-medium">iPhone 12 Pro</h3>
      <p className="text-4xl font-medium">128GB</p>
      <button className="py-2 border border-black  rounded-full text-base font-medium w-36 text-black mt-5">
        Shop Now
      </button>
      <div className="relative mt-8">
        <img src={iphone12} alt="iPhone 12 Pro" className="w-full max-md:w-auto" />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default ShopMobile;
