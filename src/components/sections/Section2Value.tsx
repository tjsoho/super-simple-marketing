"use client";
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

/******************************************************************************
                            INTERFACES
******************************************************************************/
// Add interfaces if needed

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Section2Value: React.FC = () => {
  /******************************************************************************
   *                               HOOKS
   ******************************************************************************/
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.5
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /******************************************************************************
   *                               VARIABLES
   ******************************************************************************/
  const lineDuration = isMobile ? 2 : 3.5;

  /******************************************************************************
   *                               RENDER
   ******************************************************************************/
  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative">
      <div className="relative">
        {/* /******************************************************************************
                                TOP LINE ANIMATION
        ******************************************************************************/ }
        <motion.div 
          className="absolute -top-24 left-0 w-full h-[1.5px] overflow-hidden"
          style={{ opacity: 0.5 }}
        >
          <motion.div 
            className="h-full bg-white md:w-full w-[75%]"
            initial={{ x: "-75%" }}
            animate={isInView ? { x: "0%" } : { x: "-75%" }}
            transition={{ duration: lineDuration, ease: "easeOut" }}
          />
        </motion.div>

        {/* /******************************************************************************
                                CONTENT SECTION
        ******************************************************************************/ }
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          className="container mx-auto px-4 max-w-4xl text-center"
        >
          <motion.h2
            className="mb-8 text-white uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            It Can Be That Easy
          </motion.h2>

          <motion.p
            className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.3 }}
          >
            Imagine a business that runs smoothly, effortlessly generating income
            while giving you the time and freedom to enjoy life. This 20-minute
            masterclass unveils a simple yet powerful content strategy to achieve
            just that.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-teal text-white px-8 py-4 rounded-full text-xl font-bold"
          >
            Start Designing
          </motion.button>
        </motion.div>

        {/* /******************************************************************************
                                BOTTOM LINE ANIMATION
        ******************************************************************************/ }
        <motion.div 
          className="absolute -bottom-24 right-0 w-full h-[1.5px] overflow-hidden"
          style={{ opacity: 0.5 }}
        >
          <motion.div 
            className="h-full bg-white md:w-full w-[75%] ml-auto"
            initial={{ x: "75%" }}
            animate={isInView ? { x: "0%" } : { x: "75%" }}
            transition={{ duration: lineDuration, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section2Value;
