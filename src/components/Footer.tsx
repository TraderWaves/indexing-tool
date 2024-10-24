'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const offset = 80; // Adjust this value based on your fixed padding or header height

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-gray-900 py-10 text-gray-300">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {/* Column 1: About Us */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">About Us</h3>
          <p className="text-sm">
            We are a forward-thinking company that specializes in providing users with the tools and information they need to make the best decisions. Our goal is to create a seamless experience for everyone.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#compare"
                className="transition-colors duration-300 hover:text-blue-500"
                onClick={e => handleScroll(e, 'compare')}
              >
                Compare
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="transition-colors duration-300 hover:text-blue-500"
                onClick={e => handleScroll(e, 'features')}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#props-table"
                className="transition-colors duration-300 hover:text-blue-500"
                onClick={e => handleScroll(e, 'props-table')}
              >
                Props Table
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors duration-300 hover:text-blue-500"
                onClick={e => handleScroll(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="rounded-full bg-blue-600 p-3 text-white transition-colors duration-300 hover:bg-blue-700"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="rounded-full bg-blue-500 p-3 text-white transition-colors duration-300 hover:bg-blue-600"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              className="rounded-full bg-blue-700 p-3 text-white transition-colors duration-300 hover:bg-blue-800"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              className="rounded-full bg-pink-500 p-3 text-white transition-colors duration-300 hover:bg-pink-600"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="mt-8 px-4 text-center text-sm text-gray-400">
        <h3 className="mb-2 font-bold text-white">Disclaimer</h3>
        <p className="mx-auto lg:px-24">
          The information provided is intended for general use and informational purposes only. Users are advised to proceed at their own risk and exercise due diligence before making any decisions based on the information provided. It is crucial to understand that our business offers information and does not endorse or recommend any specific proprietary trading firms. Users should independently evaluate and verify the suitability of any such entities before engaging with them. We do not assume responsibility for any consequences or losses arising from the use of the information provided. Thank you for your understanding and discretion.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>
          &copy;
          {new Date().getFullYear()}
          {' '}
          PropWaves. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
