import React from "react";
import table from "../../../assets/Logo/table.png";

const ModernHome = () => {
  return (
    <div className="col-span-1 md:col-span-1 bg-white w-full mt-12">
      <div className="flex flex-col items-center p-4">
        <p className="text-2xl text-[#557DE4] ">Starting from $899.</p>
        <h3 className="text-4xl font-medium">Modern Home</h3>
        <p className="text-4xl font-medium">Furniture</p>
        <button className="py-2 border border-black  rounded-full text-base font-medium w-36 text-black mt-5">
          Shop Now
        </button>
      </div>
      <div className="relative flex flex-col justify-end w-full">
        <img src={table} alt="Furniture" className="object-cover w-full" />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default ModernHome;
