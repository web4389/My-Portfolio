import FindNewsMockUp from "../images/FindNewsMockup.png";
import SocialMediaMockup from "../images/SocialMediaMockup.png";
import TeslaMockup from "../images/TeslaMockup.png";
import { useDarkMode } from "../components/DarkModeContext";
import Design from "../images/Design.svg";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Find News",
    description:
      "This is a News App in which i get news from my own data and then i display that news with my graphic designing skill through Reactjs and Tailwind css",
    technologies: ["React", "Tailwind CSS"],
    liveLink: "https://find-news-xi.vercel.app/",
    githubLink: "https://github.com/web4389/Find-News",
    image: FindNewsMockUp,
    rowDir: "md:flex-row",
    textDir: "text-start",
    itemDir: "items-start",
    imgDir: "justify-end",
    skillDir: "justify-start",
    x: "-100%",
  },
  {
    title: "Tesla",
    description:
      "I used ReactJS and Tailwind CSS to create this Tesla Clone using the Tesla website design. As a result, I have gained a deep understanding of Reactjs and Tailwind CSS",
    technologies: ["React", "Tailwind CSS", "ReduxJS"],
    liveLink: "https://tesla-clone-three-pi.vercel.app/",
    githubLink: "https://github.com/web4389/Tesla-Clone",
    image: TeslaMockup,
    rowDir: "md:flex-row-reverse",
    textDir: "text-end",
    itemDir: "items-end",
    imgDir: "justify-start",
    skillDir: "justify-end",
    x: "100%",
  },
  {
    title: "Social Media App",
    description:
      "This is a social media app which I create for backend's Practice. From this, I have gained a much better understanding of backend functions like authentication, crud, pagination, and many more",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node JS",
      "Express JS",
      "MongoDB Atlas",
    ],
    liveLink: "https://social-media-by-shilok-kumar.vercel.app/",
    githubLink: "https://github.com/web4389/Mingle-Space-Social-Media-Site-",
    image: SocialMediaMockup,
    rowDir: "md:flex-row",
    textDir: "text-start",
    itemDir: "items-start",
    imgDir: "justify-end",
    skillDir: "justify-start",
    x: "-100%",
  },
];

const ProjectSection = ({ Colors }) => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className="max-lg:py-20 lg:py-36 text-center overflow-x-hidden font-poppins_Regular"
      id="project"
      style={Colors.bg}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          easings: "cubic-bezier(0.25, 1, 0.5, 1)",
          delay: 0.3,
        }}
      >
                   <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6, delay:0.3 }}
              src={Design}
              alt="Design"
              className={`md:w-[110px] max-md:w-[80px] absolute mix-blend-difference ${darkMode?'!opacity-100':"!opacity-75"} max-md:right-[10%] md:ml-[53%] max-lg:-mt-[55px] lg:-mt-[90px]`}
              id="Design"
            />
        <h2 className="text-4xl font-bold text-gray-800  after:content-[''] after:absolute after:translate-x-[-50%] after:h-[5px] after:w-[2rem] after:left-[50%] after:mt-[3.2rem] after:rounded-[5px] pb-6 after:bg-orange-500" style={Colors.h1}>
          Projects
        </h2>
        <div className="text-center flex justify-center w-[100%]">
          
        <p className="text-gray-700 sm:px-28 mb-16 mt-4 px-5 lg:max-w-[70%] max-lg:max-w-[90%] text-center" style={Colors.p}>
          With these projects, I've gained a deeper understanding of both
          Frontend and Backend development
        </p>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 gap-x-10 max-md:gap-y-20 md:gap-y-24 px-5 place-items-center">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, x: project.x }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              easings: "cubic-bezier(0.25, 1, 0.5, 1)",
              delay: 0.4,
            }}
            key={index}
            className={`flex ${project.rowDir} max-md:flex-col max-lg:gap-x-24 lg:gap-x-32 gap-y-5 items-center justify-between max-lg:max-w-[95%]`}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                easings: "cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              viewport={{ once: true }}
              className={`flex max-[450px]:w-[300px] w-[400px] max-sm:justify-center ${project.imgDir}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[400px] max-[450px]:w-[300px] object-cover rounded-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                easings: "cubic-bezier(0.25, 1, 0.5, 1)",
                delay: 0.5,
              }}
              viewport={{ once: true }}
              className={`md:text-left flex flex-col max-w-[320px] max-md:items-center ${project.itemDir}`}
            >
              <h3 className="text-2xl font-semibold mb-4" style={Colors.h1}>
                {project.title}
              </h3>
              <p
                className={`text-gray-400 mb-4 max-md:text-center ${project.textDir}`}
                style={Colors.p}
              >
                {project.description}
              </p>
              <div
                className={`flex max-md:justify-center gap-y-4 flex-wrap space-x-3 mb-4 ${project.skillDir}`}
              >
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`text-sm transition duration-150 font-medium bg-white shadow-lg px-3 py-1 ${darkMode?"hover:!bg-white hover:!text-gray-800":"hover:!bg-zinc-800 hover:!text-white"} rounded-full hover:scale-105 hover:bg-[#f7f6f6] cursor-pointer`}
                    style={Colors.ProjectTech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className={`text-yellow-500 font-medium ${
                    darkMode ? "hover:text-white" : "hover:text-gray-700"
                  } hover:font-medium hover:!scale-110 transition duration-150`}
                >
                  LIVE SITE
                </a>
                <p className="rounded text-gray-800" style={Colors.h1}>
                  |
                </p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className={`text-yellow-500 font-medium ${
                    darkMode ? "hover:text-white" : "hover:text-gray-700"
                  } hover:font-medium hover:!scale-110 transition duration-150`}
                >
                  GITHUB
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
