import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg8 from '../assets/bg8.png';
import trending1 from '../assets/trendingHeadband.jpg';
import trending2 from '../assets/trending3.jpeg';
import trending3 from '../assets/trending1.jpeg';
import trending4 from '../assets/trendingHeadband2.jpg';
import trending5 from '../assets/trendingHeadband3.jpg';
import trending6 from '../assets/trendingHeadband4.jpg';
import trending7 from '../assets/trendingHeadband5.jpg';
import trending8 from '../assets/trendingToteBag.jpg';

const products = [
  {
    id: '1',
    name: "Valentine's Day Headband",
    description: "Romantic red and pink beaded headband perfect for Valentine's celebrations",
    image: trending1,
    category: 'Headbands',
    type: 'headbands',
  },
  {
    id: '2',
    name: "Summer Floral Headband",
    description: "Bright and colorful summer-themed headband with floral patterns",
    image: trending2,
    category: 'Headbands',
    type: 'headbands',
  },
  {
    id: '3',
    name: "Mardi Gras Beaded Headband",
    description: "Traditional purple, gold, and green Mardi Gras celebration headband",
    image: trending3,
    category: 'Headbands',
    type: 'headbands',
  },
  {
    id: '4',
    name: "Easter Bunny Ears Headband",
    description: "Adorable pastel Easter bunny ears with soft fabric finish",
    image: trending4,
    category: 'Headbands',
    type: 'headbands',
  },
  {
    id: '5',
    name: "4th of July Patriotic Headband",
    description: "Red, white, and blue patriotic headband for Independence Day",
    image: trending5,
    category: 'Headbands',
    type: 'headbands',
  },
  {
    id: '6',
    name: "Stars & Stripes Headband",
    description: "Classic American flag design with sequins and beadwork",
    image: trending6,
    category: 'Headbands',
    type: 'headbands',
  },
  {
    id: '7',
    name: "Fireworks Celebration Headband",
    description: "Sparkly fireworks-themed headband with metallic accents",
    image: trending7,
    category: 'Headbands',
    type: 'headbands',
  },
  {
    id: '8',
    name: "Premium Canvas Tote Bag",
    description: "Durable canvas tote bag with custom embroidery options",
    image: trending8,
    category: 'Bags',
    type: 'tote-bags',
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/accessories/${product.type}/${product.id}`)}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative h-64 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-[#ff416c] text-white text-xs px-3 py-1 rounded-full shadow">
          {product.category}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#514747] mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        
        {/* Action Button */}
        <div className="flex items-center justify-between">
          <button className="bg-[#514747] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#3d3535] transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const TrendingUsage = () => {
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-16">
      {/* Background Image */}
      <img
        src={bg8}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center pt-32 pb-16">
          <h1 className="text-6xl font-bold font-[Inter] text-[#514747] mb-4">
            Trending{" "}
            <span className="font-['Dancing_Script',cursive] text-[#514747]">
              Products
            </span>
          </h1>
          <p className="text-2xl font-['Dancing_Script',cursive] text-[#514747] max-w-4xl mx-auto px-4">
            Discover our most popular fashion accessories loved by customers worldwide
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-white bg-opacity-90 rounded-full px-6 py-3 shadow-lg">
            <button className="px-6 py-2 bg-[#514747] text-white rounded-full text-sm font-semibold">
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-transparent text-[#514747] rounded-full text-sm font-semibold hover:bg-[#514747] hover:text-white transition-colors border border-[#514747]"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-90 rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-3xl font-bold font-[Inter] text-[#514747] mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We create custom accessories tailored to your brand's unique style and requirements.
            </p>
            <button className="bg-[#514747] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#3d3535] transition-colors">
              Request Custom Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingUsage;
