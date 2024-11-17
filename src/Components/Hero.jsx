import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";


const strings = ["Making Progress", "Every","Single","Day :)"];


export const Hero = () => {

const [typed, setTyped] = useState()
const colors = ["text-[#bada55]", "text-[#b000b5]", "gradient-text", "font-extrabold animate-text-color-change"]



const [textColor, setTextColor] = useState("text-white");

useEffect(() => {
  console.log(typed);
  if (typed) {
  typed.options.preStringTyped = (index) => {
  setTextColor(colors[index])
}
}
}, [typed])

  return (
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <div>
      <ReactTyped className={`${textColor} z-0 text-7xl font-bold hover:animate-text-color-change`} typedRef = {setTyped} strings = {strings} typeSpeed={50} backDelay={1000} backSpeed={35} loop />
      </div>
    </div>
  );
};