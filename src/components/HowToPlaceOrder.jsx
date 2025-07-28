import React from 'react'
import bg8 from '../assets/bg8.png'
import HowToPlace from './HowToPlace'
import HorizontalScrollSection from './HorizontalScrollSection.jsx'
const HowToPlaceOrder = () => {
  return (
     <div
             className="bg-cover bg-center py-16 bg-white">
   <div className="text-center mb-12">
           <h2 className="text-6xl font-bold font-[Inter] text-[#514747]">
        How to Place an <span className="font-['Dancing_Script',cursive] text-[#514747]">Order ?</span>
        </h2>
        <p className="font-['Dancing_Script',cursive] text-[#514747] text-3xl mt-5">Your custom creation starts here – just follow the journey</p>
        </div>
        <HorizontalScrollSection/>
           </div>
  )
}

export default HowToPlaceOrder