"use client";
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PurchaseButton } from "@/components/ui/PurchaseButton";

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Section5Benefits: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.3,
  });

  const benefits = [
    {
      title: "Proven Strategy",
      description:
        "A proven, time-saving content strategy you can implement immediately.",
    },
    {
      title: "Simple Steps",
      description:
        "Simple, actionable steps and templates for effortless content repurposing.",
    },
    {
      title: "Marketing Confidence",
      description:
        "The confidence to tackle marketing with ease and efficiency, knowing you have a powerful, proven strategy on your side.",
    },
    {
      title: "Business Freedom",
      description:
        "The freedom to focus on what you love while still growing your business.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-24">
      <motion.div
        ref={sectionRef}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: isInView ? 0 : 60, opacity: isInView ? 1 : 0 }}
        transition={{
          duration: 1,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="container mx-auto px-4"
      >
        <h2 className="text-white uppercase mb-16 text-center">
          What You&apos;ll Gain in 20 minutes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-white text-4xl font-bold">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-dark-teal">
                    {benefit.title}
                  </h3>
                  <p className="text-white">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <PurchaseButton
            courseId="save-time-make-money"
            price={47}
            title="Transform Your Marketing"
            size="large"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Section5Benefits;
