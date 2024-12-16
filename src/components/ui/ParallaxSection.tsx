'use client';
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/******************************************************************************
                            INTERFACES
******************************************************************************/
interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
}

/******************************************************************************
                            COMPONENT
******************************************************************************/
const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  offset = 50 
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxSection; 