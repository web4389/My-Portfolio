import React, { useState } from "react";
import MyPic from "../images/MyPicForFirstSection.png";
import { useDarkMode } from "../components/DarkModeContext";
import { motion } from "framer-motion";

const projects = [
  {
    title: "IN MY FEELINGS",
    description:
      "A journal and quiz app that selects a Drake album to play for the user based on input about their mood. Albums come from the Lastfm.com API.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "API"],
    liveLink: "#",
    githubLink: "#",
    image: MyPic, // Replace with actual image URL
    rowDir: "md:flex-row",
    textDir: "text-start",
    itemDir: "items-start",
    imgDir: "justify-end",
    skillDir: "justify-start",
    x: "-100%",
  },
  {
    title: "TO DO IN TO",
    description:
      "An event app that grabs entertainment events in Toronto from the Ticketmaster API for a user-selected date. Paired programming with JULIA DUFRESNE.",
    technologies: ["HTML5", "Sass", "JavaScript", "React", "API"],
    liveLink: "#",
    githubLink: "#",
    image: MyPic, // Replace with actual image URL
    rowDir: "md:flex-row-reverse",
    textDir: "text-end",
    itemDir: "items-end",
    imgDir: "justify-start",
    skillDir: "justify-end",
    x: "100%",
  },
  {
    title: "IN MY FEELINGS",
    description:
      "A journal and quiz app that selects a Drake album to play for the user based on input about their mood. Albums come from the Lastfm.com API.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "API"],
    liveLink: "#",
    githubLink: "#",
    image: MyPic, // Replace with actual image URL
    rowDir: "md:flex-row",
    textDir: "text-start",
    itemDir: "items-start",
    imgDir: "justify-end",
    skillDir: "justify-start",
    x: "-100%",
  },
  {
    title: "TO DO IN TO",
    description:
      "An event app that grabs entertainment events in Toronto from the Ticketmaster API for a user-selected date. Paired programming with JULIA DUFRESNE.",
    technologies: ["HTML5", "Sass", "JavaScript", "React", "API"],
    liveLink: "#",
    githubLink: "#",
    image: MyPic, // Replace with actual image URL
    rowDir: "md:flex-row-reverse",
    textDir: "text-end",
    itemDir: "items-end",
    imgDir: "justify-start",
    skillDir: "justify-end",
    x: "100%",
  },
  {
    title: "IN MY FEELINGS",
    description:
      "A journal and quiz app that selects a Drake album to play for the user based on input about their mood. Albums come from the Lastfm.com API.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "API"],
    liveLink: "#",
    githubLink: "#",
    image: MyPic, // Replace with actual image URL
    rowDir: "md:flex-row",
    textDir: "text-start",
    itemDir: "items-start",
    imgDir: "justify-end",
    skillDir: "justify-start",
    x: "-100%",
  },
  {
    title: "TO DO IN TO",
    description:
      "An event app that grabs entertainment events in Toronto from the Ticketmaster API for a user-selected date. Paired programming with JULIA DUFRESNE.",
    technologies: ["HTML5", "Sass", "JavaScript", "React", "API"],
    liveLink: "#",
    githubLink: "#",
    image: MyPic, // Replace with actual image URL
    rowDir: "md:flex-row-reverse",
    textDir: "text-end",
    itemDir: "items-end",
    imgDir: "justify-start",
    skillDir: "justify-end",
    x: "100%",
  },
];

const ProjectSection = ({ Colors }) => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className="max-lg:py-20 lg:py-36 text-center overflow-x-hidden"
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
        <h2 className="text-4xl font-bold text-gray-800" style={Colors.h1}>
          Projects
        </h2>
        <p
          className="text-lg max-sm:px-2 text-gray-700 opacity-95 mb-24 mt-4"
          style={Colors.p}
        >
          The skills, tools, and technologies I use to bring your products to
          life:
        </p>
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
            className={`flex ${project.rowDir} max-md:flex-col max-lg:gap-x-24 lg:gap-x-32 gap-y-5 items-center justify-between max-lg:max-w-[95%] lg:max-w-[70%]`}
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
              className={`flex w-[300px] max-sm:justify-center ${project.imgDir}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[300px] object-cover rounded-md shadow-lg"
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
                    className="text-sm transition duration-150 font-medium bg-white shadow-lg px-3 py-1 rounded-full  hover:scale-105 hover:bg-[#f7f6f6] cursor-pointer"
                    style={Colors.ProjectTech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href={project.liveLink}
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
