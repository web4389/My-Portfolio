import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent px-12 max-md:px-0 mt-2 w-[100%] absolute top-0 z-10">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/" className="text-xl font-semibold text-gray-800">
          Robert
        </a>
        <div className="flex min-[901px]:hidden hover:cursor-pointer">
          <a
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </a>
        </div>
        <div
          className={`${
            isOpen
              ? "flex bg-[#252a30] text-white py-4"
              : "hidden text-gray-600"
          } max-[900px]:absolute max-[900px]:items-center max-[900px]:flex-col max-[900px]:top-full max-[900px]:left-0 max-[900px]:w-full max-[900px]:shadow-md min-[900px]:static min-[901px]:flex min-[900px]:flex-row min-[900px]:space-x-4 min-[900px]:shadow-none`}
        >
          <a
            href="#home"
            className="px-[11px] py-3 hover:text-orange-500 transition duration-300 min-[900px]:hover:bg-transparent"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-[11px] py-3 hover:text-orange-500 transition duration-300 min-[900px]:hover:bg-transparent"
          >
            About
          </a>
          <a
            href="#services"
            className="px-[11px] py-3 hover:text-orange-500 transition duration-300 min-[900px]:hover:bg-transparent"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="px-[11px] py-3 hover:text-orange-500 transition duration-300 min-[900px]:hover:bg-transparent"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="px-[11px] py-3 hover:text-orange-500 transition duration-300 min-[900px]:hover:bg-transparent"
          >
            Contact
          </a>
        </div>
        <button className="bg-[#252a30] font-medium  text-white px-6 py-2 rounded-full hover:bg-orange-500 transition duration-300 max-[900px]:hidden">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
