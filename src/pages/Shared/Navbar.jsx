import React, { useState } from "react";
import msLogo from "../../assets/mslogo.png";
import { NavLink } from "react-router";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      {/* Logo */}
      <a href="#">
        <img className="h-9" src={msLogo} alt="dummyLogoColored" />
      </a>

      {/* Desktop Menu */}
      <ul className="md:flex hidden items-center gap-10">
        <li>
          <NavLink to={"/"} className="hover:text-gray-500/80 transition">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className="hover:text-gray-500/80 transition">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/skill"} className="hover:text-gray-500/80 transition">
            Skill
          </NavLink>
        </li>
      </ul>

      {/* Get Started Button (Desktop) */}
      <button
        type="button"
        className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Resume
      </button>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        className="inline-block md:hidden active:scale-90 transition"
        onClick={toggleMobileMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#000"
          viewBox="0 0 30 30"
        >
          <path d="M3 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3z"></path>
        </svg>
      </button>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white p-6 md:hidden transform transition-all duration-300 ease-in-out z-10 ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-6 opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-lg">
          <li>
            <NavLink to={"/"} className="hover:text-gray-500/80 transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className="hover:text-gray-500/80 transition"
            >
              About
            </NavLink>
          </li>
        </ul>

        <button
          type="button"
          className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
