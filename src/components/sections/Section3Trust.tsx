"use client";
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/******************************************************************************
                            INTERFACES
******************************************************************************/
interface LogoItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Section3Trust: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const logos: LogoItem[] = [
    { src: "/images/1.png", alt: "Company 1", width: 200, height: 50 },
    { src: "/images/2.png", alt: "Company 2", width: 200, height: 50 },
    { src: "/images/3.png", alt: "Company 3", width: 200, height: 50 },
    { src: "/images/4.png", alt: "Company 4", width: 200, height: 50 },
    { src: "/images/5.png", alt: "Company 5", width: 200, height: 50 },
    { src: "/images/6.png", alt: "Company 6", width: 200, height: 50 },
    { src: "/images/7.png", alt: "Company 7", width: 200, height: 50 },
    { src: "/images/8.png", alt: "Company 8", width: 200, height: 50 },
    { src: "/images/9.png", alt: "Company 9", width: 200, height: 50 },
    // Add more logos as needed
  ];

  const LogoGrid = () => (
    <div className="grid grid-cols-3 gap-6 px-4">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="aspect-square flex items-center justify-center p-4 bg-white/5 rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={150}
            height={38}
            className="object-contain w-full scale-125"
          />
        </div>
      ))}
    </div>
  );

  const LogoScroll = () => (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scrollX">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-12 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="h-contain flex flex-col items-center justify-center gap-24">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        className="w-full"
      >
        <div className="mb-32">{isMobile ? <LogoGrid /> : <LogoScroll />}</div>
      </motion.div>
    </section>
  );
};

export default Section3Trust;
