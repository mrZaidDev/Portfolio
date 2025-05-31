
const Contact = () => {
  return (
      <section className="w-full h-auto  my-20 flex items-center flex-col px-10 pb-10 ">
            {/* Projects heading */}
      <div className="w-[280px] md:w-[650px] md:mr-15">
        <p className="text-blue-600 text-[16px] my-1 font-extrabold uppercase text[14px] mr-60">
          Contact
        </p>
        <h1 className="text-[22px] font-bold">
          Let's build it together.
        </h1>
        {/* Icons */}
        <div className="icons flex flex-col gap-5  mt-15 md:flex-row md:justify-between">
       
            {/* Icon 2 + desc */}
          <div className="icon flex items-center gap-5 md:w-4/10">
              <i className="fa-solid fa-envelope text-3xl text-blue-600"></i>
            <div className="">
                <h4 className="text-[17px] font-bold">Mail</h4>
                <p className="text-gray-500 font-semibold text-[16px]">zaidcodingtopcoding@gmail.com</p>
            </div>
          </div>
            {/* Icon 2 + desc */}
          <div className="icon flex items-center gap-5 md:w-4/10 ">
                <i className="fa-brands fa-square-whatsapp  text-3xl text-blue-600"></i>
              <a href="https://wa.me/923148001406" target="_blank" rel="noopener noreferrer">
            <div className="">
                <h4 className="text-[17px] font-bold">Whatsapp</h4>
                <p className="text-gray-500 font-semibold text-[16px]">Chat on Whatsapp</p>
            </div>
            </a>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Contact
