import React, { useState } from "react";
import {SwiperWeeklyComponent} from "./../../swiper/SwiperComponent";

import weekly from "../../../assets/weekly/weekly.png";
import Ellipse from "../../../assets/weekly/Ellipse-logo.png";
const TopVendors = () => {
  const [selectedMenu, setSelectedMenu] = useState("Electronics");
  const menus = ["Electronics", "Health & Wellness", "Clothing", "Furniture"];
 
  const cards = [
    { id: 1, image: weekly, logo: Ellipse, vendor: "Vendor Name", rating: 5 },
    { id: 2, image: weekly, logo: Ellipse, vendor: "Vendor Name", rating: 5 },
    { id: 3, image: weekly, logo: Ellipse, vendor: "Vendor Name", rating: 5 },
    { id: 4, image: weekly, logo: Ellipse, vendor: "Vendor Name", rating: 5 },
    { id: 5, image: weekly, logo: Ellipse, vendor: "Vendor Name", rating: 5 },
    { id: 6, image: weekly, logo: Ellipse, vendor: "Vendor Name", rating: 5 },
    { id: 7, image: weekly, logo: Ellipse, vendor: "Vendor Name", rating: 5 },
    { id: 8, image: weekly, logo: Ellipse, vendor: "Vendor Name", rating: 5 },
  ];

  return (
    <div className="mt-5">
      <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
      <h1 className="text-4xl font-medium 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl max-sm:text-2xl">Top Weekly Vendors</h1>
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
      <SwiperWeeklyComponent data={cards} />
      </div>
    </div>
  );
};

export default TopVendors;
