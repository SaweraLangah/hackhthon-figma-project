import React from 'react';
import Image from 'next/image';

const NeuralUniverseSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className="relative">
          <Image
            src="/col-md-6.png" // Replace with the actual image path
            alt="Part of the Neural Universe"
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="text-left">
          <p className="text-gray-500 uppercase text-sm mb-2">Summer 2020</p>
          <h2 className="text-3xl font-bold mb-4">Part of the Neural Universe</h2>
          <p className="text-gray-600 mb-6">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              Buy Now
            </button>
            <button className="px-6 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralUniverseSection;
