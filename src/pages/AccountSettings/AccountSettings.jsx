import React, { useState } from 'react';
import Check from "../../assets/Settings/Check.svg";
import Crose from "../../assets/Settings/Crose.svg";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import MemberSideBar from '../../components/SideBar/MemberSideBar';

function AccountSettings() {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className='2xl:px-40 2xl:pt-20 pt-7'>
            <h2 className="text-3xl font-medium mb-8">Member’s Dashboard</h2>
            <div className="lg:flex">
                {/* Sidebar */}
               <MemberSideBar/>
                {/* Main Content */}
                <div className="flex-1 lg:pl-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex gap-10 items-center mb-6">
                            <h2 className="text-lg font-medium">Personal Information</h2>
                            <button className="text-blue-500">Edit</button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-gray-700">First Name</label>
                                <input type="text" className="w-full p-2 border rounded" defaultValue="Raj" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Last Name</label>
                                <input type="text" className="w-full p-2 border rounded" defaultValue="Smith" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input type="email" className="w-full p-2 border rounded" defaultValue="rajsmith20@gmail.com" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone Number</label>
                                <input type="text" className="w-full p-2 border rounded" defaultValue="+91 7245869852" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Gender</label>
                                <input type="text" className="w-full p-2 border rounded" defaultValue="Male" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Date of Birth (dd/mm/yyyy)</label>
                                <input type="text" className="w-full p-2 border rounded" defaultValue="22/04/2004" />
                            </div>
                        </div>
                        <div className="flex gap-10 items-center mb-6">
                            <h2 className="text-lg font-medium">Password</h2>
                            <button className="text-blue-500">Edit</button>
                        </div>


                        <div className='lg:flex gap-10 items-end'>

                        <div className='w-full'>
                            <div className="grid grid-cols-1 gap-6 mb-6">
                                <div className="relative">
                                    <label className="block text-gray-700">Current Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="w-full p-2 border rounded pr-10"
                                        defaultValue="************"
                                    />
                                    <span
                                        className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <div className="relative">
                                    <label className="block text-gray-700">New Password</label>
                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        className="w-full p-2 border rounded pr-10"
                                        defaultValue="************"
                                    />
                                    <span
                                        className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                    >
                                        {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <div className="relative">
                                    <label className="block text-gray-700">Confirm New Password</label>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="w-full p-2 border rounded pr-10"
                                        defaultValue="************"
                                    />
                                    <span
                                        className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='w-full items-end'>
                        <ul className="list-disc lg:pl-5 mb-6">
                            <li className="flex items-center mb-2">
                                <img src={Crose} alt="Crose" className="object-contain mr-2" />
                                <span>Password length should be 8-20 characters.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <img src={Check} alt="Check" className="object-contain mr-2" />
                                <span>Password must start with an alphabet. [a-z or A-Z]</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <img src={Crose} alt="Crose" className="object-contain mr-2" />
                                <span>Password must contain numbers. [0-9]</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <img src={Check} alt="Check" className="object-contain mr-2" />
                                <span>Password should contain a special character. [except ( `  )]</span>
                            </li><li className="flex items-center mb-2">
                                <img src={Check} alt="Check" className="object-contain mr-2" />
                                <span>Password should not match the previous 5 passwords used.</span>
                            </li>
                        </ul>
                        </div>
                        </div>
                        
                        <div className="lg:flex ">
                            <button className="bg-btn-yellow text-black px-4 py-2 rounded mr-4 lg:w-2/12 w-full">Update</button>
                            <button className=" px-4 py-2 rounded lg:w-2/12 w-full lg:mt-0 mt-3">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;
