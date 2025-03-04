import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { BackButton } from "../components/Buttons";

const Layout = () => {
  return (
    <div className="flex h-screen flex-col justify-between relative">
      <Header />
      <BackButton />
      <div className="overflow-auto">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
