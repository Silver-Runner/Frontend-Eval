import React, { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import { Strings } from "../constants";
import { useGetFoodDataQuery } from "../redux/services/shoppingApi";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
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
  const theme = useSelector((state: RootState) => state.theme.theme);
  const {
    data: matching,
    error,
    isLoading,
  } = useGetFoodDataQuery(Search, {
    skip: Search.length < 3,
  });

  const myDebounceCallback = useCallback(debounce(setSearch, 500), []);

  const handleKeyPress = (event: React.ChangeEvent<HTMLInputElement>) => {
    myDebounceCallback(event.target.value);
  };

  return (
    <div className=" flex flex-col  items-center gap-5">
      <h1 className={theme === "light" ? "text-2xl font-bold  text-gray-600 ": "text-2xl font-bold  text-white"}>
        {Strings.SHOPPING_TEXT}
      </h1>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={theme === "dark" ?{
          input: { color: "white" },
          label: { color: "#B45309" },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#B45309",
            },
            "&:hover fieldset": {
              borderColor: "#B45309",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#B45309",
            },
          },
        }:{"& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#60A5FA",
            },
            "&:hover fieldset": {
              borderColor: "#60A5FA",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#60A5FA",
            },
          },}}
        className="max-sm:w-3/4 lg:w-100 mt-25 border-2 border-blue-400 outline--none text-white"
        onChange={handleKeyPress}
      />
      {
        <div className={theme === "light" ? " flex flex-col max-sm:w-3/4 lg:w-100 h-60 overflow-auto  border-2 border-blue-400 rounded p-5 gap-2":
          " flex flex-col max-sm:w-3/4 lg:w-100 h-60 overflow-auto  border-2 border-yellow-700 rounded p-5 gap-2"}>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error occurred!</p>}
          {Search !== "" && (
            <>
              {matching?.map((match, index) => (
                <p
                  key={index}
                  className={theme === "light" ? "text-blue-500 border border-blue-400 p-2": "text-white border border-yellow-700 p-2"}
                >
                  {match}
                </p>
              ))}
            </>
          )}
        </div>
      }
    </div>
  );
};

export default ShoppingList;
