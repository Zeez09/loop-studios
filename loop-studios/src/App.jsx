import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import interactive from "./assets/images/mobile/image-interactive.jpg"
import interactive2 from "./assets/images/Desktop/image-interactive.jpg"
import deep from "./assets/images/mobile/image-deep-earth.jpg"
import deep2 from "./assets/images/Desktop/image-deep-earth.jpg"
import night from "./assets/images/mobile/image-night-arcade.jpg"
import night2 from "./assets/images/Desktop/image-night-arcade.jpg"
import soccer from "./assets/images/mobile/image-soccer-team.jpg"
import soccer2 from "./assets/images/Desktop/image-soccer-team.jpg"
import grid from "./assets/images/mobile/image-grid.jpg"
import grid2 from "./assets/images/Desktop/image-grid.jpg"
import above from "./assets/images/mobile/image-from-above.jpg"
import above2 from "./assets/images/Desktop/image-from-above.jpg"
import pocket from "./assets/images/mobile/image-pocket-borealis.jpg"
import pocket2 from "./assets/images/Desktop/image-pocket-borealis.jpg"
import curiosity from "./assets/images/mobile/image-curiosity.jpg"
import curiosity2 from "./assets/images/Desktop/image-curiosity.jpg"
import fish from "./assets/images/mobile/image-fisheye.jpg"
import fish2 from "./assets/images/Desktop/image-fisheye.jpg"
import Footer from "./components/Footer"


function App() {

  

  

  return (
    <>
    <div className=' w-full'>

<NavBar />

<div className='lg:px-36 py-16 px-4 sm:px-4'>

<div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start relative w-full">
  <div className='w-full sm:w-1/2 relative'>
  <img src={interactive} alt=""  className='block sm:hidden w-full'/>
  <img src={interactive2} alt=""  className='hidden sm:block w-full'/>
  
  
  <div className="bg-white p-6 sm:p-10 text-black mt-4 sm:mt-0 sm:absolute sm:bottom-0 sm:right-0 sm:w-[550px] sm:translate-x-2/3 sm:translate-y-2/3 sm:min-h-[600px]">
  

  <h1 className="text-3xl font-light text-center sm:text-left px-4 sm:px-0">
    THE LEADER IN<br/>INTERACTIVE VR
  </h1>
<p className="text-xs mt-6 font-extralight text-center sm:text-left px-4 sm:px-0">
  Founded in 2011, Loopstudios has been producing world-class<br/>
  virtual reality projects for some of the best companies around the<br/>
  globe. Our award-winning creations have transformed businesses<br/>
  through digital experiences that bind to their brand.

  </p>
  
  
  </div>
  </div>



</div>

 <div className="flex justify-between items-center lg:py-10 mb-10">
  <h1 className="font-light text-3xl text-center lg:text-left w-full lg:w-auto">
    OUR CREATIONS
  </h1>
          <button className="hidden sm:inline-block text-black bg-transparent hover:text-white hover:bg-black px-10 py-2 border border-black">
            SEE ALL
          </button>
        </div>

<div className='flex flex-col '>
      <div className=''>

<div className='grid grid-cols-1 sm:grid-cols-4 gap-1'>
  <div className="relative overflow-hidden">
  <img src={deep} alt=""  className='block sm:hidden w-full h-full object-cover'/>
  <img src={deep2} alt=""  className='hidden sm:block w-full h-full object-cover'/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">
      <h1 className='font-extralight px-5'>DEEP <br/> EARTH</h1>
    </div>
  </div>

  <div className="relative overflow-hidden">
  <img src={night} alt=""  className='block sm:hidden w-full h-full object-cover'/>
  <img src={night2} alt=""  className='hidden sm:block w-full h-full object-cover'/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">
      <h1 className='font-extralight px-5'>DEEP <br/> EARTH</h1>
    </div>
  </div>
  
  <div className="relative overflow-hidden">
  <img src={soccer} alt=""  className='block sm:hidden w-full h-full object-cover'/>
  <img src={soccer2} alt=""  className='hidden sm:block w-full h-full object-cover'/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">
      <h1 className='font-extralight px-5'>DEEP <br/> EARTH</h1>
    </div>
  </div>
  <div className="relative overflow-hidden">
  <img src={grid} alt=""  className='block sm:hidden w-full h-full object-cover'/>
  <img src={grid2} alt=""  className='hidden sm:block w-full h-full object-cover'/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">
      <h1 className='font-extralight px-5'>DEEP <br/> EARTH</h1>
    </div>
  </div>
  

</div>

<div className='grid grid-cols-1 sm:grid-cols-4 gap-1 mt-5'>
  <div className="relative overflow-hidden">
  <img src={above} alt=""  className='block sm:hidden w-full h-full object-cover'/>
  <img src={above2} alt=""  className='hidden sm:block w-full h-full object-cover'/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">
      <h1 className='font-extralight px-5'>DEEP <br/> EARTH</h1>
    </div>
  </div>
  <div className="relative overflow-hidden">
  <img src={pocket} alt=""  className='block sm:hidden w-full h-full object-cover'/>
  <img src={pocket2} alt=""  className='hidden sm:block w-full h-full object-cover'/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">
      <h1 className='font-extralight px-5'>DEEP <br/> EARTH</h1>
    </div>
  </div>
  <div className="relative overflow-hidden">
  <img src={curiosity} alt=""  className='block sm:hidden w-full h-full object-cover'/>
  <img src={curiosity2} alt=""  className='hidden sm:block w-full h-full object-cover'/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">
      <h1 className='font-extralight px-5'>DEEP <br/> EARTH</h1>
    </div>
  </div>
  <div className="relative overflow-hidden">
  <img src={fish} alt=""  className='block sm:hidden w-full h-full object-cover'/>
  <img src={fish2} alt=""  className='hidden sm:block w-full h-full object-cover'/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">
      <h1 className='font-extralight px-5'>DEEP <br/> EARTH</h1>
    </div>
  </div>

</div>

<div className="block sm:hidden mt-6 w-full text-center">
          <button className="text-black bg-transparent hover:text-white hover:bg-black px-10 py-2 border border-black">
            SEE ALL
          </button>
        </div>

</div>
</div>



</div>


<Footer/>



    </div>
      
    </>
  )
}

export default App
