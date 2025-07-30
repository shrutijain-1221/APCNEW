import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const navLinkStyle = ({ isActive }) =>
  `font-[Inter] text-[#514747] font-normal text-lg leading-[100%] pb-1 border-b-2 transition-all duration-200 ${
    isActive ? ' border-[#514747]' : 'border-transparent text-[#514747]'
  }`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar background based on page and scroll state
  const getNavbarBackground = () => {
    if (isHomePage) {
      // On home page, only show background when scrolled
      return isScrolled ? 'bg-white shadow-md' : 'bg-transparent';
    } else {
      // On other pages, always show solid white background on mobile, semi-transparent on desktop
      return isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-white md:bg-white/80 md:backdrop-blur-md';
    }
  };

  return (
   <div className={`fixed top-0 left-0 z-50 w-full h-[90px] px-6 md:px-20 transition-all duration-300 ${getNavbarBackground()}`}>

      <div className="flex items-center justify-between w-full h-full">
       <a href="/" className="text-2xl font-bold font-[Inter]">AP <span className="font-['Dancing_Script',cursive] font-bold">Curated Couture</span></a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center h-full">
          <li><NavLink to="/" className={navLinkStyle}>Apparels</NavLink></li>

          {/* Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavLink to="/accessories" className={navLinkStyle}>Accessories</NavLink>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-20 -translate-x-1/2 mt-2 bg-white shadow-lg border rounded-md z-50 w-[1000px] p-8 flex gap-6"
                >
                  {/* Hair Accessories */}
                  <div>
                    <h4 className="font-semibold text-2xl font-['Dancing_Script',cursive] text-[#514747] mb-2">Hair Accessories</h4>
                    <ul className="space-y-1 pl-2 font-[Inter] text-[20px] text-[#514747]">
                      <li><NavLink to="/accessories/headbands">Headbands</NavLink></li>
                      <li><NavLink to="/accessories/scrunchies">Scrunchies</NavLink></li>
                      <li><NavLink to="/accessories/alligator-bows">Alligator Bows</NavLink></li>
                      <li><NavLink to="/accessories/hair-clips-pins">Hair Clips/Pins</NavLink></li>
                      <li><NavLink to="/accessories/claw-clips">Claw Clips</NavLink></li>
                      <li><NavLink to="/accessories/mickey-ears">Mickey Ears</NavLink></li>
                    </ul>
                  </div>

                  {/* Jewelry */}
                  <div>
                    <h4 className="font-semibold text-2xl font-['Dancing_Script',cursive] text-[#514747] mb-2">Jewelry & Small Accessories</h4>
                     <ul className="space-y-1 pl-2 font-[Inter] text-[20px] text-[#514747]">
                      <li><NavLink to="/accessories/earrings">Earrings</NavLink></li>
                      <li><NavLink to="/accessories/brooches">Brooches</NavLink></li>
                      <li><NavLink to="/accessories/key-circle-chains">Key Circle/Chains</NavLink></li>
                      <li><NavLink to="/accessories/wristlets">Wristlets</NavLink></li>
                      <li><NavLink to="/accessories/lanyards">Lanyards</NavLink></li>
                      <li><NavLink to="/accessories/handcuffs">Handcuffs</NavLink></li>
                    </ul>
                  </div>

                  {/* Bags */}
                  <div>
                    <h4 className="font-semibold text-2xl font-['Dancing_Script',cursive] text-[#514747] mb-2">Bags & Storage</h4>
                     <ul className="space-y-1 pl-2 font-[Inter] text-[20px] text-[#514747]">
                      <li><NavLink to="/accessories/tote-bags">Tote Bags</NavLink></li>
                      <li><NavLink to="/accessories/coin-purses">Coin Purses</NavLink></li>
                      <li><NavLink to="/accessories/mobile-purses">Mobile Purses</NavLink></li>
                      <li><NavLink to="/accessories/clutches">Clutches</NavLink></li>
                      <li><NavLink to="/accessories/box-bags">Box Bags</NavLink></li>
                      <li><NavLink to="/accessories/stadium-bag-straps">Stadium Bag Straps</NavLink></li>
                    </ul>
                  </div>

                  {/* Misc */}
                  <div>
                    <h4 className="font-semibold text-2xl font-['Dancing_Script',cursive] text-[#514747] mb-2">Miscellaneous</h4>
                    <ul className="space-y-1 pl-2 font-[Inter] text-[20px] text-[#514747]">
                      <li><NavLink to="/accessories/eye-masks">Eye Masks</NavLink></li>
                      <li><NavLink to="/accessories/coasters">Coasters</NavLink></li>
                      <li><NavLink to="/accessories/trucker-hats">Trucker Hats</NavLink></li>
                      <li><NavLink to="/accessories/wreath-sash">Wreath Sash</NavLink></li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li><NavLink to="/trending" className={navLinkStyle}>Trending</NavLink></li>
          <li><NavLink to="/aboutus" className={navLinkStyle}>About Us</NavLink></li>
          <li><NavLink to="/blogs" className={navLinkStyle}>Blogs</NavLink></li>
          <li><NavLink to="/infrastructure" className={navLinkStyle}>Infrastructure</NavLink></li>
          <li><NavLink to="/testimonals" className={navLinkStyle}>Testimonials</NavLink></li>
          <li>
            <NavLink
              to="/contact"
              className="bg-transparent border border-[#514747] italic  px-6 py-2 rounded-full text-[#514747] font-[Inter] text-md leading-[100%]"
            >
              Book an Appointment
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl cursor-pointer">
          <RiMenu3Line onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col px-6 py-10"
          >
            <div className="absolute top-6 right-6 w-6 h-6 cursor-pointer" onClick={toggleMenu}>
              <motion.div
                initial={{ rotate: 0, y: -6 }}
                animate={{ rotate: 45, y: 0 }}
                className="absolute w-8 h-[2px] bg-black"
              />
              <motion.div
                initial={{ rotate: 0, y: 6 }}
                animate={{ rotate: -45, y: 0 }}
                className="absolute w-8 h-[2px] bg-black"
              />
            </div>

            <div className="mt-20 flex flex-col items-start gap-6 font-[Inter] text-[24px] leading-[100%]">
              {[
                { to: "/", label: "Apparels" },
                { to: "/accessories", label: "Accessories" },
                { to: "/trending", label: "Trending" },
                { to: "/aboutus", label: "About Us" },
                { to: "/blogs", label: "Blogs" },
                { to: "/testimonals", label: "Testimonials" },
                { to: "/infrastructure", label: "Infrastructure" },
                { to: "/faq", label: "FAQ" }
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `hover:text-[#a3d9b1] pb-1 border-b-2 ${
                      isActive ? 'border-[#a3d9b1]' : 'border-transparent'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-transparent px-5 py-2 rounded-md text-white"
              >
                Book an Appointment
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
