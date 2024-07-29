import React, { useState } from 'react';
import MemberSideBar from '../../components/SideBar/MemberSideBar';
import { notifications as NotificationsData } from "./NotificationsData";

function Notifications() {
    const [expandedId, setExpandedId] = useState(null);

    const handleToggle = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className='2xl:px-40 2xl:pt-20 pt-7'>
            <h2 className="text-3xl font-medium mb-4">Member’s Dashboard</h2>
            <div className="lg:flex">
                {/* Sidebar */}
                <MemberSideBar />
                {/* Main Content */}
                <div className="flex-1 2xl:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-md min-h-[72vh]">
                        <div className="relative overflow-x-auto sm:rounded-lg pb-10">
                            <div className="pb-4 px-3 text-xl font-semibold flex items-center">
                                <span className="text-lg">Your Notifications</span>
                            </div>
                            <div className="bg-white p-5 space-y-4 relative overflow-x-auto max-h-[58vh] custom-scrollbar">
                                {NotificationsData.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className="border-b-2 border-slate-200 w-full"
                                    >
                                        <div className="m-4 flex items-start space-x-4">
                                            <div className='bg-gray-300 xl:h-28 h-12 xl:w-28 w-12 rounded-full flex-shrink-0 '></div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold">{notification.title}</h3>
                                                <p className="text-sm text-gray-600">
                                                    {expandedId === notification.id
                                                        ? notification.message
                                                        : `${notification.message.slice(0, 211)}...`}
                                                </p>
                                                <button
                                                    onClick={() => handleToggle(notification.id)}
                                                    className="text-blue-500 text-sm mt-1"
                                                >
                                                    {expandedId === notification.id ? 'Show Less' : 'Learn More'}
                                                </button>
                                            </div>
                                            <div className='text-sm text-gray-500'>{notification.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;
