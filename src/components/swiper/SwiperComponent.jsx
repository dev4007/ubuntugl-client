import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // Importing icons
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./css/styles.css";


export const SwiperComponent = ({ data }) => {
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const ratingStars = 5; // Assuming 5 stars rating

  const handleCardHover = (index, isHovered) => {
    if (isHovered) {
      setSelectedCardIndex(index);
    } 
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
    // Add your logic for adding to cart here
  };
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#318CE7",
        "--swiper-pagination-bottom": "20px",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "12px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      slidesPerView={6}
      navigation={{ prevEl, nextEl }}
      spaceBetween={0}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 2,
          pagination: false,
        },
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      }}
    >
      {/* Navigation buttons */}
      <div className="swiper-button-prev" ref={(node) => setPrevEl(node)}>
        <MdChevronLeft />
      </div>
      <div className="swiper-button-next" ref={(node) => setNextEl(node)}>
        <MdChevronRight />
      </div>

      {data.map((card, index) => (
       
        <SwiperSlide key={index} className="px-4 py-4 max-sm:px-0 max-sm:py-0">
          <div
            className="bg-white overflow-hidden mb-10 justify-center hover:shadow-xl hover:rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300"
            onMouseEnter={() => handleCardHover(index + currentIndex, true)}
            onMouseLeave={() => handleCardHover(index + currentIndex, false)}
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
            <div className="px-6 max-[1350px]:px-4 max-[1050px]:px-2 py-4 max-[375px]:px-3 flex-wrap">
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

    {index + currentIndex === selectedCardIndex && ( 
              <div className="flex justify-between  mt-4">
                <div className="hidden sm:flex bg-slate-300 rounded text-sm w-25">
                  <button
                    className=" font-bold py-2 px-4 rounded-l"
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
            )}
            </div>
 
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const SwiperSpecialComponent = ({ data }) => {
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const ratingStars = 5; // Assuming 5 stars rating

  const handleCardHover = (index, isHovered) => {
    if (isHovered) {
      setSelectedCardIndex(index);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
    // Add your logic for adding to cart here
  };
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#318CE7",
        "--swiper-pagination-bottom": "20px",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "12px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      slidesPerView={6}
      navigation={{ prevEl, nextEl }}
      spaceBetween={0}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 2,
          pagination: false,
        },
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      }}
    >
      {/* Navigation buttons */}
      <div className="swiper-button-prev" ref={(node) => setPrevEl(node)}>
        <MdChevronLeft />
      </div>
      <div className="swiper-button-next" ref={(node) => setNextEl(node)}>
        <MdChevronRight />
      </div>

      {data.map((card, index) => (
 
        <SwiperSlide key={index} className="px-4 py-4 max-sm:px-0 max-sm:py-0">
          <div
            className="bg-white overflow-hidden mb-10 justify-center hover:shadow-xl hover:rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300"
            onMouseEnter={() => handleCardHover(index + currentIndex, true)}
            onMouseLeave={() => handleCardHover(index + currentIndex, false)}
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
            <div className="px-6 max-[1350px]:px-4 max-[1050px]:px-2 py-4 max-[375px]:px-3 flex-wrap">
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

            {index + currentIndex === selectedCardIndex && (
              <div className="flex justify-between  mt-4">
                <div className="hidden sm:flex bg-slate-300 rounded text-sm w-25">
                  <button
                    className=" font-bold py-2 px-4 rounded-l"
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
            )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const SwiperSalesComponent = ({ data }) => {
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const ratingStars = 5; // Assuming 5 stars rating

  const handleCardHover = (index, isHovered) => {
    if (isHovered) {
      setSelectedCardIndex(index);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
    // Add your logic for adding to cart here
  };
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#318CE7",
        "--swiper-pagination-bottom": "30px",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "12px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      slidesPerView={4}
      navigation={{ prevEl, nextEl }}
      spaceBetween={0}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 2,
          pagination: false,
        },
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
        1800: {
          slidesPerView: 4,
        },
        2000: {
          slidesPerView: 4,
        },
      }}
    >
      {/* Navigation buttons */}
      <div className="swiper-button-prev" ref={(node) => setPrevEl(node)}>
        <MdChevronLeft />
      </div>
      <div className="swiper-button-next" ref={(node) => setNextEl(node)}>
        <MdChevronRight />
      </div>

      {data.map((card, index) => (
        <SwiperSlide
          key={index}
          className="max-sm:py-0 2xl:p-12 xl:p-10 md:p-0"

        >
          <div
            className="bg-white overflow-hidden mb-10 hover:shadow-xl hover:rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300"
            onMouseEnter={() => handleCardHover(index + currentIndex, true)}
            onMouseLeave={() => handleCardHover(index + currentIndex, false)}
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
              className="w-45 h-45 object-cover max-[375px]:px-2 mt-2"
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
              <div className="font-medium max-[375px]:text-xs text-base mb-2">
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
                        className={`w-4 h-4 fill-current ${
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

              <div className="w-full bg-progress-remain rounded-full h-2.5 mt-6">
                <div
                  className="bg-progress h-2.5 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <p className="mt-5 font-bold max-md:font-medium  max-md:text-sm max-sm:text-xs text-base">
                Remaining: 50 units{" "}
              </p>

              <div className="flex  mt-6 text-2xl   max-md:text-sm max-sm:text-sm justify-between">
                <span className="text-black border border-black  p-1  flex items-center justify-center">
                  01
                </span>
                <span className="text-black p-1 max-[320px]:p-0 flex items-center justify-center">
                  :
                </span>
                <span className="text-black border border-black p-1 flex items-center justify-center">
                  12
                </span>
                <span className="text-black p-1 max-[320px]:p-0 flex items-center justify-center">
                  :
                </span>
                <span className="text-black border border-black  p-1 flex items-center justify-center">
                  20
                </span>
                <span className="text-black p-1 max-[320px]:p-0 flex items-center justify-center">
                  :
                </span>
                <span className="text-black border border-black  p-1 flex items-center justify-center">
                  55
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const SwiperWeeklyComponent = ({ data }) => {
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const ratingStars = 5; // Assuming 5 stars rating

  const handleCardHover = (index, isHovered) => {
    if (isHovered) {
      setSelectedCardIndex(index);
    }
  };

  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#318CE7",
        "--swiper-pagination-bottom": "0px",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "12px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      slidesPerView={4}
      navigation={{ prevEl, nextEl }}
      spaceBetween={0}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 2,
          pagination: false,
        },
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 4,
        },
      }}
    >
      {/* Navigation buttons*/}
      <div className="swiper-button-prev previous" ref={(node) => setPrevEl(node)}>
        <MdChevronLeft />
      </div>
      <div className="swiper-button-next next" ref={(node) => setNextEl(node)}>
        <MdChevronRight />
      </div>

     
   

      {data.map((card, index) => (
        <SwiperSlide
          key={index}
          className="px-4 py-4 max-sm:px-1 max-sm:py-1"
        >
          <div
            className="bg-white mb-12 overflow-hidden max-sm:mb-0 justify-center hover:shadow-xl hover:rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300"
            onMouseEnter={() => handleCardHover(index + currentIndex, true)}
            onMouseLeave={() => handleCardHover(index + currentIndex, false)}
          >
            <div className="grid grid-rows-2 grid-cols-3 gap-4 max-sm:gap-1">
              <div className="row-span-2 col-span-2">
                <img
                  src={card.image}
                  alt="weekly"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="row-span-1 col-span-1">
                <img
                  src={card.image}
                  alt="weekly"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="row-span-1 col-span-1">
                <img
                  src={card.image}
                  alt="weekly"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-start space-x-6 my-5 mx-3 max-sm:my-1 max-sm:mx-1  max-sm:space-x-2">
              <div>
                <img
                  src={card.logo}
                  alt="Logo"
                  className="2xl:w-24 2xl:h-24 lg:w-14 lg:h-14 md:w-12 md:h-12 max-sm:w-12 max-sm:h-12 rounded-full"
                />
              </div>
              <div>
                <div className="2xl:text-2xl max-2xl:text-xl max-xl:text-lg font-medium md:font-medium md:text-xs max-sm:text-[10px] max-sm:leading-tight">
                  {card.vendor}
                </div>
                <div className="flex items-center">
                  {[...Array(card.rating)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="2xl:w-6 2xl:h-6 max-sm:w-3 max-sm:h-3  md:w-4 md:h-4 fill-current text-orange-400 "
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l2.35 7.18h7.65l-6 4.64 2.35 7.18-6-4.64-6 4.64 2.36-7.18-6-4.64h7.65z" />
                    </svg>
                  ))}
                </div>
                <div className="2xl:text-base md:font-normal  md:text-xs max-sm:text-[10px] max-sm:leading-tight font-bold text-primary">
                  View Products
                  <span
                    className="block border-b-[6px] max-sm:border-b-[4px] max-sm:leading-tight border-primary rounded-lg ml-1"
                    style={{ width: "40%" }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const SwiperHomeAndFurnitureComponent = ({ data }) => {
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const ratingStars = 5; // Assuming 5 stars rating

  const handleCardHover = (index, isHovered) => {
    if (isHovered) {
      setSelectedCardIndex(index);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
    // Add your logic for adding to cart here
  };
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#318CE7",
        "--swiper-pagination-bottom": "20px",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "12px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      slidesPerView={6}
      navigation={{ prevEl, nextEl }}
      spaceBetween={0}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 2,
          pagination: false,
        },
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      }}
    >
      {/* Navigation buttons */}
      <div className="swiper-button-prev previous" ref={(node) => setPrevEl(node)}>
        <MdChevronLeft />
      </div>
      <div className="swiper-button-next next" ref={(node) => setNextEl(node)}>
        <MdChevronRight />
      </div>

      {data.map((card, index) => (
        <SwiperSlide key={index} className="px-4 py-4 max-sm:px-0 max-sm:py-0">
          <div
            className="bg-white overflow-hidden mb-10  justify-center hover:shadow-xl hover:rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300"
            onMouseEnter={() => handleCardHover(index + currentIndex, true)}
            onMouseLeave={() => handleCardHover(index + currentIndex, false)}
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
            <div className="px-6 max-[1350px]:px-4 max-[1050px]:px-2 py-4 max-[375px]:px-3 flex-wrap">
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

          {index + currentIndex === selectedCardIndex && ( 
              <div className="flex justify-between mt-4">
                <div className="hidden sm:flex bg-slate-300 rounded text-sm w-25">
                  <button
                    className=" font-bold py-2 px-4 rounded-l"
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
          )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export const SwiperAbandonedComponent = ({ data }) => {
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const ratingStars = 5; // Assuming 5 stars rating

  const handleCardHover = (index, isHovered) => {
    if (isHovered) {
      setSelectedCardIndex(index);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
    // Add your logic for adding to cart here
  };
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
    >
      {data.map((card, index) => (
        <SwiperSlide key={index} className="px-4 py-4 max-sm:px-0 max-sm:py-0">
          <div
            className="bg-white overflow-hidden mb-10  justify-center hover:shadow-xl hover:rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300"
            onMouseEnter={() => handleCardHover(index + currentIndex, true)}
            onMouseLeave={() => handleCardHover(index + currentIndex, false)}
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
            <div className="px-6 max-[1350px]:px-4 max-[1050px]:px-2 py-4 max-[375px]:px-3 flex-wrap">
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

          {index + currentIndex === selectedCardIndex && ( 
              <div className="flex justify-between mt-4">
                <div className="hidden sm:flex bg-slate-300 rounded text-sm w-25">
                  <button
                    className=" font-bold py-2 px-4 rounded-l"
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
          )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
