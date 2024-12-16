'use client';
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100); // Show after 100px of scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/75 to-transparent pointer-events-none" />
          
          {/* Content */}
          <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-dark-teal text-white px-6 py-2 rounded-full text-sm font-bold"
            >
              Get Started
            </motion.button>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header; 