import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { menus } from "../../data/Menus";

const SidebarMainMenu = () => {

  const [selectedMenu, setSelectedMenu] = useState("Headphones");
  const [sidebarShow, setSidebarShow] = useState(false); // Initially hidden

  const toggleSidebar = () => {
    setSidebarShow(!sidebarShow);
  };
  return (
    <React.Fragment>
      <MenuBar
        menus={menus}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        sidebarShow={sidebarShow}
        toggleSidebar={toggleSidebar}
      />
    </React.Fragment>
  );
};

export default SidebarMainMenu;
