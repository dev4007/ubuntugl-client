import React, { useState } from 'react';
import Bel from "../../assets/Settings/Bel.svg";
import checked_box from "../../assets/Settings/checked_box.svg";
import Heart from "../../assets/Settings/Heart.svg";
import LogOut from "../../assets/Settings/LogOut.svg";
import Map from "../../assets/Settings/Map.svg";
import User from "../../assets/Settings/User.svg";
import Volet from "../../assets/Settings/Volet.svg";
import OrderStar from "../../assets/Settings/order_star.svg";
import { orsers as Order_Data } from "./OrderData.jsx";
import circle from "../../assets/Logo/circle.png";

// Rating Component
const Rating = ({ rating }) => {
    const generateStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <img
                    key={i}
                    src={OrderStar}
                    alt="Star"
                    // className={`object-contain h-3 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    className={`object-contain h-3 ${i < rating ? 'opacity-100' : 'opacity-30'}`} // Use opacity instead of color classes
                // style={{ width: '20px', height: '20px' }} // Adjust size as needed
                />
            );
        }
        return stars;
    };

    return <div className="flex gap-1">{generateStars(rating)}</div>;
};

function Order() {


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
                        
                        <div className='flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 pb-4 rounded-md'>
                            <h2 className="text-lg font-medium mb-4 lg:mb-0">Order History</h2>

                            <div className='flex-1 flex items-center mb-4 lg:mb-0'>
                                <input
                                    type="text"
                                    placeholder="Search for your order"
                                    className="flex-grow px-4 py-2 border rounded-l-md bg-gray-100 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-full"
                                />
                                <button className="bg-primary h-full rounded-r-md">
                                    <img src={circle} className="lg:p-[0.8rem] p-2 py-[0.85rem] px-2" alt="Brand Logo" />
                                </button>
                            </div>

                            <div className='lg:flex items-center space-x-2'>
                                <div className='relative'>
                                    <button className='px-4 py-3 bg-gray-200 rounded-md w-full text-sm'>
                                        Order Time: <span className='text-primary'>Last 30 Days</span>
                                    </button>
                                </div>

                                <div className='relative'>
                                    <button className='px-4 py-3 bg-gray-200 rounded-md mt-3 lg:mt-0 w-full text-sm'>
                                        Order Status: <span className='text-primary'>All</span>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left bg-white rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="bg-gray-100 border-b uppercase">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 2xl:block flex 2xl:mx-0 mx-16"
                                        // style={{ width: "32%", minWidth: "100%" }}
                                        >
                                            Product <span className="2xl:hidden block">&nbsp;</span>
                                        </th>
                                        <th scope="col" className="px-6 py-3 2xl:mx-0 mx-16">
                                            <div className="2xl:block flex">
                                                Date{" "}
                                                <span className="2xl:hidden block">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Payment
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Total
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Order_Data.map((item) => (
                                        <tr key={item.id} className="border-b">
                                            <td
                                                className="px-6 py-4"
                                            // style={{ width: "32%", minWidth: "100%" }}
                                            >
                                                <div className="2xl:flex">
                                                    <img
                                                        src={item.image}
                                                        alt="Product"
                                                        className="object-contain"
                                                    />
                                                    <div className="2xl:ml-4 mt-4 2xl:mt-0">

                                                        <div className="text-xs 2xl:text-sm text-gray-600 2xl:max-w-[85%] w-full">
                                                            {item.product_details}
                                                        </div>
                                                        <div className="text-xs 2xl:text-sm flex items-center w-full gap-3 py-2">
                                                            <Rating rating={item.rating} />
                                                            <span>
                                                                {item.reviews} reviews
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 whitespace-nowrap">
                                                <div className=" text-black">
                                                    {item.date}
                                                </div>
                                            </td>
                                            <td className="p-4 text-center">
                                                <div className=" text-black">
                                                    {item.payment}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-xs text-black whitespace-nowrap">
                                                <button
                                                    className={`px-7 py-3 ${item.status === 'Delivered' ? 'bg-order-btn-green' :
                                                        item.status === 'Cancelled' ? 'bg-order-btn-red' :
                                                            item.status === 'On the Way' ? 'bg-order-btn-yellow' : ''
                                                        }`}
                                                >
                                                    {item.status}
                                                </button>
                                            </td>

                                            <td className="p-4 text-center">
                                                <div className=" text-black">
                                                    {item.total}
                                                </div>
                                            </td>
                                            <td className="p-4 text-center">
                                                <div className=" text-black whitespace-nowrap text-sm">
                                                    {/* {item.payment} */}
                                                    <a href='#' className='underline text-primary'>View Details</a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
