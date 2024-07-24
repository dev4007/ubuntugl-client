import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import chair from "../../../assets/Home/chair.png";
import woman from "../../../assets/Home/woman.png";
import cycle from "../../../assets/Home/cycle.png";


const cardData = [
  {
    title: "FLASH SALE",
    description: "Women's Sports Products",
    discount: "Between 15-40% Off",
    image: woman,
    backgroundColor: "#ECE5FF",
    color: "#7547F7",
  },
  {
    title: "BIG DISCOUNT",
    description: "Premium Office Chairs",
    discount: "Upto 25% Off",
    image: chair,
    backgroundColor: "#F5FFE5",
    color: "#949702",
  },
  {
    title: "NEW ARRIVALS",
    description: "Decathlon Cycles",
    discount: "Min 20% Off",
    image: cycle,
    backgroundColor: "#FEE6E6",
    color: "#F65754",
  },
];

const OfferCard = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      }}
    >
      {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <div
            className="flex items-center justify-between shadow-md"
            style={{ backgroundColor: card.backgroundColor }}
          >
            <div className="flex flex-col flex-1 ml-5 px-6 max-xl:px-1">
              <h2
                style={{ color: card.color }}
                className="text-xl max-md:text-base font-medium"
              >
                {card.title}
              </h2>
              <p className="text-2xl max-md:text-lg font-medium mt-2">
                {card.description}
              </p>
              <p className="text-lg max-md:text-base font-bold mt-4">
                {card.discount}
              </p>
            </div>
            <div className="flex items-center justify-end flex-1">
              <img
                src={card.image}
                alt={card.title}
                className="object-cover xl:max-w-screen-xl max-lg:w-auto max-h-auto h-80 max-sm:h-40"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OfferCard;
