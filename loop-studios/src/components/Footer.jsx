import React from 'react'
import logo from "../assets/images/Desktop/logo.svg"
import facebook from "../assets/images/Desktop/icon-facebook.svg"
import twitter from "../assets/images/Desktop/icon-twitter.svg"
import pinterest from "../assets/images/Desktop/icon-pinterest.svg"
import instagram from "../assets/images/Desktop/icon-instagram.svg"


const footerLinks = ["About", "Careers", "Events", "Products", "Support"]


const Footer = () => {
  
  
  return (
    <>
      

      <div className='bg-black w-full px-32 mt-20 py-16'>
        <footer className='flex flex-col sm:flex-row justify-between items-center'>
          <div>
            <img src={logo} alt="" />
            <ul className=" hidden sm:flex list-none gap-6 josefin-sans-300 text-white font-bold">
        {footerLinks.map((link, index) => (
    <li key={index} className="inline cursor-pointer capitalize hover:underline hover:decoration-2 hover:underline-offset-4"
>
        {link}
    </li>
))}
</ul>
</div>

<div className=' flex flex-col items-center sm:items-end gap-6'>



            <div className='flex gap-4'>
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </div>
            
            <p className='text-xs text-white/50'>&copy; 2025 Loopstudios. All rights reserved.</p>
          
          </div>
        </footer>

      </div>
    </>
  )
}

export default Footer
