"use client";
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero1ExperimentMobile from './Hero1ExperimentMobile';

/******************************************************************************
                            INTERFACES
******************************************************************************/
// Add interfaces if needed

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Hero1Experiment: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <Hero1ExperimentMobile />;
  }

  /******************************************************************************
   *                               HOOKS
   ******************************************************************************/
  // Add hooks if needed

  /******************************************************************************
   *                               FUNCTIONS
   ******************************************************************************/
  // Add functions if needed

  /******************************************************************************
   *                               RENDER
   ******************************************************************************/
  return (
    <section className="min-h-screen relative flex items-center justify-center">
      {/* /******************************************************************************
                                BACKGROUND GRADIENT
      ******************************************************************************/}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-teal to-sand opacity-10" />

      {/* /******************************************************************************
                                CONTENT CONTAINER
      ******************************************************************************/}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* /******************************************************************************
                                LEFT CONTENT SECTION
          ******************************************************************************/}
          <div className="w-full lg:w-1/2 text-center ">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:text-6xl font-bold text-dark-teal mb-6"
            >
              Save Time & Make Money With 1 Piece of Content
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-dark-teal/80 mb-8"
            >
              Create once, use everywhere. Save time and maximize your impact
              with our proven content strategy.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-dark-teal text-white px-8 py-4 rounded-full text-xl font-bold border-2 border-white"
            >
              The Best $47 You&apos;ll Ever Spend
            </motion.button>
          </div>

          {/* /******************************************************************************
                                OH TEXT MASK SECTION
          ******************************************************************************/}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full lg:w-1/2 h-[600px] relative flex items-end justify-center"
          >
            <svg className="w-full h-full absolute" viewBox="0 0 600 400">
              <defs>
                <mask id="textMaskExperiment">
                  <rect width="100%" height="100%" fill="black" />
                  <text
                    x="50%"
                    y="39%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="290"
                    fontFamily="var(--font-poppins)"
                    fontWeight="900"
                    letterSpacing="0"
                  >
                    YES
                  </text>
                  <text
                    x="50%"
                    y="75.28%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="140"
                    fontFamily="var(--font-poppins)"
                    fontWeight="900"
                    letterSpacing="0"
                  >
                    PLEASE
                  </text>
                </mask>
              </defs>

              <foreignObject
                width="100%"
                height="100%"
                mask="url(#textMaskExperiment)"
              >
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
                  <div className="absolute inset-0 bg-white/20" />
                </div>
              </foreignObject>

              <line
                x1="0%"
                y1="60%"
                x2="100%"
                y2="60%"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero1Experiment;
