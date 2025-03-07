import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { BreadCrum } from "../components/Buttons";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
const Layout = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={theme === "light" ?"flex h-screen flex-col justify-between  relative" : "bg-black flex h-screen flex-col justify-between  relative"}>
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
