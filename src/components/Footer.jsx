import React from 'react';
import instagramQr from '../assets/instagram-qr.png'; 
import facebookQr from '../assets/facebook-qr.png'; 
import alibabaQr from '../assets/alibaba-qr.png'; 
import linkedinQr from '../assets/linkedin-qr.png'; 
import './Footer.css';
import bg1 from '../assets/bg2.jpeg'
const Footer = () => {
  return (
   <footer
  className="footer-section"
  style={{
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
      <div className="footer-content">
         <div className="map">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0873318816275!2d77.09097557495875!3d28.68703408160458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05d81d565401%3A0xe0ef5daaa7cc2b8f!2sAP%20Curated%20Couture!5e0!3m2!1sen!2sus!4v1749885460508!5m2!1sen!2sus"
          width="400"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/APC/faq">FAQs</a></li>
            <li><a href="/terms">Quality Control/Checks</a></li>
            <li><a href="/privacy">Terms of Service</a></li>
            <li><a href="/faqs#mode-of-payment">Privacy Policy</a></li>
              <li><a href="/faqs#mode-of-payment">Mode of Payment</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3 className='text-center'>Contact Us</h3>
          <div className="footer-qr-row">
            <div className="footer-qr-block">
              <a href="https://www.facebook.com/AkkiFashionista" target="_blank" rel="noopener noreferrer">
                <img src={facebookQr} alt="Facebook QR" />
              </a>
              <span>Facebook</span>
            </div>

            <div className="footer-qr-block">
              <a href="https://www.instagram.com/apcc.2018?igsh=bDBsYzI3aHE0Nnh6" target="_blank" rel="noopener noreferrer">
                <img src={instagramQr} alt="Instagram QR" />
              </a>
              <span>Instagram</span>
            </div>

            <div className="footer-qr-block">
              <a href="https://www.linkedin.com/company/ap-curated-couture/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinQr} alt="LinkedIn QR" />
              </a>
              <span>LinkedIn</span>
            </div>

            <div className="footer-qr-block">
              <a href="https://apcuratedcouture.trustpass.alibaba.com/" target="_blank" rel="noopener noreferrer">
                <img src={alibabaQr} alt="Alibaba QR" />
              </a>
              <span>Alibaba</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">&copy; {new Date().getFullYear()} APC. All rights reserved.</div>
    </footer>
  );
};

export default Footer;