import React from 'react'
import bg3 from '../assets/bg3.jpeg'
import Gallery from './Gallery'
const OurGallery = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
         {/* Background Image */}
         <img
           src={bg3}
           alt="Background"
           className="w-full h-full object-cover object-bottom absolute top-0 left-0 z-0"
         />
   
         {/* Content */}
         <div className="relative z-10 flex flex-col items-center px-4 py-24 lg:px-20">
           {/* Heading */}
           <h2 className="text-5xl md:text-6xl font-bold font-[Inter] text-[#514747] text-center ">
             Our{' '}
             <span className="font-['Dancing_Script',cursive]">Gallery</span>
           </h2>
           <Gallery/>
   </div>
   </div>
  )
}

export default OurGallery