import React from 'react';
import whatsappIcon from '../assets/whatsappIcon.svg';

// Replace 'YOUR_PHONE_NUMBER' with your WhatsApp number in international format, e.g., '1234567890' for +1 234 567 890
const whatsappNumber = 'YOUR_PHONE_NUMBER'; // <-- Put your WhatsApp number here
const message = 'Hello! I would like to know more about your products.';

const WhatsappFloat = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000,
        background: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        textDecoration: 'none',
      }}
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" style={{ width: 32, height: 32 }} />
    </a>
  );
};

export default WhatsappFloat; 