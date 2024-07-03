import React, { useState } from "react";
import logo from "../../assets/Logo/Logo.png";
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
        <div className="container mx-auto py-5 flex flex-col lg:flex-row lg:justify-between lg:items-center text-black text-sm lg:space-x-5">
          {/* Logo */}
          <div className="flex justify-between lg:px-0 px-3">
            <div className="flex items-center">
              <a
                href="/"
                className="border border-transparent p-1 hover:border-white"
              >
                <img src={logo} alt="Brand Logo" />
              </a>
            </div>
            <div className="lg:hidden">
              <div className="flex items-center space-x-6">
                {/* Wishlist */}
                <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
                  <LuHeart size="25px" className="text-2xl" />
                  <div className="hidden sm:flex flex-col">
                    <p className="text-xs">Wish List</p>
                    <span className="text-xs font-bold">My Items</span>
                  </div>
                </div>

                {/* Sign In */}
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <FiUser size="25px" className="text-2xl" />
                  <div className="hidden sm:flex flex-col">
                    <p className="text-xs">Sign In</p>
                    <span className="text-xs font-bold">Account</span>
                  </div>
                </div>

                {/* Cart */}
                <div
                  className="flex items-center space-x-1 sm:space-x-2 relative cursor-pointer"
                  onClick={() => updateCartItemCount(0)}
                >
                  <FiShoppingCart size="25px" className="text-2xl" />
                  <div className="hidden sm:flex flex-col">
                    <p className="text-xs">Total</p>
                    <span className="text-xs font-bold">$ 12000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow px-3 lg:mt-0 mt-3">
            <div className="lg:w-5/6 flex items-center border rounded-full overflow-hidden bg-white">
              <select className="hidden lg:flex bg-white text-black p-2 border-none outline-none">
                <option>All Categories</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
              <div className="hidden lg:flex h-6 w-px bg-gray-300 mx-2"></div>
              {/* Vertical line */}
              <input
                type="text"
                placeholder="Search Product..."
                className="flex-grow px-2 py-1 border-none bg-white focus:outline-none text-sm md:text-base" // Adjust text size for responsiveness
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 lg:px-2 md:px-1 sm:px-1 py-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 19L15.5 15.5M10 14a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Wishlist */}
            <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
              <LuHeart size="30px" className="text-2xl" />
              <div className="hidden sm:flex flex-col">
                <p className="text-xs">Wish List</p>
                <span className="text-xs font-bold">My Items</span>
              </div>
            </div>

            {/* Sign In */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <FiUser size="30px" className="text-2xl" />
              <div className="hidden sm:flex flex-col">
                <p className="text-xs">Sign In</p>
                <span className="text-xs font-bold">Account</span>
              </div>
            </div>

            {/* Cart */}
            <div
              className="flex items-center space-x-1 sm:space-x-2 relative cursor-pointer"
              onClick={() => updateCartItemCount(0)}
            >
              <FiShoppingCart size="30px" className="text-2xl" />
              <div className="flex flex-col">
                <p className="text-xs">Total</p>
                <span className="text-xs font-bold">$ 12000</span>
              </div>
            </div>
          </div>
        </div>
 
  
    </header>
  );
};

export default Header;
