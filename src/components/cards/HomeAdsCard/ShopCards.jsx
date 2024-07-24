import React from "react";
import bag from "../../../assets/Logo/bag.png";
import watch from "../../../assets/Logo/watch.png";
import shoes from "../../../assets/Logo/shoes.png";


const cardsData = [
  {
    bgColor: "bg-orange-200",
    price: "Starting from ₹899.",
    title: "Micheal Kors",
    subtitle: "Premium Range",
    image: watch,
  },
  {
    bgColor: "bg-purple-200",
    price: "Starting from ₹899.",
    title: "Nike Sports",
    subtitle: "Men’s Shoes",
    image: shoes,
  },
  {
    bgColor: "bg-yellow-200",
    price: "Starting from ₹899.",
    title: "Natural Leather",
    subtitle: "Handbags",
    image: bag,
  },
];
const ShopCards = () => {
  return (
    <React.Fragment>
      {cardsData.map((card, index) => (
        <div className="bg-white flex flex-grow flex-col lg:flex-row items-center justify-between px-5 py-3 max-w-sm md:max-w-full">
          <div className="order-2 lg:order-1 mt-2 flex flex-col md:flex-1">
            <div>
              <span className="text-[#1F5590]">{card.price}</span>
              <p className="xl:text-2xl lg:text-xl md:text-lg text-md font-bold">
                {card.title}
              </p>
              <p className="xl:text-2xl lg:text-xl md:text-lg text-md font-bold">
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
            className="order-1 lg:order-2 object-cover xl:max-w-screen-xl max-lg:w-auto h-auto"
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default ShopCards;
