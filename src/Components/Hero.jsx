import waving_hand from "../assets/waving-hand-removebg-preview.png";
import zaid_img from "../assets/zaid-pic.jpg";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { useState } from "react";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const hero = () => {
  return (
    <>
      {/* Main Content */}
      <div id="home" className="px-10 mt-20 max-w-full h-[75vh] mx-auto flex items-center justify-center flex-col md:flex-row ">
        {/* Image */}
        <img
          className="w-[175px] h-[230px] rounded-2xl  sm:h-[250px] sm:w-[190px] md:w-[230px] md:h-[280px]  md:mb-15"
          src={zaid_img}
          alt=""
        />
        {/* Content */}
        <div
          className="flex flex-col gap-5 text-center mt-4
          w-[300px] sm:w-[400px] md:mt-0 md:w-[500px] md:pb-25 md:ml-10  md:text-start "
        >
          <h1 className="text-3xl  sm:text-3xl font-bold md:text-5xl mt-2">
            Hi, I'm Zaid
            <img
              src={waving_hand}
              alt=""
              className="mb-5 ml-5 w-[35px] inline sm:w-[40px] md:w-[50px]"
            />
          </h1>
          <p className="text-gray-500 font-semibold mb-2">
            I am a web developer, I develop web apps using MERN Stack.
          </p>
          {/* Icons start */}
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/zaid-khan-b5833931a/"
            >
              <i className="fab fa-linkedin text-3xl text-gray-700"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mrZaidDev"
            >
              {" "}
              <i className="fab fa-github text-3xl text-gray-700 ml-2"></i>
            </a>
          </div>
          {/* Icons end*/}
        </div>
      </div>
      {/* Tech Stack */}
      <div className="mt-[30px] flex items-center justify-center gap-5  text-[18px] font-bold h-[12vh]">
        <span>Tech Stack | </span>
        <FaReact className="text-3xl text-blue-600" />
        <FaNodeJs className="text-3xl text-blue-600" />
        <SiExpress className="text-3xl text-blue-600" />
        <SiMongodb className="text-3xl text-blue-600" />
      </div>
    </>
  );
};

export default hero;
