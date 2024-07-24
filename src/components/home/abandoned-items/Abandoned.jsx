import React from "react";
import { SwiperAbandonedComponent } from "../../swiper/SwiperComponent";
import { Furniture } from "../../../data/Products";

const Abandoned = () => {
  return (
    <div className="mt-5">
      <div class="grid grid-cols-12 gap-4 mt-5">
        <div className="bg-white col-span-8 max-md:col-span-12">
          <div className=" shadow-md rounded-lg overflow-hidden mt-5">
            <SwiperAbandonedComponent data={Furniture} />
          </div>
        </div>
        <div className="bg-[#E5F1FF] col-span-4 max-md:col-span-12 flex items-stretch">
          <div className="flex-grow flex items-center justify-center">Ads</div>
        </div>
      </div>
    </div>
  );
};

export default Abandoned;
