import React from 'react';
import { motion } from 'framer-motion';
import akanshaImg from '../assets/founder.jpg'; 
import kamalImg from '../assets/founder1.jpg'; 
import group from '../assets/team_photo.png'; 
import Slider from "react-slick";
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about.jpg';
import about4 from '../assets/about4.jpg';
import about5 from '../assets/about5.jpg';

import asso1 from '../assets/asso1.png';
import asso2 from '../assets/asso2.png';
import asso3 from '../assets/asso3.jpg';
import bg3 from '../assets/bg3.jpeg';
// Inside AboutUs component
const teamImages = [
 about1,
 about2,
 about3,
  about4,
  about5,
];
const AboutUs = () => {
  return (
   <div className="overflow-x-hidden mt-[90px]">
      
<div className="relative ">

  <motion.img
    src={group} 
    alt="Group of Employees"
   initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="w-full h-[350px] md:h-full shadow-lg"
  />
  <div className='inset-0 bg-black/50 absolute '>
<div className="absolute bottom-4 md:bottom-32 left-4 md:left-32 w-full text-left">

    <h2 className="text-6xl font-semibold font-[Inter] text-white mb-3">
        About Us
      </h2>
      <p className="text-3xl p-2 md:p-0 md:text-5xl  mb-10 text-white font-['Dancing_Script',cursive] ">
        The People Who Make It Happen - Founders and Founders' Story
      </p>
  </div>
</div>
   </div> 
   <div
  className="overflow-x-hidden bg-no-repeat bg-cover bg-fixed"
  style={{ backgroundImage: `url(${bg3})` }}
> 
   <h2 className="text-5xl font-semibold font-['Dancing_Script',cursive] text-center mt-10  text-[#514747] mb-5">
        Meet Our Founders
      </h2>
<div className="grid md:grid-cols-2 gap-28 items-center mb-20 px-10">
 
<motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative flex justify-center w-full"
>
  <div className="relative">
    <img
      src={akanshaImg}
      alt="Akansha Piplani"
      className="w-[600px] h-[550px] object-cover object-right"
    />
    {/* Overlay */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform flex ">
      <div className="bg-red-600 text-white p-4 shadow-md w-32 text-center">
        <p className="text-2xl font-bold">1K+</p>
        <p className="text-sm">projects succeeded</p>
      </div>
      <div className="bg-[#1a1a1a] text-white p-4 shadow-md w-32 text-center">
        <p className="text-2xl font-bold">8yrs+</p>
        <p className="text-sm">of professional experience</p>
      </div>
    </div>
  </div>
</motion.div>


  {/* Right side description */}
  <div className="text-lg font-[Inter] text-[#514747] leading-relaxed">
  <h3 className="text-4xl font-semibold font-[Inter] text-[#514747] mb-1">Akansha Piplani</h3>
  <p className="font-[Inter] text-[#514747] mb-4">Co-Founder & CEO</p>
  <p className="mb-4 text-2xl">
    Akansha Piplani is a Fashion Designer with an MBA in Marketing, whose passion for creativity and empowerment led to the founding of AP Curated Couture in 2018. With over six years of design expertise, she transformed her vision into a purpose-driven brand that supports rural Indian artisans, especially women.
  </p>
  <p className="mb-4 text-2xl">
    Her mission goes beyond fashion—she aims to craft accessories that embody confidence, culture, and meaningful conversations. Under her leadership, AP Curated Couture has reached over 30+ countries, gaining recognition for its commitment to handcrafted excellence and social impact.
  </p>
</div>
</div>

{/* Kamal Section */}
<div className="grid md:grid-cols-2 gap-28 items-center mb-20 px-10">
  {/* Left text block */}
 <div className="text-lg font-[Inter] text-[#514747] leading-relaxed">
  <h3 className="text-4xl font-semibold font-[Inter] text-[#514747] mb-1">Kamal Piplani</h3>
  <p className="font-[Inter] text-[#514747] mb-4">Co-Founder & COO</p>
  <p className="mb-4  text-2xl">
    Kamal Piplani, a BBA graduate from Symbiosis and MBA from IMT Ghaziabad, co-founded AP Curated Couture in 2018 alongside Akansha. With a strategic mindset, he focuses on business growth, international expansion, and driving operational excellence for the brand.
  </p>
  <p className="mb-4  text-2xl">
    His sharp business acumen complements the creative foundation of the company, helping scale it into a globally respected name in fashion accessories. Kamal continues to steer AP Curated Couture with a vision rooted in quality, purpose, and sustainable impact.
  </p>
</div>
  {/* Image with overlay */}
<motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="relative w-full  order-1 md:order-2"
>
  <img
    src={kamalImg}
    alt="Kamal Piplani"
    className="w-full h-[750px] object-cover object-right object-top"
  />
 <div className="absolute bottom-4  flex left-1/2 transform -translate-x-1/2 ">
  {/* Box 1 - Red */}
  <div className="bg-red-600 text-white p-4  shadow-md w-32">
    <p className="text-2xl font-bold">1K+</p>
    <p className="text-sm">projects succeeded</p>
  </div>

  {/* Box 2 - Dark (Black or Dark Gray) */}
  <div className="bg-[#1a1a1a] text-white p-4  shadow-md w-32">
    <p className="text-2xl font-bold">12yrs+</p>
    <p className="text-sm">of professional experience</p>
  </div>
</div>

</motion.div>
</div>

      {/* Video Section */}
      {/* Video Section */}
{/* Our Story Section */}
{/* Our Story Section */}
<div className="mt-20 px-4 sm:px-8">
  <h3 className="text-4xl md:text-6xl font-semibold text-center font-['Dancing_Script',cursive] text-[#514747] mb-2">
    Our Story
  </h3>
  <p className="text-center font-[Inter] text-[#514747] text-lg font-medium mb-10">
    AP Curated Couture – a legacy of design, detail & dedication in accessories
  </p>

  <div className="flex flex-col md:flex-row gap-8 items-start">
    {/* Left Image Slider */}
    <div className="w-full md:w-1/2">
      <Slider
        dots={true}
        infinite={true}
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        arrows={false}
        pauseOnHover={false}
      >
        {teamImages.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Story Image ${index + 1}`}
              className="w-full h-[500px] object-cover object-fit shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>

    {/* Right Single Content Block */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="w-full md:w-1/2 bg-white shadow-xl p-6 md:p-5"
    >
      <p className="font-[Inter] text-[#514747] text-sm ">
        Our journey to becoming India’s top-rated and trending accessories manufacturer and exporter began in 2016, when our co-founder and creative director <strong>Akansha Piplani</strong> completed her post-graduation in fashion design. Early work with international fashion labels revealed an essential truth: a great design deserves a great manufacturer.<br /><br />

        This insight led her to start a small-batch setup called <strong>AP Curated Couture®</strong> in 2018, with one mission: to honour every design through super-specialized production. The guiding principle was simple—whatever we make must be extraordinary.<br /><br />

        Building on this strong foundation, <strong>AP Curated Couture</strong> emerged as a brand for handcrafted fashion accessories. Born out of passion and bolstered by family support, the brand secured its first international order within just three months of starting its business.<br /><br />

        <strong>AP Curated Couture®</strong> is a process-oriented, highly quality-conscious accessories manufacturer with great understanding of design technicality, colour code, cut & finish, tailoring, fabric selection and its relevance to your design and brand, printing techniques and outstanding hand-works which are essential for effective work on your custom design.<br /><br />

        We have dedicated ourselves to providing state-of-the-art, technology-equipped production factories in 3 rural areas to meet the fast-changing fashion industry line in accessories, with a capacity of producing more than <strong>50,000+ accessories monthly</strong>. Be it headbands, clutches, tote bags, bag straps, earrings, or any other product—we possess great know-how to surprise with our exquisite workmanship at the most affordable price in all lines of accessories!
      </p>
    </motion.div>
  </div>
</div>




<div className="mt-20 mb-10">
  <h3 className="text-3xl md:text-5xl font-semibold text-center font-['Dancing_Script',cursive] text-[#514747] mb-2">
    Association
  </h3>
  <div className='flex flex-col md:flex-row justify-center gap-16 items-center mt-10'>
<img src={asso1} alt='asso1' className='w-72 h-40 object-contain' />
<img src={asso2} alt='asso2' className='w-72 h-40 object-contain' />
<img src={asso3} alt='asso3' className='w-72 h-40 object-contain' />
  </div>
  </div>
</div> 
    </div>
  );
};

export default AboutUs;
