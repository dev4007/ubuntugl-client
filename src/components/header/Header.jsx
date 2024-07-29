import React, { useState } from "react";
import logo from "../../assets/Logo/Logo.svg";
import circle from "../../assets/Logo/circle.png";

import { LuHeart } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(3); // Replace with your dynamic item count from state or props

  // Function to update cart item count (example)
  const updateCartItemCount = (newCount) => {
    setCartItemCount(newCount);
  };
  return (
    <header>
      <div className="container mx-auto max-sm:px-4 py-5 flex flex-col lg:flex-row lg:justify-between lg:items-center text-black text-sm lg:space-x-10">
        {/* Logo */}
        <div className="flex justify-between lg:px-1">
          <div className="flex items-center">
            <img src={logo} alt="Brand Logo" />
          </div>
          <div className="lg:hidden">
            <div className="flex items-center space-x-6">
              {/* Wishlist */}
              <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
                <LuHeart size="25px" className="text-2xl" />
                <div className="hidden sm:flex flex-col">
                  <p className="text-xs">Wish List</p>
                  <span className="text-base font-medium">My Items</span>
                </div>
              </div>

              {/* Sign In */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <FiUser size="25px" className="text-2xl" />
                <div className="hidden sm:flex flex-col">
                  <p className="text-xs">Sign In</p>
                  <span className="text-base font-medium">Account</span>
                </div>
              </div>

              {/* Cart */}
              <div
                className="flex items-center space-x-1 sm:space-x-2 relative cursor-pointer"
                onClick={() => updateCartItemCount(0)}
              >
                {/* <FiShoppingCart size="25px" className="text-2xl" /> */}
                <div class=" relative inline-flex items-center p-3 text-sm font-medium text-center text-white">
                  <FiShoppingCart size="30px" className="text-2xl text-black" />
                  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#557DE4] border border-black rounded-full -top-0 -end-0 dark:border-gray-900">2</div>
                </div>
                <div className="hidden sm:flex flex-col">
                  <p className="text-xs">Total</p>
                  <span className="text-base font-medium">₹12000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow  lg:mt-0 mt-3">
          <div className="2xl:w-3/4 lg:w-5/4 sm:w-auto h-12 flex items-center border rounded-full overflow-hidden bg-white">
            <select className="hidden sm:flex bg-white text-black p-4 border-none outline-none text-base font-medium">
              <option>All Categories</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
            <div className="hidden lg:flex h-6 w-px bg-gray-300 mx-2"></div>
            {/* Vertical line */}
            <input
              type="text"
              placeholder="Search products..."
              className="flex-grow px-4 py-1 border-none text-base bg-white focus:outline-none" // Adjust text size for responsiveness
            />
            <button className="bg-primary px-2 max-[320px]:px-0 py-4">
              <img src={circle} className="p-2" alt="Brand Logo" />
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center space-x-10 max-xl:space-x-2">
          {/* Wishlist */}
          <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
            <LuHeart size="30px" className="text-2xl" />
            <div className="hidden sm:flex flex-col">
              <p className="text-xs">Wish List</p>
              <span className="text-base font-medium">My Items</span>
            </div>
          </div>

          {/* Sign In */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <FiUser size="30px" className="text-2xl" />
            <div className="hidden sm:flex flex-col">
              <p className="text-xs">Sign In</p>
              <span className="text-base font-medium">Account</span>
            </div>
          </div>

          {/* Cart */}
          <div
            className="flex items-center space-x-1 sm:space-x-2 relative cursor-pointer"
            onClick={() => updateCartItemCount(0)}
          >
            <div class=" relative inline-flex items-center p-3 text-sm font-medium text-center text-white">
              <FiShoppingCart size="30px" className="text-2xl text-black" />
              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#557DE4] border border-black rounded-full -top-0 -end-0 dark:border-gray-900">2</div>
            </div>
            <div className="flex flex-col">
              <p className="text-xs">Total</p>
              <span className="text-base font-medium">₹12000</span>
            </div>


          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
