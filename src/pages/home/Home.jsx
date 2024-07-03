import React from "react";
import ResponsiveCards from "./ResponsiveCards ";
import Trending from "./trending/Trending";
import ShopByCategories from "./ShopCategories/ShopByCategories ";

const Home = () => {
  return (
    <div>
      <Trending />
      <ShopByCategories/>
    </div>
  );
};

export default Home;
