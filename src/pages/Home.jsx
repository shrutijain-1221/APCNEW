import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import bgImage from '../assets/bgimg1.jpeg';
import Trending from '../components/Trending';
import ShopBySeason from '../components/ShopBySeason';
import Ethical from '../components/Ethical';
import OurFounders from '../components/OurFounders';
import OurGallery from '../components/OurGallery';
import HowToPlaceOrder from '../components/HowToPlaceOrder';
import Infrastructure from '../components/Infrastructure';
import logo from '../assets/logo-removebg-preview.png';
import RippleGrid from '../components/RippleGrid';
import ErrorBoundary from '../components/ErrorBoundary';

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
      {/* RippleGrid Background */}
      <div className="absolute inset-0 z-0">
        <ErrorBoundary>
          <RippleGrid
            gridColor="#228B22"
            opacity={0.8}
          />
        </ErrorBoundary>
      </div>

      <Navbar />

      {/* Centered Text - responsive layout */}
      <div className="flex flex-col items-center px-4 pt-46 space-y-4 relative z-10">
        <div className="flex flex-col items-center">
          <motion.h1
            className="font-[Inter] text-2xl sm:text-4xl lg:text-7xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            src={logo}
            alt="Logo"
            className="h-[120px] sm:h-[150px] lg:h-[206px] cursor-pointer mb-6 lg:mb-10 mx-auto"
          />
        </motion.h1>
          <motion.p
            className="text-3xl sm:text-4xl lg:text-6xl italic text-gray-600 text-center font-['Dancing_Script',cursive]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            All-in-1
          </motion.p>

          <div className="text-2xl sm:text-3xl lg:text-7xl font-semibold h-[40px] sm:h-[50px] lg:h-[60px] mt-5 text-center">
            {text}
            <motion.span
              className="inline-block w-1 bg-black ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </div>

          <p className="text-2xl sm:text-3xl lg:text-5xl font-['Dancing_Script',cursive] italic text-gray-700 mt-7 text-center px-4">
            for your accessories brand.
          </p>
          <p className="text-lg sm:text-xl font-bold text-gray-700 mt-3 text-center px-4">
            Getting started with us is easy.
          </p>
          <p className='text-lg sm:text-xl italic text-gray-700 mt-3 text-center px-4'>
           Just share your accessories idea with us and we will take care of everything from sampling to delivering your accessories production.
          </p>
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

