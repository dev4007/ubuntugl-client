import React, { useState } from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useSidebar } from "../../provider/SidebarProvider";
import MenuBar from "../Sidebar/MenuBar";
import { menus } from "../../data/Menus";

const Layout = () => {
  const { isSidebarVisible } = useSidebar();

  const [selectedMenu, setSelectedMenu] = useState("Headphones");
  const [sidebarShow, setSidebarShow] = useState(false); // Initially hidden


  const toggleSidebar = () => {
    setSidebarShow(!sidebarShow);
  };

  return (
    <div className="bg-slate-200">
      <Header />
      <Navbar />
      <MenuBar
        menus={menus}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        sidebarShow={sidebarShow}
        toggleSidebar={toggleSidebar}
      />
      <main className="container mx-auto max-sm:px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
