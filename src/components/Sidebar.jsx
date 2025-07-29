// pages/AccessorySidebar.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
const categories = [
  "Headbands", "Scrunchies", "Alligator Bows", "Earrings", "Hair Clips/Pins",
  "Claw Clips", "Lanyards", "Key Circle/Chains", "Stadium bag straps", "Wristlets",
  "Mickey Ears", "Handcuffs", "Tote Bags", "Brooches", "Eye Masks", "Coin Purses",
  "Coasters", "Mobile Purses", "Clutches", "Trucker Hats", "Box Bags", "Wreath Sash"
];

const seasons = [
  "Valentine’s Day", "Crawfish Boil", "Mardi Gras", "Back to school", "Rodeo/Derby",
  "Summer", "Cancer Awareness", "Sorority", "Game Day", "High School/Collegiate",
  "Easter", "4th July", "Ramadan/Eid", "Queen’s B’day", "Disney/Swiftie",
  "Thanksgiving", "St. Patrick’s Day", "Halloween", "Christmas", "New Year",
  "Baby Shower", "Mother’s Day"
];
const Sidebar = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const matchedCategory = categories.find(cat => slugify(cat) === type);
    const matchedSeason = seasons.find(season => slugify(season) === type);
    if (matchedCategory) {
      setSelectedCategory(matchedCategory);
      setSelectedSeason(null);
    } else if (matchedSeason) {
      setSelectedSeason(matchedSeason);
      setSelectedCategory(null);
    }
  }, [type]);

  const DrawerContent = () => (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-full w-3/4 bg-white z-50 p-6 shadow-lg overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Browse by</h2>
        <button onClick={() => setDrawerOpen(false)}><FiX size={28} /></button>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Categories</h3>
        <ul className="space-y-1 text-base">
          {categories.map(cat => (
            <li
              key={cat}
              className={`cursor-pointer px-1 py-1 rounded ${
                slugify(selectedCategory || '') === slugify(cat) ? 'font-bold' : ''
              }`}
              onClick={() => {
                setDrawerOpen(false);
                navigate(`/accessories/${slugify(cat)}`);
              }}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Shop by Season</h3>
        <ul className="space-y-1 text-base">
          {seasons.map(season => (
            <li
              key={season}
              className={`cursor-pointer px-1 py-1 rounded ${
                slugify(selectedSeason || '') === slugify(season) ? 'font-bold' : ''
              }`}
              onClick={() => {
                setDrawerOpen(false);
                navigate(`/accessories/${slugify(season)}`);
              }}
            >
              {season}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-2">Custom Requests</h3>
        <ul className="text-base">
          <li className="cursor-pointer hover:font-medium">Custom Packaging</li>
        </ul>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Mobile Trigger Button */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex items-center space-x-2 border px-6 py-2 rounded text-base font-medium"
        >
          <FiMenu size={20} />
          <span>Browse by Category</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={() => setDrawerOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <DrawerContent />
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-1/6 p-6 border-r  text-[#514747]">
        <h2 className="text-4xl font-poppins font-medium mb-2 text-[#666]">Browse by</h2>
        <hr className="mb-2" />
        {/* same category + season lists here */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-2 text-[#514747] font-['Dancing_Script',cursive]">Categories</h3>
          <hr className="mb-2" />
          <ul className="space-y-1 text-lg max-h-48 overflow-y-auto pr-2 scroll-hide">
            {categories.map(cat => (
              <li
                key={cat}
                className={`cursor-pointer font-sans px-1 py-1 hover:font-medium rounded ${
                  slugify(selectedCategory || '') === slugify(cat) ? 'font-bold' : ''
                }`}
                onClick={() => navigate(`/accessories/${slugify(cat)}`)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <hr className="mb-2" />
          <h3 className="text-3xl font-bold mb-2 text-[#514747] font-['Dancing_Script',cursive]">Shop by Season</h3>
          <hr className="mb-2" />
          <ul className="space-y-1 text-lg max-h-48 overflow-y-auto pr-2 scroll-hide">
            {seasons.map(season => (
              <li
                key={season}
                className={`cursor-pointer font-sans px-1 py-1 rounded hover:font-medium ${
                  slugify(selectedSeason || '') === slugify(season) ? 'font-bold' : ''
                }`}
                onClick={() => navigate(`/accessories/${slugify(season)}`)}
              >
                {season}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <hr className="mb-2" />
          <h3 className="text-3xl font-bold mb-2 text-[#514747] font-['Dancing_Script',cursive]">Custom Requests</h3>
          <hr className="mb-2" />
          <ul className="text-lg">
            <li className="cursor-pointer font-sans hover:font-medium">Custom Packaging</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;