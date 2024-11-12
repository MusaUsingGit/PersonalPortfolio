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
      <h1 className="w-full text-3xl font-bold text-[#B00B13]">SOUP!</h1>
      <ul className="hidden md:flex">
        {values.map((value, index) => {
          return <Link to={value.link} className="p-4">{value.title}</Link>;
        })}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 flex flex-col"
            : "ease-in-out duration-500 fixed left-[-100%] "
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#B00B13] m-4">SOUP!</h1>
        {values.map((value, index) => {
          return <Link to={value.link} className="px-6 border-b border-gray-600 py-7">{value.title}</Link>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
