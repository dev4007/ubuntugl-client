import React from "react";
import ShopMobile from "../../cards/HomeAdsCard/ShopMobile";
import ShopLaptop from "../../cards/HomeAdsCard/ShopLaptop";
import ModernHome from "../../cards/HomeAdsCard/ModernHome";
import ShopCards from "../../cards/HomeAdsCard/ShopCards";
import OfferCard from "../../cards/HomeAdsCard/OfferCard";

const HomePageAd = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-5">
        <div className="bg-[#FFFFFF] col-span-3 max-2xl:col-span-4  max-xl:col-span-4 max-lg:col-span-12 flex items-stretch">
          <div className="flex-grow flex items-center justify-center">
            <ShopMobile />
          </div>
        </div>
        <div className="bg-[#FFE3D2]  col-span-6 max-2xl:col-span-8 max-xl:col-span-8 max-lg:col-span-12 flex items-stretch">
          <div className="flex-grow flex items-center justify-center">
            <ShopLaptop />
          </div>
        </div>
        <div className="bg-white col-span-3 2xl:row-span-2 row-span-0 max-2xl:col-span-6 max-lg:col-span-12 flex items-stretch">
          <ModernHome />
        </div>
        <div className="col-span-9 max-2xl:col-span-6 gap-5 max-lg:col-span-12 flex flex-wrap items-stretch">
          <ShopCards />
        </div>
      </div>
      <div className="mt-5">
        <OfferCard />
      </div>
    </React.Fragment>
  );
};

export default HomePageAd;
