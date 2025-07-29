import React from 'react';
import bg8 from '../assets/bg8.png';
import factory from '../assets/Infra.png'; // Replace with your actual image

const Infrastructure = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: `url(${bg8})` }}
    >
         <div className="text-center mb-12">
           <h2 className="text-6xl font-bold font-[Inter] text-[#514747]">
           Trusted overseas <span className="font-['Dancing_Script',cursive]">clothing manufacturer</span>
        </h2>
        </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Image Left */}
        <div className="md:w-1/3 w-full ">
          <img src={factory} alt="Factory" className="rounded-lg w-full h-[400px] object-cover" />
        </div>

        {/* Middle Text */}
        <div className="md:w-1/3 w-full text-left text-gray-800 font-medium">
          <h3 className="text-3xl font-bold font-[Inter] text-[#514747]">Turning your idea into reality.</h3><br/>
          <p className="font-['Dancing_Script',cursive] text-[#514747] text-4xl leading-relaxed">
          Just fill the contact form with your details along with your clothing requirements 
            <br />
            and we’ll get back to you within 24hrs.
          </p>
        </div>

        {/* Right Highlight Text with green circular background */}
        <div className="md:w-1/3 w-full relative flex justify-center items-center">
          <div
            className="rounded-full px-6 py-8 text-center w-[400px] h-[400px] flex flex-col items-center justify-center gap-4"
            style={{
              background: '#B7F29869',
              clipPath: 'circle(50% at center)',
              backgroundImage:`url(${bg8})`,
              overflow:'hidden'
            }}
          >
            <h3 className="text-8xl font-bold font-[Inter] text-[#514747]">24X7</h3>
            <button className="bg-[#514747] text-white px-4 py-2 rounded-full">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
