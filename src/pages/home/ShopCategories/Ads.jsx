import React from 'react';

const Ads = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
      {/* Video Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Video Advertisement</h3>
        {/* Replace the iframe with your video embed code */}
        <iframe
          title="Video Advertisement"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Sponsored Product Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Sponsored</h3>
        <div className="flex items-center mb-2">
          <img
            src="https://example.com/product-image.jpg"
            alt="Product Image"
            className="w-20 h-20 object-contain mr-4"
          />
          <div>
            <h4 className="text-lg font-semibold">BOAT</h4>
            <p className="text-gray-600">boAt Rockerz 450 Bluetooth On Ear Headphones</p>
            <p className="text-gray-500">2,014 reviews</p>
            <div className="flex items-center">
              <p className="text-xl font-bold">₹320</p>
              <p className="text-gray-400 line-through ml-2">₹450</p>
              <p className="text-green-500 ml-2">15% off</p>
            </div>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Ads;
