import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GiNoodles } from "react-icons/gi";
import { Link } from "react-router-dom";
const values = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" }
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white z-2">
      <GiNoodles className=" text-7xl font-bold text-[#fee379]" />
      <h1 className="w-full text-4xl font-bold gradient-text">SOUP!</h1>
      <ul className="hidden md:flex">
        {values.map((value, index) => {
          return <Link to={value.link} className="p-5">{value.title}</Link>;
        })}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>
      <ul
        className={
          nav
            ? "z-10 fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 flex flex-col"
            : "ease-in-out duration-500 fixed -left-full "
        }
      >
        <h1 className="w-full text-4xl font-bold text-[#B00B13] m-4 flex"><GiNoodles className=" text-5xl font-bold text-[#fee379]" /> SOUP!</h1>
        {values.map((value, index) => {
          return <Link to={value.link} className="px-3 text-3xl border-b border-gray-600 py-7">{value.title}</Link>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
