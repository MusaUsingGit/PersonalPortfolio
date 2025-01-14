import React, {useEffect} from "react";
import Navbar from "../Components/Navbar";
import me from "../Assets/Me But red.png";
import art from "../Assets/lake.png";
import code from "../Assets/ballcatch.gif";
import { Link, useLocation} from "react-router-dom";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const About = () => {
  const location = useLocation();
   // Initialize AOS on route change
   useEffect(() => {
    AOS.init({
      delay: 50,
      duration: 1000,
      easing: "linear",
      once: false, 
    });
    AOS.refresh(); 


    return () => {
      AOS.refresh(); 
    };
  }, [location]); 

  
  return (
    <div className="h-screen overflow: visible scrollbar-hidden">
      <Navbar className="sticky top-0 z-10" />
      <div className="h-screen overflow-y-visible snap-y snap-proximity justify-center items-center">
        <div className="snap-center h-screen w-full flex items-center justify-center gradient-text">
          <h1 className="text-7xl font-extrabold max-w-[800px] mx-auto text-center gradient-text">
            Who am I?
          </h1>
        </div>
      
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="500" data-aos-easing="linear" className="snap-center w-full flex items-center justify-center gradient-text flex-col ">
          <h1 className="text-6xl font-extrabold max-w-[800px] mx-auto text-center">
            I am a <strong>Student</strong>
          </h1>
          <div className="snap-center h-full w-full flex items-center justify-normal gradient-text pb-">
            <h1 className="text-3xl font-extrabold max-w-[800px] mx-auto text-center">
              Currently studying Computer Science BSc
            </h1>
          </div>
          <img
            src={me}
            className="w-[50%] rounded-full sm:w-[30%] md:w-[20%] flex-shrink h-auto mt-4 shadow-sm hover:glow transition-glow ease-in duration-500 hover:animate-image-hue-shift"
            alt="icon"
          />
        </div>
        <br />
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="500" data-aos-easing="linear" className="snap-center w-full h-full items-center justify-center gradient-text flex flex-col">
          <h1 className="text-6xl font-extrabold max-w-[800px] mx-auto text-center">
            I Write Code
          </h1>

          <Link
            to={"/projects"}
            className="w-[50%] sm:w-[30%] md:w-[20%] flex-shrink mt-4  hover:glow transition-glow ease-in duration-500 hover:animate-pulse rounded-2xl"
          >
            <img src={code} alt="code" className="rounded-2xl  ring-blue-950" />
          </Link>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="500" data-aos-easing="linear" className="w-full h-full items-center justify-center gradient-text flex flex-col">
          <h1 className="text-6xl font-extrabold max-w-[800px] mx-auto text-center">
            I Edit Images
          </h1>

          <Link
            to={"/projects"}
            className="w-[50%] sm:w-[30%] md:w-[20%] flex-shrink mt-4  lg:glow-none hover:glow transition-glow ease-in duration-500 hover:animate-pulse rounded-2xl"
          >
            <img src={art} alt="artwork" className="rounded-2xl" />
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
