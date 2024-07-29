import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import About_Swiper from '../../assets/About/AboutSwiper.jpg';
import About_Star from '../../assets/About/AboutStar.svg';
import './css/AboutStyles.css';

function AboutSwiper() {
    return (
        <div className="">
            {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper about-swiper"> */}
            <Swiper modules={[Navigation]} className="mySwiper about-swiper">
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-stretch">
                        <div className="bg-[#FCC626] p-10 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-xl">Raj Smith</h3>
                                <p className="text-lg mb-2">Nike, Vendor</p>
                                <div className="flex mb-4">
                                    <ul className='flex gap-2 md:gap-4'>
                                        {Array(5).fill().map((_, i) => (
                                            <li key={i}><img src={About_Star} alt="About_Star" className="object-cover" /></li>
                                        ))}
                                    </ul>
                                </div>
                                <h2 className="text-xl md:text-3xl font-medium py-5">
                                    “When I think of Ubuntu I just think of how they are able to support such a large number of people with their revolutionary membership system.”
                                </h2>
                            </div>
                        </div>
                        <div className="w-full md:max-w-[609px] flex-1 ">
                            <img src={About_Swiper} alt="Raj Smith" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-stretch">
                        <div className="bg-[#FCC626] p-10 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-xl">Raj Smith</h3>
                                <p className="text-lg mb-2">Nike, Vendor</p>
                                <div className="flex mb-4">
                                    <ul className='flex gap-2 md:gap-4'>
                                        {Array(5).fill().map((_, i) => (
                                            <li key={i}><img src={About_Star} alt="About_Star" className="object-cover" /></li>
                                        ))}
                                    </ul>
                                </div>
                                <h2 className="text-xl md:text-3xl font-medium py-5">
                                    “When I think of Ubuntu I just think of how they are able to support such a large number of people with their revolutionary membership system.”
                                </h2>
                            </div>
                        </div>
                        <div className="w-full md:max-w-[609px] flex-1 ">
                            <img src={About_Swiper} alt="Raj Smith" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-stretch">
                        <div className="bg-[#FCC626] p-5 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-xl">Raj Smith</h3>
                                <p className="text-lg mb-2">Nike, Vendor</p>
                                <div className="flex mb-4">
                                    <ul className='flex gap-2 md:gap-4'>
                                        {Array(5).fill().map((_, i) => (
                                            <li key={i}><img src={About_Star} alt="About_Star" className="object-cover" /></li>
                                        ))}
                                    </ul>
                                </div>
                                <h2 className="text-xl md:text-2xl font-medium py-5">
                                    “When I think of Ubuntu I just think of how they are able to support such a large number of people with their revolutionary membership system.”
                                </h2>
                            </div>
                        </div>
                        <div className="w-full md:max-w-[609px] flex-1 h-[300px]">
                            <img src={About_Swiper} alt="Raj Smith" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
}

export default AboutSwiper;