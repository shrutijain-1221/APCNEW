import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import bgImage from '../assets/bgimg1.jpeg';
import exh1 from '../assets/exh1.JPG';
import exh2 from '../assets/exh2.png';
import Trending from '../components/Trending';
import ShopBySeason from '../components/ShopBySeason';
import Ethical from '../components/Ethical';
import OurFounders from '../components/OurFounders';
import OurGallery from '../components/OurGallery';
import HowToPlaceOrder from '../components/HowToPlaceOrder';
import Infrastructure from '../components/Infrastructure';
import logo from '../assets/logo-removebg-preview.png';

const words = ['Exporter', 'Manufacturer'];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const timeout = setTimeout(() => {
      setText(prev =>
        deleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );

      if (!deleting && text === currentWord) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      }
    }, 120);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <>
    <div
      className="relative min-h-screen bg-cover bg-center text-gray-800 overflow-x-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />

      {/* Video for desktop - positioned where images were */}
      <div className="hidden lg:block">
      {/* Decorative images - keep your original positions */}
        <img
          src={exh1}
          alt="Decoration Left"
          className="absolute w-64 left-40 top-62"
        />
        <img
          src={exh2}
          alt="Decoration Right"
          className="absolute left-114 top-94 w-72"
        />

      </div>

      {/* Centered Text - responsive layout */}
      <div className="flex flex-col items-center justify-center px-4 pt-8 lg:left-90 lg:items-center space-y-4 relative z-10">
        <div className="mt-[40px] lg:mt-[80px] flex flex-col items-center lg:items-end lg:ml-20">
          <motion.h1
            className="font-[Inter] text-2xl sm:text-4xl lg:text-7xl font-bold mt-10 lg:mt-20 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            src={logo}
            alt="Logo"
            className="h-[120px] sm:h-[150px] lg:h-[206px] cursor-pointer mb-6 lg:mb-10 mx-auto lg:mx-0"
          />
        </motion.h1>
          <motion.p
            className="text-3xl sm:text-4xl lg:text-6xl italic text-gray-600 text-center lg:text-right font-['Dancing_Script',cursive]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            All-in-1
          </motion.p>

          <div className="text-2xl sm:text-3xl lg:text-7xl font-semibold h-[40px] sm:h-[50px] lg:h-[60px] mt-5 text-center lg:text-right">
            {text}
            <motion.span
              className="inline-block w-1 bg-black ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </div>

          <p className="text-2xl sm:text-3xl lg:text-5xl font-['Dancing_Script',cursive] italic text-gray-700 mt-7 text-center lg:text-right px-4 lg:px-0">
            for your accessories brand.
          </p>
          <p className="text-lg sm:text-xl font-bold text-gray-700 mt-3 text-center lg:text-right px-4 lg:px-0">
            Getting started with us is easy.
          </p>
          <p className='text-lg sm:text-xl italic text-gray-700 mt-3 text-center lg:text-right px-4 lg:px-0 lg:pl-48'>
           Just share your accessories idea with us and <br className="hidden lg:block"/> we will take care of everything from sampling to<br className="hidden lg:block"/> delivering your accessories production.
          </p>

          {/* Mobile video - below content */}
          <div className="flex flex-col items-center mt-8 lg:hidden">
            <video
              className="w-80 sm:w-96 rounded-lg shadow-md mb-10"
              controls
              autoPlay
              muted
              loop
            >
              <source src="https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/AP+CURATED+COUTURE.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
    <ShopBySeason/>
    <Trending/>
    <Ethical/>
    <HowToPlaceOrder/>
    <OurFounders/>
    <OurGallery/>
   <Infrastructure/>
    </>
  );
};

export default Home;

