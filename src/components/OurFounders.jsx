import React from 'react';
import bg6 from '../assets/bg6.png';
import akansha from '../assets/founder.png';
import kamal from '../assets/founder1.png';
import { FaLinkedin } from "react-icons/fa";
//import linkedinIcon from '../assets/linkedin.svg'; // Add this icon

const OurFounders = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={bg6}
        alt="Background"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-24 lg:px-20">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold font-[Inter] text-[#514747] text-center mb-12">
          Meet <span className="font-['Dancing_Script',cursive]">the Founders</span>
        </h2>

        {/* Founder Images with Hover Overlay */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-14">
          {/* Akansha */}
          <div className="relative group w-72 h-96 border-4 border-[#514747] overflow-hidden">
            <img
              src={akansha}
              alt="Akansha"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              <h3 className="text-3xl font-bold">Akansha Piplani</h3>
              <p className="text-xl mb-2">Co-Founder & CEO</p>
                <div className='w-[96%] h-[2px] bg-[#ddfae7] mb-2'></div>
              <p className="text-xl mb-2">akki.ahuja2@gmail.com</p>
              <a
        href='https://www.linkedin.com/in/akansha-ahuja-23272673/'
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#ddfae7] rounded-full p-3 flex items-center justify-center hover:bg-green-200 transition-colors"
      >
        <FaLinkedin size={20} className="text-blue-700" />
      </a>
            </div>
          </div>

          {/* Kamal */}
          <div className="relative group w-72 h-96 border-4 border-[#514747] overflow-hidden">
            <img
              src={kamal}
              alt="Kamal"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              <h3 className="text-3xl font-bold">Kamal Piplani</h3>
              <p className="text-xl mb-2">Co-Founder & CEO</p>
                <div className='w-[96%] h-[2px] bg-[#ddfae7] mb-2'></div>
              <p className="text-xl mb-2">akki.ahuja2@gmail.com</p>
              <a
        href='https://www.linkedin.com/in/akansha-ahuja-23272673/'
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#ddfae7] rounded-full p-3 flex items-center justify-center hover:bg-green-200 transition-colors"
      >
        <FaLinkedin size={20} className="text-blue-700" />
      </a>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="text-center max-w-4xl text-[#514747]">
          <h3 className="text-7xl font-['Dancing_Script',cursive] mb-4">Our Story</h3>
          <p className="text-2xl font-[Inter] leading-relaxed">
            Founded in 2018 by Akansha and Kamal Piplani, AP Curated Couture began with a bold
            vision to merge fashion with purpose and style with social impact. What started as a
            shared dream is now a globally recognized label known for its handcrafted excellence,
            conscious design, and community empowerment. Every piece tells a story of craft, care,
            and culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFounders;
