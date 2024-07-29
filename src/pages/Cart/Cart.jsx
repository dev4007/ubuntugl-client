import React from "react";
import { cards as Cart_Data } from "./CartData.jsx";
import { MdOutlineClose } from "react-icons/md";
import { LuMinus, LuPlus } from "react-icons/lu";
import FrequentlyCart from "../../components/Cart/Post/FrequentlyCart/FrequentlyCart.jsx";

function Cart() {
  return (
    <div className='2xl:pt-20 pt-7'>
      <div className="">
        <div className="flex flex-col 2xl:flex-row justify-between">
          <div className="w-full 2xl:w-3/4 overflow-x-auto">
            <h1 className="text-2xl 2xl:text-3xl font-medium mb-6">
              Shopping Cart
            </h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left bg-white rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-100 border-b uppercase">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 2xl:block flex 2xl:mx-0 mx-16"
                      style={{ width: "32%", minWidth: "100%" }}>
                      PRODUCT <span className="2xl:hidden block">&nbsp;</span>
                    </th>
                    <th scope="col" className="px-6 py-3 2xl:mx-0 mx-16">
                      <div className="2xl:block flex">
                        PRICE{" "}
                        <span className="2xl:hidden block">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      QUANTITY
                    </th>
                    <th scope="col" className="px-6 py-3">
                      TOTAL
                    </th>
                    <th scope="col" className="px-6 py-3">
                      REMOVE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Cart_Data.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td
                        className="px-6 py-4"
                        style={{ width: "32%", minWidth: "100%" }}>
                        <div className="2xl:flex">
                          <img
                            src={item.image}
                            alt="Product"
                            className="object-contain"
                          />
                          <div className="2xl:ml-4 mt-4 2xl:mt-0">
                            <div className="font-semibold text-sm 2xl:text-base">
                              {item.product_name}
                            </div>
                            <div className="text-xs 2xl:text-sm text-gray-600 2xl:max-w-[55%] w-full">
                              {item.product_details}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xl font-semibold text-black">
                          {item.price}
                          <label className="flex items-center text-gray-800 mt-2">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-xs 2xl:text-sm">
                              Apply {item.discount} Coupon
                            </span>
                          </label>
                        </div>
                      </td>
                      <td className="p-4 ">
                        <div className="flex">
                          <button className="p-3  bg-slate-100  rounded-l-lg">
                            <LuMinus />
                          </button>
                          <input
                            type="text"
                            value="1"
                            className="w-10 text-center text-black font-bold text-lg  bg-slate-100 "
                          />
                          <button className="p-3  bg-slate-100 text-black rounded-r-lg">
                            <LuPlus />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-2xl font-semibold text-black">
                        {item.total}
                      </td>
                      <td className="p-4 text-center">
                        <button className="bg-slate-200 text-gray-600 rounded-full p-3 text-2xl">
                          <MdOutlineClose />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full 2xl:w-1/4 mt-6 2xl:mt-0">
            <h2 className="text-2xl 2xl:text-3xl font-medium mb-6 2xl:ml-6">
              Cart Total
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md 2xl:ml-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm 2xl:text-base">Product Subtotal</span>
                  <span className="text-sm 2xl:text-base">₹72,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm 2xl:text-base">Order Discounts</span>
                  <span className="text-sm 2xl:text-base">-₹2,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm 2xl:text-base">
                    Estimated Shipping
                  </span>
                  <span className="text-sm 2xl:text-base">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm 2xl:text-base">Estimated Taxes</span>
                  <span className="text-sm 2xl:text-base">₹2,500</span>
                </div>
                <div className="flex justify-between font-bold text-sm 2xl:text-lg">
                  <span>Total</span>
                  <span>₹72,500</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-yellow-color text-white py-3 rounded-lg shadow-md hover:bg-yellow-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-400 my-6"> &nbsp;</div>
      <div className="py-3">
        <FrequentlyCart />
      </div>
    </div>
  );
}

export default Cart;
