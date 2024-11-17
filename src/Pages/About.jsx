import React from "react";
import Navbar from "../Components/Navbar";
import me from "../Assets/Icon.png";
const About = () => {
  return (
    <div className="h-screen overflow-hidden scrollbar-hidden">
      <Navbar className="sticky top-0 z-10" />
      <div className="h-screen overflow-y-auto scroll-snap-y snap-mandatory no-scrollbar justify-center items-center">
        <div className="snap-center h-screen w-full flex items-center justify-center bg-gradient-to-bl from-[#b00b1E] to-[#b000b5] text-transparent bg-clip-text">
          <h1 className="text-7xl font-extrabold max-w-[800px] mx-auto text-center">
            Who am I?
          </h1>
        </div>

        <div className="flex items-center justify-center h-screen">
          <div className="snap-center w-[80%] max-w-[1240px] flex flex-col items-center justify-center bg-gradient-to-bl from-[#b00b1E] to-[#b000b5] text-transparent bg-clip-text flex-wrap p-6 overflow-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold max-w-[800px] mx-[10%] text-center flex-1 whitespace-nowrap">
              I am a{" "}
              <strong>Student</strong>
            </h1>
            <img
              src={me}
              className="w-[50%] sm:w-[30%] md:w-[20%] flex-shrink h-auto mt-4 animate-pulse"
            />
            
           
            
          </div>
        </div>

        <div className="snap-center h-full w-full flex items-center justify-normal bg-gradient-to-bl from-[#b00b1E] to-[#b000b5] text-transparent bg-clip-text">
          <h1 className="text-5xl font-extrabold max-w-[800px] mx-auto text-Left">
            Currently studying Computer Science BSc
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
