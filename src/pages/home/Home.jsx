import React from "react";
import TrendingData from '../../components/home/posts/trending'
import ShopCategory from "../../components/home/categories";
import HomePageAd from './../../components/home/advertisement/HomePageAd';
import Special from "../../components/home/special";
import WeeklyVendors from "../../components/home/weekly-vendors";
import Category from "../../components/home/posts/category";
import BrowsingHistory from "../../components/home/browsing-history";
import AbandonedItems from "../../components/home/abandoned-items";



const Home = () => {
  return (
    <div className="mt-10 ">
    <HomePageAd/>
    <TrendingData/> 
    <ShopCategory/>
    <Special/>
    <WeeklyVendors/>
    <Category/>
    <BrowsingHistory/>
    <AbandonedItems/>
    </div>
  );
};

export default Home;
