import React from 'react';
import iphone12 from "../../assets/Logo/iphone12.png";
// import computer from "../../assets/Logo/computer.jpg";
import computer from "../../assets/Logo/tv.png";
import table from "../../assets/Logo/table.png";





const ResponsiveCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
    {/* First Card */}
    <div className="bg-blue-500 text-white p-4 rounded-md">
      <div className="flex flex-col items-center">
        <h2 className="text-xl mb-2">Starting from $899</h2>
        <h3 className="text-lg mb-1">iPhone 12 Pro</h3>
        <p className="mb-2">128GB</p>
        <button className="bg-white text-blue-500 py-1 px-4 rounded-md mb-2">Shop Now</button>
        <div className="relative">
          <img src="path_to_iphone_image.jpg" alt="iPhone 12 Pro" className="w-full" />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>

    {/* Second Card */}
    <div className="bg-green-500 text-white p-4 rounded-md">
      <div className="flex flex-col items-center">
        <h2 className="text-xl mb-2">Starting from $899</h2>
        <h3 className="text-lg mb-1">iPhone 12 Pro</h3>
        <p className="mb-2">128GB</p>
        <button className="bg-white text-green-500 py-1 px-4 rounded-md mb-2">Shop Now</button>
        <div className="relative">
          <img src="path_to_iphone_image.jpg" alt="iPhone 12 Pro" className="w-full" />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>

    {/* Third Card */}
    <div className="bg-red-500 text-white p-4 rounded-md sm:row-span-2">
      <div className="flex flex-col items-center">
        <h2 className="text-xl mb-2">Starting from $899</h2>
        <h3 className="text-lg mb-1">iPhone 12 Pro</h3>
        <p className="mb-2">128GB</p>
        <button className="bg-white text-red-500 py-1 px-4 rounded-md mb-2">Shop Now</button>
        <div className="relative">
          <img src="path_to_iphone_image.jpg" alt="iPhone 12 Pro" className="w-full h-64 object-cover" />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>

    {/* Fourth Card */}
    <div className="bg-blue-500 text-white p-4 rounded-md">
      <div className="flex flex-col items-center">
        <h2 className="text-xl mb-2">Starting from $899</h2>
        <h3 className="text-lg mb-1">iPhone 12 Pro</h3>
        <p className="mb-2">128GB</p>
        <button className="bg-white text-blue-500 py-1 px-4 rounded-md mb-2">Shop Now</button>
        <div className="relative">
          <img src="path_to_iphone_image.jpg" alt="iPhone 12 Pro" className="w-full" />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>

    {/* Fifth Card */}
    <div className="bg-green-500 text-white p-4 rounded-md">
      <div className="flex flex-col items-center">
        <h2 className="text-xl mb-2">Starting from $899</h2>
        <h3 className="text-lg mb-1">iPhone 12 Pro</h3>
        <p className="mb-2">128GB</p>
        <button className="bg-white text-green-500 py-1 px-4 rounded-md mb-2">Shop Now</button>
        <div className="relative">
          <img src="path_to_iphone_image.jpg" alt="iPhone 12 Pro" className="w-full" />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>

    {/* Sixth Card */}
    <div className="bg-red-500 text-white p-4 rounded-md">
      <div className="flex flex-col items-center">
        <h2 className="text-xl mb-2">Starting from $899</h2>
        <h3 className="text-lg mb-1">iPhone 12 Pro</h3>
        <p className="mb-2">128GB</p>
        <button className="bg-white text-red-500 py-1 px-4 rounded-md mb-2">Shop Now</button>
        <div className="relative">
          <img src="path_to_iphone_image.jpg" alt="iPhone 12 Pro" className="w-full h-64 object-cover" />
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
);
};



export default ResponsiveCards;
