import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { BreadCrum } from "../components/Buttons";

const Layout = () => {
  return (
    <div className="flex h-screen flex-col justify-between  relative">
      <Header />
      <BreadCrum />
      <div className="overflow-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
