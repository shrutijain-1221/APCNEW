import React from 'react';
import trending1 from '../assets/trending1.jpg';
import trending2 from '../assets/trending2.jpeg';
import trending3 from '../assets/trending3.jpg';
import bg8 from '../assets/bg8.png';

const Trending = () => {
  return (
    <div
      className="bg-cover bg-center py-20 px-4 sm:px-8"
      style={{ backgroundImage: `url(${bg8})` }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-bold font-[Inter] text-[#514747] leading-tight">
          What’s <span className="font-['Dancing_Script',cursive] text-[#514747]">Trending</span>
        </h2>
        <p className="text-[#514747] text-xl sm:text-2xl font-[Inter] mt-4 max-w-3xl mx-auto">
          Discover our most popular fashion accessories loved by customers worldwide
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 p-6 text-center font-[Inter] rounded-xl">
          <img src={trending1} alt="Clutches" className="mx-auto mb-6 max-w-full h-auto" />
          <h3 className="text-2xl font-semibold text-[#514747]">Clutches & Tote Bags</h3>
          <p className="text-[#514747] text-md mt-3">Elegant clips, bands, and decorative pieces.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 p-6 text-center font-[Inter] rounded-xl">
          <img src={trending2} alt="Accessories" className="mx-auto mb-6 max-w-full h-auto" />
          <h3 className="text-2xl font-semibold text-[#514747]">Fashion Accessories</h3>
          <p className="text-[#514747] text-md mt-3">Statement jewelry for every season and occasion.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 p-6 text-center font-[Inter] rounded-xl">
          <img src={trending3} alt="Headbands" className="mx-auto mb-6 max-w-full h-auto" />
          <h3 className="text-2xl font-semibold text-[#514747]">Beaded Headbands</h3>
          <p className="text-[#514747] text-md mt-3">Handcrafted headbands with intricate beadwork for elegant styling.</p>
        </div>
      </div>
    </div>
  );
};

export default Trending;