import { useState } from "react";
import "../css/navbar.css";
import { Link } from "react-scroll";
import { useDarkMode } from "../components/DarkModeContext";
import { motion } from "framer-motion";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();

  const Links = [
    {
      locationPathname: "heroSection",
      Name: "Home",
    },
    {
      locationPathname: "about",
      Name: "About",
    },
    {
      locationPathname: "skill",
      Name: "Skills",
    },
    {
      locationPathname: "project",
      Name: "Projects",
    },
    {
      locationPathname: "services",
      Name: "Services",
    },
  ];

  return (
    <header
      className={`bg-transparent md:px-12 max-md:px-0 overflow-hidden pt-2 w-[100%] max-[900px]:h-[100%] absolute top-0 z-10 font-poppins_Regular`}
    >
      <nav
        className={`container mx-auto px-6 py-3 flex justify-between items-center`}
      >
        <motion.a
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 3 }}
          href="/"
          className={`text-xl font-semibold font-Montserrat_Regular ${
            darkMode ? "text-white" : "text-gray-800"
          } `}
        >
          Shilok.K
        </motion.a>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 3.3 }}
          className="flex min-[901px]:hidden hover:cursor-pointer"
        >
          <a
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              darkMode ? "text-white" : "text-gray-800"
            }  focus:outline-none`}
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 3.3 }}
          className={`${
            isOpen
              ? `flex shadow-2xl ${
                  darkMode
                    ? "text-white bg-[#212121]"
                    : "bg-white text-gray-800"
                }  py-4`
              : `hidden ${darkMode ? "text-white" : "bg-white text-gray-600"} `
          } max-[900px]:absolute max-[900px]:items-center max-[900px]:flex-col max-[900px]:top-[55px] max-[900px]:left-0 max-[900px]:w-full max-[900px]:shadow-md min-[901px]:static min-[901px]:flex min-[901px]:flex-row min-[901px]:space-x-4 min-[901px]:shadow-none`}
          id="links"
        >
          {Links.map((e) => {
            return (
              <Link
                key={e.locationPathname}
                to={e.locationPathname}
                spy={true}
                smooth={true}
                duration={500}
                className={`px-[11px] py-3 hover:text-orange-500 transition duration-300 min-[900px]:hover:bg-transparent cursor-pointer hover:font-medium hover:scale-110`}
              >
                {e.Name}
              </Link>
            );
          })}

          <div className="py-3">
            <input
              type="checkbox"
              className="theme-checkbox min-[901px]:hidden"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
        </motion.div>
        <motion.input
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 3.6 }}
          type="checkbox"
          className="theme-checkbox max-[900px]:hidden"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </nav>
    </header>
  );
};

export default Navbar;
