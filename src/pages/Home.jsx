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
      className="relative min-h-screen bg-cover  bg-center text-gray-800 overflow-x-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />

      {/* Decorative images - keep your original positions */}
      <div>
        <img
          src={exh1}
          alt="Decoration Left"
          className="absolute w-64 left-30 top-36"
        />
        <img
          src={exh2}
          alt="Decoration Right"
          className="absolute left-104 top-64 w-72"
        />
      </div>

      {/* Centered Text */}
      <div className="flex flex-col left-44 items-center justify-center px-4 pt-32 space-y-4 relative z-10">
        <motion.h1
          className="font-[Inter] text-4xl md:text-7xl font-bold  text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AP Curated Couture
        </motion.h1>

        <div className="mt-5">
          <motion.p
            className="text-6xl italic text-gray-600 text-right font-['Dancing_Script',cursive]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            All-in-1
          </motion.p>

          <div className="text-3xl md:text-7xl  font-semibold h-[60px] mt-5  text-right">
            {text}
            <motion.span
              className="inline-block w-1 bg-black ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </div>

          <p className="text-5xl font-['Dancing_Script',cursive] right-10 italic text-gray-700 mt-7  text-right">
            for your accessories brand.
          </p>
          <p className="text-xl italic text-gray-700 mt-3  text-right">
            Getting started with us is easy.
          </p>
          <p className='pl-48 text-xl italic text-gray-700 mt-3  text-right'>
           Just share your accessories idea with us and we will take care of everything<br/> from sampling to delivering your accessories production.
          </p>
        </div>
      </div>
    </div>
    <Trending/>
    <ShopBySeason/>
    <Ethical/>
     <HowToPlaceOrder/>
    <OurFounders/>
    <OurGallery/>
   <Infrastructure/>
    </>
  );
};

export default Home;
