import React from "react";
import Navbar from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import Background from "./Components/Background";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (

      <div>
        <Background />
        <Navbar />
        <Hero />
   </div>
  );
}


export default App;
