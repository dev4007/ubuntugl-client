import React from 'react'
import Bel from "../../assets/Settings/Bel.svg";
import checked_box from "../../assets/Settings/checked_box.svg";
import Heart from "../../assets/Settings/Heart.svg";
import LogOut from "../../assets/Settings/LogOut.svg";
import Map from "../../assets/Settings/Map.svg";
import User from "../../assets/Settings/User.svg";
import Volet from "../../assets/Settings/Volet.svg";

function SideBar() {
  return (
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
  )
}

export default SideBar