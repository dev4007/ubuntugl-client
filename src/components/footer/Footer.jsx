import React from 'react';

const Footer = () => {
  return (
    <header className="bg-yellow-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Logo</div>
          <div className="hidden md:flex space-x-4">
            <div className="cursor-pointer">Deal of the Day</div>
            <div className="cursor-pointer">Hot Deals</div>
            <div className="cursor-pointer">Best Sellers</div>
            <div className="cursor-pointer">New Arrivals</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="w-48 p-2 border border-gray-300 rounded"
            placeholder="Search..."
          />
          <div className="cursor-pointer">Wishlist</div>
          <div className="cursor-pointer">Sign In</div>
          <div className="cursor-pointer">Cart (0)</div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
