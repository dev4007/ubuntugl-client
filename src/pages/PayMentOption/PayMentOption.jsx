import React from 'react';
import MemberSideBar from '../../components/SideBar/MemberSideBar';

function PayMentOption() {


    return (
        <div className='2xl:px-40 2xl:pt-20 pt-7'>
            <h2 className="xl:text-3xl text-xl font-medium mb-4">Member’s Dashboard</h2>
            {/* <div className="flex h-screen"> */}
            <div className="lg:flex">
                {/* Sidebar */}
                <MemberSideBar />
                {/* Main Content */}
                <div className="flex-1 2xl:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="relative overflow-x-auto sm:rounded-lg lg:pb-10">
                            <span className="text-xl font-semibold pt-4">Your Wallet</span>
                            <h2 className="lg:text-5xl text-2xl font-medium text-[#041E42] pt-4">₹2,500</h2>

                            <p className='text-lg font-medium py-4'>Last Recharge on 22/06/2024. <span className='text-primary font-normal'>View Balance History</span></p>
                            <button className="bg-white border rounded-full border-black  py-2 px-7 text-sm ">
                                Recharge Wallet{" "}
                            </button>

                            <div className='border w-full mt-10'></div>

                            <h2 className='lg:text-2xl font-medium lg:pt-7 pt-4'>Fund Transfer</h2>
                            <p className='pt-2'>
                                <span className='text-progress'>Disclaimer:</span> Please note that fund transfer times may vary depending on the recipient's bank and country.</p>

                            <div className="bg-white space-x-4 rounded-b-lg pt-4">

                                <div className='xl:w-3/5'>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2 mb-6">
                                        <div>
                                            <label className="block text-gray-700 py-2">Member Id</label>
                                            <input type="text" className="w-full p-2 border rounded" defaultValue="#98542365" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 py-2">Username/Email Address</label>
                                            <input type="email" className="w-full p-2 border rounded" defaultValue="shyamsmith@gmail.com" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 py-2">Amount</label><div className='flex-1 flex items-center mb-4 lg:mb-0'>
                                                <input
                                                    type="text"
                                                    defaultValue="₹1,500"
                                                    className="flex-grow px-4 py-2 border rounded-l-md bg-gray-100 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-full"
                                                />
                                                <button className="bg-primary h-full rounded-r-md">
                                                    <p className='py-2 px-4 text-white'>Get&nbsp;Otp</p></button>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 py-2">One-Time-Password (OTP)</label>
                                            <input type="text" className="w-full p-2 border rounded" defaultValue="Enter OTP" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="lg:pb-12">

                            <button className="bg-yellow-color md:w-3/12 w-full rounded-2xl py-2 2xl:text-lg text-sm font-medium">                                Pay with Member Wallet{" "}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PayMentOption;
