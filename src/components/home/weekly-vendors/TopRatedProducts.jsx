import React from "react";

import makeup from "../../../assets/rated/makeup.png";
import { ratedProduct } from "../../../data/Products";

const TopRatedProducts = () => {
  return (
    <div className="mt-5">
    <div className="grid grid-cols-12 gap-10 max-md:gap-0">
    <div className="col-span-4 max-lg:col-span-12 bg-[#F6EFEC] flex flex-col relative">
      <div class="px-10 max-md:px-5 relative top-20 max-sm:top-5">
        <p className="text-xl max-sm:text-base font-medium mb-3">
          TOP RATED BY USERS
        </p>
        <h2 className="text-4xl max-sm:text-xl font-medium flex-wrap">
          Take your Skin Care Routine to Another Level
        </h2>
        <button className="bg-[#FCC626] text-black text-2xl max-sm:text-lg font-medium py-3 px-12  rounded-3xl lg:relative top-12 max-sm:mt-5 md:mt-5 max-md:mt-5">
          Shop Now
        </button>
      </div>
      <img
        src={makeup}
        alt=" "
        className="w-full h-full object-cover max-sm:mt-5"
      />
    </div>

    <div className="col-span-8 max-lg:col-span-12 grid grid-cols-4 max-md:grid-cols-2 gap-10 max-md:gap-2 max-md:mt-5">
      {ratedProduct.map((card, index) => (
        <div
          key={index}
          className="bg-white overflow-hidden rounded-lg justify-center hover:shadow-xl hover:rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300"
        >
          {/* Render tag if available */}
          {card.tag ? (
            <span
              className={`py-1 px-1 rounded-tl-lg text-sm max-sm:text-xs rounded-br-lg ${
                card.tag === "UBUNTU'S CHOICE"
                  ? "bg-[#557DE4] text-white"
                  : "bg-[#FCC626] text-black"
              }`}
            >
              {card.tag}
            </span>
          ) : (
            <span className="py-1 px-1">&nbsp;</span>
          )}

          <div class="flex flex-col items-center pb-10">
            <img
              src={card.image}
              alt="Product"
              className="w-25 h-25 object-cover"
            />

            {/* Product details */}
            <div className="px-4 max-[375px]:px-3 flex-wrap">
              <div className="flex items-center mb-2">
                <span className="font-bold text-base max-[375px]:text-xs text-gray-900 mr-2">
                  {card.price}
                </span>
                <span className="text-xs max-[375px]:text-xs text-gray-600 line-through mr-2 mt-0">
                  {card.previousPrice}
                </span>
                <span className="text-xs text-black bg-yellow-300 rounded-full px-3">
                  {card.discount}
                </span>
              </div>
              <div>
                <span className="text-xs max-[375px]:text-xs text-gray-600">
                  {card.brand}
                </span>
              </div>
              <div className="font-normal max-[375px]:text-xs text-base mb-2">
                {card.name}
              </div>
              <div className="flex items-center flex-wrap">
                {/* Render star icons */}
                <span className="flex">
                  {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-3 h-3 fill-current ${
                          card.tag === "UBUNTU'S CHOICE"
                            ? starValue <= card.rating
                              ? "text-blue-500"
                              : "text-gray-300"
                            : starValue <= card.rating
                            ? "text-orange-400"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l2.35 7.18h7.65l-6 4.64 2.35 7.18-6-4.64-6 4.64 2.36-7.18-6-4.64h7.65z" />
                      </svg>
                    );
                  })}
                </span>{" "}
                <span className="text-xs text-gray-600 lg:ml-2 md:ml-2 max-[320px]:ml-0">
                  {card.reviews} reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    </div>
  );
};

export default TopRatedProducts;
