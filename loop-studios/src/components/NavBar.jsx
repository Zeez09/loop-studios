import React from "react";
import hero from "../assets/images/image-hero.jpg";





const navLinks = ["About", "Careers", "Events", "Products", "Support"]

const NavBar = () => {
  return (
    <>
    
    <div className="relative w-full">
      <img src={hero} alt="" className="w-screen" />

      <nav className="absolute top-0 left-0 w-full flex items-center justify-between text-white max-w-7xl px-8 py-3">
        

        

      </nav>
      

      
    </div>
    
    </>
  )
}

export default NavBar
