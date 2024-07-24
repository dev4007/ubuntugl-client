import React, { useState } from 'react';
import Bel from "../../assets/Settings/Bel.svg";
import checked_box from "../../assets/Settings/checked_box.svg";
import Heart from "../../assets/Settings/Heart.svg";
import LogOut from "../../assets/Settings/LogOut.svg";
import Map from "../../assets/Settings/Map.svg";
import User from "../../assets/Settings/User.svg";
import Volet from "../../assets/Settings/Volet.svg";
// import { MdOutlineCheck } from "react-icons/md";

function SavedAddress() {


    return (
        <div className='2xl:px-40'>
            <h2 className="text-3xl font-medium mb-4">Member’s Dashboard</h2>
            {/* <div className="flex h-screen"> */}
            <div className="lg:flex">
                {/* Sidebar */}
                <div className="lg:w-1/5 bg-gray-100 p-4">
                    <nav className='xl:py-14 p-5 px-5 lg:mt-10'>
                        <ul>
                            <li className="mb-4 flex">
                                <img
                                    src={User}
                                    alt="User"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> Dashboard</span>
                            </li>
                            <li className="mb-4 flex">
                                <img
                                    src={User}
                                    alt="User"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> Account Settings</span>
                            </li>
                            <li className="mb-4 flex">
                                <img
                                    src={checked_box}
                                    alt="checked_box"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> Orders</span>
                            </li>
                            <li className="mb-4 flex">
                                <img
                                    src={Map}
                                    alt="Map"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> Saved Addresses</span>
                            </li>
                            <li className="mb-4 flex">
                                <img
                                    src={Heart}
                                    alt="Heart"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> Wishlist</span>
                            </li> <li className="mb-4 flex">
                                <img
                                    src={Volet}
                                    alt="Volet"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> Fund Transfer</span>
                            </li> <li className="mb-4 flex">
                                <img
                                    src={Bel}
                                    alt="Bel"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> Notification Inbox</span>
                            </li>
                            <li className="mb-4 flex">
                                <img
                                    src={LogOut}
                                    alt="LogOut"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> My Page</span>
                            </li><li className="mb-4 flex">
                                <img
                                    src={LogOut}
                                    alt="LogOut"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> Genealogy Details</span>
                            </li><li className="mb-4 flex">
                                <img
                                    src={LogOut}
                                    alt="LogOut"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> Customer Help Center</span>
                            </li><li className="mb-4 flex">
                                <img
                                    src={User}
                                    alt="User"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> Apply for Vendor</span>
                            </li><li className="mb-4 flex">
                                <img
                                    src={LogOut}
                                    alt="LogOut"
                                    className="object-contain mr-5"
                                />
                                <span className="ml-2"> Logout</span>
                            </li>
                            {/* <li className="mb-2">
                                <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                                    <span className="material-icons">logout</span>
                                    <span className="ml-2">Logout</span>
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                </div>
                {/* Main Content */}
                <div className="flex-1 2xl:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="relative overflow-x-auto sm:rounded-lg pb-10">
                            <div className="py-4 px-3 text-xl font-semibold flex items-center">

                                <span className="text-lg">Saved Addresses</span>
                            </div>
                            <div className="bg-white p-5 space-y-4 rounded-b-lg">
                                <div className="rounded-lg border-slate-200 border-2 w-full">
                                    <div className="m-4">
                                        <div className="flex justify-between items-start">
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

                                            <div className='gap-5 lg:flex'>
                                                <button className='text-primary'>Edit</button>
                                                <button className='text-progress'>Delete</button>
                                                {/* <MdOutlineCheck className="text-4xl p-1 bg-blue-500 text-white rounded-full" /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg border-slate-200 border-2 w-full">
                                    <div className="m-4">
                                        <div className="flex justify-between items-start">
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

                                            <div className='gap-5 lg:flex'>
                                                <button className='text-primary'>Edit</button>
                                                <button className='text-progress'>Delete</button>
                                                {/* <MdOutlineCheck className="text-4xl p-1 bg-blue-500 text-white rounded-full" /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className=" w-full">
                                    <div className="">
                                        <div className="flex justify-center items-center  gap-7">
                                            

                                            <div className="flex justify-between items-center py-2">
                                                <button className="bg-white border rounded-full border-black  py-2 px-7 text-sm">
                                                    Add New Address{" "}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavedAddress;
