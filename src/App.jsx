import Loader from "./components/Loader";
import { Suspense } from "react";
import AboutMe from "./components/AboutMeSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useDarkMode } from "./components/DarkModeContext";

function App() {
  const { darkMode } = useDarkMode();

  const ColorsDarkMode = {
    bg: {
      backgroundColor: "#212121",
    },
    navigateIcons: {
      backgroundColor: "white",
      color: "rgb(17, 24, 39)",
    },
    SocialMediaIcons: {
      backgroundColor: "#212121",
      color: "white",
    },
    h1: {
      color: "white",
    },
    p: {
      color: "white",
      opacity: 0.8,
    },
    ownOpacityPara: {
      color: "white",
    },
    boxesBg: {
      backgroundColor: "#282828",
    },
    ProjectTech: {
      backgroundColor: "#282828",
      color: "white",
    },
  };
  const ColorsWhiteMode = {
    bg: {
      backgroundColor: "white",
    },
    navigateIcons: {
      backgroundColor: "rgb(17, 24, 39)",
      color: "white",
    },
    SocialMediaIcons: {
      backgroundColor: "white",
    },
    h1: {
      color: "rgb(31, 41, 55)",
    },
    p: {
      opacity: 0.9,
      color: "rgb(75, 85, 99)",
    },
    ownOpacityPara: {
      color: "rgb(75, 85, 99)",
    },
    boxesBg: {
      backgroundColor: "white",
    },
    ProjectTech: {
      backgroundColor: "white",
      color: "rgb(31, 41, 55)",
    },
  };

  return (
    <>
      <Suspense
        fallback={
          <div className="w-[100%] flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        <div style={darkMode ? ColorsDarkMode.bg : ColorsWhiteMode.bg}>
          <Navbar />
          <HeroSection />

          <motion.div
            className="my-16 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center justify-center h-12 w-12 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
              style={
                darkMode
                  ? ColorsDarkMode.navigateIcons
                  : ColorsWhiteMode.navigateIcons
              }
            >
              <FaAngleDown />
            </Link>
          </motion.div>

          <AboutMe Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode} />
          <Services Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode} />
          <Skills Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode} />
          <Projects Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode} />

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="my-16 flex justify-center items-center"
          >
            <Link
              to="heroSection"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center justify-center h-12 w-12 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
              style={
                darkMode
                  ? ColorsDarkMode.navigateIcons
                  : ColorsWhiteMode.navigateIcons
              }
            >
              <FaAngleUp />
            </Link>
          </motion.div>

          <Footer Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode} />
        </div>
      </Suspense>
    </>
  );
}

export default App;
