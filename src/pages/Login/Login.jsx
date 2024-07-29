import React, { useState } from 'react'
import AllFeatures from '../../components/home/abandoned-items/AllFeatures'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className='flex md:flex-row flex-col gap-4 mt-7 text-[#041E42] '>
                <div className='bg-white lg:w-[67%] md:w-1/2 w-full flex items-center justify-center text-2xl font-semibold'>ad banner</div>
                <div className='bg-white lg:w-[33%] md:w-1/2 w-full p-5'>

                    <h2 className='text-2xl font-semibold pb-7'>
                        Sign-In
                    </h2>
                    <div >
                        <div className="grid grid-cols-1 gap-6 mb-6">
                            <div>
                                <label className="block mb-3">Username or email address</label>
                                <input type="text" className="w-full p-2 border rounded" placeholder='rajeshsmith@gmail.com' />
                            </div>
                            <div className="relative">
                                <label className="block text-gray-700 mb-3">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full p-2 border rounded pr-10"
                                    placeholder='Enter your password'
                                />
                                <span
                                    className="absolute right-4 top-[72%] transform -translate-y-1/2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <div className='flex md:flex-row flex-col gap-5 justify-between pb-5'>
                            <div className='flex gap-2'>
                                <input type='checkbox' />
                                <a>Remember me</a>
                            </div>
                            <div>
                                <a href='#' className='text-primary'>Forgot your password?</a>
                            </div>
                        </div>

                        <button className="bg-[#FCC626] rounded-2xl font-medium text-lg px-5 py-2 mt-3 text-black w-full">Login</button>

                        <div className='text-center mt-7'>
                            <p>Don't have an account? <a>Create account</a></p>
                        </div>
                    </div>

                </div>
            </div>
            <AllFeatures />
        </>
    )
}

export default Login