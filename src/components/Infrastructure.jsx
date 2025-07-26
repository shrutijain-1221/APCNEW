import React from 'react';
import bg10 from '../assets/bg10.jpg';
import factory from '../assets/Infra.png'; // Replace with your actual image

const Infrastructure = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: `url(${bg10})` }}
    >
         <div className="text-center mb-12">
           <h2 className="text-6xl font-bold font-[Inter] text-[#514747]">
      Infrastructure
        </h2>
        </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Image Left */}
        <div className="md:w-1/3 w-full ">
          <img src={factory} alt="Factory" className="rounded-lg w-full h-[400px] object-cover" />
        </div>

        {/* Middle Text */}
        <div className="md:w-1/3 w-full text-left text-gray-800 font-medium">
          
          <p className="font-['Dancing_Script',cursive] text-[#514747] text-4xl leading-relaxed">
            Sustainability is the motive as an ethical clothing manufacturer.
            <br />
            For employees we ensure proper implementation of channels to voice their concerns if any.
          </p>
        </div>

        {/* Right Highlight Text with green circular background */}
        <div className="md:w-1/3 w-full relative flex justify-center items-center">
          <div
            className="rounded-full px-6 py-8 text-center w-[400px] h-[400px] flex items-center justify-center"
            style={{
              background: '#B7F29869',
              clipPath: 'circle(50% at center)',
              backgroundImage:`url(${bg10})`,
              overflow:'hidden'
            }}
          >
            <h3 className="text-5xl font-bold font-[Inter] text-[#514747]">
              Turning your <br />
              accessories <br />
              idea into <br />
              reality
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
