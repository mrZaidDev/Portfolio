import About_img1 from '../assets/about-img.avif'
const About = () => {
  return (
    // About Section
    
    <section id='about' className="w-full h-[85vh] mt-5 flex flex-col items-center justify-center px-10 py-10 md:flex-row md:gap-3 lg:gap-6 md:h-[70vh]">
        {/* about title */}
        <p  className='text-blue-600 text-[16px] font-extrabold uppercase mr-47 text[14px] mb-2 md:hidden'>About me</p>
        {/* About Img */}
      <img className='w-[280px] h-[280px] rounded-2xl md:w-[320px] md:h-[320px] lg:w-[320px] lg:h-[320px] ' src={About_img1} alt="" />
      {/* About Content */}
      <div className="w-[280px] h-[280px] md:w-[350px] md:h-[300px] md:mb-4 lg:w-[350px] lg:h-[350px] lg:mb-[-28px]">
        {/* about title */}
        <p className='text-blue-600 text-[16px] font-extrabold uppercase hidden md:inline'>About me</p>
        <h3 className='text-[22px] font-bold pt-3 md:pt-0'>I am Zaid, a passionate Full Stack Developer.</h3>
        <p className="text-gray-500 font-semibold">I develop web apps using MERN Stack, I am confident enough to deliver full functioning web apps, I strive to be updated with the trending technologies.</p>
        <p className='text-gray-500 font-semibold'>Other than programming skills I am good at communicating, playing football and much more.</p>
        <p className='text-gray-500 font-semibold'>So if you are in the need of someone skilled, honest and disciplined, it is the best opportunity.</p>
      </div>
    </section>
  )
}

export default About
