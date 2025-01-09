'use client';

const ThankYouPage = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      
        <div className="text-center max-w-lg bg-white rounded-lg shadow-lg p-10">
          <h1 className="text-4xl text-green-500 mb-4">Thank you for your purchase!</h1>
          <p className="text-xl text-gray-700 mb-6">Your purchase has been successfully recorded.</p>
        </div>
    </div>
  );
};

export default ThankYouPage;
