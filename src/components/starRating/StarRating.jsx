import React from "react";

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex items-center space-x-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3 h-3 fill-current ${
              starValue <= rating ? "text-yellow-500"  : "text-gray-300"
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l2.35 7.18h7.65l-6 4.64 2.35 7.18-6-4.64-6 4.64 2.36-7.18-6-4.64h7.65z" />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
