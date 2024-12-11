import React from 'react';
import Image from 'next/image';

const VitaClassicProduct= () => {
  return (
    <section className="bg-green-600 text-white ">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h4 className="text-sm uppercase mb-2">Summer 2020</h4>
          <h2 className="text-4xl font-bold mb-4">Vita Classic Product</h2>
          <p className="text-lg text-gray-100 mb-6">
            We know how large objects will act. We know how new objects will act. We know.
          </p>
          <div className="flex justify-center lg:justify-start items-center space-x-4">
            <span className="text-2xl font-bold">$16.48</span>
            <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded hover:bg-gray-100">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/shop-hero-2-png-picture-1.png"
            alt="Vita Classic Product"
            width={400}
            height={500}
            className="object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default VitaClassicProduct;
