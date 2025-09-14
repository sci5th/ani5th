// import { NavLink } from "react-router-dom"; // 1. Import NavLink instead of Link

const Navigation = () => {
  return (
    <nav className="flex relative justify-end w-full h-6 md:h-20 bg-slate-700 text-white px-4 md:px-8 text-sm md:text-lg items-center">
      {/* <ul>
        <li className="inline mr-6 md:mr-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-300 ${isActive ? "text-blue-400 " : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="inline mr-6 md:mr-12">
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `hover:text-blue-300 ${isActive ? "text-blue-400 " : ""}`
            }
          >
            Gallery
          </NavLink>
        </li>
        <li className="inline mr-6 md:mr-12">
          <NavLink
            to="/shorts"
            className={({ isActive }) =>
              `hover:text-blue-300 ${isActive ? "text-blue-400 " : ""}`
            }
          >
            Shorts
          </NavLink>
        </li>
        <li className="inline mr-6 md:mr-12">
          <NavLink
            to="/animations"
            className={({ isActive }) =>
              `hover:text-blue-300 ${isActive ? "text-blue-400 " : ""}`
            }
          >
            Animations
          </NavLink>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navigation;
