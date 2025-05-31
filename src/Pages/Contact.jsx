import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Background from "../Components/Background";

const Contact = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <div className=" z-0 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-7xl font-extrabold select-none">
        <p className="gradient-text">
        CONTACT
        </p>


      </div>
      <Footer />
    </div>
  );
};

export default Contact;
