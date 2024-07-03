import React from "react";
import iphone12 from "../assets/Logo/iphone12.png";
// import computer from "../../assets/Logo/computer.jpg";
import computer from "../assets/Logo/tv.png";
import table from "../assets/Logo/table.png";
import watch from "../assets/Logo/watch.png";
import bag from "../assets/Logo/bag.png";
import shoes from "../assets/Logo/shoes.png";

const ResponsiveCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  md:gap-4">
      <div className="col-span-1 md:col-span-1">
        <div className="grid gap-4">
          <div className="p-4">
            <div className="bg-white mb-4">
              <div className="flex flex-col items-center">
                <h2 className="text-xl mt-11">Starting from $899</h2>
                <h3 className="text-lg mb-3">iPhone 12 Pro</h3>
                <p className="mb-2">128GB</p>
                <button className=" text-black py-2 font-bold px-4 rounded-md">
                  Shop Now
                </button>
                <div className="relative mt-10">
                  <img src={iphone12} alt="iPhone 12 Pro" className="w-full" />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1">
              <div className="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:flex">
                <div className="bg-white flex items-center">
                  <div className="flex flex-col items-center">
                    <h2 className="text-xl">Starting from $899</h2>
                    <p className="text-xl font-bold">Michael Kors</p>
                    <p className="text-xl font-bold">Premium Range</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                      Shop Now
                    </button>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <img src={watch} alt="" className="h-50 w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 md:col-span-2 ">
        <div className="grid gap-4">
          <div className="p-4">
            <div className="bg-[#FFE3D2] flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 my-24 space-x-10 ">
                <p></p>
                <div className="flex gap-2">
                  <p>From</p>
                  <p className="text-xl font-bold"> ₹ 2200</p>
                </div>
                <p className="text-3xl font-bold">Elevate Your</p>
                <p className="text-3xl font-bold">Digital Lifestyle</p>
                <p className="">
                  Brand new MacBook Pro for the pros. Now available at a
                  discount price for a limited time.
                </p>
                <button className=" text-black py-2 font-bold px-4 rounded-md mt-4">
                  Shop Now
                </button>
              </div>
              <img
                src={computer}
                alt="MacBook Pro"
                className="w-full md:w-1/2 h-auto my-12"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="bg-white p-4 flex items-center flex-col md:flex-row">
                  <div className="flex flex-col items-center text-center md:text-left md:w-1/2">
                    <h2 className="text-xl">Starting from $899</h2>
                    <p className="text-xl font-bold">Michael Kors</p>
                    <p className="text-xl font-bold">Premium Range</p>
                    <button className=" hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 md:mt-0">
                      Shop Now
                    </button>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                    <img src={bag} alt="Bag" className="h-50 w-auto" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="bg-white p-4 flex items-center flex-col md:flex-row">
                  <div className="flex flex-col items-center text-center md:text-left md:w-1/2">
                    <h2 className="text-xl">Starting from $899</h2>
                    <p className="text-lg font-bold">Michael Kors</p>
                    <p className="text-lg font-bold">Premium Range</p>
                    <button className=" text-white py-2 px-4 rounded-lg mt-4 md:mt-0">
                      Shop Now
                    </button>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                    <img src={shoes} alt="Shoes" className="h-50 w-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-1">
        <div className="p-4">
          <div className="sm:col-span-1 md:col-span-1 bg-stone-50">
            <div className="p-4 h-full">
              <div className="flex flex-col items-center">
                <h2 className="text-xl mb-2">Starting from $899</h2>
                <h3 className="text-lg mb-1 font-bold">Modern Home</h3>
                <p className="mb-2 font-bold">Furniture</p>
                <button className=" text-black py-2 font-bold px-4 rounded-md">
                  Shop Now
                </button>
                <div className="relative">
                  <img
                    src={table}
                    alt="iPhone 12 Pro"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCards;
