import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import Arrow from "../images/Arrow.png";
import { motion } from "framer-motion";
import { useDarkMode } from "../components/DarkModeContext";

const SkillsSection = ({ Colors }) => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "BootStrap", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "React", icon: <FaReact /> },
    {
      name: "Framer Motion",
      icon: <TbBrandFramerMotion />,
    },
    {
      name: "Redux JS",
      icon: <SiRedux />,
    },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];
  const { darkMode } = useDarkMode();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.7,
        duration: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className="max-lg:py-20 lg:py-36 overflow-hidden bg-white text-center max-md:px-2 px-10 font-poppins_Regular"
      id="skill"
      style={Colors.bg}
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        <h2 className="text-4xl font-bold text-gray-800" style={Colors.h1}>
          Skills
        </h2>
        {/* <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.3, delay: 4.7 }}
              src={Arrow}
              alt="Arrow"
              className="md:w-[80px] max-md:w-[50px] fixed max-md:right-[10%] md:ml-[380px] md:-mt-[80px]"
              id="Arrow"
            /> */}
            <img src={Arrow} alt="Arrow"
              className="md:w-[80px] max-md:w-[50px] fixed max-md:right-[10%] md:ml-[380px] md:-mt-[80px]"
              id="Arrow" />
        <p className="text-gray-700 mb-16 mt-4 px-5" style={Colors.p}>
          The skills, tools, and technologies I use to bring your products to
          life:
        </p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 px-5"
      >
        {skills.map((skill, index) => (
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={index}
            className={`flex flex-col items-center justify-center p-5 rounded-lg shadow-lg ${
              darkMode ? "hover:!bg-[#303030]" : "hover:!bg-indigo-50"
            } transition-all duration-300 ease-in-out`}
            whileHover={{ scale: 1.05 }}
            transition={{ stiffness: 300 }}
            style={Colors.boxesBg}
          >
            <div className="text-5xl text-orange-500">{skill.icon}</div>
            <h3
              className="mt-4 text-lg font-semibold text-gray-800"
              style={Colors.h1}
            >
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-32" style={Colors.h1}>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            easings: "cubic-bezier(0.25, 1, 0.5, 1)",
          }}
          className="text-3xl font-semibold mb-4"
          style={Colors.h1}
        >
          Currently working on
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            easings: "cubic-bezier(0.25, 1, 0.5, 1)",
          }}
          className="mb-3 text-gray-700 max-sm:px-1"
          style={Colors.p}
        >
          Currently, I am open to any opportunity
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.7, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            easings: "cubic-bezier(0.25, 1, 0.5, 1)",
          }}
          className={`text-gray-600 opacity-90`}
          style={Colors.ownOpacityPara}
        >
          Follow My Journey From Here.
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          className=""
        >
          <ul className="text-4xl flex justify-center gap-x-4 mt-3">
            <motion.a
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href="https://linkedin.com/"
            >
              <FaLinkedin className="hover:!scale-125 transition duration-300" />
            </motion.a>
            <motion.a
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href="https://linkedin.com/"
            >
              <FaGithub className="hover:!scale-125 transition duration-300" />
            </motion.a>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
