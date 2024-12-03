import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { useDarkMode } from "../components/DarkModeContext";
import Arrow from "../images/Arrow.png";


const Services = ({ Colors }) => {
  const { darkMode } = useDarkMode();

  const services = [
    {
      title: "Mern Stack",
      description:
        "Experience the synergy of MERN Stack Development with our expertise.",
      icon: <FaReact />,
      position:"x",
      dir: "-100%",
    },
    {
      title: "Frontend Development",
      description:
        "Embark on a journey of Frontend Development excellence with us.",
      icon: <SlScreenDesktop />,
      position:"y",
    dir: "50px",
    },
    {
      title: "Backend Development",
      description: "Dive into the robust world of Backend Development with us.",
      icon: <FaNodeJs />,
      position:"x",
      dir: "50px",
    },
  ];

  return (
    <section
      className="bg-white overflow-hidden font-poppins_Regular pb-10 py-20 md:px-8"
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
          <h2 className="text-4xl font-bold pb-6 after:content-[''] after:absolute after:translate-x-[-50%] after:h-[5px] after:w-[2rem] after:left-[50%] after:mt-[3.2rem] after:rounded-[5px] after:bg-orange-500" style={Colors.h1}>
            My Services
          </h2>
          <motion.img
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
               transition={{ type:"spring", duration: 0.3, delay:0.4 }}
              src={Arrow}
              alt="Arrow"
              className="md:w-[70px] max-md:w-[50px] absolute max-md:right-[10%] md:ml-[60%] max-lg:-mt-[120px] lg:-mt-[155px]"
              id="Arrow"
            />
               <p className="text-gray-700 mb-16 mt-4 px-5" style={Colors.p}>
          The skills, tools, and technologies I use to bring your products to
          life:
        </p>
        </motion.div>
        <div className="grid max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3 justify-center gap-x-2  gap-y-5 items-center text-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, [service.position]: service.dir }}
              whileInView={{ opacity: 1, [service.position]: 0 }}
              transition={{ duration: 0.3, delay: index * 0.3, ease:'easeIn', }}
              viewport={{ once: true }}
              className={`text-center hover:!scale-[1.01] transition rounded-lg duration-300 p-6`}
            >
              <div className="flex justify-center mb-4 text-[#feb12f] text-4xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4" style={Colors.h1}>
                {service.title}
              </h3>
              <div className="flex justify-center">

              <div
                className={`text-gray-500 text-center max-w-[300px] ${
                  darkMode ? "opacity-70" : "opacity-90"
                }`}
                style={Colors.ownOpacityPara}
                >
                {service.description}
     
                </div>
                  </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;