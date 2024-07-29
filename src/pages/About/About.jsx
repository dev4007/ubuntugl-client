import React from 'react';
import Leaders_Img from '../../assets/Leaders/Leaders_Img.svg';
import LinkDin from '../../assets/Leaders/LinkDin.svg';
import Insta from '../../assets/Leaders/Insta.svg';
import Meta from '../../assets/Leaders/Meta.svg';
import X from '../../assets/Leaders/X.svg';
import AllFeatures from '../../components/home/abandoned-items/AllFeatures';
import AboutSwiper from '../../components/swiper/AboutSwiper';


function About() {
    return (
        <>

            <div className='xl:px-40 2xl:pt-20 pt-7'>
                <div className='flex flex-col xl:flex-row gap-4'>
                    <div className='bg-[#D9D9D9] h-96 flex-1 lg:min-w-[25%]'>
                        {/* Content for section 1 */}
                        {/* 1 */}
                    </div>
                    <div className='flex flex-col gap-4 flex-1 lg:min-w-[32%] py-2'>
                        <div className='bg-[#D9D9D9] h-44'>
                            {/* Content for section 2.1 */}
                            {/* 2.1 */}
                        </div>
                        <div className='bg-[#D9D9D9] h-44'>
                            {/* Content for section 2.2 */}
                            {/* 2.2 */}
                        </div>
                    </div>
                    <div className='bg-[#D9D9D9] h-96 flex-1 lg:min-w-[40%]'>
                        {/* Content for section 3 */}
                        {/* 3 */}
                    </div>
                </div>
            </div>

            <div className='xl:px-72 2xl:pt-7 pt-4'>

                <div>
                    <h2 className='font-medium pb-3 xl:text-3xl text-2xl'>

                        About Us
                    </h2>
                    <div className='bg-white text-[#041E42] p-7 rounded-lg'>
                        <h4 className='font-medium xl:pb-7 pb-3 xl:text-xl text-sm'>Since 1985, we’re creating the awesome products & promise to give high quality in the eCommerce market for all our customers residing any part of the world.</h4>
                        <p className='xl:text-base text-xs xl:mt-2 mt-1'>Ut enim nunc, luctus vel nulla id, lacinia ultrices libero. Maecenas quis interdum nibh. Suspendisse purus nibh, vestibulum porttitor orci et, egestas maximus ligula. Proin pharetra convallis est, ut aliquam nisl consequat cursus. Donec ut finibus dui. felis urna, feugiat ac auctor in, euismod ut sapien. Cras nulla felis, faucibus sit amet aliquet a, vestibulum vitae turpis. Sed a interdum lectus, in varius purus. Cras maximus nulla in felis semper hendrerit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className='lg:flex gap-4 my-7'>

                    <div className='mt-3'>
                        <h2 className='font-medium pb-3 xl:text-xl text-lg'>

                            Our Mission
                        </h2>
                        <div className='bg-white text-[#041E42] p-7 rounded-lg'>
                            <p className='xl:text-base text-xs xl:mt-2 mt-1'>Ut enim nunc, luctus vel nulla id, lacinia ultrices libero. Maecenas quis interdum nibh. Suspendisse purus nibh, vestibulum porttitor orci et, egestas maximus ligula. Proin pharetra convallis est, ut aliquam nisl consequat cursus. Donec ut finibus dui. felis urna, feugiat ac auctor in, euismod ut sapien. Cras nulla felis, faucibus sit amet aliquet a, vestibulum vitae turpis. Sed a interdum lectus, in varius purus. Cras maximus nulla in felis semper hendrerit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h2 className='font-medium pb-3 xl:text-xl text-lg'>

                            Our Vision
                        </h2>
                        <div className='bg-white text-[#041E42] p-7 rounded-lg'>
                            <p className='xl:text-base text-xs xl:mt-2 mt-1'>Ut enim nunc, luctus vel nulla id, lacinia ultrices libero. Maecenas quis interdum nibh. Suspendisse purus nibh, vestibulum porttitor orci et, egestas maximus ligula. Proin pharetra convallis est, ut aliquam nisl consequat cursus. Donec ut finibus dui. felis urna, feugiat ac auctor in, euismod ut sapien. Cras nulla felis, faucibus sit amet aliquet a, vestibulum vitae turpis. Sed a interdum lectus, in varius purus. Cras maximus nulla in felis semper hendrerit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                    </div>
                </div>

                <div className='border-y-2 border-[#D9D9D9]'>
                    <div className='py-3'>
                        <h2 className='xl:my-2 my-1 xl:text-3xl text-xl font-medium'>Our Accomplishments So Far</h2>
                        <div className='flex flex-nowrap overflow-x-auto justify-around xl:gap-12 gap-20 xl:py-4 py-2'>
                            <div className='flex text-center flex-col w-full'>
                                <h1 className='text-5xl font-medium py-2'>120+</h1>
                                <h3 className='whitespace-nowrap xl:mt-3'>

                                    Stores around the world
                                </h3>
                            </div>
                            <div className='flex text-center flex-col w-full'>
                                <h1 className='text-5xl font-medium py-2'>15M</h1>
                                <h3 className='whitespace-nowrap xl:mt-3'>

                                    Products sold till date
                                </h3>
                            </div>
                            <div className='flex text-center flex-col w-full'>
                                <h1 className='text-5xl font-medium py-2'>200K</h1>
                                <h3 className='whitespace-nowrap xl:mt-3'>

                                    Registered users
                                </h3>
                            </div>
                            <div className='flex text-center flex-col w-full'>
                                <h1 className='text-5xl font-medium py-2'>300</h1>
                                <h3 className='whitespace-nowrap xl:mt-3'>

                                    Brands available in store
                                </h3>
                            </div>
                            <div className='flex text-center flex-col w-full'>
                                <h1 className='text-5xl font-medium py-2'>₹2.5Cr</h1>
                                <h3 className='whitespace-nowrap xl:mt-3'>

                                    Given by Memberships
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-5'>
                    <h2 className='text-3xl font-medium py-3'>Meet Our Leaders</h2>

                    <div className='border-[#D9D9D9] border-b-2'>

                        <ul className='flex items-center justify-around flex-nowrap overflow-x-auto xl:gap-12 gap-20 xl:py-4 py-2'>
                            {['John Oliver', 'John Oliver', 'John Oliver', 'John Oliver'].map((name, index) => (
                                <li key={index} className="relative flex flex-col items-start min-w-[200px]">
                                    <div className="relative overflow-hidden">
                                        <img alt='Leaders' src={Leaders_Img} className='w-full h-full object-cover' />
                                        <div className="absolute inset-0 bg-[#557DE4] opacity-0 hover:opacity-80 transition duration-500 ease-in-out flex items-center justify-center">
                                            <div className="flex gap-4">
                                                <img alt='Meta' src={Meta} className='' />
                                                <img alt='X' src={X} className='' />
                                                <img alt='Instagram' src={Insta} className='' />
                                                <img alt='LinkedIn' src={LinkDin} className='' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-3 text-start'>
                                        <h4 className='xl:text-2xl text-lg font-medium'>{name}</h4>
                                        <p className='xl:text-lg text-sm font-medium text-gray-600'>CEO</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className='py-5'>
                    <div className='border-[#D9D9D9] border-b-2'>

                        <div className='flex lg:flex-row flex-col gap-10 items-start justify-between pb-12'>
                            <div className='max-w-[500px] font-medium text-3xl leading-[40.46px] font-jost'>
                                <h2>
                                    In in mattis erat, eu mattis libero. Donec volutpat faucibus elit cursus interdum
                                </h2>
                            </div>

                            <div>
                                <div className='max-w-[578px]'>
                                    <p className='font-normal text-base leading-[28px] font-jost py-0'>
                                        Nullam accumsan nulla in arcu condimentum imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur lacinia purus vitae lorem porttitor fermentum. In in mattis erat, eu mattis libero.
                                    </p>
                                    <p className='font-normal text-base leading-[28px] font-jost py-6'>
                                        Sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur lacinia purus vitae lorem porttitor fermentum. In in mattis erat, eu mattis libero. Donec volutpat faucibus elit cursus interdum.
                                    </p>
                                </div>
                                <button className='bg-yellow-color rounded-2xl font-medium text-xl px-9 py-3 mt-3 lg:w-auto md:w-1/2 w-full'>Shop Now</button>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="xl:py-5 py-3">
                <h2 className="xl:text-3xl text-2xl font-medium xl:mb-14 mb-5">What People Say</h2>
                    <AboutSwiper />
                </div>
            </div>
            <AllFeatures />
        </>
    );
}

export default About;
