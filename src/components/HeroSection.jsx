import "../css/heroSection.css";
import { motion } from "framer-motion";
import MyPic from "../images/MyPicForFirstSection.png";
import Arrow from "../images/Arrow.png";
import Design from "../images/Design.svg";
import { useDarkMode } from "../components/DarkModeContext";
import { useSpring, animated } from "react-spring";
import { ReactTyped } from "react-typed";

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 5400,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const HeroSection = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      className={`${
        darkMode ? "bg-[#212121] text-white" : "bg-white"
      } max-md:py-[120px] md:pb-[100px] md:pt-[200px] flex justify-center items-end font-poppins_Regular`}
      id="heroSection"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center max-lg:px-4 lg:px-20">
        <div className="text-center md:text-left md:w-1/2 gap-y-10 leading-[24px]">
        <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.3, delay: 4.7}}
              src={Arrow}
              alt="Arrow"
              className="md:w-[80px] max-md:w-[50px] fixed max-md:right-[10%] md:ml-[380px] md:-mt-[80px]"
              id="Arrow"
            />
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.3, delay: 3.9 }}
            className={`text-3xl md:text-5xl md:leading-[60px] font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            } min-[1000px]:pr-16 min-[1100px]:pr-20 min-[1280px]:pr-44`}
          >
            Hello, I'm <span className="text-orange-500">Shilok</span> a Web
            <div>
              <ReactTyped
                strings={["Developer", "Tester", "Optimizer"]}
                typeSpeed={60}
                backSpeed={50}
                loop
              />{" "}
            </div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ type: "spring", duration: 0.2, delay: 4.3 }}
            className={`my-8 ${
              darkMode ? "text-white opacity-85" : "text-gray-600"
            } lg:max-w-[90%]`}
          >
            I build responsive, user-centric websites that perform flawlessly.
            Let's bring your vision to life!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.1, delay: 4.5 }}
            className={`${
              darkMode ? "bg-white text-gray-900" : "bg-[#252a30] text-white"
            } font-medium px-6 py-3 rounded-full hover:!scale-105 hover:bg-orange-500 transition duration-300`}
          >
            <a href="https://www.fiverr.com/createwebsite31?" target="_blank">
              Get Started           </a>
          </motion.button>
        </div>

        <div className="relative md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
          <div className="relative imgBg lg:flex lg:items-center lg:gap-x-9">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.3, delay: 4.7 }}
              src={MyPic}
              alt="Profile"
              className="rounded-full xl:w-[380px] max-xl:w-[320px]"
              id="MyPics"
            />
                   <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.3, delay: 4.7 }}
              src={Design}
              alt="Design"
              className={`md:w-[120px] max-md:w-[80px] fixed max-md:right-[10%] mix-blend-difference ${darkMode?'!opacity-100':"!opacity-75"} md:right-[12%] max-md:-mt-[360px] md:-mt-[400px]`}
              id="Design"
            />
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 0.7, delay: 5.3 }}
              className="max-lg:hidden text-end flex flex-col gap-y-[56px]"
            >
              <div>
                <h1
                  className={`font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  } text-3xl pb-2 flex justify-end`}
                >
                  <Number n={6} />+
                </h1>
                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-600"
                  } text-[15px] opacity-75`}
                >
                  Months Of Experience
                </p>
              </div>

              <div className="">
                <h1
                  className={`font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  } text-3xl pb-2  flex justify-end`}
                >
                  <Number n={19} />+
                </h1>
                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-600"
                  } text-[15px] opacity-75`}
                >
                  Projects Done
                </p>
              </div>
              <div className="">
                <h1
                  className={`font-bold flex justify-end ${
                    darkMode ? "text-white" : "text-gray-800"
                  } text-3xl pb-2 flex justify-end`}
                >
                  <Number n={13} />+
                </h1>
                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-600"
                  } text-[15px] opacity-75`}
                >
                  Learned Technologies
                </p>
              </div>
            </motion.div>
            <div className="lg:hidden">
              <motion.div
                initial={{ opacity: 0, translateX: 40 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.7, delay: 5.3 }}
                className="absolute top-0 left-0 w-[70px] h-[70px] bg-orange-500 rounded-full flex items-center justify-center"
              >
                <span
                  className="text-white font-bold text-xl flex"
                  title="6Mo Experience"
                >
                  <Number n={6} />
                  Mo+
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateX: 40 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.7, delay: 5.3 }}
                className="absolute bottom-0 left-0 w-[70px] h-[70px] bg-white shadow-lg rounded-full flex items-center justify-center"
              >
                <span
                  className="text-gray-800 font-semibold flex"
                  title="19 Project"
                >
                  <Number n={19} />+
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.07, x: 0 }}
        transition={{ duration: 1, delay: 5.3 }}
        className={`absolute top-[30vh] left-[10vw] w-32 h-32 max-md:w-20 max-md:h-20 bg-[#da8195] rounded-full opacity-[7%]`}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.07, x: 0 }}
        transition={{ duration: 1, delay: 5.3 }}
        className={`absolute top-[50vh] right-[17vw] max-md:w-20 max-md:h-20 w-32 h-32 bg-[#da8195] rounded-full opacity-[7%]`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.07, x: 0 }}
        transition={{ duration: 1, delay: 5.3 }}
        className={`absolute top-[22vh] right-[17vw] max-md:w-20 max-md:h-20 w-32 h-32 bg-[#da8195] rounded-full opacity-[4%]`}
      ></motion.div>
    </section>
  );
};

export default HeroSection;
