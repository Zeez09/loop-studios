import React from "react";
import hero from "../assets/images/image-hero.jpg";
import logo from "../assets/images/logo.svg";





const navLinks = ["About", "Careers", "Events", "Products", "Support"]

const NavBar = () => {
  return (
    <>
    
    <div className="relative w-full">
      <img src={hero} alt="" className="w-screen" />

      <nav className="absolute top-0 left-0 w-full flex items-center justify-between text-white max-w-7xl px-30 py-15">
        <div>
          <img src={logo} alt="" />        </div>
          <ul className="hidden sm:flex list-none gap-6 text-sm text-gray-500">
        {navLinks.map((link, index) => (
    <li key={index} className="hover:underline cursor-pointer capitalize">
        {link}
    </li>
))}
</ul>

        

        

      </nav>
      

      
    </div>
    
    </>
  )
}

export default NavBar
