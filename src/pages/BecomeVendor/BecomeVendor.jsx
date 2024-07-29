import React, { useEffect, useState } from 'react'
import { useSidebar } from '../../provider/SidebarProvider';
import BecomeVendorImg from '../../assets/BecomeVendor/BecomeVendor.svg';
import CartImg from '../../assets/BecomeVendor/Cart.svg';
import AboutSwiper from '../../components/swiper/AboutSwiper';
import { FaPlus, FaMinus } from "react-icons/fa6";


function BecomeVendor() {
    const { setBecomeVendor } = useSidebar();

    useEffect(() => {
        setBecomeVendor(true);

        return () => {
            setBecomeVendor(false);
        };
    }, [setBecomeVendor]);

    const [expandedItems, setExpandedItems] = useState([true, false, false, false, false]);

    const toggleItem = (index) => {
        setExpandedItems((prev) =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };

    const faqItems = [
        { question: "What is the monthly cost of your app?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes." },
        { question: "Do you have any local branches?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes." },
        { question: "What do I need to create an account?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes." },
        { question: "Do you have iOS and Android apps?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes." },
        { question: "How do I create an account?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes." }
    ];

    return (
        <>
            <div
                className='text-white bg-cover bg-center h-auto flex items-center'
                style={{
                    backgroundImage: `url(${BecomeVendorImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // maxHeight: '554px' // Adjust this value to fit your needs
                }}
            >
                <div className='xl:px-80 lg:px-80 md:px-36 px-4 xl:py-40 lg:py-28 md:py-20 py-20'>
                    <h2 className='md:text-4xl text-2xl font-medium'>Become a Ubuntu Vendor</h2>
                    <p className='text-sm mt-2'>More than half the units sold in our stores are from independent sellers.</p>
                    <button className='bg-[#FCC626] rounded-2xl font-medium text-xl px-7 py-2 mt-3 text-black'>Sign Up Now</button>
                </div>
            </div>

            <div className='container mx-auto max-sm:px-4'>


                <div className='xl:px-72 2xl:pt-7 mt-10'>
                    <div className='border-2 pb-10 border-b-[#D9D9D9]'>
                        <h2 className='lg:text-2xl text-xl font-medium mb-4 md:text-left'>Why become a Vendor on Ubuntu?</h2>
                        <div className='flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-start'>
                            <div className='flex-1 bg-white lg:h-[324px] h-auto p-4 text-center'>
                                {/* Content for card 1 */}
                            </div>
                            <div className='flex-1 bg-white lg:h-[324px] h-auto p-4 text-center'>
                                {/* Content for card 2 */}
                            </div>
                            <div className='flex-1 bg-white lg:h-[324px] h-auto p-4 text-center'>
                                {/* Content for card 3 */}
                            </div>
                        </div>
                    </div>
                </div>



                <div className='xl:px-72 2xl:pt-7 pt-4'>

                    <div className='border-2 pb-10 border-b-[#D9D9D9]'>

                        <h2 className='lg:text-2xl text-xl font-medium mb-4 md:text-left'>How to become a Vendor on Ubuntu?</h2>
                        <div className='flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-start'>
                            <div className='flex-1 bg-white lg:h-[324px] h-auto p-4 flex flex-col'>
                                <h1 className='text-2xl font-medium mb-2'>01</h1>
                                <h3 className='font-semibold text-lg mb-2'>Register your Account</h3>
                                <p className='text-sm'>Register on Ubuntu with GST/PAN details and an active bank account</p>
                            </div>
                            <div className='flex-1 bg-white lg:h-[324px] h-auto p-4 flex flex-col'>
                                <h1 className='text-2xl font-medium mb-2'>03</h1>
                                <h3 className='font-semibold text-lg mb-2'>List your Products</h3>
                                <p className='text-sm'>Provide appropriate descriptions and product details.</p>
                            </div>
                            <div className='flex-1 bg-white lg:h-[324px] h-auto p-4 flex flex-col'>
                                <h1 className='text-2xl font-medium mb-2'>02</h1>
                                <h3 className='font-semibold text-lg mb-2'>Choose Storage & Shipping</h3>
                                <p className='text-sm'>Select your desired storage, packaging and shipping options</p>
                            </div>
                            <div className='flex-1 bg-white lg:h-[324px] h-auto p-4 flex flex-col'>
                                <h1 className='text-2xl font-medium mb-2'>04</h1>
                                <h3 className='font-semibold text-lg mb-2'>Complete Orders & Get Paid</h3>
                                <p className='text-sm'>Deliver orders to customers on time and get paid in 7 days.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='xl:px-72 2xl:pt-7 pt-4'>

                    <div className='border-2 pb-10 border-b-[#D9D9D9]'>

                        <h2 className="xl:text-3xl text-2xl font-medium xl:mb-10 mb-5">What our Vendors are Saying</h2>
                        <AboutSwiper />
                    </div>
                </div>

                <div className='xl:px-72 2xl:pt-7 pt-4'>
                    <h2 className="xl:text-3xl text-2xl font-medium xl:mb-10 mb-5">Frequently Asked Questions</h2>
                    <div className='bg-white'>
                        {faqItems.map((item, index) => (
                            <div key={index} className='border-[#EAEAEA] border-b-2 p-3 text-[#041E42]'>
                                <div className='flex justify-between lg:p-4 mx:px-0 px-2 gap-4'>
                                    <div className='flex gap-4 lg:text-2xl md:text-xl font-semibold'>
                                        <h2 className='lg:text-3xl md:text-2xl'>0{index + 1}</h2>
                                        <h2 className='font-medium'>{item.question}</h2>
                                    </div>
                                    <div onClick={() => toggleItem(index)} className="cursor-pointer">
                                        {expandedItems[index] ? <FaMinus /> : <FaPlus />}
                                    </div>
                                </div>
                                {expandedItems[index] && <p className='px-4 lg:max-w-[80%]'>{item.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>


            </div>


            <div className='pt-6 pb-3'>

                <div className='md:flex'>
                    <div className="text-white bg-gradient-to-r from-customBlue1 to-customBlue2 flex items-center justify-between p-6 lg:p-0 lg:pr-6 w-full">
                        <div className="flex flex-col justify-center xl:pl-80 lg:pl-20 md:pl-10 pl-4">
                            <h2 className="lg:text-5xl md:text-4xl text-2xl font-medium md:pb-5 pb-0 max-w-[520px]">Start selling today</h2>
                            <p className="text-sm mt-2 max-w-[363px] md:pb-4 pb-2">Put your products in front of the millions of customers who search Zenmart.com every day.</p>
                            <button className="bg-[#FCC626] rounded-2xl font-medium text-xl px-7 py-2 mt-3 text-black lg:w-1/2">Sign Up</button>
                        </div>
                    </div>
                    <div className="flex justify-end items-center bg-customBlue2">
                        <img src={CartImg} alt="Cart with boxes" className="h-full max-w-full object-contain" />
                    </div>
                </div>
            </div>



        </>
    )
}

export default BecomeVendor;
