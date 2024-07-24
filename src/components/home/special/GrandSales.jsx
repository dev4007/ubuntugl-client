import React from "react";
import { SwiperSalesComponent } from "../../swiper/SwiperComponent";
import { KidsSpecial } from "../../../data/Products";

const GrandSales = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="bg-grand-sell col-span-12 2xl:col-span-3 xl:col-span-4 lg:col-span-4 md:col-span-4">
          <div className="max-w-full text-center 2xl:py-32 xl:py-28 md:py-20 max-md:py-16">
            <p className="font-[300px] text-5xl 2xl:text-5xl xl:text-3xl lg:text-xl md:text-xl max-sm:text-3xl">
              <span className="block text-red-500 tracking-widest">
                G R A N D
              </span>
              <span className="block text-slate-50 font-extrabold">
                FASHION SALE
              </span>
            </p>

            <p className="text-base font-medium mt-6  tracking-tighter mx-20 2xl:mx-20 xl:mx-16 lg:mx-12 md:mx-12 max-sm:mx-12">
              Offers on all clothing up to 50% off. Limited units only so stop
              waiting and place your orders quickly!
            </p>

            <div className="mb-4 mt-8">
              <p className="text-2xl font-medium 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg max-sm:text-xl">Sale Remaining Time</p>
              <div className="flex  mt-6 text-2xl max-sm:text-md justify-center">
              <span className="text-black border border-black  p-1  flex items-center justify-center">
                01
              </span>
              <span className="text-black p-1 max-[320px]:p-0 flex items-center justify-center">
                :
              </span>
              <span className="text-black border border-black p-1 flex items-center justify-center">
                12
              </span>
              <span className="text-black p-1 max-[320px]:p-0 flex items-center justify-center">
                :
              </span>
              <span className="text-black border border-black  p-1 flex items-center justify-center">
                20
              </span>
              <span className="text-black p-1 max-[320px]:p-0 flex items-center justify-center">
                :
              </span>
              <span className="text-black border border-black  p-1 flex items-center justify-center">
                55
              </span>
            </div>
            </div>
            <div className="mt-16">
              <button className="py-1 border border-black  rounded-full text-base font-medium w-48 text-black">
                View All Products
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white col-span-12 2xl:col-span-9 xl:col-span-8 lg:col-span-8 md:col-span-8 ">
          <SwiperSalesComponent data={KidsSpecial} />
        </div>
      </div>
    </div>
  );
};

export default GrandSales;
