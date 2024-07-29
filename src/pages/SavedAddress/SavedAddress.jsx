import React from 'react';
import MemberSideBar from '../../components/SideBar/MemberSideBar';

function SavedAddress() {


    return (
        <div className='2xl:px-40 2xl:pt-20 pt-7'>
            <h2 className="text-3xl font-medium mb-4">Member’s Dashboard</h2>
            {/* <div className="flex h-screen"> */}
            <div className="lg:flex">
                {/* Sidebar */}
                <MemberSideBar/>
                {/* Main Content */}
                <div className="flex-1 2xl:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-md min-h-[72vh]">
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
