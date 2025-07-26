import React from 'react'
import { motion } from 'framer-motion';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import TestimonialCards from './TestimonalCards';



const TestimonalsPage = () => {
  const testimonials = [
    {
      content: "This was my first time ordering handcrafted accessories from India and I couldn’t be happier with the experience. The quality and detailing were impressive, and you could tell the pieces were made with care. I had a few questions at the start but the team at AP Curated Couture was helpful and responsive throughout. The headbands I ordered looked just as beautiful in person and added the perfect touch to our get-together. Would definitely recommend them to anyone looking for something unique and thoughtfully made.",
      image: client1,
      name: "Ashley Loupe",
      role: "Client",
    },
    {
      content: "We were looking for something fun and coordinated for a casual outdoor event, and AP Curated Couture absolutely delivered. The headbands were stylish, comfortable, and full of character. Each design had its own charm, and the embroidery was beautifully done. The ordering process was smooth and everything arrived right on time. It was a great experience from start to finish and added something special to our day.",
      image: client2,
      name: "Brooke Hillman",
      role: "Client",
    },
    {
      content: "I discovered AP Curated Couture through a friend and instantly fell in love with their elegant style. The craftsmanship stood out right away, with intricate details, premium finish, and a clear sense of individuality in each piece. It felt like more than just buying accessories. Looking forward to adding more of their beautiful pieces to my collection.",
      image: client3,
      name: "Magnolia Paperie",
      role: "Client",
    },
  ];

  return (
    <div className="bg-gray-50 px-2 mt-24 overflow-x-hidden">
     <h2 className="text-3xl text-black text-center mb-5 uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 200 }}>What Our Clients Say</h2>
      <div className="h-px w-[1000px] bg-black mx-auto" />
      {testimonials.map((t, index) => (
        <TestimonialCards
          key={index}
          {...t}
          reverse={index % 2 !== 0} // alternate sides
        />
      ))}
    </div>
  );
};




export default TestimonalsPage