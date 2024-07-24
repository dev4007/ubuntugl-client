import React from "react";
import CategorySpecial from "./CategorySpecial";
import SpecialAds from "./SpecialAds";
import GrandSaleCard from "./GrandSales";


const Special = () => {
  return (
    <React.Fragment>
      <CategorySpecial />
      <SpecialAds />
      <GrandSaleCard/>
    </React.Fragment>
  );
};

export default Special;
