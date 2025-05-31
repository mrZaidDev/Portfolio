
const Sevices = () => {
  return (
    <div>
         <section className="w-full h-[50vh]  my-20 flex items-center justify-center flex-col px-10 pb-10 ">
            {/* Projects heading */}
      <div className="w-[280px] md:w-[650px] md:mr-15">
        <p className="text-blue-600 text-[16px] my-1 font-extrabold uppercase text[14px] mr-60">
          Services
        </p>
        <h1 className="text-[22px] font-bold">
          What I can do for you.
        </h1>
        {/* Icons */}
        <div className="icons flex flex-col gap-5  mt-15 md:flex-row md:justify-between">
            {/* Icon 1 + desc */}
          <div className="flex flex-col items-center text-center gap-5 px-2 py-5 bg-gray-50 rounded-2xl md:w-50/100">
              <i className="fa-brands fa-figma text-3xl text-blue-600"></i>
            <div className="location-desc">
                <h4 className="text-[17px] font-bold">Figma to Code Conversion</h4>
                <p className="text-gray-500 font-semibold text-[16px]">I convert your Figma designs into clean and responsive HTML/CSS or React components.</p>
            </div>
          </div>
            {/* Icon 2 + desc */}
            <div className="flex flex-col items-center text-center gap-5 px-2 py-5 bg-gray-50 rounded-2xl md:w-50/100">
              <i className="fa-solid fa-image text-3xl text-blue-600"></i>
            <div className="location-desc">
                <h4 className="text-[17px] font-bold">Landing Pages</h4>
                <p className="text-gray-500 font-semibold text-[16px]">I build responsive and user friendly landing pages..</p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Sevices
