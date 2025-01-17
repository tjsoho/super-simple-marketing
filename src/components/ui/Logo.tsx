"use client";
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React from "react";

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={className}>
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      fill="none"
      stroke="#4EA292"
      strokeWidth="2"
    >
      {/* Main circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        className="stroke-dark-teal"
        strokeLinecap="round"
      />

      {/* Clock hands */}
      <g className="stroke-dark-teal origin-center">
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="10"
            x2="50"
            y2="15"
            className="stroke-dark-teal"
            strokeLinecap="round"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}

        {/* Minute hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          className="stroke-dark-teal origin-center"
          strokeLinecap="round"
          style={{
            animation: "rotate 3s linear infinite",
          }}
        />

        {/* Hour hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="25"
          className="stroke-dark-teal origin-center"
          strokeLinecap="round"
          strokeWidth="3"
          style={{
            animation: "rotate 15s linear infinite",
          }}
        />

        {/* Center dot */}
        <circle cx="50" cy="50" r="2" fill="#4EA292" />
      </g>
    </svg>
  </div>
);

export default Logo;
