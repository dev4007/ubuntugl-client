import React, { useState } from "react";
import Dummy from "../../../assets/videos/Dummy.mp4";
import ADS2 from "../../../assets/videos/Poster/ads2.png";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { LuCircleDot } from "react-icons/lu";
import { BsDot } from "react-icons/bs";
import { MdArrowBack } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";


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
          viewBox="0 0 24 24">
          <path d="M12 2l2.35 7.18h7.65l-6 4.64 2.35 7.18-6-4.64-6 4.64 2.36-7.18-6-4.64h7.65z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col md:flex-row mt-1">
      {/* Video Card */}
      <div className="relative w-full md:w-3/5 aspect-w-16 aspect-h-9">
        <video
          id="adVideo"
          controls={videoClicked}
          className={`w-full h-full bg-black shadow-md ${
            !videoClicked && "cursor-pointer"
          }`}
          poster={ADS2}
          onClick={!videoClicked ? handleVideoClick : undefined}>
          <source src={Dummy} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!videoClicked && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={handleVideoClick}>
            {/* Play icon */}
            <div className="text-7xl text-gray-100">
              <MdOutlineSmartDisplay />
            </div>
          </div>
        )}
      </div>

      {/* Sponsored Product Card */}
      <div className="bg-blue-500 p-8 md:p-14 flex items-center shadow-md w-full md:w-2/5">
        <div className="text-white">
          <h2 className="text-3xl my-5">Save up to $130 on select laptops.</h2>
          <p className="font-thin my-6">
            All kinds of products in one place. Starts from $1. Get cashbacks &
            offers.
          </p>
          <button className="w-full md:w-2/5 text-white font-semibold py-2 px-4 rounded hover:bg-gray-200 hover:text-blue-500 transition duration-300 border">
            Shop Deals
          </button>
          <div className="flex items-center mt-16 text-xl">
            <MdArrowBack />
            <BsDot />
            <BsDot />
            <LuCircleDot />
            <BsDot />
            <BsDot />
            <IoMdArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopVideoAds;
