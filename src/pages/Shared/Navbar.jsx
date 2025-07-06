import React, { useState } from "react";
import msLogo from "../../assets/mslogo.png";
import { NavLink } from "react-router";
import { AiOutlineDownload } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close mobile menu after clicking a link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 bg-white text-gray-700 shadow-md z-50">
        {/* Logo */}
        <a href="/" aria-label="Homepage">
          <img className="h-9" src={msLogo} alt="Logo" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 font-medium text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "hover:primary"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "hover:primary"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "hover:primary transition"
              }
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skill"
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "hover:text-primary transition" 
              }
            >
              Skill
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "hover:primary transition"
              }
            >
              Contact Me
            </NavLink>
          </li>
        </ul>

        {/* Resume Download Button Desktop */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:flex items-center gap-2 border border-gray-300 text-white px-5 py-2 rounded-full bg-primary  transition cursor-pointer select-none"
          aria-label="Download Resume"
        >
          <AiOutlineDownload size={20} />
          <span>Resume</span>
        </a>

        {/* Mobile menu toggle button */}
        <button
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-[70px] left-0 w-full bg-white shadow-md md:hidden transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-6 p-6 font-medium text-gray-700">
            <li>
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "hover:primary transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "hover:primary transition"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skill"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "hover:primary transition"
                }
              >
                Skill
              </NavLink>
            </li>

            {/* Resume Button Mobile */}
            <li>
              <a
                href="/resume"
                download
                onClick={closeMobileMenu}
                className="flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition cursor-pointer select-none"
                aria-label="Download Resume"
              >
                <AiOutlineDownload size={20} />
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Padding div so page content isn’t hidden under fixed navbar */}
      <div className="pt-[70px]" />
    </>
  );
};

export default Navbar;
