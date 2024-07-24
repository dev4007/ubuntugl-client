import React from 'react'
import FT_TAG from "../../assets/Footer/FT_TAG.png";

const FooterInputBase = () => {
  return (
    <div className="bg-text-bg p-4 mt-5">
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-4">
    <img alt="FT_TAG" src={FT_TAG} className="h-32 max-xl:h-20 mb-4 md:mb-0" />
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-16">
      <div className="text-center md:text-left">
        <p className="text-4xl max-xl:text-2xl  text-white font-medium">
          Hear first about discounts
        </p>
        <p className="text-2xl max-xl:text-lg text-white">
          As well as news and special offers
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2 md:flex-1">
        <input
          placeholder="Your email address"
          className="border p-3 rounded-md md:min-w-[240px] 2xl:w-[540px]"
        />
        <button className="bg-[#FCC626] text-black py-3 px-6 md:px-12 rounded-md">
          Submit
        </button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default FooterInputBase