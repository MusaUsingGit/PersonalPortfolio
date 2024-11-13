import React from "react";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <div className="h-screen overflow-hidden"> 
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="h-screen overflow-y-auto scroll-snap-y snap-mandatory no-scrollbar">
        <div className="snap-center h-screen w-full flex items-center justify-center bg-gradient-to-bl from-[#b00b1E] to-[#b000b5] text-transparent bg-clip-text">
          <h1 className="text-7xl font-extrabold max-w-[800px] mx-auto text-center">
            Who am I?
          </h1>
        </div>

        <div className="snap-center h-screen w-full flex items-center justify-center bg-gradient-to-bl from-[#b00b1E] to-[#b000b5] text-transparent bg-clip-text">
          <h1 className="text-7xl font-extrabold max-w-[800px] mx-auto text-center">
            I am <strong className="animate-text-color-change">Autistic</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
