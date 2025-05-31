import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Background from "../Components/Background";
import hiveMindLight from "../Assets/HiveMindPreview.png"
import hiveMindDark from "../Assets/HiveMindPreviewDark.png"
const Projects = () => {
  return (
    <div className="h-screen overflow-hidden scrollbar-hidden">
      <Background />
      <Navbar className="sticky top-0 z-10" />
      <div className="h-screen overflow-y-auto snap-y snap-proximity justify-center items-center">
        <div className="snap-center h-screen w-full flex flex-col items-center justify-center gradient-text">
          <h1 className="text-7xl font-extrabold max-w-[800px] mx-auto text-center gradient-text dark:gradient-text-dark select-none">
            Coding Projects:
          </h1>
          <div id='CODINGPROJECTCONTAINER' className="flex-col mt-10 justify-center">
      <a href="https://cs2team29.cs2410-web01pvm.aston.ac.uk/public/"><img src={hiveMindDark} className="max-w-[800px]" /></a> 
          </div>
        </div>

        <div className="snap-center h-full w-full flex items-center justify-normal gradient-text">
            <h1 className="text-4xl md:text-7xl font-extrabold max-w-[800px] mx-auto text-center">
                My Works
            </h1>
            <div id='PHOTOSHOPPROJECTCONTAINER'></div>
          </div>
          <Footer />
         
      </div>
      
    </div>
  );
};

export default Projects;
