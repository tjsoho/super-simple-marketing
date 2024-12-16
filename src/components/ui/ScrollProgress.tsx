'use client';
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/******************************************************************************
                            COMPONENT
******************************************************************************/
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-2">
      {/* Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-full bg-light-teal origin-left"
        style={{ scaleX }}
      />
      
      {/* Vertical Bar Indicator */}
      <motion.div
        className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-4 bg-light-teal"
        style={{ 
          x: translateX
        }}
      />
    </div>
  );
};

export default ScrollProgress; 