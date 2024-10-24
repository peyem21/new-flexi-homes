import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Footer */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a leading real estate platform dedicated to helping you find the perfect home. From modern apartments to luxury homes, we have it all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/properties" className="hover:underline">Properties</Link></li>
              {/* <li><a href="#" className="hover:underline">Agents</a></li> */}
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              {/* <li><a href="#" className="hover:underline">Blog</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul>
              <li className="text-gray-400">Email: </li>
              <li className="text-gray-400">Phone: +234 7081271367 +234 8118554000 +234 8132072840</li>
              <li className="text-gray-400">Address1: Oka Akoko Close, Garki, Abuja.</li>
              <li className="text-gray-400">Address2: Kilanko Alongside, Ajase Ipo Road, Offa Garage, Ilorin, Kwara State.</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/FlexiHomesRealty" target="_blank" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com/FlexiHomesSOA" target="_blank" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/FlexiHomesRealty" target="_blank" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/FlexiHomesRealty" target="_blank" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} PEYEM. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
