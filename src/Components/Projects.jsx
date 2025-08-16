import UniqueProject from "./UniqueProject";
import University_pic from '../assets/University-pic.GIF'
import Ecomerce_pic_jpeg_version from '../assets/Eccomerce-pic-jpeg-version.JPG'
const Projects = () => {
  return (
    <section id="projects" className="w-full h-auto my-30 flex items-center flex-col px-10 pb-10 ">
        {/* Projects heading */}
      <header className="w-[280px] md:w-[650px] md:mr-15">
        <p className="text-blue-600 text-[16px] my-1 font-extrabold uppercase text[14px] mr-60">
          Projects
        </p>
        <h1 className="text-[22px] font-bold">
          Each Project is a unique piece of development.
        </h1>
      </header>
        {/* Project Preview 1*/}
        <div className="mt-5 md:mt-10">
            <UniqueProject image={Ecomerce_pic_jpeg_version} title='E-commerce filtering functionality.' desc="This is an e-commerce web app, where I widely used the filtering functionality in it, forExample. You can filter according to the price, you can filter according to the category and many more. " github="https://github.com/mrZaidDev/Ecommerce-filtering-app" liveDemo="https://ecommerce-filtering-web.netlify.app/" rowType={'flex-row-reverse'}/>
        </div>
        {/* Project Preview 2*/}
        <div className="mt-5 md:mt-10">
            <UniqueProject image={University_pic} title="University Website" desc="This is a university website, where I have added pictures with different designs, also included testimonial part. I also included the contact form that works perfectly." github="https://github.com/mrZaidDev/University-website" liveDemo="https://islamic-university.netlify.app/" rowType={'flex-row'}/>
        </div>
        {/* Project Preview 2*/}
         <div className="mt-5 md:mt-10">
            <UniqueProject image={University_pic} title="University Website" desc="This is a university website, where I have added pictures with different designs, also included testimonial part. I also included the contact form that works perfectly." github="https://github.com/mrZaidDev/University-website" liveDemo="https://islamic-university.netlify.app/" rowType={'flex-row'}/>
        </div>
    </section>
  );
};

export default Projects;
