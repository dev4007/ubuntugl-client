import React, { useEffect, useState } from 'react';
import { cards } from "./../../../data/Products";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // Importing icons

const ratingStars = 5;

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [cardsPerRow, setCardsPerRow] = useState(6); // Initial cards per row

  useEffect(() => {
    const handleResize = () => {
      // Adjust cards per row based on screen width
      if (window.innerWidth < 320) {
        setCardsPerRow(2); // Show one card per row for widths less than 320px
      } else if (window.innerWidth < 600) {
        setCardsPerRow(2); // Show three cards per row for widths between 320px and 600px
      } else if (window.innerWidth < 768) {
        setCardsPerRow(2); // Show three cards per row for widths between 320px and 600px
      
      } else if (window.innerWidth < 1024) {
        setCardsPerRow(4); // Show four cards per row for widths between 600px and 1024px
      } else if (window.innerWidth < 1400) {
        setCardsPerRow(6); // Show six cards per row for widths between 1024px and 1400px
      } else {
        setCardsPerRow(6); // Default to six cards per row for larger screens (1400px and above)
      }
    };

    // Call handleResize initially and add event listener for resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
    // Add your logic for adding to cart here
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalSlides = Math.ceil(cards.length / cardsPerRow);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsPerRow, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + cardsPerRow, (totalSlides - 1) * cardsPerRow)
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index * cardsPerRow);
  };

  return (
    <div className="relative">
      {/* Left Navigation Icon */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 p-2 bg-gray-300 rounded-full"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <MdChevronLeft size={24} />
      </button>
      {/* Right Navigation Icon */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 p-2 bg-gray-300 rounded-full"
        onClick={handleNext}
        disabled={currentIndex >= (totalSlides - 1) * cardsPerRow}
      >
        <MdChevronRight size={24} />
      </button>
     
      <div className={`grid grid-cols-${cardsPerRow} max-md:grid-cols-${cardsPerRow} md:grid-cols-${cardsPerRow} lg:grid-cols-${cardsPerRow} xl:grid-cols-${cardsPerRow} gap-6 px-10 py-5`}>
        {cards.slice(currentIndex, currentIndex + cardsPerRow).map((card, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden mb-10 justify-center hover:shadow-xl hover:rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300"
          >
            {/* Render tag if available */}
            {card.tag ? (
              <span
                className={`py-1 px-1 rounded-tl-lg text-sm max-sm:text-xs rounded-br-lg ${
                  card.tag === "UBUNTU'S CHOICE"
                    ? "bg-[#557DE4] text-white"
                    : "bg-[#FCC626] text-black"
                }`}
              >
                {card.tag}
              </span>
            ) : (
              <span className="py-1 px-1">&nbsp;</span>
            )}

            {/* Product image */}
            <img
              src={card.image}
              alt="Product"
              className="w-45 h-45 object-cover max-[375px]:px-2 px-4 mt-2"
            />

            {/* Product details */}
            <div className="px-6 py-4 max-[375px]:px-3 flex-wrap">
              <div className="flex items-center mb-2">
                <span className="font-bold text-lg max-[375px]:text-xs text-gray-900 mr-2">
                  {card.price}
                </span>
                <span className="text-sm max-[375px]:text-xs text-gray-600 line-through mr-2 mt-0">
                  {card.previousPrice}
                </span>
                <span className="text-sm text-black bg-yellow-300 rounded-full px-3">
                  {card.discount}
                </span>
              </div>
              <div>
                <span className="text-sm max-[375px]:text-xs text-gray-600">
                  {card.brand}
                </span>
              </div>
              <div className="font-bold max-[375px]:text-xs text-sm mb-2">
                {card.name}
              </div>
              <div className="flex items-center flex-wrap">
                {/* Render star icons */}
                <span className="flex">
                  {[...Array(ratingStars)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-3 h-3 fill-current ${
                          card.tag === "UBUNTU'S CHOICE"
                            ? starValue <= card.rating
                              ? "text-blue-500"
                              : "text-gray-300"
                            : starValue <= card.rating
                            ? "text-orange-400"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l2.35 7.18h7.65l-6 4.64 2.35 7.18-6-4.64-6 4.64 2.36-7.18-6-4.64h7.65z" />
                      </svg>
                    );
                  })}
                </span>{" "}
                <span className="text-sm text-gray-600 lg:ml-2 md:ml-2 max-[320px]:ml-0">
                  {card.reviews} reviews
                </span>
              </div>

              {/* Show controls and add to cart button if this card is selected */}
              <div className="flex justify-between mt-4">
                <div className="hidden sm:flex bg-slate-300 rounded text-sm w-25">
                  <button
                    className="font-bold py-2 px-4 rounded-l"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <span className="py-2">{quantity}</span>
                  <button
                    className="font-bold py-2 px-4 rounded-r"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-yellow-500 w-25 max-sm:w-full text-black text-xs font-bold py-2 px-2 rounded focus:outline-none"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Dots */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentIndex / cardsPerRow === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
