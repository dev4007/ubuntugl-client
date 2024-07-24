import React from "react";
import { SwiperComponent } from "../../../swiper/SwiperComponent";
import { cards } from "../../../../data/Products";
const FrequentlyCart = () => {
  // Filter cards based on selected menu

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
        <h1 className="lg:text-3xl text-xl font-medium">Frequently Bought Together</h1>
        <div className="w-full sm:w-auto overflow-x-auto scrollbar-hide snap-x snap-mandatory"></div>
      </div>
      <div className="flex items-center space-x-1"></div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-5 p-4">
        <SwiperComponent data={cards} />
      </div>
    </div>
  );
};

export default FrequentlyCart;
