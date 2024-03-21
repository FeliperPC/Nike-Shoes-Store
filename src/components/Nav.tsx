import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { SIDEBAR_IS_SHOWN } from "../redux/actions";
import { useDispatch } from "react-redux";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
  const dispatch = useDispatch();
  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
      {/* logo, throws nowhere */}
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>
      {/* burguerButton */}
      <button
        className="lg:hidden hover:bg-gray-100 p-2 focus:ring-2 rounded-lg focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
        onClick={() => setIsMobile(!isMobile)}
      >
        {/* Thinking on mobile first the buttom on larger screens should not appear */}
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu list */}
      <div className={`${!isMobile && "hidden"} w-full lg:w-auto p lg:block`}>
        <ul
          className="lg:space-x-8 flex flex-col mb-2 md:mb-auto lg:mb-auto lg:flex-row lg:bg-transparent bg-gray-50 lg:border-none text-lg
         border-gray-100 rounded-lg p-4 cursor-pointer lg:dark:text-white"
        >
          {/* li has display block., no need to insert display column */}
          {ROUTES.map((item, i) => (
            <li
              className={`px-3 py-2 rounded lg:hover:bg-transparent lg:hover:text-blue-500
              ${
                i === 0
                  ? "bg-blue-500 lg:bg-transparent lg:text-blue-500 text-white "
                  : "hover:bg-gray-100 "
              }
              ${(i == 3 || i == 4) && "lg:text-white dark:text-night"}
              `}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* Thinking on mobile first this looks great ! */}
      <div className="fixed left-4 bottom-4 lg:static">
        {/* if you put position fixed, to change that to default again put static to other screens*/}
        <div
          className="btn-press-animation lg:mr-8 flex-center h-12 w-12 rounded-full bg-white shadow-md cursor-pointer"
          onClick={() => dispatch(SIDEBAR_IS_SHOWN)}
        >
          {/* Cart buttom */}
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
