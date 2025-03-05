import { Link, useLocation} from "react-router-dom";

export const BreadCrum = () => {
   
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  return (
    <nav aria-label="breadcrumb " className="absolute top-20 left-5 shadow-lg p-1">
    <ol className="flex space-x-2 text-sm text-gray-500">
      <li>
        <Link to="/" className={location.pathname === "/" ? " text-gray-600 hover:cursor-default":"text-gray-600 hover:text-blue-800" }>
          Home
        </Link>
      </li>
      {pathnames.map((segment, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <li key={to} className="flex items-center">
            <span className="mx-2">/</span>
            <Link to={to} className="text-blue-600 hover:text-blue-800 cursor-default">
              {segment}
            </Link>
          </li>
        );
      })}
    </ol>
  </nav>
  );
};
