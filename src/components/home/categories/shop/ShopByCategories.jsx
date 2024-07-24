import React from "react";
import clothing from "../../../../assets/shop/clothing.png";
import beauty from "../../../../assets/shop/beauty.png";
import game from "../../../../assets/shop/game.png";
import kitchen from "../../../../assets/shop/home.png";
import electronic from "../../../../assets/shop/electronic.png";
import furniture from "../../../../assets/shop/furniture.png";
import toy from "../../../../assets/shop/toy.png";

const categories = [
  {
    title: "Electronics",
    items: [
      "Television Sets",
      "Air Conditioning Units",
      "Washing Machines",
      "Audio Systems",
      "Office Electronics",
    ],
    image: electronic,
  },
  {
    title: "Clothing",
    items: ["Tops", "Bottoms", "Dresses", "Outerwear", "Accessories"],
    image: clothing,
  },
  {
    title: "Furniture",
    items: ["Sofas", "Tables", "Chairs", "Bookcases", "Desks"],
    image: furniture,
  },
  {
    title: "Home & Kitchen",
    items: ["Cookware", "Cutlery", "Bakeware", "Storage", "Utensils"],
    image: kitchen,
  },
  {
    title: "Baby Products",
    items: [
      "Baby Strollers",
      "Diaper Bags",
      "Baby Monitors",
      "Nursery Decor",
      "Feeding Essentials",
    ],
    image: toy,
  },
  {
    title: "Toys & Video Games",
    items: [
      "Action Figures",
      "Board Games",
      "Console Games",
      "Virtual Reality Games",
      "Handheld Console",
    ],
    image: game,
  },
  {
    title: "Health & Wellness",
    items: [
      "Vitamins",
      "Supplements",
      "Fitness equipment",
      "Healthy snacks",
      "Self-care products",
    ],
    image: beauty,
  },
  {
    title: "Beauty",
    items: ["Skincare", "Makeup", "Haircare", "Fragrances", "Tools"],
    image: beauty,
  },
];

const ShopByCategories = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-medium 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl max-sm:text-2xl">
          Shop by Categories
        </h1>
        <a href="#" className="text-blue-500">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white px-6 py-5 rounded-md shadow-md flex flex-col justify-between"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <div className="flex justify-between items-center">
                <ul className="text-sm text-gray-600 leading-6 mb-4">
                  {category.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <img
                  src={category.image}
                  alt={`${category.title}`}
                  className="w-1/2 h-auto"
                />
              </div>
              <a href="#" className="text-blue-500 text-sm text-bold underline">
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategories;
