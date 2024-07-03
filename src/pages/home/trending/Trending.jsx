import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // Importing icons
import { cards } from "../../../data/Prodcuts";
import Ads from "./Ads";

const TrendingMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("Electronics");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const ratingStars = 5; // Assuming 5 stars rating

  const handleCardHover = (index, isHovered) => {
    if (isHovered) {
      setSelectedCardIndex(index);
    } else {
      setSelectedCardIndex(null);
    }
  };

  // Function to render star icons
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < ratingStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-3 h-3 fill-current text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.35 7.18h7.65l-6 4.64 2.35 7.18-6-4.64-6 4.64 2.36-7.18-6-4.64h7.65z" />
        </svg>
      );
    }
    return stars;
  };

  const menus = ["Electronics", "Health & Wellness", "Clothing", "Furniture"];
 
  const visibleCards = cards.slice(currentIndex, currentIndex + 6);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
    // Add your logic for adding to cart here
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <h1 className="text-lg font-semibold">Currently Trending</h1>
        <div className="w-full sm:w-auto overflow-x-auto">
          <div className="flex flex-nowrap space-x-4 sm:space-x-8">
            {menus.map((menu) => (
              <div
                key={menu}
                className={`cursor-pointer whitespace-nowrap ${
                  selectedMenu === menu ? "border-b-2 border-black" : ""
                }`}
                onClick={() => setSelectedMenu(menu)}
              >
                {menu}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden py-4 px-5 mt-5">
        <div className="grid grid-cols-1 max-[640px]:grid-cols-2  max-[375px]:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden justify-center hover:shadow-xl hover:rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300"
              onMouseEnter={() => handleCardHover(index + currentIndex, true)}
              onMouseLeave={() => handleCardHover(index + currentIndex, false)}
            >
              <span className="bg-yellow-500">{card.tag}</span>

              <img
                src={card.image}
                alt="Product"
                className={`w-45 h-45 object-cover ${
                  card.tag ? "p-1" : "py-4"
                } px-4`}
              />

              <div className="px-6 py-4 flex-wrap">
                <div className="flex items-center mb-2">
                  <span className="font-bold text-lg text-gray-900 mr-2">
                    {card.price}
                  </span>
                  <span className="text-sm text-gray-600 line-through mr-2 mt-0">
                    {card.previousPrice}
                  </span>
                  <span className="text-sm text-black bg-yellow-300 rounded-full  px-3">
                    {card.discount}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-gray-600"> {card.brand}</span>
                </div>
                <div className="font-bold text-sm mb-2">{card.name}</div>
                <div className="flex items-center flex-wrap">
                <span className="flex">{renderStars()}</span> {/* Render star icons */}
                <span className="text-sm text-gray-600 lg:ml-2 md:ml-2 max-[320px]:ml-2">
                  {card.reviews} reviews
                </span>
              </div>
              

                {index + currentIndex === selectedCardIndex && (
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex bg-slate-300 rounded text-sm w-25">
                      <button
                        className=" font-bold py-2 px-4 rounded-l"
                        onClick={handleDecrement}
                      >
                        -
                      </button>
                      <span className="py-2">{quantity}</span>
                      <button
                        className="font-bold py-2 px-4 rounded-r"
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="bg-yellow-500 w-25 text-black text-xs font-bold py-2 px-2 rounded focus:outline-none"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-2 rounded-full ${
                index >= currentIndex && index < currentIndex + 1
                  ? "bg-blue-400"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* 
        <div className="absolute top-1/2 left-4">
        <button
          className="absolute left-0 z-10 p-2 bg-blue-400 hover:bg-gray-300 rounded-full"
          onClick={scrollLeft}
        >
          <MdChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 ">
        <button
          className="absolute right-0 z-10 p-2 bg-blue-400 hover:bg-gray-300 rounded-full"
          onClick={scrollRight}
        >
          <MdChevronRight size={24} />
        </button>
      </div>
      */}
      </div>
      <Ads/>
      <div className="border-t-2 border-gray-300 mt-5"></div>
    </div>
  );
};

export default TrendingMenu;
