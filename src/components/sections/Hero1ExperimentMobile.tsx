"use client";
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Hero1ExperimentMobile: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-[50vh] relative order-2 "
      >
        <Image
          src="/images/yesPlease.png"
          alt="Hero image"
          fill
          className="object-contain p-8"
          priority
        />
        <div className="absolute inset-0 " />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 px-6 pt-8 text-center flex flex-col items-center justify-end"
      >
        <motion.h1
          className="text-4xl font-bold text-dark-teal mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Transform Your Content Strategy
        </motion.h1>

        <motion.p
          className="text-xl text-dark-teal/80 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Create once, use everywhere. Save time and maximize your impact
          with our proven content strategy.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-dark-teal text-white px-8 py-4 rounded-full text-xl font-bold border-2 border-white"
        >
          Start Your Journey - AUD $47
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero1ExperimentMobile; 