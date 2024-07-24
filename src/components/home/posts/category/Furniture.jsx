import React, { useState } from "react";
import {SwiperHomeAndFurnitureComponent} from "./../../../swiper/SwiperComponent";
import {  Furniture } from './../../../../data/Products';

const FurnitureMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("Electronics");
  const menus = ["New Arrivals", "Best Related", "Popular", "Featured"];
    // Filter cards based on selected menu
  

  return (
    <div className="mt-5"> 
      <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
      <h1 className="text-4xl font-medium 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl max-sm:text-2xl">Home & Furniture</h1>
        <div className="w-full sm:w-auto overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex flex-nowrap space-x-4 sm:space-x-8">
            {menus.map((menu) => (
              <div
                key={menu}
                className={`cursor-pointer whitespace-nowrap snap-start ${
                  selectedMenu === menu ? "border-b-2 border-black" : ""
                }`}
                onClick={() => setSelectedMenu(menu)}
              >
                {menu}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-1"></div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-5 p-4">
      <SwiperHomeAndFurnitureComponent data={Furniture} />
      </div>
    </div>
  );
};

export default FurnitureMenu;
