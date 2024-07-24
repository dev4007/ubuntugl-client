import React from "react";
import dress from "../../assets/photo/dress.png";

const ClothingSaleCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
      <div className="flex flex-col items-center md:items-start py-12 px-10">
        <h3 className="font-medium text-xl lg:text-3xl mb-2 text-center md:text-left">
          CLOTHING SALE
        </h3>
        <h1 className="text-3xl lg:text-7xl font-Pathway mb-4 text-center md:text-left">
          UPTO 25% OFF
        </h1>
        <div className="flex flex-col items-center md:flex-row md:items-center mb-4">
          <span className="font-medium text-lg md:text-2xl">
            Starting at
          </span>
          <span className="text-3xl md:text-5xl font-Pathway ml-2 md:ml-4 text-[#AC0404]">
            ₹899.
          </span>
        </div>
        <button className="py-2 border border-black px-4 rounded-full text-sm md:text-base w-36 text-black">
          Shop Now
        </button>
      </div>
      <div className="md:mt-0 md:flex-shrink-0">
        <img src={dress} alt="Dress" className="w-full h-auto object-cover max-w-xs md:max-w-full" />
      </div>
    </div>
  );
};

export default ClothingSaleCard;
