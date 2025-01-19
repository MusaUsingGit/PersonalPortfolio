import React from 'react'
import Navbar from '../Components/Navbar'
import Background from '../Components/Background'

const SecretPage = () => {
  return (
    <div className="h-screen overflow-hidden scrollbar-hidden">
        <Background />
        <Navbar />
        <div className="snap-center h-screen w-full flex items-center justify-center gradient-text">
          <h1 className="text-7xl font-extrabold max-w-[800px] mx-auto text-center gradient-text select-none">
          Try pressing T or H on your keyboard
            </h1>
        </div>
    </div>
  )
}

export default SecretPage