import React from 'react'
import { CiMail } from "react-icons/ci";
import FT_LOGO from "../../assets/Footer/footer-logo.svg"
import FT_X from "../../assets/Footer/FT_X.png";
import FT_YT from "../../assets/Footer/FT_YT.png";
import FT_META from "../../assets/Footer/FT_META.png";
import FT_IG from "../../assets/Footer/FT_IG.png";
import FT_VISA from "../../assets/Footer/FT_VISA.png";
import FT_MASTER from "../../assets/Footer/FT_MASTER.png";
import FT_A_PAY from "../../assets/Footer/FT_A_PAY.png";
import FT_DIS from "../../assets/Footer/FT_DIS.png";
import FT_PTM from "../../assets/Footer/FT_PTM.png";
import FT_UPI from "../../assets/Footer/FT_UPI.png";

const FooterContact  = () => {
  return (
    <div class="container mx-auto max-sm:px-4 bg-[#FFFFFF]">
    <div class="w-full max-w-screen-2xl mx-auto">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-3 max-xl:space-x-5 lg:grid-cols-5 py-10 w-full max-w-screen-2xl">

          <div className="max-sm:col-span-full flex justify-center">
            <div class="flex">
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <img alt="FT_LOGO" src={FT_LOGO} className="h-auto lg:h-36 max-xl:h-24" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl mb-2  max-xl:text-sm font-medium">
                    Need help with your order?
                  </h3>
                  <div className="flex gap-2 justify-center">
                    <CiMail className="text-3xl max-xl:text-xl" />
                    <p className="font-normal text-base">support@ubuntue.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="lg:mx-auto text-left max-sm:mt-10">
            <h4 className="text-lg max-sm:text-base text-gray-900 font-medium mb-4">
              Let Us Help You
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2">Contact Support</li>
              <li className="mb-2">Track Your Order</li>
              <li className="mb-2">Refund & Returns</li>
              <li className="mb-2">Shipping Rates & Policies</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">Cookie Settings</li>
              <li className="mb-2">Help Center</li>
            </ul>
          </div>

          <div className="lg:mx-auto text-left max-sm:mt-10">
            <h4 className="text-lg max-sm:text-base text-gray-900 font-medium mb-4">
              Earn Money With Us
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="my-2">Sell on Ubuntue</li>
              <li className="my-2">Become an Affiliate</li>
              <li className="my-2">Join Membership</li>
              <li className="my-2">Advertise with Us</li>
              <li className="my-2">Become a Vendor</li>
            </ul>
          </div>

          <div className="lg:mx-auto text-left max-sm:mt-12 ">
            <h4 className="text-lg max-sm:text-base text-gray-900 font-medium mb-4">
              Get to Know Us
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="my-2">About Us</li>
              <li className="my-2">Investor Relations</li>
              <li className="my-2">Social Responsibility</li>
              <li className="my-2">Careers</li>
              <li className="my-2">Store Locations</li>
            </ul>
          </div>

          <div className="lg:mx-auto text-left max-sm:mt-12">
            <div className="flex-1">
              <div className="mb-7">
                <div className="text-xl max-sm:text-base text-gray-900 font-medium  mb-2">
                  Follow us
                </div>
                <ul className="flex gap-4 items-center">
                  <li className="my-2">
                    <img src={FT_META} alt="FT_META" />
                  </li>
                  <li className="my-2">
                    <img src={FT_X} alt="FT_X" />
                  </li>
                  <li className="my-2">
                    <img src={FT_YT} alt="FT_YT" />
                  </li>
                  <li className="my-2">
                    <img src={FT_IG} alt="FT_IG" />
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-xl max-sm:text-base text-gray-900 font-medium  mb-2">
                  We accept
                </div>
                <ul className="flex gap-4 items-center">
                  <li className="my-2">
                    <img src={FT_VISA} alt="FT_VISA" />
                  </li>
                  <li className="my-2">
                    <img src={FT_MASTER} alt="FT_MASTER" />
                  </li>
                  <li className="my-2">
                    <img src={FT_A_PAY} alt="FT_A_PAY" />
                  </li>
                  <li className="my-2">
                    <img src={FT_DIS} alt="FT_DIS" />
                  </li>
                  <li className="my-2">
                    <img src={FT_PTM} alt="FT_PTM" />
                  </li>
                  <li className="my-2">
                    <img src={FT_UPI} alt="FT_UPI" />
                  </li>
                </ul>
              </div>
            </div>
          </div>


          </div>
    
        </div>
        <div className='my-2 lg:my-6'>
        <hr className="border-[#D9D9D9] sm:mx-auto py-4 max-sm:py-1" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-4 text-sm">
            <span>© 2024 Ubuntue. All Rights Reserved</span>
            <div className='flex justify-center gap-3'>
        
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            </div>
          </div>
          </div>
        </div>
      </div>
   

  
  )
}

export default FooterContact 