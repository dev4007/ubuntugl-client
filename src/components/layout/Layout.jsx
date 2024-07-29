import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useSidebar } from "../../provider/SidebarProvider";

const Layout = () => {
  const { isSidebarVisible, isBecomeVendor, isContectForm } = useSidebar();

  // Determine the main class name based on the conditions
  let mainClassName = "";
  if (isBecomeVendor) {
    mainClassName = "";
  } else if (isContectForm) {
    mainClassName = "";
  } else if (!isSidebarVisible) {
    mainClassName = "container mx-auto max-sm:px-4";
  }

  return (
    <div className="bg-slate-200">
      <Header />
      <Navbar />
      <main className={mainClassName}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
