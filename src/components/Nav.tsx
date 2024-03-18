import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
      {/* logo, throws nowhere */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* burguerButton */}
      <button
        className="lg:hidden hover:bg-gray-100 p-2 focus:ring-2 rounded-lg focus:ring-gray-200"
        onClick={() => setIsMobile(!isMobile)}
      >
        {/* Thinking on mobile first the buttom on larger screens should not appear */}
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu list */}
      <div className={`${!isMobile && "hidden"} w-full lg:w-auto p lg:block`}>
        <ul className="lg:space-x-8 flex flex-col lg:flex-row lg:bg-transparent bg-gray-50 lg:border-none text-lg
         border-gray-100 rounded-lg p-4 cursor-pointer">
          {/* li has display block., no need to insert display column */}
          {ROUTES.map((item, i) => (
            <li
              className={`px-3 py-2 rounded lg:hover:bg-transparent lg:hover:text-blue-500
              ${i === 0 ? "bg-blue-500 lg:bg-transparent lg:text-blue-500 text-white" : 
              "hover:bg-gray-100 "}
              ${(i == 3 || i == 4) && "lg:text-white"}
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
        <div className="lg:mr-8 flex-center h-12 w-12 rounded-full bg-white shadow-md cursor-pointer">
          {/* Cart buttom */}
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
