import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { useDarkMode } from "../components/DarkModeContext";

const Services = ({ Colors }) => {
  const { darkMode } = useDarkMode();

  const services = [
    {
      title: "Mern Stack",
      description:
        "Experience the synergy of MERN Stack Development with our expertise. From MongoDB's flexibility to Express.js' streamlined backend, React's interactive frontend, and Node.js' scalable runtime – we weave a seamless, full-stack narrative. Elevate your project with a technology stack that harmonizes innovation and efficiency.",
      icon: <FaReact />,
      x: "-100%",
    },
    {
      title: "Frontend Development",
      description:
        "Embark on a journey of Frontend Development excellence with us. We sculpt dynamic and responsive user interfaces, marrying form with function. From pixel-perfect designs to seamless interactions, we code experiences that captivate and interfaces that resonate. Join us at the forefront of web innovation.",
      icon: <SlScreenDesktop />,
      x: "100%",
    },
    {
      title: "Backend Development",
      description:
        "Dive into the robust world of Backend Development with us. Behind every seamless user experience lies a powerful and scalable backend architecture. We engineer data-driven solutions, ensuring your platform operates with efficiency and security. Let us shape the backbone of your digital ambitions, where innovation meets reliability.",
      icon: <FaNodeJs />,
      x: "-100%",
    },
  ];

  return (
    <section
      className="max-lg:py-20 lg:pt-36 lg:pb-20 bg-white overflow-hidden"
      id="services"
      style={Colors.bg}
    >
      <div className="container mx-auto max-md:px-4 md:px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold" style={Colors.h1}>
            My Services
          </h2>
          <p className="mt-4" style={Colors.p}>
            I’ve got everything you need to launch and grow your business
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-10 py-[60px] pb-[80px] overflow-x-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: service.x }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-6 boxes ${
                darkMode
                  ? "hover:!bg-[#303030] bg-[#282828]"
                  : "hover:!bg-[#fff8f2] bg-[#f9f8f8]"
              } hover:!scale-[1.03] transition rounded-lg shadow-lg hover:shadow-2xl duration-300 text-center `}
            >
              <div className="flex justify-center mb-4 text-[#feb12f] text-4xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={Colors.h1}>
                {service.title}
              </h3>
              <a
                className={`text-gray-500 ${
                  darkMode ? "opacity-70" : "opacity-90"
                }`}
                style={Colors.ownOpacityPara}
              >
                {service.description}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
