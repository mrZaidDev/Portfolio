import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-100 shadow-lg z-50 top-0">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-1xl font-bold">{'<Z/>'}</h1>

        <ul className="flex space-x-8">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section} className="cursor-pointer capitalize text-[14px]">
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-70} // Adjust for navbar height
                activeClass="text-yellow-400"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
