import React, { useState } from "react";
import Dummy from "../../../assets/videos/Dummy.mp4";
import post from "../../../assets/videos/Poster/post.png";
import boat from "../../../assets/videos/Poster/boat.png";
import { MdOutlineSmartDisplay } from "react-icons/md";

const ShopVideoAds = () => {
  const [videoClicked, setVideoClicked] = useState(false);

  const handleVideoClick = () => {
    setVideoClicked(true);
    // Programmatically play the video
    const video = document.getElementById("adVideo");
    video.play();
  };

  const ratingStars = 5; // Assuming 5 stars rating

  // Function to render star icons
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < ratingStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-3 h-3 fill-current text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.35 7.18h7.65l-6 4.64 2.35 7.18-6-4.64-6 4.64 2.36-7.18-6-4.64h7.65z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
      {/* Video Card */}
      <div className="relative">
        <video
          id="adVideo"
          controls={videoClicked}
          className={`w-full h-full bg-black shadow-md ${
            !videoClicked && "cursor-pointer"
          }`}
          poster={post}
          onClick={!videoClicked ? handleVideoClick : undefined}
        >
          <source src={Dummy} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!videoClicked && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={handleVideoClick}
          >
            {/* Play icon */}
            <div className="text-7xl text-gray-100">
              <MdOutlineSmartDisplay />
            </div>
          </div>
        )}
      </div>

      {/* Sponsored Product Card */}
      <div className="bg-white p-4 shadow-md">
        <div className="flex items-center">
          <div className="w-full md:w-auto md:flex-shrink-0">
            <img
              src={boat}
              alt="Product Image"
              className="w-96 md:w-40 xl:w-96 lg:w-60 h-auto"
            />
          </div>
          <div className="">
            <div className="mb-4">
              <span className="bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold">
                Sponsored
              </span>
            </div>
            <div className="mb-5 py-5 max-sm:mb-0 max-sm:py-0">
              <h4 className="text-lg font-semibold text-gray-600">BOAT</h4>
              <p className="md:text-md xl:text-3xl lg:text-md max-sm:text-sm font-bold">
                boAt Rockerz 450 Bluetooth On Ear Headphones
              </p>

              <div className="flex items-center flex-wrap  max-sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 ">
                <span className="flex">{renderStars()}</span>
                {/* Render star icons */}
                <span className="text-sm text-gray-600 font-bold lg:ml-2 md:ml-2">
                  2,014 reviews
                </span>
              </div>

              <div className="flex lg:text-2xl md:text-xl max-sm:text-md items-center space-x-2 max-sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 ">
                <p className="font-bold">₹320</p>
                <p className="text-gray-400 line-through">₹450</p>
                <span className="bg-yellow-300 text-sm font-bold text-black px-1 rounded-md">
                  15%
                </span>
              </div>

              <div className="lg:mt-6 md:mt-4 mt-3">
                <button className="bg-yellow-500 w-full lg:w-40 text-black text-sm font-bold py-2 px-4 rounded-full hover:bg-yellow-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopVideoAds;
