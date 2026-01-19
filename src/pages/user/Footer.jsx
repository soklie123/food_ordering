import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 px-8 md:px-16 mt-24 flex flex-col items-center gap-10">
      {/* Footer Content */}
      <div className="w-full grid md:grid-cols-[2fr_1fr_1fr] gap-12 sm:gap-8 flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col gap-5">
          <img src={assets.logo} alt="Company Logo" className="w-36" />
          <p className="text-gray-300 leading-relaxed">
            We deliver fresh and delicious food right to your door. 
            Our mission is to make your dining experience faster, easier, and tastier!
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#">
              <img src={assets.facebook_icon} alt="Facebook" className="w-8 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </a>
            <a href="#">
              <img src={assets.twitter_icon} alt="Twitter" className="w-8 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </a>
            <a href="#">
              <img src={assets.linkedin_icon} alt="LinkedIn" className="w-8 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-lg font-semibold mb-2">Company</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors">Home</li>
            <li className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors">About Us</li>
            <li className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors">Services</li>
            <li className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors">Contact</li>
            <li className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-lg font-semibold mb-2">Get In Touch</h2>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>📞 +855 86 898 413</li>
            <li>📧 contact@yourcompany.com</li>
            <li>📍 Phnom Penh, Cambodia</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700 my-6"></div>

      {/* Footer Bottom */}
      <p className="text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
