import { useState } from "react";
import Cart_Img from "../../assets/Cart/cart.svg";
import { MdOutlineCheck } from "react-icons/md";

function CheckOut() {
  const [selectedOption, setSelectedOption] = useState("wallet");

  return (
    <div className="">
      <div className='2xl:px-40 2xl:pt-20 pt-7'>
        <div className="flex flex-col 2xl:flex-row justify-between">
          <div className="w-full 2xl:w-3/5 overflow-x-auto">
            <h1 className="text-2xl 2xl:text-3xl font-medium mb-6">Checkout</h1>
            {/* First */}
            <div className="relative overflow-x-auto rounded-t-lg shadow-md sm:rounded-lg pb-10">
              <div className="bg-blue-500 text-white py-4 px-3 text-xl font-semibold flex items-center">
                <span className="text-2xl bg-white text-blue-500 rounded-full w-9 h-9 flex items-center justify-center mr-4">
                  1
                </span>
                <span className="text-2xl">Log In or Sign Up</span>
              </div>
              <div className="bg-white p-5 space-y-4 rounded-b-lg">
                <div className="2xl:w-1/2 w-full">
                  <div className="my-4">
                    <label
                      className="block text-gray-700 2xl:text-2xl text-xl mb-2 font-semibold"
                      htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value="rajeshsmith502@gmail.com"
                    />
                  </div>
                  <div className="my-4">
                    <label
                      className="block text-gray-700 2xl:text-2xl text-xl mb-2 font-semibold"
                      htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value="***********"
                    />
                  </div>
                  <div className="my-5">
                    <p className="text-gray-700 text-lg my-4">
                      Don’t have an account?{" "}
                      <span className="font-bold text-blue-500">Sign Up</span>
                    </p>
                    <button className="bg-yellow-color 2xl:w-3/4 w-full rounded-lg py-2 2xl:text-2xl text-xl font-medium">
                      Log In{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Second */}
            <div className="relative overflow-x-auto rounded-lg shadow-md sm:rounded-lg pb-10">
              <div className="bg-blue-500 text-white py-4 px-3 text-xl font-semibold flex items-center">
                <span className="text-2xl bg-white text-blue-500 rounded-full w-9 h-9 flex items-center justify-center mr-4">
                  2
                </span>
                <span className="text-2xl">Delivery Address</span>
              </div>
              <div className="bg-white p-5 space-y-4 rounded-b-lg">
                <div className="rounded-lg border-blue-500 border-2 w-full">
                  <div className="m-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="pb-3">
                          <button className="border py-1 px-2 text-sm border-slate-400">
                            Home
                          </button>
                        </div>
                        <div>
                          <div className="flex justify-between 2xl:w-1/2 w-full py-1">
                            <div>Raj Smith</div>
                            <div>+91 8752565891</div>
                          </div>

                          <div className="flex justify-between items-center py-2">
                            <div>
                              <div>
                                Symbiosis Kopou Boys Hostel, New, Symbiosis Rd,
                                Mhada Colony,
                              </div>
                              <div>Viman Nagar, Pune, Maharashtra-411014</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <MdOutlineCheck className="text-4xl p-1 bg-blue-500 text-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border-slate-200 border-2 w-full">
                  <div className="m-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="pb-3">
                          <button className="border py-1 px-2 text-sm border-slate-400">
                            Work
                          </button>
                        </div>
                        <div>
                          <div className="flex justify-between 2xl:w-1/2 w-full py-1">
                            <div>Raj Smith</div>
                            <div>+91 8752565891</div>
                          </div>

                          <div className="flex justify-between items-center py-2">
                            <div>
                              <div>
                                Symbiosis Kopou Boys Hostel, New, Symbiosis Rd,
                                Mhada Colony,
                              </div>
                              <div>Viman Nagar, Pune, Maharashtra-411014</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        {/* <MdOutlineCheck className="text-4xl p-1 bg-blue-500 text-white rounded-full" /> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" w-full">
                  <div className="">
                    <div className="2xl:flex justify-between items-center 2xl:w-3/4 gap-7">
                      <div className="flex justify-between 2xl:w-1/2 w-full py-1">
                        <button className="bg-yellow-color  w-full rounded-lg py-2 text-xl">
                          Confirm Address{" "}
                        </button>
                      </div>

                      <div className="flex justify-between items-center 2xl:w-1/2 w-full py-2">
                        <button className="bg-white border border-black  w-full rounded-lg py-2 text-xl">
                          Add New Address{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third */}
            <div className="relative overflow-x-auto rounded-lg shadow-md sm:rounded-lg pb-10">
              <div className="bg-blue-500 text-white py-4 px-3 text-xl font-semibold flex items-center">
                <span className="text-2xl bg-white text-blue-500 rounded-full w-9 h-9 flex items-center justify-center mr-4">
                  3
                </span>
                <span className="text-2xl">Payment Options</span>
              </div>
              <div className="bg-white p-5 space-y-4 rounded-b-lg">
                <div className="w-full">
                  <div className="flex items-start">
                    <input
                      type="radio"
                      name="payment"
                      id="wallet"
                      className="mt-1 mr-2 h-6 w-6"
                      checked={selectedOption === "wallet"}
                      onChange={() => setSelectedOption("wallet")}
                    />
                    <label htmlFor="wallet" className="w-full">
                      <div className=" px-4">
                        <div className="font-semibold text-lg mb-2">
                          Your Wallet
                        </div>
                        <div className="text-sm mb-1">
                          Available Balance: ₹2,500
                        </div>
                        <div className="text-sm text-red-600 mb-3">
                          Insufficient Balance. Please recharge wallet to pay
                          remaining amount: ₹70,000
                        </div>
                        <button className="border border-gray-400 py-1 px-2 text-sm">
                          Recharge Wallet
                        </button>
                      </div>
                    </label>
                  </div>
                </div>
                <hr className="py-2"/>
                <div className="w-full">
                  <div className="flex items-start">
                    <input
                      type="radio"
                      name="payment"
                      id="gateway"
                      className="mt-1 mr-2  h-6 w-6"
                      checked={selectedOption === "gateway"}
                      onChange={() => setSelectedOption("gateway")}
                    />
                    <label htmlFor="gateway" className="w-full">
                      <div className=" px-4">
                        <div className="font-semibold text-lg mb-2">
                          Payment Gateway (Credit/Debit Card or UPI)
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <button className="bg-yellow-color 2xl:w-2/6 w-full rounded-lg py-2 text-xl mt-4">
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>

          <div className="w-full 2xl:w-2/5 mt-6 2xl:mt-0 mb-7">
            <h2 className="text-2xl 2xl:text-3xl font-medium mb-6 2xl:ml-6">
              Your Order
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md 2xl:ml-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="2xl:flex items-center justify-between ">
                    <img
                      src={Cart_Img}
                      alt="Product"
                      className="object-contain mr-5"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm 2xl:text-base">
                        Apple MacBook Pro with
                      </span>
                      <span className="text-sm 2xl:text-base">
                        {" "}
                        Apple M1 Chip x 2
                      </span>
                    </div>
                  </div>

                  <div className="text-sm 2xl:text-base">₹72,500</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="2xl:flex items-center justify-between ">
                    <img
                      src={Cart_Img}
                      alt="Product"
                      className="object-contain mr-5"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm 2xl:text-base">
                        Apple MacBook Pro with
                      </span>
                      <span className="text-sm 2xl:text-base">
                        {" "}
                        Apple M1 Chip x 2
                      </span>
                    </div>
                  </div>

                  <div className="text-sm 2xl:text-base">₹72,500</div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <span className="text-sm 2xl:text-base">Sub Total</span>
                  <span className="text-sm 2xl:text-base">₹72,500</span>
                </div>
                <hr />
                <div className="flex justify-between">
                  <span className="text-sm 2xl:text-base">Shipping</span>
                  <span className="text-sm 2xl:text-base">₹50</span>
                </div>
                <hr />
                <label className="block text-gray-700 text-sm mb-2 font-semibold">
                  Add Discount Code (optional)
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value=""
                />
              </div>
              <hr className="mt-9 mb-3" />
              <div className="flex justify-between ">
                <span className="text-sm 2xl:text-base">Total</span>
                <span className="text-sm 2xl:text-base font-semibold">
                  ₹72,500
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
