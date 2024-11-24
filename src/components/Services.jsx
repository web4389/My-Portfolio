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
        "Experience the synergy of MERN Stack Development with our expertise.",
      icon: <FaReact />,
      x: "-100%",
    },
    {
      title: "Frontend Development",
      description:
        "Embark on a journey of Frontend Development excellence with us.",
      icon: <SlScreenDesktop />,
      x: "100%",
    },
    {
      title: "Backend Development",
      description: "Dive into the robust world of Backend Development with us.",
      icon: <FaNodeJs />,
      x: "-100%",
    },
  ];

  return (
    <section
      className="bg-white overflow-hidden font-poppins_Regular"
      id="services"
      style={Colors.bg}
    >
      <div className="mx-auto max-md:px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold pb-8" style={Colors.h1}>
            My Services
          </h2>
        </motion.div>
        <div className="grid max-xl:grid-cols-1 xl:grid-cols-2 justify-center gap-y-5 items-center text-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: service.x }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={` hover:!scale-[1.01] transition rounded-lg duration-300 text-center p-6`}
            >
              <div className="flex justify-center mb-4 text-[#feb12f] text-4xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={Colors.h1}>
                {service.title}
              </h3>
              <a
                className={`text-gray-500 text-center ${
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
