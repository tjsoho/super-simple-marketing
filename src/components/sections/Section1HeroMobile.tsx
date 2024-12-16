"use client";
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

/******************************************************************************
                            VARIANTS
******************************************************************************/
const letterVariants: Variants = {
  hidden: { 
    opacity: 0,
    x: -50 
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  })
};

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Section1HeroMobile: React.FC = () => {
  const letters = "YES PLEASE".split("");

  return (
    <section className="h-screen relative flex flex-col">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full flex-1 flex items-start pt-2"
      >
        <div className="relative w-full h-[60vh]">
          <Image
            src="/images/oho.png"
            alt="Oh image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Text Section - Moved up */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-4 text-center absolute top-[52%] left-0 right-0 z-10"
      >
        <motion.h1
          className="font-bold text-dark-teal uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Save Time & Make Money With 1 Piece of Content
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-light-teal text-white px-6 py-3 rounded-full text-lg font-bold"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Marketing Text - Overlapping */}
      <motion.div
        className="px-4 text-center absolute top-[36.75%] left-10"
      >
        <h2 className="font-extrabold font-karla leading-none tracking-wider flex justify-center text-5xl">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="text-transparent bg-clip-text bg-gradient-to-t from-light-teal to-white relative"
              style={{
                backgroundSize: "200% auto",
                animation: `shimmer 3s linear infinite ${index * 0.1}s`,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h2>
      </motion.div>
    </section>
  );
};

export default Section1HeroMobile; 