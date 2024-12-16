"use client";
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React from "react";
import { motion } from "framer-motion";

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Logo: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-1"
    >
      <span className="text-3xl font-bold tracking-wider">
        <span className="bg-gradient-to-r from-dark-teal via-light-teal to-dark-teal bg-clip-text text-transparent">
          TOBY J
        </span>
      </span>

      {/* Decorative Dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-dark-teal to-light-teal mt-4" />
    </motion.div>
  );
};

export default Logo; 