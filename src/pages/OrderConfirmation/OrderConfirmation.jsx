import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineCheck } from "react-icons/md";

function OrderConfirmation() {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center w-full md:p-10">
      <div className="bg-gray-300 w-full md:w-1/4 h-auto flex items-center justify-center mb-4 md:mb-0">
        ad
      </div>
      <div className="bg-white w-full max-w-4xl p-4 md:p-10">
        <div className="flex flex-col items-center justify-center mb-8">
          <MdOutlineCheck className="text-6xl p-2 bg-blue-500 text-white rounded-full mb-4" />
          <div className="lg:text-2xl text-xl font-medium mb-2">Your order is completed!</div>
          <div className="text-gray-600 mb-4 text-sm">
            Thank you. Your order has been received.
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <span>Share:</span>
            <FaFacebookF className="text-sky-950" />
            <FaTwitter className="text-sky-950" />
            <FaInstagram className="text-sky-950" />
            <FaLinkedinIn className="text-sky-950" />
          </div>
        </div>

        <div className="border-t border-gray-300 pt-5 mb-8">
          <div className="lg:flex items-center justify-center lg:gap-20 border-dashed border-2 p-3 border-slate-500">
            <div className="text-gray-700 lg:mb-0 mb-5">
              <div className="font-bold">Order Number</div>
              <div>039422</div>
            </div>
            <div className="text-gray-700 lg:mb-0 mb-5">
              <div className="font-bold">Date</div>
              <div>27/04/2022</div>
            </div>
            <div className="text-gray-700 lg:mb-0 mb-5">
              <div className="font-bold">Total</div>
              <div>$2984.10</div>
            </div>
            <div className="text-gray-700 lg:mb-0 mb-5">
              <div className="font-bold">Payment Method</div>
              <div>UPI - Google Pay</div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-5 mt-4">
            <div className="font-bold text-lg mb-3">Order Details</div>
            <div className="mb-3">
              <div className="flex justify-between">
                <div>Apple MacBook Pro with Apple M1 Chip x 2</div>
                <div>₹72,500</div>
              </div>
              <div className="flex justify-between">
                <div>Apple MacBook Pro with Apple M1 Chip x 2</div>
                <div>₹72,500</div>
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div>Sub Total</div>
              <div>₹72,500</div>
            </div>
            <div className="flex justify-between mb-3">
              <div>Shipping</div>
              <div>Free shipping</div>
            </div>
            <div className="flex justify-between mb-3">
              <div>VAT</div>
              <div>₹50</div>
            </div>
            <div className="flex justify-between mb-3">
              <div>Payment Method</div>
              <div>UPI - Google Pay</div>
            </div>
            <div className="flex justify-between font-bold">
              <div>Total</div>
              <div>₹72,500</div>
            </div>
          </div>
        </div>

        <div className="lg:flex items-center justify-center gap-6 lg:mx-32">
          <button className="bg-white text-black border border-black px-5 py-2 rounded-lg w-full">
            Download Invoice
          </button>
          <button className="bg-white text-black border border-black px-5 py-2 rounded-lg mt-5 lg:mt-0 w-full">
            Download E-Warranty Card
          </button>
        </div>
      </div>
      <div className="bg-gray-300 w-full md:w-1/4 h-auto flex items-center justify-center mt-4 md:mt-0">
        ad
      </div>
    </div>
  );
}

export default OrderConfirmation;
