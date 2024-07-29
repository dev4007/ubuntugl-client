import React from "react";
import { CgCloseR } from "react-icons/cg";
import { BsMenuButton } from "react-icons/bs";
import SearchResults from "../../pages/SearchResults/SearchResults";
// import SearchSideBar from "./SearchSideBar";
import SearchSideBar from "./Sidebar/SearchSideBar";
// import SideBar from "./SideBar";

const MenuBar = ({
  menus,
  selectedMenu,
  setSelectedMenu,
  sidebarShow,
  toggleSidebar,
}) => {
  return (
    <div className="flex flex-col">
      {/* Menu Bar */}
      <div className="flex items-center bg-white container mx-auto max-sm:px-4  border-gray-200">
        <div className="xl:hidden flex justify-start">
          <button
            className="py-2 px-5 rounded-md text-lg"
            onClick={toggleSidebar}
          >
            {sidebarShow ? <CgCloseR /> : <BsMenuButton />}
          </button>
        </div>
        <div className="flex-1 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full bg-white">
          <div className="flex flex-nowrap justify-center space-x-6 py-4 2xl:ml-40 max-xl:ml-0">
            {menus.map((menu) => (
              <div
                key={menu}
                className={`cursor-pointer whitespace-nowrap ${
                  selectedMenu === menu ? "border-b-2 border-black" : ""
                }`}
                onClick={() => {
                  setSelectedMenu(menu);
                  // Close sidebar on menu click (for small screens)
                  if (sidebarShow) toggleSidebar();
                }}
              >
                {menu}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          // className={`fixed inset-0 xl:static xl:w-1/5 z-50 overflow-auto ${
          className={`fixed inset-0 xl:static xl:w-3/12 z-50 overflow-auto ${
            sidebarShow ? "block" : "hidden"
          } xl:block bg-white border-r-2 border-gray-200`}
        >
          <div className="w-full flex xl:hidden justify-start p-4">
            <button
              className="bg-gray-200 p-2 rounded-md text-lg"
              onClick={toggleSidebar}
            >
              <CgCloseR />
            </button>
          </div>
          {/* <SideBar /> */}
          <SearchSideBar/>
        </div>

        {/* Content Area */}
        <div className="container mr-auto lg-ml-5 max-sm:px-4">
        {/* Your content here */}
        <SearchResults />
      </div>
      </div>
    </div>
  );
};

export default MenuBar;
