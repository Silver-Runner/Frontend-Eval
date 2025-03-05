import { Strings } from "../constants";
const Header = () => {
  return (
    <div className="bg-white shadow-lg py-3">
      <div className="container flex justify-center  items-center   mx-auto">
      <h1 className=" max-sm:text-2xl lg:text-2xl  font-bold text-center">
        {Strings.HEADER_TEXT}
      </h1>
    </div>
    </div>
  );
};

export default Header;
