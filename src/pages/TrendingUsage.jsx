import React from 'react';
import { useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import bg6 from '../assets/bg8.png';
import placeholderImg from '../assets/founder.png'; // Replace with actual product images

const seasons = [
  {
    id: '1',
    name: "Valentine's Day",
    image: placeholderImg,
    tag: 'Trending 1',
    type: 'headbands',
  },
  {
    id: '1',
    name: "Summer",
    image: placeholderImg,
    tag: 'Trending 2',
    type: 'headbands',
  },
  {
    id: '1',
    name: "Mardi Gras",
    image: placeholderImg,
    tag: 'Trending 3',
    type: 'headbands',
  },
  {
    id: '1',
    name: "Easter",
    image: placeholderImg,
    tag: 'Trending 4',
    type: 'headbands',
  },
  {
    id: '1',
    name: "4th July",
    image: placeholderImg,
    tag: 'Trending 5',
    type: 'headbands',
  },
];

const ImageCarousel = ({ title, items }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <h3 className="text-4xl font-bold font-['Dancing_Script',cursive] text-center text-[#514747] mb-6">
        {title}
      </h3>
      <Marquee gradient={false} speed={50}>
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/accessories/${item.type}/${item.id}`)}
            className="mx-6 min-w-[300px] h-[500px] flex flex-col items-center justify-start relative cursor-pointer"
          >
            {/* Image with tag */}
            <div className="relative h-[80%] w-[300px]">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl w-full h-full object-cover shadow-xl"
              />
              <span className="absolute top-2 left-2 bg-[#ff416c] text-white text-xs px-2 py-1 rounded shadow">
                {item.tag}
              </span>
            </div>

            {/* Text below image */}
            <p className="mt-3 text-lg font-semibold text-[#514747]">{item.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

const TrendingUsage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-16">
      {/* Background Image */}
      <img
        src={bg6}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
      />

      {/* Heading */}
      <div className="text-center mt-32 z-10 relative">
        <h2 className="text-6xl font-bold font-[Inter] text-[#514747]">
          Trending{" "}
          <span className="font-['DanHoricing_Script',cursive] text-[#514747]">
            Products
          </span>
        </h2>
        <p className="text-3xl font-['DanHoricing_Script',cursive] text-[#514747]">Discover our most popular fashion accessories loved by customers worldwide</p>
      </div>

      {/* Carousels */}
      <div className="relative z-10 mt-16 space-y-16">
        <ImageCarousel title="Headbands" items={seasons} />
        <ImageCarousel title="Fashion Accessories" items={seasons.map(i => ({ ...i, type: 'fashion-accessories' }))} />
        <ImageCarousel title="Tote Bags" items={seasons.map(i => ({ ...i, type: 'tote-bags' }))} />
      </div>
    </div>
  );
};

export default TrendingUsage;
