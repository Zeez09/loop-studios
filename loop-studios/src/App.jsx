import React, { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import interactive from "./assets/images/image-interactive.jpg"
import deep from "./assets/images/image-deep-earth.jpg"
import night from "./assets/images/image-night-arcade.jpg"
import soccer from "./assets/images/image-soccer-team.jpg"
import grid from "./assets/images/image-grid.jpg"
import above from "./assets/images/image-from-above.jpg"
import pocket from "./assets/images/image-pocket-borealis.jpg"
import curiosity from "./assets/images/image-curiosity.jpg"
import fish from "./assets/images/image-fisheye.jpg"

function App() {
  

  return (
    <>
    <div className=' w-full'>

<NavBar />

<div className='px-32'>

<div className=' mt-10 flex flex-row'>
  <div className='relative'>
  <img src={interactive} alt="" />
  <div className="absolute bottom-0 left-1/2 translate-x-1/2 bg-white p-6 sm:p-10 w-[400px] text-black">
  
  <div className='flex flex-col'>
  <h1>
    THE LEADER IN<br/>INTERACTIVE VR
  </h1>
  <p>Founded in 2011, Loopstudios has been producing world-class<br/>
  virtual reality projects for some of the best companies around the<br/>
  globe. Our award-winning creations have transformed businesses<br/>
  through digital experiences that bind to their brand.

  </p>
  </div>
  
  </div>

</div>
</div>

<div className='flex flex-row justify-between'>
  <h1>OUR CREATIONS</h1>
  <button className='text-white bg-black px-10'>SEE ALL</button>
</div>

<div className='flex flex-col mx-auto '>
      <div className='mx-auto'>

<div className='grid grid-cols-1 sm:grid-cols-4 gap-10'>
  <img src={deep} alt="" />
  <img src={night} alt="" />
  <img src={soccer} alt="" />
  <img src={grid} alt="" />
  

</div>

<div className='grid grid-cols-1 sm:grid-cols-4 gap-10 mt-5'>
  <img src={above} alt="" />
  <img src={pocket} alt="" />
  <img src={curiosity} alt="" />
  <img src={fish} alt="" />
  

</div>

</div>
</div>



</div>



    </div>
      
    </>
  )
}

export default App
