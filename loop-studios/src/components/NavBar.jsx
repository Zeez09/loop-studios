import React from "react";
import hero from "../assets/images/image-hero.jpg";
import logo from "../assets/images/logo.svg";





const navLinks = ["About", "Careers", "Events", "Products", "Support"]

const NavBar = () => {
  return (
    <>
    
    <div className="relative w-full">
      <img src={hero} alt="" className="w-screen" />

      <nav className="absolute top-0 left-0 w-full flex items-center justify-between text-white  px-30 py-15">
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

      <div className="absolute top-24 w-full text-white mt-10 px-30">
        <div className=" p-6 sm:p-10 rounded-lg max-w-md border border-white">
        <h1 className="text-4xl sm:text-5xl max-w-2xl">
          IMMERSIVE<br/>EXPERIENCES<br/>THAT DELIVER
        </h1>
        
      </div>
      </div>


      
      

      
    </div>
    
    </>
  )
}

export default NavBar
