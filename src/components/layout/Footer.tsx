'use client';
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React from 'react';
// import { motion } from 'framer-motion';

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Footer: React.FC = () => {
  return (
    
      <div className="w-screen-1 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-white font-bold mb-4">Your Brand</h3>
            <p className="text-light-grey text-sm">
              Transform your content strategy and save time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-grey hover:text-white text-sm">About</a></li>
              <li><a href="#" className="text-light-grey hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-grey hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-light-grey hover:text-white text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {/* Add your social icons/links here */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-light-grey text-sm">
            © {new Date().getFullYear()} Your Brand. All rights reserved.
          </p>
        </div>
      </div>
    
  );
};

export default Footer; 