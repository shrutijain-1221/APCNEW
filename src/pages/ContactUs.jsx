import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import bg10 from '../assets/bg10.jpg'
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setShowThankYou(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        // Hide popup after 3 seconds
        setTimeout(() => setShowThankYou(false), 3000);
      } else {
        alert('Error sending message. Please try again.');
        console.error('Error:', result);
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
      console.error('Error:', error);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      details: ["+91 (555) 123-4567", "+91 (555) 987-6543"],
      color: "bg-blue-500"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      details: ["info@apcurated.com", "support@apcurated.com"],
      color: "bg-green-500"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Address",
      details: ["AP Curated Couture", "Noida, Uttar Pradesh", "India"],
      color: "bg-red-500"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="overflow-x-hidden mt-[90px]">
      {/* Thank You Popup */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-2xl"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 rounded-full p-3">
                  <FaCheckCircle className="text-4xl text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. We'll get back to you soon!
              </p>
              <button
                onClick={() => setShowThankYou(false)}
                className="bg-[#18181b] text-white px-6 py-2 rounded-md hover:bg-[#2a2a2d] transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
        <div
        className="overflow-x-hidden bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: `url(${bg10})` }}
      > 
     
            <div className="text-center mb-12">
           <h2 className="text-6xl font-bold font-[Inter] mt-20 text-[#514747]">
        Contact Us
        </h2>
        <p className="font-['Dancing_Script',cursive] text-[#514747] text-3xl mt-5">Get in touch woth our Team</p>
        </div>
          
      {/* Main Content */}
       
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold font-[Inter] text-[#514747] mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-2xl font-[Inter] text-[#514747] leading-relaxed">
                Ready to bring your accessory ideas to life? We're here to help you create 
                stunning fashion pieces that reflect your brand's unique style. Reach out 
                to us and let's discuss your project.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-lg -shadowmd hover:shadow-lg transition-shadow"
                >
                  <div className={`p-3 rounded-full ${info.color} text-white`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-[Inter] text-[#514747] mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="font-[Inter] text-[#514747]">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8"
          >
            <h3 className="text-2xl font-bold font-[Inter] text-[#514747] mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a3d9b1] focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a3d9b1] focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a3d9b1] focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a3d9b1] focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a3d9b1] focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#18181b] text-white py-4 px-6 rounded-md font-semibold hover:bg-[#2a2a2d] transition-colors duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-4xl font-bold font-[Inter] text-[#514747] mb-6 text-center">
            Find Us
          </h3>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0873318816275!2d77.09097557495875!3d28.68703408160458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05d81d565401%3A0xe0ef5daaa7cc2b8f!2sAP%20Curated%20Couture!5e0!3m2!1sen!2sus!4v1749885460508!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs; 