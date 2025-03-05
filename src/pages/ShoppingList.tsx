import React, { useCallback,  useState } from "react";
import TextField from "@mui/material/TextField";
import { Strings } from "../constants";

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
  const ApiURL = "https://api.frontendeval.com/fake/food/";

  const [Search, setSearch] = useState<string>("");
  const [matching,setMatching] = useState<string[]>([])
  const getData = async (value: string) => {
    try {
      if (value.length >= 3) {
        const res = await fetch(ApiURL + value);
        const data = await res.json();
        setMatching([...data])
      }
    } catch (error) {
      console.log(error)
    }
  };

  const myDebounceCallback = useCallback(debounce(getData, 500), []);

  const handleKeyPress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
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
        className="sm:w-3/4 lg:w-100 mt-25"
        onChange={handleKeyPress}
      />
     { <div className=" flex flex-col sm:w-3/4 lg:w-100 h-60 overflow-auto  border-2 border-blue-400 rounded p-5 gap-2">
        {Search !== "" && <>{matching.map((match,index)=>(
          <p key={index} className="text-blue-500 border border-blue-400 p-2">{match}</p>
        ))}</>}
      </div>}
      
    </div>
  );
};

export default ShoppingList;
