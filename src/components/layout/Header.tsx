'use client';
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import { PurchaseButton } from '@/components/ui/PurchaseButton';

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
            <Logo />

            {/* Purchase Button - replacing the CTA button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-64"
            >
              <PurchaseButton 
                courseId="save-time-and-make-money" // Replace with your actual course ID
                price={47} // Replace with your actual price
              />
            </motion.div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header; 