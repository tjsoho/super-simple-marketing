"use client";

import { useState, useEffect } from "react";

const ThankYouPage = () => {
  const [countdown, setCountdown] = useState(15);

  const redirectToHub = () => {
    window.location.href = "https://www.savvybusinesshub.com";
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      redirectToHub();
    }
  }, [countdown]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage: `url('/images/pool.jpg')`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
          transform: "scale(1.1)",
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <div
          className="text-center max-w-lg bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-10"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <h1 className="text-4xl text-dark-teal mb-4">
            Thank you for your purchase!
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Please wait while we redirect you to your Masterclass page.
            <br></br>
            <br></br>
            <span className="font-bold">
              Please create a new account with the same email address to access
              the masterclass.
            </span>
          </p>

          {/* Countdown Display */}
          <p className="text-lg text-dark-teal font-medium mb-6">
            Redirecting in {countdown} seconds...
          </p>

          {/* Immediate Redirect Button */}
          <button
            // onClick={redirectToHub}
            className="bg-dark-teal text-white px-6 py-2 rounded-lg 
                     hover:bg-teal-700 transition-colors duration-200
                     font-medium text-base"
          >
            Take me there now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
