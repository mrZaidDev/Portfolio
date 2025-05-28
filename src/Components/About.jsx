import About_img1 from '../assets/about-img.avif'

const About = () => {
  return (
    // About Section
    <section className="w-full h-[85vh] mt-5 border flex flex-col items-center justify-center px-10 pb-10 md:flex-row md:gap-3 lg:gap-6 md:h-[80vh]">
        {/* about title */}
        <p className='text-blue-600 text-[16px] font-bold uppercase mr-47 text[14px] mb-2 md:hidden'>About me</p>
        {/* About Img */}
      <img className='w-[280px] h-[280px] rounded-2xl md:w-[320px] md:h-[320px] lg:w-[320px] lg:h-[320px] ' src={About_img1} alt="" />
      {/* About Content */}
      <div className="w-[280px] h-[280px] md:w-[350px] md:h-[300px] md:mb-4 lg:w-[350px] lg:h-[350px] lg:mb-[-28px]">
        {/* about title */}
        <p className='text-blue-600 text-[16px] font-bold uppercase hidden md:inline'>About me</p>
        <h3 className='text-[22px] font-bold'>A dedicated Front-end Developer based in Pakistan, Chaman</h3>
        <p className="text-gray-500 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus vel totam deserunt quas amet suscipit delectus, adipisci debitis numquam dolores quis, doloribus modi! Amet iste libero nihil, at facilis id qui laborum similique voluptate alias, autem odio, rem quidem dolores. Temporibus, saepe. Eos voluptatum saepe corporis ratione, excepturi porro repellendus!</p>
      </div>
    </section>
  )
}

export default About
