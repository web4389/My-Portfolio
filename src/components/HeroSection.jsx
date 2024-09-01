import React, { useEffect, useRef } from "react";
import "../utils/css/heroSection.css";

import MyPic from "../assets/images/MyPicForFirstSection.png";

const HeroSection = () => {
  const sectionRef = useRef(null);

  // Function to handle the intersection and apply animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("animate-fadeIn");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
  }, []);
  return (
    <section
      ref={sectionRef}
      className="bg-white max-md:py-[120px] md:py-[200px] flex justify-center items-center"
      id="heroSection"
      style={{ minHeight: "100vh" }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center max-[1030px]:px-4 min-[1030px]:px-24">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left md:w-1/2 gap-y-10 leading-[24px]">
          <h1 className="text-3xl md:text-5xl md:leading-[60px] font-bold text-gray-800 min-[1000px]:pr-16 min-[1100px]:pr-20 min-[1280px]:pr-44">
            Hello, I'm <span className="text-orange-500">Shilok</span> a Web
            Developer
          </h1>
          <p className="my-8 text-gray-600 lg:max-w-[90%]">
            A dedicated UI/UX designer with a passion for creating digital
            experiences that not only look beautiful but also function
            seamlessly.
          </p>
          <button className="bg-[#252a30] text-white font-medium px-6 py-3 rounded-full hover:bg-orange-500 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Side: Image and Info */}
        <div className="relative md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
          <div className="relative imgBg lg:flex lg:items-center lg:gap-x-9">
            <img
              src={MyPic}
              alt="Profile"
              className="rounded-full lg:w-[380px] max-lg:w-[320px] shadow-2xl"
            />
            <div className="max-lg:hidden text-end flex flex-col gap-y-[56px]">
              <div>
                <h1 className="font-bold text-gray-700 text-3xl pb-2">12</h1>
                <p className="text-gray-600 text-[15px] opacity-75">
                  Years Of Experience
                </p>
              </div>
              <div className="">
                <h1 className="font-bold text-gray-800 text-3xl pb-2">100%</h1>
                <p className="text-gray-600 text-[15px] opacity-75">
                  Client On Worldwide
                </p>
              </div>
              <div className="">
                <h1 className="font-bold text-gray-800 text-3xl pb-2">19</h1>
                <p className="text-gray-600 text-[15px] opacity-75">
                  Projects Done
                </p>
              </div>
            </div>
            <div className="lg:hidden">
              <div className="absolute top-0 left-0 w-[70px] h-[70px] bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">6Mo+</span>
              </div>
              <div className="absolute bottom-0 left-0 w-[70px] h-[70px] bg-white shadow-lg rounded-full flex items-center justify-center">
                <span className="text-gray-800 font-semibold">19+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Patterns */}
      <div
        className={`absolute top-[30vh] left-[10vw] w-32 h-32 max-md:w-20 max-md:h-20 bg-[#da8195] rounded-full opacity-[7%]`}
      ></div>

      <div
        className={`absolute top-[50vh] right-[17vw] max-md:w-20 max-md:h-20 w-32 h-32 bg-[#da8195] rounded-full opacity-[7%]`}
      ></div>
      <div
        className={`absolute top-[22vh] right-[17vw] max-md:w-20 max-md:h-20 w-32 h-32 bg-[#da8195] rounded-full opacity-[4%]`}
      ></div>
    </section>
  );
};

export default HeroSection;
