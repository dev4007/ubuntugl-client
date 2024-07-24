import React from "react";
import paper from "../../../assets/shop/paper.png";
import facewash from "../../../assets/shop/facewash.png";
import rounds from "../../../assets/shop/rounds.png";
import chair from "../../../assets/shop/chair.png";
import shirt from "../../../assets/shop/shirt.png";

const ShopAds = () => {
  const cardsData = [
    {
      bgColor: "bg-orange-200",
      price: "Starting from ₹899.",
      title: "Toilet Paper",
      subtitle: "Rolls",
      image: paper,
    },
    {
      bgColor: "bg-purple-200",
      price: "Starting from ₹899.",
      title: "Loreal Paris",
      subtitle: "Shampoo",
      image: facewash,
    },
    {
      bgColor: "bg-yellow-200",
      price: "Starting from ₹899.",
      title: "Toilet Paper",
      subtitle: "Rolls",
      image: rounds,
    },
    {
      bgColor: "bg-green-200",
      price: "Starting from ₹899.",
      title: "Toilet Paper",
      subtitle: "Rolls",
      image: chair,
    },
    {
      bgColor: "bg-red-200",
      price: "Starting from ₹899.",
      title: "Toilet Paper",
      subtitle: "Rolls",
      image: shirt,
    },
  ];

  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) =>
          index === 1 ? (
            <div key={index} className={`max-md:order-1 row-span-2 flex flex-col justify-between items-center text-center ${card.bgColor}`}>
              <div className="flex flex-col items-center mt-5">
                <h2 className="text-xl">{card.price}</h2>
                <h3 className="lg:text-2xl text-xl font-bold">{card.title}</h3>
                <p className="lg:text-2xl text-xl font-bold">{card.subtitle}</p>
                <button className="py-1 border border-black px-4 rounded-full text-sm w-28 text-black mt-5">
                  Shop Now
                </button>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-64 mt-7 object-cover"
                />
              </div>
            </div>
          ) : (
            <div key={index} className={`p-5 justify-between flex flex-row items-center md:items-start text-center md:text-left ${card.bgColor}`}>
              <div className="mt-2 flex flex-col">
                <div>
                  <span className="text-[#1F5590]">{card.price}</span>
                  <p className="xl:text-2xl lg:text-xl md:text-lg max-sm:text-md font-bold">
                    {card.title}
                  </p>
                  <p className="xl:text-2xl lg:text-xl md:text-lg max-sm:text-md font-bold">
                    {card.subtitle}
                  </p>
                </div>
                <button className="py-1 border border-black px-4 rounded-full text-sm w-28 text-black mt-5">
                  Shop Now
                </button>
              </div>
              <img
                src={card.image}
                alt={card.title}
                className="w-40 max-sm:w-1/2 mt-4 md:mt-0 object-cover"
              />
            </div>
          )
        )}
      </div>
      <div className="border-t-2 border-gray-300 mt-10"></div>
    </div>
  );
};

export default ShopAds;
