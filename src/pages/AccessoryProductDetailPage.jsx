import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import size from '../assets/iconsize.png';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { FiSearch, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { FiTruck, FiRotateCw, FiGift, FiInfo, FiDroplet, FiAlignLeft } from 'react-icons/fi';
import { CiMenuBurger } from "react-icons/ci";
import fabric from '../assets/fabric.png';
import founder from '../assets/founder.png';
import founder1 from '../assets/founder1.png';
import CustomerReview from '../components/CustomerReview';
import { MdOutlineDesignServices } from "react-icons/md";
const ALL_PRODUCTS = [
  {
    id: 1,
    name: 'Pink Headband',
    images: [founder, founder1],
    description: 'Elegant pink headband, crafted with love and style.',
    washCare: 'Hand wash with cold water. Do not bleach.',
    shipping: 'Delivery in 5-7 business days.',
    returnPolicy: '30-day free return.',
    colors: 'Available in Pink, Blue, and Yellow.',
    additionalInfo: 'Made by local artisans with sustainable materials.',
  }
];

const Section = ({ title, content, icon: Icon, openSection, setOpenSection }) => {
  const isOpen = openSection === title;

  const toggle = () => {
    setOpenSection(isOpen ? null : title);
  };

  return (
    <div className="border-b py-6">
      <button
        className="flex justify-between items-center text-[#71706e] text-lg w-full text-left font-medium"
        onClick={toggle}
      >
       <div className="flex items-center gap-2">
  {Icon &&
    (typeof Icon === 'string' ? (
      <img src={Icon} alt={title} className="w-6 h-6 object-contain" />
    ) : (
      <Icon className="text-2xl text-[#71706e]" />
    ))}
  <span>{title}</span>
</div>
        <span>{isOpen ? <MdOutlineArrowDropUp className='text-3xl text-[#606060]' /> : <MdOutlineArrowDropDown className='text-3xl text-[#606060]' />}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2 text-base text-gray-600"
          >
            <p>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AccessoryProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = ALL_PRODUCTS.find(p => p.id === parseInt(productId));
  const [openSection, setOpenSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  if (!product) return <div className="mt-20 text-center">Product not found.</div>;

  const openModal = (index) => {
    setCurrentImgIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="py-24 px-4 md:px-16 max-w-full">
      <button onClick={() => navigate(-1)} className="mb-6 text-pink-500 underline">Product</button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="w-full">
          {/* Mobile Slider */}
          <div className="block md:hidden">
            <Slider {...sliderSettings}>
              {product.images.map((img, idx) => (
                <div key={idx} className="px-2" onClick={() => openModal(idx)}>
                  <div className="relative group cursor-pointer">
                    <img
                      src={img}
                      alt={`product-${idx}`}
                      className="w-full h-full shadow-md object-cover aspect-[3/4] mx-auto"
                    />
                    <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <FiSearch className="text-black text-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer"
                onClick={() => openModal(idx)}
              >
                <img
                  src={img}
                  alt={`product-${idx}`}
                  className="w-full h-full shadow-md object-cover aspect-[3/4]"
                />
                <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiSearch className="text-black text-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
          <Section title="Size" icon={size} content={product.description} openSection={openSection} setOpenSection={setOpenSection} />
          <Section title="Feature" icon={CiMenuBurger} content={product.washCare} openSection={openSection} setOpenSection={setOpenSection} />
          <Section title="Material Used" icon={fabric} content={product.shipping} openSection={openSection} setOpenSection={setOpenSection} />
          <Section title="Custom Design Possible" icon={MdOutlineDesignServices} content={product.colors} openSection={openSection} setOpenSection={setOpenSection} />
          <Section title="Additional Information" icon={FiGift} content={product.additionalInfo} openSection={openSection} setOpenSection={setOpenSection} />
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-[90vw] max-w-[600px] h-[90vh] max-h-[600px] bg-white rounded-lg shadow-xl">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md z-10"
              >
                <FiX className="text-black text-lg" />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              >
                <FiChevronLeft className="text-black text-2xl" />
              </button>
              <img
                src={product.images[currentImgIndex]}
                alt="Zoomed"
                className="w-full h-full object-cover object-top rounded-lg"
              />
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              >
                <FiChevronRight className="text-black text-2xl" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Customer Reviews */}
      <CustomerReview />
    </div>
  );
};

export default AccessoryProductDetailPage;
