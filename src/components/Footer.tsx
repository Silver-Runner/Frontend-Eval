import { Link } from "react-router-dom";
import { images } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between py-3 ">
      <p className="flex-1 border-l ml-2 items-center border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @xyz | All rights reserved.
      </p>
      <div className="flex gap-4 items-center">
        <Link to={"https://www.facebook.com/"}>
          <img width={38} src={images.facebook_icon} alt="Facebook" />
        </Link>
        <Link to={"https://www.instagram.com/accounts/login/?hl=en"}>
          <img width={38} src={images.instagram_icon} alt="Instagram" />
        </Link>
        <Link
          to={
            "https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyIiOiIiLCJteCI6IjIifQ%3D%3D%22%7D"
          }
        >
          <img width={38} src={images.twitter_icon} alt="Twitter" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
