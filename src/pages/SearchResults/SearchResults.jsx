import React, { useEffect, useState } from "react";

import ShopVideoAds from "../../components/home/advertisement/ShopVideoAds";
import ShopVideoAds2 from "../../components/home/advertisement/ShopVideoAds2";
import SearchResultsComponent from "../../components/swiper/SearchResultsComponent";
import { useSidebar } from "../../provider/SidebarProvider";
// import SearchResultSwiper from "../../components/SearchResultSwiper/SearchResultSwiper";


function SearchResults() {
  const { setSidebarVisible } = useSidebar();
  const [sidebarShow, setSidebarShow] = useState(false); // Initially hidden

  useEffect(() => {
    setSidebarVisible(true);

    return () => {
      setSidebarVisible(false);
    };
  }, [setSidebarVisible]);

  const toggleSidebar = () => {
    setSidebarShow(!sidebarShow);
  };

  return (
    <div className="">
      <div>
        <div className="py-4">
          Home / Electronics / <b>Headphones</b>
        </div>
        <ShopVideoAds2 />
        <SearchResultsComponent />
        <ShopVideoAds />
        <SearchResultsComponent />
      </div>
      <div className="flex flex-col justify-center items-center py-10 bg-gray-100">
        <div className="flex items-center space-x-2">
          <button className="lg:px-3 lg:py-2 px-2 py-1 bg-white rounded-full text-xs sm:text-base lg:text-xl">
            &lt;
          </button>
          <button className="lg:px-3 lg:py-2 px-2 py-1 bg-white rounded-full text-xs sm:text-base lg:text-xl">
            1
          </button>
          <button className="lg:px-3 lg:py-2 px-2 py-1 bg-yellow-400 rounded-full text-xs sm:text-base lg:text-xl">
            2
          </button>
          <button className="lg:px-3 lg:py-2 px-2 py-1 bg-white rounded-full text-xs sm:text-base lg:text-xl">
            3
          </button>
          <button className="lg:px-3 lg:py-2 px-2 py-1 lg:block hidden bg-white rounded-full text-xs sm:text-base lg:text-xl">
            4
          </button>
          <button className="lg:px-3 lg:py-2 px-2 py-1 lg:block hidden bg-white rounded-full text-xs sm:text-base lg:text-xl">
            5
          </button>
          <span className="lg:px-3 lg:py-2 px-2 py-1 bg-white rounded-full text-xs sm:text-base lg:text-xl">
            ...
          </span>
          <button className="lg:px-3 lg:py-2 px-2 py-1 bg-white rounded-full text-xs sm:text-base lg:text-xl">
            20
          </button>
          <button className="lg:px-3 lg:py-2 px-2 py-1 bg-white rounded-full text-xs sm:text-base lg:text-xl">
            &gt;
          </button>
        </div>
        <div className="mt-2 text-center py-4">
          <span className="text-xs sm:text-xs lg:text-xl">
            1 - 20 of 300+ products found
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
