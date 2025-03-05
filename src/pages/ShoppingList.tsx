import React, { useCallback,  useState } from "react";
import TextField from "@mui/material/TextField";
import { Strings } from "../constants";
import { useGetFoodDataQuery } from "../api/shoppingApi";

const debounce = (fn: Function, delay: number) => {
  let timer: number;

  return function (value: string) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(value);
    }, delay);
  };
};

const ShoppingList = () => {
 

  const [Search, setSearch] = useState<string>("");
  
  
  const { data: matching, error, isLoading } = useGetFoodDataQuery(Search, {
    skip: Search.length < 3, });

  const myDebounceCallback = useCallback(debounce(setSearch, 500), []);

  const handleKeyPress = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    myDebounceCallback(event.target.value);
  };
  
  return (
    <div className=" flex flex-col  items-center gap-5">
      <h1 className="text-2xl font-bold  text-blue-600 ">
        {Strings.SHOPPING_TEXT}
      </h1>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        className="max-sm:w-3/4 lg:w-100 mt-25"
        onChange={handleKeyPress}
      />
     { <div className=" flex flex-col max-sm:w-3/4 lg:w-100 h-60 overflow-auto  border-2 border-blue-400 rounded p-5 gap-2">
        {
          isLoading && <p>Loading...</p>}
         { error && <p>Error occurred!</p>
        }
        {Search !== "" && <>{matching?.map((match,index)=>(
          <p key={index} className="text-blue-500 border border-blue-400 p-2">{match}</p>
        ))}</>}
      </div>}
      
    </div>
  );
};

export default ShoppingList;
