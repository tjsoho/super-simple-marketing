"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageBreakSection: React.FC = () => {
  return (
    <section className="min-h-[40vh] relative overflow-hidden py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-[200px] h-[250px] md:w-[300px] md:h-[400px] rounded-2xl overflow-hidden flex-shrink-0"
          >
            <Image
              src="/images/dance.jpg"
              alt="Marketing flow"
              fill
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </motion.div>

          {/* Center Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center flex-grow"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase leading-tight">
              Effortless
              <br />
              Easy & Fun
            </h2>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-[200px] h-[250px] md:w-[300px] md:h-[400px] rounded-2xl overflow-hidden flex-shrink-0"
          >
            <Image
              src="/images/strategy.jpg"
              alt="Marketing strategy"
              fill
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageBreakSection;
