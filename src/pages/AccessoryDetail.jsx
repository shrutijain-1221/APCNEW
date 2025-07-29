import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiArrowDownSLine } from 'react-icons/ri';
import founder from '../assets/founder.png';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

const ALL_PRODUCTS = [
  { id: 1, name: 'Pink Headband', price: 12.99, color: 'pink', size: 'Small', inStock: true, image: founder },
  { id: 2, name: 'Floral Scrunchie', price: 6.99, color: 'green', size: 'Medium', inStock: true, image: founder },
  { id: 3, name: 'Easter Clip Set', price: 10.99, color: 'yellow', size: 'Large', inStock: false, image: founder },
  { id: 4, name: 'Gold Hair Clip', price: 9.99, color: 'brown', size: 'X-Large', inStock: true, image: founder },
  { id: 5, name: 'Cute Earrings', price: 11.49, color: 'blue', size: 'Small', inStock: true, image: founder },
  { id: 6, name: 'Stylish Claw Clip', price: 8.99, color: 'peach', size: 'Medium', inStock: false, image: founder }
];

const SORT_OPTIONS = [
  { label: 'Best Selling', value: 'best' },
  { label: 'Alphabetically, A-Z', value: 'az' },
  { label: 'Alphabetically, Z-A', value: 'za' },
  { label: 'Price, low to high', value: 'low-high' },
  { label: 'Price, high to low', value: 'high-low' },
  { label: 'Date, old to new', value: 'old-new' },
  { label: 'Date, new to old', value: 'new-old' }
];

const ITEMS_PER_PAGE = 3;

