import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const strings = ["Improving", "Every", "Single", "Day :)"];

export const Hero = () => {
  const [typed, setTyped] = useState();
  const colors = [
    "text-[#bada55]",
    "text-[#b000b5]",
    "gradient-text",
    "font-extrabold animate-text-color-change",
  ];

  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    console.log(typed);
    AOS.init();
    if (typed) {
      typed.options.preStringTyped = (index) => {
        setTextColor(colors[index]);
      };
    }
  }, [typed]);
  function scrolltoTop(){
      window.scrollTo(0, 0)
  }
  return (
    <div  id="stars" >
      <div>
      <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>

    <div class="star2"></div>
    <div class="star2"></div>
  
    <div class="star3"></div>
    <div class="star3"></div>
      </div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <ReactTyped
          className={`${textColor} z-0 text-7xl font-bold p-3`}
          typedRef={setTyped}
          strings={strings}
          typeSpeed={50}
          backDelay={1000}
          backSpeed={35}
          loop
        />
      </div>
      <div  className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center snap-center">
          <h1 data-aos="fade-up"  data-aos-delay="50" data-aos-duration="1000" data-aos-easing="linear" className="sm:text-6xl  text-4xl gradient-text mb-5 p-5">Hi I'm Soup and welcome to my portfolio page!</h1>
          <Link data-aos="fade-up"  data-aos-delay="100"data-aos-duration="1000" data-aos-easing="linear" className="sm:text-3xl text-xl text-gray-500 hover:text-white" onClick={scrolltoTop} to={'/about'}>Click here to learn more about me!</Link>
      </div>
      <Footer />
    </div>
    
  );
};
