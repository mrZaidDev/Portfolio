import waving_hand from "../assets/waving-hand-removebg-preview.png";
import zaid_img from "../assets/zaid-pic.jpg";
import html_icon from '../assets/html-icon.svg'
import css_icon from '../assets/css-icon.svg'
import js_icon from '../assets/javascript-programming-language-icon.svg'
import react_icon from '../assets/react-js-icon.svg'
import tailwind_icon from '../assets/tailwind-css-icon.svg'
const hero = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full h-[70px] flex items-center justify-between font-bold px-[40px] sticky top-0 bg-white z-10">
        <h3 className="text-[18px]">Logo</h3>
        <ul className="flex items-center justify-center text-[16px] gap-3.5">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="max-w-full h-[75vh] mx-auto flex px-10 items-center justify-center flex-col md:flex-row ">
        {/* Content */}
        <div className="flex flex-col gap-5 text-center mt-4 order-2 
          xs:w-[50%] sm:w-[50%] md:w-[500px] md:pb-25 pl-10 md:text-start ">
          <h1 className="text-3xl xs:text-3xl sm:text-4xl font-bold md:text-5xl">
            Front-End React Developer{" "}
            <img src={waving_hand} alt="" className="w-[50px] inline" />
          </h1>
          <p className="text-gray-500 font-semibold">
           I'm Zaid Noorzai. A passionate Front end React Developer based
            in Pakistan, Chaman
          </p>
          {/* Icons start */}
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/zaid-khan-b5833931a/">
              <i className="fab fa-linkedin text-3xl text-gray-700"></i>
            </a>
            <a target="_blank" href="https://github.com/mrZaidDev">
              {" "}
              <i className="fab fa-github text-3xl text-gray-700 ml-2"></i>
            </a>
          </div>
            {/* Icons end*/}
        </div>
        {/* Image */}
        <img className="order-1 w-[180px] h-[230px] rounded-2xl sm:w-[200px] sm:h-[250px] md:w-[230px] ml-9 md:mb-15" src={zaid_img} alt="" />
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
