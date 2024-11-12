import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";


const strings = ["Welcome", "WellCome", "Well Come", "We'll Come", "We'll <strong>Cum</strong>"];


export const Hero = () => {

const [typed, setTyped] = useState()
const colors = ["text-[#ff6f61]", "text-[#6f9cff]", "text-[#ffdc61]", "text-[#61ff8f]", "text-[#ff61f1]"]
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
      <ReactTyped className={`${textColor} z-0 text-7xl`} typedRef = {setTyped} strings = {strings} typeSpeed={70} backDelay={1000} backSpeed={40}/>
    </div>
  );
};