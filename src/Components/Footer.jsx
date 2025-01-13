import React from "react";
import { FaGithub, FaLink } from "react-icons/fa"; //<FaGithub />
import { FaLinkedin } from "react-icons/fa"; //<FaLinkedin />

const Footer = () => {
  return (
    <div>
      <footer className="w-full flex justify-center mb-[10%]">
        <div className="md:w-[20%]">
             
        <div className="flex justify-around mb-[10%] text-7xl gradient-text p-5 w-full"> 
          <div>
            <a href="https://github.com/MusaUsingGit"><FaGithub className="text-white m-2" /></a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/musa-ahmed-8105a82b2/"><FaLinkedin className="text-white m-2" /></a>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
