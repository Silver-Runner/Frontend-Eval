import React from "react";
import { useNavigate } from "react-router-dom";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SignalCellularAlt2BarIcon from "@mui/icons-material/SignalCellularAlt2Bar";
import SignalCellularAlt1BarIcon from "@mui/icons-material/SignalCellularAlt1Bar";

import { RootState } from "../app/store";
import { useSelector } from "react-redux";


interface HomeCardProps {
  title: string;
  description: string;
  navigate: string;
  difficulty: string;
}
const HomeCard: React.FC<HomeCardProps> = ({
  title,
  description,
  navigate,
  difficulty,
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigateTo = useNavigate();
  return (
    <div>
      <div
        className={theme === "light" ? "flex flex-col border border-blue-100 items-start justify-center w-70 h-40  gap-2 shadow-xl border-l-10  border-l-blue-500  p-10 hover:cursor-pointer hover:shadow-2xl rounded-md":
          "flex flex-col items-start border border-yellow-100 justify-center w-70 h-40  gap-2 shadow-xl border-l-10  border-l-yellow-700  p-10 hover:cursor-pointer hover:shadow-2xl rounded-md"
        }
        onClick={() => navigateTo(navigate)}
      >
        <h2 className={theme === "light" ? "text-xl font-bold text-gray-700": "text-xl font-bold text-white"}>{title}</h2>
        <p className={theme === "light" ? "text-xs text-gray-600": "text-xs text-white"}>{description}</p>
        <div className="flex items-end justify-end">
        <p className={theme === "light" ? "text-xs text-gray-600": "text-xs text-white"}>difficulty :</p>
      {difficulty === "hard" ? (
          <>
          <SignalCellularAltIcon className="text-red-400 h-5" fontSize="small" />
          <p className={theme === "light" ? "text-xs text-gray-600": "text-xs text-white"}>Hard</p>
          </>
        ) : difficulty === "medium" ? (
          <>
          <SignalCellularAlt2BarIcon className="text-blue-400 h-5" fontSize="small"/>
          <p className={theme === "light" ? "text-xs text-gray-600": "text-xs text-white"}>Medium</p>
          </>
        ) : (
          <>
          <SignalCellularAlt1BarIcon className="text-green-400" fontSize="small" />
          <p className={theme === "light" ? "text-xs text-gray-600": "text-xs text-white"}>Easy</p>
          </>
        )}
      </div>
      </div>
     
    </div>
  );
};

export default HomeCard;
