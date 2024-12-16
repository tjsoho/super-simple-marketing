'use client';
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Section7CTA: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.3 
  });

  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div 
        ref={sectionRef}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: isInView ? 0 : 60, opacity: isInView ? 1 : 0 }}
        transition={{ 
          duration: 1,
          ease: [0.33, 1, 0.68, 1]
        }}
        className="container mx-auto px-4 text-center max-w-3xl"
      >
        <h2 className="text-5xl font-bold mb-8 text-dark-teal">
          Ready to Claim Your Freedom?
        </h2>
        
        <p className="text-2xl mb-12 text-dark-teal">
          Start your journey to a more balanced, profitable business today.
        </p>

        <button
          className="bg-white text-dark-teal px-12 py-6 rounded-full text-2xl font-bold border-2 border-dark-teal hover:bg-dark-teal hover:text-white transition-colors duration-300"
        >
          Claim Your Freedom - AUD $47
        </button>
      </motion.div>
    </section>
  );
};

export default Section7CTA; 