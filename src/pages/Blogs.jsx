import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance'; // Axios instance with baseURL
import bg10 from '../assets/bg8.png';
// Utility to convert blog title into slug
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Blog card with animation
const BlogCard = ({ blog, delay, direction }) => {
  const controls = useAnimation();
  const ref = useRef();
  const slug = slugify(blog.blog_title);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          controls.set({ opacity: 0, x: direction === 'left' ? -100 : 100 });
          await controls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay },
          });
        } else {
          controls.set({ opacity: 0, x: direction === 'left' ? -100 : 100 });
        }
      },
      { threshold: 0.3 }
    );

    const node = ref.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [controls, delay, direction]);

  // Format created_date safely
  const formattedDate = blog.created_date
    ? new Date(blog.created_date).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      })
    : 'Date unavailable';

  return (
    <Link to={`/blog/${slug}`} state={{ blog }}>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
        className="bg-white shadow-lg overflow-hidden h-[500px] flex flex-col"
      >
        <div className="h-[350px] relative group">
          <img
            src={blog.blog_image}
            alt={blog.blog_title}
            className="w-full h-full object-cover object-top transition duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-[#a3d9b1] px-4 py-2 rounded text-white font-semibold cursor-pointer">
              READ »
            </span>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-base mt-auto font-semibold leading-snug mb-3 line-clamp-4">
            {blog.blog_title}
          </h3>
          <p className="text-[#018A8C] font-semibold">{formattedDate}</p>
        </div>
      </motion.div>
    </Link>
  );
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getDirection = (rowIndex) => (rowIndex % 2 === 0 ? 'left' : 'right');

  useEffect(() => {
    axiosInstance
      .get('/blogs/')
      .then((res) => setBlogs(res.data))
      .catch((err) => {
        console.error('Error fetching blogs:', err);
        setBlogs([]); // Optional: prevent map crash
      });
  }, []);

   return (
    <div
      className="px-4 py-12 mt-10 overflow-x-hidden bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bg10})` }} // Step 2
    >
           <div className="relative z-10 flex flex-col items-center px-4 py-5 lg:px-20">
           {/* Heading */}
           <h2 className="text-5xl md:text-6xl font-bold font-[Inter] text-[#514747] text-center ">
            The Blogs
           
           </h2>
       
   </div>
      <div className="max-w-[1400px] mx-auto">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            const direction = getDirection(row);
            const delay = direction === 'left' ? col : 2 - col;

            return (
              <BlogCard
                key={blog.id}
                blog={blog}
                delay={delay * 0.3}
                direction={direction}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;