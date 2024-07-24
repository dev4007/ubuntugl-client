import React, { useState } from "react";
import { cards, LadiesSpecial } from './../../../data/Products';
import { SwiperSpecialComponent } from "../../swiper/SwiperComponent";
const CategorySpecial = () => {
  const [selectedMenu, setSelectedMenu] = useState("Electronics");

  

  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
      <h1 className="text-4xl font-medium 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl max-sm:text-2xl">Ladies Special</h1>
      </div>
      <div className="flex items-center space-x-1"></div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-3 p-4">
      <SwiperSpecialComponent data={LadiesSpecial} />
      </div>
    </div>
  );
};

export default CategorySpecial;
