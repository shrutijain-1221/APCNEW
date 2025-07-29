import React from 'react';
import group from '../assets/team_photo.png';
import { motion } from 'framer-motion';

import cadsystem from '../assets/cad-system.png';
import cutting from '../assets/cutting.png';
import dressmaker from '../assets/dress-maker.png';
import embroideryfacility from '../assets/embroidery-facility.png';
import finestmaterial from '../assets/finest-material.png';
import laboratory from '../assets/laboratory.png';
import machines from '../assets/machines.png';
import meassurentexpert from '../assets/meassurent-expert.png';
import wasing from '../assets/washing.png';
import PhotoGallery from '../components/PhotoGallery';
const Infrastructure = () => {
  return (
    <div className='overflow-x-hidden mt-[90px]'>
      {/* Header Section */}
      <div className="relative">
       <motion.img
          src={group} 
          alt="Group of Employees"
         initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-[350px] md:h-full shadow-lg"
        />
        <div className='absolute inset-0 bg-black/50 flex items-center'>
          <div className="px-4 md:px-32 max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-semibold text-white font-[Inter] mb-3">
              Infrastructure
            </h2>
            <p className="text-base md:text-3xl text-white leading-relaxed font-['Dancing_Script',cursive] ">
              Our legacy lies in our capability to meet the demand of the clients with quality products and that too on time. This has been possible for NDEH because of two new-age manufacturing plants in Noida. With over 650 machines set up, these two production lines run flawlessly to churn out the best there is. This also enables us to manufacture around a whopping 2.7 million pieces of clothing every year. Set with modern inner offices and extensive range of apparatus, these NDEH infrastructure are actually examples on their own.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Column Layout */}
       <div
        className="overflow-x-hidden bg-no-repeat bg-cover bg-fixed bg-[#EFDDC5]"
      > 
 <div className="px-4 py-12 ">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-screen-xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-0 font-['Inter] text-xl text-[#514747]">
            <InfraBlock icon={cutting} title="40+ Machines" items={[
              "Single needle lockstitch machine UBT",
"Double needle lockstitch machine",
"Over lock 4th 5th 6th (Thread)",
"Rib Cutter",
"Computer embroidery machine"
            ]} />
            <InfraBlock icon={machines} title="Cutting Machines" items={[
              "Straight knife 8”", "Band knife", "Fusing Machine"
            ]} />
            <InfraBlock icon={meassurentexpert} title="Measurement Expert" items={[
              "Fully trained technical team of 8 members."
            ]} isParagraph />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-0 font-['Inter] text-xl text-[#514747]">
            <InfraBlock icon={cadsystem} title="CAD System" items={[
             "CAD Designer",
"Fashion Designer",
"Full set of product development team of 12 people"
            ]} />
            <InfraBlock icon={finestmaterial} title="Finest Material" items={[
              "Cotton", "Polyesters", "Rayon", "Blends"
            ]} />
            <InfraBlock icon={dressmaker} title="Dress Maker" items={[
              "CAD Designer", "Fashion Designer", "Full set of product development team of 12 people."
            ]} />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-0 font-['Inter] text-xl text-[#514747]">
            <InfraBlock icon={laboratory} title="In House Laboratory" items={[
              "Colour Matching Cabinet", "Tensile strength testing Matching Cabinet", "Tear strength test Matching Cabinet", "Button pull tester", "Yarn count tester", "Washing fastness tester", "Tumbler Matching Cabinet", "Hot air oven", "GSM cutter & washing Balance"
            ]} />
            <InfraBlock icon={wasing} title="Washing Facility" items={[
             "Washing Machine",
"Tumbler",
"Washing fastness tester",
"Hydro Machine"
            ]} />
            <InfraBlock icon={embroideryfacility} title="Embroidery Facility" items={[
             "300+ inhouse embroider for hand embroidery",
"Computer thread embroidery machine"
            ]} isParagraph />
          </div>
        </div>
      </div>
      <PhotoGallery/>
       <div className="px-4 py-8  max-w-screen-xl mx-auto text-gray-800">
  <p className="text-md md:text-xl leading-relaxed font-['Inter'] text-[#514747]">
    Plants are midway air cooled. Our refined help offices incorporate in-house research facility and CAD.
    The general capacity of electronic information trade has been generously diminished correspondence time
    required for information trade designs amid the testing stages.
  </p>
  <p className="text-md md:text-xl leading-relaxed mt-4 font-['Inter'] text-[#514747]">
    The working environment is ergonomically composed with cbdac5opriate lighting, space and solace.
  </p>
</div>
    </div>
    </div>
  );
};

// 🔧 Reusable Component
const InfraBlock = ({ icon, title, items, isParagraph = false }) => (
  <div className="p-4">
    <div className="flex items-center gap-2 mb-2">
      <img src={icon} alt="" className="w-16 h-16 bg-black" />
      <h3 className="">{title}</h3>
    </div>
    {isParagraph ? (
      <p className="">→ {items[0]}</p>
    ) : (
      <ul className="space-y-1 list-none">
        {items.map((item, i) => (
          <li key={i}>→ {item}</li>
        ))}
      </ul>
    )}

  </div>
);

export default Infrastructure;
