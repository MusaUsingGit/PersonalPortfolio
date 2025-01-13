import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
const Projects = () => {
  return (
    <div className="h-screen overflow-hidden scrollbar-hidden">
      <Navbar className="sticky top-0 z-10" />
      <div className="h-screen overflow-y-auto snap-y snap-proximity justify-center items-center">
        <div className="snap-center h-screen w-full flex items-center justify-center gradient-text">
          <h1 className="text-7xl font-extrabold max-w-[800px] mx-auto text-center gradient-text">
            My Works
          </h1>
          <div id='CODINGPROJECTCONTAINER'></div>
        </div>

        <div className="snap-center h-full w-full flex items-center justify-normal gradient-text">
            <h1 className="text-4xl md:text-7xl font-extrabold max-w-[800px] mx-auto text-center">
                Coding Projects:
            </h1>
            <div id='PHOTOSHOPPROJECTCONTAINER'></div>
          </div>
          
          
          <Footer />
      </div>
    </div>
  );
};

export default Projects;
