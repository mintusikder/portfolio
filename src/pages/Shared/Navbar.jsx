import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      {/* Logo */}
      <a href="#">
        <img
          className="h-9"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
          alt="dummyLogoColored"
        />
      </a>

      {/* Desktop Menu */}
      <ul className="md:flex hidden items-center gap-10">
        <li><a className="hover:text-gray-500/80 transition" href="#">Home</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#">Services</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#">Portfolio</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#">Pricing</a></li>
      </ul>

      {/* Get Started Button (Desktop) */}
      <button
        type="button"
        className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Get started
      </button>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        className="inline-block md:hidden active:scale-90 transition"
        onClick={toggleMobileMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000" viewBox="0 0 30 30">
          <path d="M3 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3z"></path>
        </svg>
      </button>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white p-6 md:hidden transform transition-all duration-300 ease-in-out z-10 ${
          isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-6 opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col space-y-4 text-lg">
          <li><a href="#" className="text-sm">Home</a></li>
          <li><a href="#" className="text-sm">Services</a></li>
          <li><a href="#" className="text-sm">Portfolio</a></li>
          <li><a href="#" className="text-sm">Pricing</a></li>
        </ul>

        <button
          type="button"
          className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
