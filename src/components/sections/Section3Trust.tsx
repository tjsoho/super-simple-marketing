'use client';
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

/******************************************************************************
                            INTERFACES
******************************************************************************/
interface LogoItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Section3Trust: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const logos: LogoItem[] = [
    { src: "/images/1.png", alt: "Company 1", width: 200, height: 50 },
    { src: "/images/2.png", alt: "Company 2", width: 200, height: 50 },
    { src: "/images/3.png", alt: "Company 3", width: 200, height: 50 },
    { src: "/images/4.png", alt: "Company 4", width: 200, height: 50 },
    { src: "/images/5.png", alt: "Company 5", width: 200, height: 50 },
    { src: "/images/6.png", alt: "Company 6", width: 200, height: 50 },
    { src: "/images/7.png", alt: "Company 7", width: 200, height: 50 },
    
    // Add more logos as needed
  ];

  return (
    <section className="h-contain flex flex-col items-center justify-center gap-24">
      {/* Logo Scroll Section */}
      <motion.div 
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        className="w-full"
      >
        <div className="w-full overflow-hidden mb-32">
          <div className="flex animate-scrollX">
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="mx-12 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* First Content Section - Image Left */}
        
      </motion.div>
    </section>
  );
};

export default Section3Trust; 