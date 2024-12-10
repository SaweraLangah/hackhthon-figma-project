
import React from 'react';

const HeroSection= () => {
  return (
    <section className="bg-sky-400 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-1437py-58">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <p className="text-sm uppercase mb-5">Summer 2020</p>
          <h1 className="text-4xl font-bold mb-4">New Collection</h1>
          <p className="text-lg mb-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/Screenshot 2024-12-08 231726.png"
            alt="New Collection"
            className="max-w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
