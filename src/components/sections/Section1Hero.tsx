"use client";
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Section1HeroMobile from "./Section1HeroMobile";

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Section1Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the 'lg' breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <Section1HeroMobile />;
  }

  const letters = "YES PLEASE".split("");

  return (
    <section className="h-contain relative flex flex-col lg:flex-row items-end ">
      
      {/* /******************************************************************************
                              MARKETING TEXT
      ******************************************************************************/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-12 right-4 z-20"
      >
        <h2 className="font-extrabold font-karla leading-none tracking-wider flex lg:text-[132px]">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-transparent bg-clip-text bg-gradient-to-t from-white to-light-grey relative"
              style={{
                backgroundSize: "200% auto",
                animation: `shimmer 3s linear infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </h2>
      </motion.div>

      {/* /******************************************************************************
                              OH TEXT MASK
      ******************************************************************************/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full lg:w-[80%] h-screen relative flex items-center justify-center"
      >
        <svg className="w-full h-full absolute" viewBox="0 0 400 300">
          <defs>
            <mask id="textMask">
              <rect width="100%" height="100%" fill="black" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="280"
                fontFamily="var(--font-poppins)"
                fontWeight="900"
                letterSpacing="0"
              >
                Oh
              </text>
            </mask>
          </defs>

          <foreignObject width="100%" height="100%" mask="url(#textMask)">
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src="/images/pool.jpg"
                alt="Image masked within OH text"
                fill
                className="object-cover object-center animate-panZoom"
                priority
                style={{
                  transformOrigin: "top left",
                  animation: "panZoom 15s ease-in-out infinite alternate",
                }}
              />
            </div>
          </foreignObject>
        </svg>

        {/* Wide Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-14 left-16 -translate-x-1/2 w-[80%] max-w-3xl
                     bg-dark-teal text-white px-12 py-6 rounded-full text-2xl font-bold 
                     border-2 border-white hover:bg-transparent hover:text-dark-teal hover:border-dark-teal
                     transition-colors duration-300"
        >
          Start Your Journey - AUD $47
        </motion.button>
      </motion.div>

      {/* /******************************************************************************
                              TEXT OVERLAY SECTION
      ******************************************************************************/}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/2 absolute lg:relative right-0 bottom-1/2 -translate-y-1/2 lg:translate-y-0 
                   px-4 lg:px-8 py-12 lg:-ml-72 z-10"
      >
        <div>
          {/* Primary Heading */}
          <motion.h1
            className="text-white uppercase lg:mt-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Save Time & Make Money With 1 Piece of Content
          </motion.h1>

          {/* Subheading */}
        </div>
      </motion.div>
      
    </section>
  );
};

export default Section1Hero;
