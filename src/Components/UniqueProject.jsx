
const UniqueProject = ({image,title,desc,github,rowType,liveDemo}) => {
  const RowReverse = rowType === 'flex-row-reverse'

  return (
    <div className= {`flex flex-col items-start w-[280px] mt-15 gap-4 ${RowReverse ? 'md:flex-row-reverse' : 'md:flex-row'}  md:w-[700px] md:h-[300px]`} >
        {/* Image */}
        
      <img className="rounded-[6px] w-[280px] h-[200px] border md:w-[380px] md:h-[280px] md:mt-3 blur-[2.5px] z-0" src={image} alt="" />
      {/* Content */}
      <div className="mb-2 md:mt-5 md:h-[280px] md:flex flex-col items-center justify-evenly">
        <h3 className="self-start text-[17px] font-bold">{title}</h3>
        <p className="text-gray-500 font-semibold mt-1">{desc}</p>
        <div className="flex mt-3 self-start">
             <a className="flex items-center gap-[5px]" target="_blank" href={github}>
              {" "}
             <span className="text-gray-700 text-[16px]">Code</span> <i className="fab fa-github text-2xl text-gray-700 "></i>
            </a>
             <a className="ml-2 flex items-center gap-[5px]" target="_blank" href={liveDemo}>
              {" "}
              <span className={`text-gray-700 text-[16px]`}>Live Demo</span><i className="fa-solid fa-arrow-up-right-from-square text-2xl text-gray-700 "></i>
            </a>
        </div>
      </div>
    </div>
  )
}

export default UniqueProject
