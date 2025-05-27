import React, { useState } from "react";
import hero from "../assets/images/mobile/image-hero.jpg";
import hero2 from "../assets/images/Desktop/image-hero.jpg";
import logo from "../assets/images/Desktop/logo.svg";
import Hamburger from 'hamburger-react'
import icon from "../assets/images/Desktop/icon-close.svg";







const NavBar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navLinks = ["About", "Careers", "Events", "Products", "Support"]

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);



  return (
    <>
    
    <div className="relative w-full">
      <img src={hero} alt="" className=" block sm:hidden w-full" />
      <img src={hero2} alt="" className="w-screen hidden sm:block" />

<nav className="absolute top-0 left-0 w-full flex items-center justify-between text-white px-6 sm:px-20 py-6">

        <div className={`${sidebarOpen ? "hidden" : "block"} sm:block`}>

          <img src={logo} alt="" />
          </div>
          <ul className=" hidden sm:flex list-none gap-6 josefin-sans-300 text-white font-bold">
        {navLinks.map((link, index) => (
    <li key={index} className="inline cursor-pointer capitalize hover:underline hover:decoration-2 hover:underline-offset-4"
>
        {link}
    </li>
))}
</ul>


<div className="sm:hidden">
  <Hamburger toggled={sidebarOpen} toggle={toggleSidebar} />
        </div>

</nav>

{sidebarOpen && (
  <div className="fixed top-0 left-0 w-[70%] bg-black bg-opacity-90 p-6 z-40 sm:hidden">
    <div className="flex items-center justify-between mb-8 flex-row">
        <img src={logo} alt="" className="h-6" />
        <button className="text-amber-50 " onClick={closeSidebar}>X</button>

      </div>
    <ul className="flex flex-col gap-6 text-white font-bold mt-30">
        {navLinks.map((link, index) => (
    <li key={index} onClick={closeSidebar} className="inline cursor-pointer capitalize hover:underline hover:decoration-2 hover:underline-offset-4"
>
        {link}
    </li>
        ))}
    </ul>

    </div>

)}



      <div className="absolute top-24 w-full text-white px-6 sm:px-36">
        <div className="p-4 sm:p-10 rounded-lg w-full sm:w-[800px] border border-white mt-10">
          <h1 className="text-4xl sm:text-7xl leading-tight">
          IMMERSIVE<br/>EXPERIENCES<br/>THAT DELIVER
        </h1>
        
      </div>
      </div>


      
      

      
    </div>
    
    </>
  )
}

export default NavBar
