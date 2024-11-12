import React from "react";
import Navbar from "./Components/Navbar";
import { Hero } from "./Components/Hero";


function App() {
  return (

      <div>
        <Navbar />
        <Hero />
   </div>
  );
}

function Home() {
  return <div>Welcome to the Home Page</div>;
}

export default App;
