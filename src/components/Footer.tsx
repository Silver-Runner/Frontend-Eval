import { Link } from "react-router-dom";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between py-3 max-sm:justify-center max-sm:flex-col max-sm:py-2 max-sm:gap-2 border-t-1 border-blue-100">
      <p className={theme === "light" ?"flex-1 border-l ml-2 items-center border-gray-400 pl-4 text-sm text-gray-500 max-sm:text-xs":
        "flex-1 border-l ml-2 items-center border-white pl-4 text-sm text-white max-sm:text-xs"}>
        Copyright @xyz | All rights reserved.
      </p>
      <div className="flex gap-4 items-center">
        <Link to={"https://www.facebook.com/"}>
          <FacebookIcon className={theme === "light" ?"text-blue-500":"text-yellow-700"} /> 
        </Link>
        <Link to={"https://www.instagram.com/accounts/login/?hl=en"}>
         <InstagramIcon className={theme === "light" ?"text-blue-500":"text-yellow-700"} />
        </Link>
        <Link
          to={
            "https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyIiOiIiLCJteCI6IjIifQ%3D%3D%22%7D"
          }
        >
          <XIcon className={theme === "light" ?"text-blue-500":"text-yellow-700"} />
         
        </Link>
      </div>
    </div>
  );
};

export default Footer;
