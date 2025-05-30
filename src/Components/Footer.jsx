
const Footer = () => {
  return (
    <footer className="w-full h-[100px] flex items-center justify-evenly bg-gray-900">
        {/* footer Text */}
              <p className="text-white text-[15px] font-bold md:text-[17px]">Copyright &copy; {new Date().getFullYear()}. All right reserved</p>
               {/* Icons  */}
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/zaid-khan-b5833931a/">
              <i className="fab fa-linkedin text-2xl md:text-3xl text-white"></i>
            </a>
            <a target="_blank" href="https://github.com/mrZaidDev">
              {" "}
              <i className="fab fa-github text-2xl md:text-3xl text-white ml-2"></i>
            </a>
          </div>
    </footer>
  )
}

export default Footer
