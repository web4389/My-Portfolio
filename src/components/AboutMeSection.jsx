import MyPicLight from "../images/MyPicForAboutSecLightMode.jpg";
import MyPicDark from "../images/MyPicForAboutSecDarkMode.jpg";
import { motion } from "framer-motion";
import "../css/about.css";
import { useDarkMode } from "../components/DarkModeContext";
import Arrow from "../images/Arrow.png";
import Design from "../images/Design.svg";


const AboutMe = ({ Colors }) => {
  const { darkMode } = useDarkMode();
  return (
    <section
      className="max-lg:py-20 lg:py-36 con overflow-hidden font-poppins_Regular"
      style={Colors.bg}
      id="about"
    >
      <div className="w-[100%] mx-auto flex flex-col justify-center items-center lg:flex-row max-lg:gap-y-6 lg:gap-20">
        <div className="max-md:w-[90%] flex justify-center">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: "linear", delay: 0 }}
            src={darkMode?MyPicDark:MyPicLight}
            alt="Profile"
            className="lg:w-[340px] max-lg:w-[320px]"
          />
           <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.3, delay:0.3 }}
              src={Design}
              alt="Design"
              className={`md:w-[110px] max-md:w-[80px] absolute max-md:right-[10%] mix-blend-difference ${darkMode?'!opacity-100':"!opacity-75"} md:ml-[200px] max-md:-mt-[30px] md:-mt-[60px]`}
              id="Design"
            />
        </div>

        {/* About Me Content */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "linear", delay: 0.5 }}
          className="text-center lg:text-left max-sm:px-3 max-sm:w-auto max-lg:w-[65%] lg:max-w-[44%]"
        >
                <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.7,}}
              src={Arrow}
              alt="Arrow"
              className="md:w-[70px] max-md:w-[50px] absolute max-lg:right-[10%] lg:ml-[200px] max-lg:-mt-[40px] lg:-mt-[70px]"
              id="Arrow"
            />
          <h2 className="text-4xl font-bold mb-[19px] pb-6 after:content-[''] after:absolute after:h-[5px] after:w-[2rem] after:-ml-[105px] after:mt-[3.2rem] after:rounded-[5px] after:bg-orange-500" style={Colors.h1}>
            About Me
          </h2>
          <div className="opacity-90" style={Colors.p}>
            <p className="mt-4">
              I'm a Mern Stack Developer Where I build and manage the Frontend &
              Backend of Websites and Web Applications that led to the success of the
              overall product
            </p>
            <p className="mt-4">
               My journey in the world of coding started in 2020. As of now, I
              am learning coding and can make any kind of website, & can manage
              both front-ends and backends. & Now I am fully prepared for any
              job or any other opportunity, Feel free to reach me out.
            </p>
          </div>
          <div className="flex items-center mt-6 gap-x-4 max-lg:justify-center">
          <a href="https://www.linkedin.com/in/shilok-k/" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-9 py-[10px] ${
                darkMode
                  ? "hover:bg-white text-white hover:text-gray-800"
                  : "hover:bg-[#252a30] text-white"
              } transition duration-300 bg-[#fdb12f] font-semibold rounded-full`}
          
            >
              Hire Me
            </motion.button>
            </a>

            <p
              className="opacity-55 max-md:hidden"
              style={Colors.ownOpacityPara}
            >
              Follow Me
            </p>
            <div className="max-md:hidden">
              <ul className="example-2">
                <li className="icon-content">
                  <a
                    href="https://www.linkedin.com/in/shilok-k/"
          target="_blank"
          aria-label="LinkedIn"

                    data-social="linkedin"
                    style={Colors.SocialMediaIcons}

                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div className="tooltip">LinkedIn</div>
                </li>
                <li className="icon-content">
                  <a
                    href="https://github.com/web4389"
          target="_blank"
                    aria-label="GitHub"
                    data-social="github"
                    className={`${
                      darkMode
                        ? "!text-white !bg-[#212121] hover:!text-black"
                        : ""
                    }`}
                  >
                    <div
                      className={`filled ${darkMode ? "!bg-white" : ""}`}
                    ></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div className="tooltip">GitHub</div>
                </li>
                <li className="icon-content">
                  <a
                    href="https://www.instagram.com/codewithshilok9/"
          target="_blank"

                    aria-label="Instagram"
                    data-social="instagram"
                    style={Colors.SocialMediaIcons}
                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div className="tooltip">Instagram</div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
