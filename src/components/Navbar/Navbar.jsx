import React from "react";
import { RiMenu4Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <nav className="shadow-sm bg-white">
      {/* Yellow Part with Categories and Menu Items    */}
      <div className="bg-yellow-400 text-black py-2">
        <div className="container mx-auto max-sm:px-4 flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <RiMenu4Line size="25px" />
            <span className="font-medium text-xl">Browse Categories</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="hover:underline font-medium text-xl ml-5">
              Deal of the Day
            </a>
            <a href="#" className="hover:underline font-medium text-xl">
              Hot Deals
            </a>
            <a href="#" className="hover:underline font-medium text-xl">
              Best Sellers
            </a>
            <a href="#" className="hover:underline font-medium text-xl">
              New Arrivals
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
