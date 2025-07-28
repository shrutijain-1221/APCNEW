import React from 'react';
import trending1 from '../assets/trending1.jpg'
import trending2 from '../assets/trending2.jpeg'
import trending3 from '../assets/trending3.jpg'
import bg8 from '../assets/bg8.png'
const Trending = () => {
  return (
    <div
      className="bg-cover bg-center py-16"
     style={{ backgroundImage: `url(${bg8})` }}

    >
      <div className="text-center mb-12 mt-12">
        <h2 className="text-6xl font-bold font-[Inter] text-[#514747]">
          What’s <span className="font-['Dancing_Script',cursive] text-[#514747]">Trending</span>
        </h2>
        <p className="text-[#514747] font-[Inter] text-3xl mt-2">
         Discover our most popular fashion accessories loved by customers worldwide
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {/* Card 1 */}
        <div className="bg-white border-[1px] font-[Inter] border-gray-200 shadow-md  p-4 text-center">
          <img src={trending1} alt="Clutches" className="mx-auto mb-4" />
          <h3 className="text-3xl font-semibold text-[#514747]">Clutches & Tote Bags</h3>
          <p className=" text-md text-[#514747] mt-2">Elegant clips, bands, and decorative pieces.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border-[1px] font-[Inter] border-gray-200 shadow-md  p-4 text-center">
          <img src={trending2} alt="Head-Bands" className="mx-auto h-[312px] mb-4" />
          <h3 className="text-3xl font-semibold text-[#514747]">Fashion Accessories</h3>
          <p className=" text-md text-[#514747] mt-2">Statement jewelry for every season and occasion.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-[1px] font-[Inter] border-gray-200 shadow-md  p-4 text-center">
          <img src={trending3} alt="Purses" className="mx-auto mb-4" />
          <h3 className="text-3xl font-semibold text-[#514747]">Beaded Headbands</h3>
          <p className=" text-md text-[#514747] mt-2">Handcrafted headbands with intricate beadwork for elegant styling</p>
        </div>
      </div>
    </div>
  );
};

export default Trending;
