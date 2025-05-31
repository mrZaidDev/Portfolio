import waving_hand from "../assets/waving-hand-removebg-preview.png";
import zaid_img from "../assets/zaid-pic.jpg";
import html_icon from '../assets/html-icon.svg'
import css_icon from '../assets/css-icon.svg'
import js_icon from '../assets/javascript-programming-language-icon.svg'
import react_icon from '../assets/react-js-icon.svg'
import tailwind_icon from '../assets/tailwind-css-icon.svg'
import { useState } from "react";
const hero = () => {
  const [navClick,setNavClick] = useState(false)

// Nav click function
  const handleNavClick = () => {
    setNavClick(!navClick)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="w-full h-[70px] flex items-center justify-between font-bold px-[40px] sticky top-0 bg-white z-10">
        <h3 className="text-[18px]">Logo</h3>
        <ul className="hidden sm:flex md:items-center  md:justify-center text-[16px] gap-3.5">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        {/* Nav Bar */}
        <div className="sm:hidden z-10 " onClick={handleNavClick}>
           <i className={`fa-solid fa-bars text-3xl ${navClick ? 'text-white' : 'text-black'}`}></i>
        </div>
        {/* Navigation menu */}
          <ul className={`fixed flex flex-col  items-start justify-start  transition-transform duration-500 ${navClick ? 'right-0' : 'right-[-50%]'} top-0 h-[100vh] w-50/100 text-white text-[18px] gap-3.5 bg-black pt-20 z-0 `}>
          <li className="ml-15">Home</li>
          <li className="ml-15">About</li>
          <li className="ml-15">Projects</li>
          <li className="ml-15">Contact</li>
          <li className="ml-15">Contact</li>
        </ul>

      </nav>

      {/* Main Content */}
      <div className="px-10 max-w-full h-[75vh] mx-auto flex items-center justify-center flex-col md:flex-row ">
          {/* Image */}
        <img className="w-[200px] h-[230px] rounded-2xl  sm:h-[250px] sm:w-[220px] md:w-[250px] md:h-[280px]  md:mb-15" src={zaid_img} alt="" />
        {/* Content */}
        <div className="flex flex-col gap-5 text-center mt-4
          w-[300px] sm:w-[400px] md:mt-0 md:w-[500px] md:pb-25 md:ml-10  md:text-start ">
          <h1 className="text-3xl  sm:text-3xl font-bold md:text-5xl mt-2">
            Hi, I'm Zaid
            <img src={waving_hand} alt="" className="mb-5 ml-5 w-[35px] inline sm:w-[40px] md:w-[50px]" />
          </h1>
          <p className="text-gray-500 font-semibold mb-2">
          I build clean, responsive websites using React & Tailwind CSS for startups, creators, and small businesses.
          </p>
          {/* Icons start */}
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zaid-khan-b5833931a/">
              <i className="fab fa-linkedin text-3xl text-gray-700"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mrZaidDev">
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
          <img src={html_icon} className="w-[27px]" alt="" />
          <img src={css_icon} className="w-[26px]" alt="" />
          <img src={js_icon} className="w-[29px]" alt="" />
          <img src={react_icon} className="w-[33px]" alt="" />
          <img src={tailwind_icon} className="w-[33px]" alt="" />
        </div>
    </>
  );
};

export default hero;
