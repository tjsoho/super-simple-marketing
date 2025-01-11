"use client";

const ThankYouPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage: `url('/images/pool.jpg')`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
          transform: "scale(1.1)", // Prevents blur edges from showing
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
            Please wait while we redirect you to the course page.
            <br></br>
            <br></br>
            You will need to create an account with the same email address you
            used to purchase the course.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
