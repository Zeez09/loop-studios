import React from "react";
import hero from "../assets/images/mobile/image-hero.jpg";
import hero2 from "../assets/images/Desktop/image-hero.jpg";
import logo from "../assets/images/Desktop/logo.svg";





const navLinks = ["About", "Careers", "Events", "Products", "Support"]

const NavBar = () => {
  return (
    <>
    
    <div className="relative w-full">
      <img src={hero} alt="" className="w-screen block sm:hidden" />
      <img src={hero2} alt="" className="w-screen hidden sm:block" />

      <nav className="absolute top-0 left-0 w-full flex items-center justify-between text-white  px-36 py-18">
        <div>
          <img src={logo} alt="" /></div>
          <ul className=" hidden sm:flex list-none gap-6 josefin-sans-300 text-white font-bold">
        {navLinks.map((link, index) => (
    <li key={index} className="inline cursor-pointer capitalize hover:underline hover:decoration-2 hover:underline-offset-4"
>
        {link}
    </li>
))}
</ul>




        

        

      </nav>

      <div className="absolute top-24 w-full text-white  px-36 py-18">
        <div className=" p-6 sm:p-10 rounded-lg w-[800px] border border-white mt-10">
        <h1 className="text-7xl sm:text-7xl max-w-5xl">
          IMMERSIVE<br/>EXPERIENCES<br/>THAT DELIVER
        </h1>
        
      </div>
      </div>


      
      

      
    </div>
    
    </>
  )
}

export default NavBar
