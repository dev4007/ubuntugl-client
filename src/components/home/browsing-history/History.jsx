import React, { useState } from "react";
import { SwiperHomeAndFurnitureComponent } from "./../../swiper/SwiperComponent";
import { Furniture } from "./../../../data/Products";

const History = () => {


  return (
    <div className="mt-5">
      <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
        <h1 className="text-4xl font-medium 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl max-sm:text-2xl">
          Your Browsing History
        </h1>
      </div>
      <div className="flex items-center space-x-1"></div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-5 p-4">
        <SwiperHomeAndFurnitureComponent data={Furniture} />
      </div>
    </div>
  );
};

export default History;
