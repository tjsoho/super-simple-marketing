"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { PurchaseButton } from "@/components/ui/PurchaseButton";

const SectionShortcut: React.FC = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.5,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const lineDuration = isMobile ? 2 : 3.5;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative pt-12 md:pt-0"
    >
      <div className="relative">
        {/* Top Line Animation */}
        <motion.div
          className="absolute -top-28 md:-top-24 left-0 w-full h-[1.5px] overflow-hidden hidden md:block"
          style={{ opacity: 0.5 }}
        >
          <motion.div
            className="h-full bg-white md:w-full w-[75%]"
            initial={{ x: "-75%" }}
            animate={isInView ? { x: "0%" } : { x: "-75%" }}
            transition={{ duration: lineDuration, ease: "easeOut" }}
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          className="container mx-auto px-4 max-w-7xl text-center"
        >
          <motion.h2
            className="mb-8 text-white uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            Your 20-Minute Shortcut to Effortless Marketing
          </motion.h2>

          <motion.div
            className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-light-teal font-medium italic mb-6">
              This masterclass will teach you:
            </p>
            {/* add a small line divider to break up content */}
            <div className="w-1/2 mx-auto h-[1px] bg-white my-6"></div>

            <div className="space-y-12 text-white/80">
              <div className="flex flex-col items-center gap-3">
                <span className="text-white font-bold text-2xl">
                  The Content Waterfall
                </span>
                <p className="text-dark-teal">
                  Repurpose one piece of content across all platforms for
                  maximum impact with minimum effort.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span className="text-white font-bold text-2xl">
                  A Step-by-Step Action Plan
                </span>
                <p className="text-dark-teal">
                  Follow a clear roadmap for immediate implementation.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span className="text-white font-bold text-2xl">
                  Time Reclaimed
                </span>
                <p className="text-dark-teal">
                  Free up hours each week to focus on your passions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.4 }}
          >
            <PurchaseButton
              courseId="save-time-make-money"
              price={47}
              title="GET STARTED NOW"
              size="large"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Line Animation */}
      </div>
    </section>
  );
};

export default SectionShortcut;
