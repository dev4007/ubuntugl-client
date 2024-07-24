import React from "react";
import RecommendedCard from "../../cards/RecommendedCard";
import ClothingSaleCard from './../../cards/ClothingSaleCard ';

const DiscountAds = () => {
  return (
    <div className="grid grid-cols-12 gap-5 mt-12">
      <div className="bg-[#FEE6E6] col-span-5 max-2xl:col-span-12 flex items-stretch">
      <div className="flex-grow flex items-center justify-center">
      add
      </div>
      </div>
      <div className="bg-[#F5FFE5] col-span-4 max-2xl:col-span-12 flex items-stretch">
        <div className="flex-grow flex items-center justify-center">Ads</div>
      </div>
      <div className="bg-white h-full col-span-3 row-span-2 max-2xl:col-span-12 flex items-stretch">
        <RecommendedCard />
      </div>
      <div className="bg-[#E5F1FF] col-span-9 max-2xl:col-span-12 flex items-stretch">
        <div className="flex-grow flex items-center justify-center">Ads</div>
      </div>
    </div>
  );
};

export default DiscountAds;
