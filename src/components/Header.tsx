import { Strings } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/theme/themeSlice"; 
import { RootState } from "../app/store";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Header = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  }
  return (
    <div className={theme === "light" ? `bg-white shadow-lg py-3 flex border border-blue-100`: `bg-black shadow-lg py-3 flex border-b border-yellow-100`}>
      <div className="container flex justify-center  items-center  mx-auto">
      <h1 className={theme === "light" ? " max-sm:text-xl lg:text-2xl  font-bold text-center text-gray-600":" max-sm:text-xl lg:text-2xl  font-bold text-center text-white"}>
        {Strings.HEADER_TEXT}
      </h1>
    </div>
    <div className="pr-20 ">
      {theme === 'light' ? (
        <DarkModeIcon onClick={handleThemeChange} className="text-gray-700 h-6 hover:cursor-pointer" fontSize="small" />
        ) : (<WbSunnyIcon onClick={handleThemeChange} className="text-yellow-700 h-6 hover:cursor-pointer" fontSize="small" />
        
      )}
    </div>
    </div>
  );
};

export default Header;
