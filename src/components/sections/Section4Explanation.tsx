"use client";
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Section4Explanation: React.FC = () => {
  const lineRef = useRef(null);
  const firstContentRef = useRef(null);
  const secondContentRef = useRef(null);

  const isLineInView = useInView(lineRef, { once: false });
  const isFirstContentInView = useInView(firstContentRef, { once: false });
  const isSecondContentInView = useInView(secondContentRef, { once: false });

  return (
    <section className="flex flex-col items-center justify-center lg:my-24 overflow-hidden">
      {/* First Content Section */}
      <div
        ref={firstContentRef}
        className="flex flex-col lg:flex-row items-center lg:my-24 gap-8 pr-8 lg:pr-0 w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isFirstContentInView ? 1 : 0,
            x: isFirstContentInView ? 0 : -20,
          }}
          className="w-full lg:w-3/5 h-[400px] lg:h-[600px] relative"
        >
          <Image
            src="/images/team.jpg"
            alt="Transformation"
            fill
            className="object-cover rounded-r-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: isFirstContentInView ? 1 : 0,
            x: isFirstContentInView ? 0 : 20,
          }}
          transition={{ delay: 0 }}
          className="w-full lg:w-2/5 px-4 lg:p-12"
        >
          <h2 className="text-white uppercase mb-6">The New Way</h2>
          <p className="text-light-grey mb-8">
            Trying to juggle a million tasks? This isn&apos;t about more work;
            it&apos;s about smarter work.
            <br></br>
            <br></br>Learn how to create one amazing piece of content and
            strategically use it across all your platforms, saving you hours and
            unlocking a more fulfilling work-life balance. <br></br>
            <br></br>Imagine: More time for what matters, more consistent
            income, and more freedom to design the life you want!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-dark-teal text-white px-8 py-4 rounded-full text-xl font-bold"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Connecting Line */}
      <div className="hidden lg:block relative h-24 w-full" ref={lineRef}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
        >
          <motion.path
            d={`
              M 85 0 
              L 85 20
              L 15 20
              L 15 40
            `}
            stroke="white"
            strokeWidth="0.1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: isLineInView ? 1 : 0, opacity: 0.5 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Second Content Section */}
      <div 
        ref={secondContentRef}
        className="flex flex-col-reverse lg:flex-row items-center my-24 lg:mt-24 gap-8 pl-8 lg:pl-0 w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isSecondContentInView ? 1 : 0,
            x: isSecondContentInView ? 0 : -20,
          }}
          transition={{ delay: 0.3 }}
          className="w-full lg:w-2/5 px-4 lg:p-12"
        >
          <h2 className="text-white uppercase mb-6">
            The Power of<br></br> 1 Piece Marketing
          </h2>
          <p className="text-light-grey mb-8">
            You don&apos;t need a marketing degree or years of experience to
            master this strategy.<br></br>
            <br></br> Even if you&apos;re an AI sceptic, this course will guide
            you step-by-step, making the power of AI accessible and easy to
            integrate into your existing workflow. <br></br>
            <br></br>
            No more struggling with complicated prompts; learn to harness
            AI&apos;s capabilities simply and effectively.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-dark-teal text-white px-8 py-4 rounded-full text-xl font-bold"
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: isSecondContentInView ? 1 : 0,
            x: isSecondContentInView ? 0 : 20,
          }}
          className="w-full lg:w-3/5 h-[400px] lg:h-[600px] relative"
        >
          <Image
            src="/images/toby.jpg"
            alt="Content Waterfall"
            fill
            className="object-cover rounded-l-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section4Explanation;