const AccessoryDetail = () => {
  const { type } = useParams();
  const matchedLabel = type || 'Accessories';
const navigate = useNavigate();
  const [sortOption, setSortOption] = useState('best');
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const dropdownRef = useRef();
  const observer = useRef();

  const COLORS = ['blue', 'brown', 'green', 'yellow', 'pink', 'peach'];
  const SIZES = ['Small', 'Medium', 'Large', 'X-Large'];

  const [filters, setFilters] = useState({
    inStock: [],
    price: [0, 50],
    color: [],
    size: []
  });

  const [tempFilters, setTempFilters] = useState(filters);

  const sortProducts = (list, method) => {
    const sorted = [...list];
    switch (method) {
      case 'az': return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'za': return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case 'low-high': return sorted.sort((a, b) => a.price - b.price);
      case 'high-low': return sorted.sort((a, b) => b.price - a.price);
      case 'old-new': return sorted.sort((a, b) => a.id - b.id);
      case 'new-old': return sorted.sort((a, b) => b.id - a.id);
      default: return sorted;
    }
  };

  const getFilteredSorted = () => {
    return sortProducts(ALL_PRODUCTS.filter((p) => {
      const inStockMatch = filters.inStock.length === 0 || filters.inStock.includes(p.inStock ? 'in' : 'out');
      const priceMatch = p.price >= filters.price[0] && p.price <= filters.price[1];
      const colorMatch = filters.color.length === 0 || filters.color.includes(p.color);
      const sizeMatch = filters.size.length === 0 || filters.size.includes(p.size);
      return inStockMatch && priceMatch && colorMatch && sizeMatch;
    }), sortOption);
  };
const applyFilters = () => {
  const { inStock, price, color, size } = tempFilters;
  const isEmpty =
    inStock.length === 0 &&
    color.length === 0 &&
    size.length === 0 &&
    price[0] === 0 &&
    price[1] === 50;

  if (isEmpty) {
   
    clearFilters();
  } else {
    setFilters(tempFilters);
    setProducts([]);
    setPage(1);
    setShowDropdown(false);
  }
};


const clearFilters = () => {
  const reset = { inStock: [], price: [0, 50], color: [], size: [] };
  setTempFilters(reset);
  setFilters(reset);
  setProducts([]);
  setPage(1);
  setShowDropdown(false);
};
useEffect(() => {
  const { inStock, price, color, size } = tempFilters;
  const isAllEmpty =
    inStock.length === 0 &&
    color.length === 0 &&
    size.length === 0 &&
    price[0] === 0 &&
    price[1] === 50;

  if (isAllEmpty && showDropdown) {
    clearFilters();
  }
}, [tempFilters]);

  const fetchProducts = (pageNum, reset = false) => {
    setLoading(true);
    setTimeout(() => {
      const filtered = getFilteredSorted();
      const newSlice = filtered.slice((pageNum - 1) * ITEMS_PER_PAGE, pageNum * ITEMS_PER_PAGE);
      setProducts(prev => reset ? newSlice : [...prev, ...newSlice]);
      setHasMore(pageNum * ITEMS_PER_PAGE < filtered.length);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (page === 1) {
      setProducts([]);
      fetchProducts(1, true);
    } else {
      fetchProducts(page);
    }
  }, [page, filters, sortOption]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
        setShowSortDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const selectedSortLabel = SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || 'Sort By';

  return (
    <div className=" px-10 pb-10">
      <div className="flex gap-4 items-center mb-6 relative z-20" ref={dropdownRef}>
        <div className="relative">
          <button onClick={(e) => { e.stopPropagation(); setShowDropdown(!showDropdown); }} className="border px-4 py-2 rounded bg-white shadow text-sm flex items-center gap-1">
            Filter <RiArrowDownSLine />
          </button>
          {showDropdown && (
            <div className="absolute left-10 bg-white border shadow-lg mt-2 px-6 py-4 z-10 rounded-lg text-sm w-[90vw] max-w-5xl">
              <div className="flex justify-between pb-2 text-gray-800 font-medium text-sm">
                <div className="w-1/4">Availability</div>
                <div className="w-1/4">Price</div>
                <div className="w-1/4">Color</div>
                <div className="w-1/4">Size</div>
              </div>
              <hr className="border-t border-gray-200 mb-4" />
              <div className="flex justify-between gap-4">
                <div className="w-1/4">
                  <button className="underline text-xs mb-2 block" onClick={() => setTempFilters(prev => ({ ...prev, inStock: [] }))}>Reset</button>
                  <div className="mt-2">
                    <label><input type="checkbox" checked={tempFilters.inStock.includes('in')} onChange={(e) => {
                      setTempFilters(prev => ({ ...prev, inStock: e.target.checked ? [...prev.inStock, 'in'] : prev.inStock.filter(i => i !== 'in') }));
                    }} /> In stock</label><br />
                    <label><input type="checkbox" checked={tempFilters.inStock.includes('out')} onChange={(e) => {
                      setTempFilters(prev => ({ ...prev, inStock: e.target.checked ? [...prev.inStock, 'out'] : prev.inStock.filter(i => i !== 'out') }));
                    }} /> Out of stock</label>
                  </div>
                </div>
                <div className="w-1/4">
                  <button className="underline text-xs mb-2 block" onClick={() => setTempFilters(prev => ({ ...prev, price: [0, 50] }))}>Reset</button>
                  <div className="mt-2">
                    <input type="range" min="0" max="50" value={tempFilters.price[1]} onChange={(e) => setTempFilters(prev => ({ ...prev, price: [0, parseFloat(e.target.value)] }))} />
                    <div>Price: ${tempFilters.price[0]} - ${tempFilters.price[1]}</div>
                  </div>
                </div>
                <div className="w-1/4">
                  <button className="underline text-xs mb-2" onClick={() => setTempFilters(prev => ({ ...prev, color: [] }))}>Reset</button>
                  <div className="flex gap-2 flex-wrap">
                    {COLORS.map(c => (
                      <button key={c} className={`w-6 h-6 rounded-full border-2 ${tempFilters.color.includes(c) ? 'border-black' : 'border-gray-300'}`} style={{ backgroundColor: c }}
                        onClick={() => {
                          setTempFilters(prev => ({
                            ...prev,
                            color: prev.color.includes(c) ? prev.color.filter(col => col !== c) : [...prev.color, c]
                          }));
                        }} />
                    ))}
                  </div>
                </div>
                <div className="w-1/4">
                  <button className="underline text-xs mb-2" onClick={() => setTempFilters(prev => ({ ...prev, size: [] }))}>Reset</button>
                  {SIZES.map(size => (
                    <label className="block" key={size}>
                      <input type="checkbox" checked={tempFilters.size.includes(size)} onChange={(e) => {
                        setTempFilters(prev => ({
                          ...prev,
                          size: e.target.checked ? [...prev.size, size] : prev.size.filter(s => s !== size)
                        }));
                      }} /> {size}
                    </label>
                  ))}
                </div>
              </div>
              <hr className="border-t border-gray-200 mt-6 mb-4" />
              <div className="flex justify-between items-center">
                <button className="bg-[#212121] text-white px-6 py-2 rounded" onClick={applyFilters}>Apply</button>
                <button className="underline text-sm" onClick={clearFilters}>Clear</button>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button onClick={() => setShowSortDropdown(!showSortDropdown)} className="border px-4 py-2 rounded bg-white shadow text-sm flex items-center gap-1">
            {selectedSortLabel} <RiArrowDownSLine />
          </button>
          {showSortDropdown && (
            <div className="absolute right-0 bg-white border shadow-lg mt-2 w-48 z-10 rounded text-sm">
              {SORT_OPTIONS.map((option) => (
                <div
                  key={option.value}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${sortOption === option.value ? 'font-semibold text-green-500' : ''}`}
                  onClick={() => {
                    setSortOption(option.value);
                    setShowSortDropdown(false);
                    setProducts([]);
                    setPage(1);
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => {
          const isLast = index === products.length - 1;
          return (
            <div onClick={() => navigate(`/accessories/${type}/${product.id}`)} key={product.id} ref={isLast ? lastProductRef : null} className="border  cursor-pointer  shadow-sm hover:shadow-lg transition duration-300">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover mb-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              />
            <div className='p-4'>
                <h3 className="font-semibold text-lg">{product.name}</h3>
             <p className="text-sm text-gray-500 mt-1">
  <span className="font-semibold text-sm">Size: </span>{product.size}
</p>
              </div>
            </div>
          );
        })}
      </div>

      {loading && (
       <Loader/>
      )}

      {!hasMore && !loading && (
        <p className="text-center text-gray-400 mt-6">You’ve reached the end.</p>
      )}
    </div>
  );
};

export default AccessoryDetail;