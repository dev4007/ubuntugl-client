import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-slate-200">
      <Header />
      <Navbar />
      <main className="container  mx-auto xl:px-0 lg:px-4 md:px-4 max-sm:px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
