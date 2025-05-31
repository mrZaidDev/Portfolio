import About_img1 from '../assets/about-img.avif'

const About = () => {
  return (
    // About Section
    <section className="w-full h-[85vh] mt-5 flex flex-col items-center justify-center px-10 pb-10 md:flex-row md:gap-3 lg:gap-6 md:h-[80vh]">
        {/* about title */}
        <p className='text-blue-600 text-[16px] font-extrabold uppercase mr-47 text[14px] mb-2 md:hidden'>About me</p>
        {/* About Img */}
      <img className='w-[280px] h-[280px] rounded-2xl md:w-[320px] md:h-[320px] lg:w-[320px] lg:h-[320px] ' src={About_img1} alt="" />
      {/* About Content */}
      <div className="w-[280px] h-[280px] md:w-[350px] md:h-[300px] md:mb-4 lg:w-[350px] lg:h-[350px] lg:mb-[-28px]">
        {/* about title */}
        <p className='text-blue-600 text-[16px] font-extrabold uppercase hidden md:inline'>About me</p>
        <h3 className='text-[22px] font-bold'>Hi, I am Zaid, a passionate Frontend Developer.</h3>
        <p className="text-gray-500 font-semibold">I specialize in building responsive, fast and user-friendly websites using Tailwind, React, HTML, CSS, JS. Whether It's a landing page, a small business site , I focus on performance and simplicity.</p>
        <p className='text-gray-500 font-semibold'>With a strong understanding of modern frontend development, I help individulas and businesses bring their ideas to life</p>
        <p className='text-gray-500 font-semibold'>Let's build it together!</p>
      </div>
    </section>
  )
}

export default About
