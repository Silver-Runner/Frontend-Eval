import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/filter/filterSlice"; 
import { RootState } from "../app/store";

const Filter: React.FC = () => {
  
  const difficulty = useSelector((state: RootState) => state.filter.filter); 
  const theme = useSelector((state: RootState) => state.theme.theme);

  const dispatch = useDispatch();

  const difficultyOptions = [
    { label: "All", value: "all" },
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDifficulty = e.target.value as 'all' | 'easy' | 'medium' | 'hard';
    
    dispatch(setFilter(newDifficulty));
  };

  return (
    <div className="absolute top-15 right-5 p-1">
      <select
        value={difficulty}
        onChange={handleChange}
        className={theme === "light" ? "p-1 text-sm text-gray-600 border border-blue-200 rounded shadow-xl focus:outline-none":
          "p-1 text-sm text-white border border-yellow-700 rounded shadow-xl focus:outline-none focus:bg-black"
        }
      >
        {difficultyOptions.map((option) => (
          <option key={option.value} value={option.value} className="border border-blue-200">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
