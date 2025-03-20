import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to My Homepage</h1>
        <p className="text-gray-600 mt-2">This is a simple homepage built with React and CSS.</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
