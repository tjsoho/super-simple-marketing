"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PurchaseButton } from "../ui/PurchaseButton";

const Hero1Experiment: React.FC = () => {
  return (
    <section className="min-h-screen relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-teal to-sand opacity-10" />

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row min-h-screen relative z-10">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-8 lg:py-0">
          <div className="max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-dark-teal mb-6 px-4 lg:px-0"
            >
              Fun & Easy Marketing That Works
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-2xl text-dark-teal/80 mb-8 px-4 lg:px-0"
            >
              <span className="font-bold">Save time</span> and{" "}
              <span className="font-bold">make money</span> with just{" "}
              <span className="font-bold">ONE piece of content</span>. A super
              simple, fun strategy that multiplies your reach. This 20-minute
              masterclass will change your marketing forever.
            </motion.p>

            {/* Button Container */}
            <div className="space-y-4 px-4 lg:px-0">
              <PurchaseButton
                courseId="save-time-make-money"
                price={47}
                title="The Best $47 Ever!"
                size="large"
              />
              <p className="text-dark-teal/60 italic text-base lg:text-lg">
                So easy, you&apos;ll wonder why you didn&apos;t do this sooner.
              </p>
            </div>
          </div>
        </div>

        {/* Right/Bottom Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:px-8 order-last">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl max-w-2xl lg:max-w-none"
          >
            <Image
              src="/images/easypeasy.jpg"
              alt="Easy Peasy Content Strategy"
              fill
              className="object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
              style={{ objectPosition: "50% 70%" }}
              priority
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-dark-teal/10 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero1Experiment;
