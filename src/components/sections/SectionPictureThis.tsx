"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PurchaseButton } from "@/components/ui/PurchaseButton";

const SectionPictureThis: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const benefits = [
    {
      title: "More time for family and friends",
      description: "Reclaim your evenings and weekends for what truly matters",
    },
    {
      title: "Reduced stress and overwhelm",
      description:
        "No more juggling multiple marketing tasks or feeling behind",
    },
    {
      title: "Increased revenue through targeted marketing",
      description:
        "Convert more effectively with consistent, strategic content",
    },
    {
      title: "A stronger brand presence across all platforms",
      description: "Build authority and recognition without the extra work",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-24"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12">
          Your Week Redesigned with Marketing in Just 1 Hour
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-dark-teal/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-dark-teal">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-dark-teal">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <PurchaseButton
              courseId="save-time-make-money"
              price={47}
              title="START NOW"
              size="large"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionPictureThis;
