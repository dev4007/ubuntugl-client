import React, { useEffect, useState } from "react";

import { BsMenuButton } from "react-icons/bs";
import { CgCloseR } from "react-icons/cg";
import ShopVideoAds from "../../components/home/advertisement/ShopVideoAds";
import ShopVideoAds2 from "../../components/home/advertisement/ShopVideoAds2";
import SearchResultsComponent from "../../components/swiper/SearchResultsComponent";
import { useSidebar } from "../../provider/SidebarProvider";
import Sidebar from "../../components/Sidebar/Sidebar";
import MenuBar from "../../components/Sidebar/MenuBar";

// import { cards } from "../../data/SearchResultsProducts";

function SearchResults() {
  const { setSidebarVisible } = useSidebar();
  const [selectedMenu, setSelectedMenu] = useState("Headphones");
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
    <div>
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
          <button className="px-3 py-2 bg-white rounded-full text-sm sm:text-base lg:text-xl">
            &lt;
          </button>
          <button className="px-3 py-2 bg-white rounded-full text-sm sm:text-base lg:text-xl">
            1
          </button>
          <button className="px-3 py-2 bg-yellow-400 rounded-full text-sm sm:text-base lg:text-xl">
            2
          </button>
          <button className="px-3 py-2 bg-white rounded-full text-sm sm:text-base lg:text-xl">
            3
          </button>
          <button className="px-3 py-2 bg-white rounded-full text-sm sm:text-base lg:text-xl">
            4
          </button>
          <button className="px-3 py-2 bg-white rounded-full text-sm sm:text-base lg:text-xl">
            5
          </button>
          <span className="px-3 py-2 bg-white rounded-full text-sm sm:text-base lg:text-xl">
            ...
          </span>
          <button className="px-3 py-2 bg-white rounded-full text-sm sm:text-base lg:text-xl">
            20
          </button>
          <button className="px-3 py-2 bg-white rounded-full text-sm sm:text-base lg:text-xl">
            &gt;
          </button>
        </div>
        <div className="mt-2 text-center py-4">
          <span className="text-xs sm:text-sm lg:text-xl">
            1 - 20 of 300+ products found
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
