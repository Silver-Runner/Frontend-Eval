import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
export const BreadCrum = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  return (
    <nav
      aria-label="breadcrumb "
      className="absolute top-15 left-5 shadow-lg p-1 z-1"
    >
      <ol className="flex space-x-2 text-sm text-gray-500">
        <li>
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? " text-gray-600 hover:cursor-default flex items-center justify-center"
                : `text-gray-600 flex items-center justify-center ${
                    theme === "light"
                      ? "hover:text-blue-600"
                      : "hover:text-yellow-700"
                  }`
            }
          >
            <HomeIcon fontSize="small" />
            <span>Home</span>
          </Link>
        </li>
        {pathnames.map((segment, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">/</span>
              <Link
                to={to}
                className={`  cursor-default ${
                  theme === "light"
                    ? "text-blue-600  hover:text-blue-800"
                    : "text-yellow-700  hover:text-yellow-600"
                }`}
              >
                {segment}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
