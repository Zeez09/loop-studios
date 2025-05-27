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
      

      <div className='bg-black w-full px-6 sm:px-16 lg:px-32 mt-20 py-16'>
        <footer className='lg:flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10'>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
            <img src={logo} alt="" />
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 josefin-sans-300 text-white font-bold mt-6 sm:mt-0">
        {footerLinks.map((link, index) => (
          <li key={index} className="inline cursor-pointer capitalize hover:underline hover:decoration-2 hover:underline-offset-4">
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
