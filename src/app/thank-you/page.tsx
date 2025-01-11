"use client";

const ThankYouPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage: `url('/images/pool.jpg')`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlend: "overlay",
      }}
    >
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
  );
};

export default ThankYouPage;
