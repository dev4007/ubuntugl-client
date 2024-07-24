import React from "react";
import ShopByCategories from "./shop/ShopByCategories";
import ShopAds from "../advertisement/ShopAds";
import ShopVideoAds from "../advertisement/ShopVideoAds";


const ShopCategory = () => {
  return (
    <React.Fragment>
      <ShopByCategories />
      <ShopVideoAds/>
      <ShopAds />
    </React.Fragment>
  );
};

export default ShopCategory;
