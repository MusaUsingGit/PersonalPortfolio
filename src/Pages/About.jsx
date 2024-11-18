import React from "react";
import Navbar from "../Components/Navbar";
import me from "../Assets/Icon.png";
import art from "../Assets/lake.png";
import code from "../Assets/ballcatch.gif";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="h-screen overflow-hidden scrollbar-hidden">
      <Navbar className="sticky top-0 z-10" />
      <div className="h-screen overflow-y-auto snap-y snap-mandatory justify-center items-center">
        <div className="snap-center h-screen w-full flex items-center justify-center gradient-text">
          <h1 className="text-7xl font-extrabold max-w-[800px] mx-auto text-center animate-text-color-change">
            Who am I?
          </h1>
        </div>

        <div className="snap-center w-full flex items-center justify-center gradient-text flex-col">
          <h1 className="text-6xl font-extrabold max-w-[800px] mx-auto text-center">
            I am a <strong>Student</strong>
          </h1>
          <div className="snap-center h-full w-full flex items-center justify-normal gradient-text">
            <h1 className="text-3xl font-extrabold max-w-[800px] mx-auto text-center">
              Currently studying Computer Science BSc
            </h1>
          </div>
          <img
            src={me}
            className="w-[50%] sm:w-[30%] md:w-[20%] flex-shrink h-auto mt-4 hover:animate-image-hue-shift"
            alt="icon"
          />
        </div>
        <br />
        <div className="snap-center w-full h-full items-center justify-center gradient-text flex flex-col">
          <h1 className="text-6xl font-extrabold max-w-[800px] mx-auto text-center">
            I <strong>Code</strong>
          </h1>

          <Link
            to={"/projects"}
            className="w-[50%] sm:w-[30%] md:w-[20%] flex-shrink h-auto mt-4 hover:animate-pulse rounded-2xl"
          >
            <img src={code} alt="code" className="rounded-2xl" />
          </Link>
        </div>
        <div className="snap-center w-full h-full items-center justify-center gradient-text flex flex-col">
          <h1 className="text-6xl font-extrabold max-w-[800px] mx-auto text-center">
            I <strong>Edit</strong>
          </h1>

          <Link
            to={"/projects"}
            className="w-[50%] sm:w-[30%] md:w-[20%] flex-shrink h-auto mt-4 rounded-2xl"
          >
            <img src={art} alt="artwork" className="rounded-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
