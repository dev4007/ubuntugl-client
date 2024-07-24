import seen from "../../../assets/photo/seen.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ScreenSize from "./../../screen/ScreenSize";

const TrendingAds = () => {
  return (
    <div className="my-10">
      <ScreenSize>
        {(isSmallScreen) =>
          isSmallScreen ? (
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="min-h-60 grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                  {/* Content of the first div */}
                  <div
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 object-cover"
                    style={{ backgroundImage: `url(${seen})` }}
                  >
                    <div className="absolute inset-0 bg-opacity-65"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-black px-6 break-words">
                        {/* Apply font family here */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#557DE4] mb-2 font-original-surfer">
                          WINTER SALE
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg">
                          Get{" "}
                          <span className="font-bold">upto 50% discount</span>{" "}
                          offers
                        </p>
                        <p className="text-sm md:text-base lg:text-lg">
                          along with many more deals
                        </p>
                        <p className="text-lg md:text-xl lg:text-2xl font-bold mt-6">
                          Use code:
                          <span className="text-[#557DE4] px-2 py-1 mx-3 border-dashed border-2 border-indigo-600">
                            UBUNTUE50
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* White Background Section */}
                <div className="bg-[#FFE3D2] rounded-lg shadow-md overflow-hidden">
                  <h1>Here Add ads </h1>
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <div className="min-h-60 grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 md:pt-20 lg:pt-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${seen})` }}
              >
                <div className="absolute inset-0 bg-opacity-65"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-6 break-words">
                    {/* Apply font family here */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#557DE4] mb-2 font-original-surfer">
                      WINTER SALE
                    </h2>
                    <p className="text-black text-sm md:text-base lg:text-lg">
                      Get <span className="font-bold text-black">upto 50% discount</span>{" "}
                      offers
                    </p>
                    <p className="text-black text-sm md:text-base lg:text-lg">
                      along with many more deals
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold mt-6 text-black">
                      Use code:
                      <span className="text-[#557DE4]  px-2 py-1 mx-3 border-dashed border-2 border-indigo-600">
                        UBUNTUE50
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* White Background Section */}
              <div className="bg-[#FFE3D2] rounded-lg shadow-md overflow-hidden">
                <h1>Here Add ads </h1>
              </div>
            </div>
          )
        }
      </ScreenSize>
      <div className="border-t-2 border-gray-300 mt-10"></div>
    </div>
  );
};

export default TrendingAds;
