import React from "react";
import { Strings } from "../constants";
import { BackButton } from "./Buttons";

const Header = () => {
  return (
      <div className="flex justify-center  items-center bg-gray-400 h-15 w-full ">
        <h1 className=" sm:text-2xl lg:text-2xl  font-bold text-center">
          {Strings.HEADER_TEXT}
        </h1>
        
      </div>
  );
};

export default Header;
