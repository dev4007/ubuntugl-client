import React, { useEffect, useState } from 'react'
import { useSidebar } from '../../provider/SidebarProvider';
import { FaPlus, FaMinus } from "react-icons/fa6";
import AllFeatures from '../../components/home/abandoned-items/AllFeatures';

function ContactForm() {
    const { setContectForm } = useSidebar();

    useEffect(() => {
        setContectForm(true);

        return () => {
            setContectForm(false);
        };
    }, [setContectForm]);


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
            <div className='bg-[#557DE4] text-white md:p-20 px-7 py-20 flex flex-col items-center justify-center'>
                <h2 className='lg:text-4xl text-3xl font-bold mb-2'>Need Help? Contact Us</h2>
                <p className='md:text-sm text-xs'>Our team of superheros are standing by for Help & Support!</p>
            </div>
            <div className='container mx-auto max-sm:px-4  bg-[#F3F3F3] text-[#041E42]'>

                <div className='w-full lg:px-48 pt-10 '>
                    {/* <div className='w-full lg:px-48 p-5 pt-10'> */}
                    <div className='flex lg:flex-row flex-col gap-5 '>

                        <div className='lg:w-1/2'>
                            <h2 className='text-2xl font-semibold pb-7'>Frequently Asked Questions (F.A.Qs)</h2>
                            <div className='bg-white'>
                                {faqItems.map((item, index) => (
                                    <div key={index} className='border-[#EAEAEA] border-b-2 p-3 text-[#041E42]'>
                                        <div className='flex justify-between lg:p-4 mx:px-0 px-2 gap-4'>
                                            <div className='flex gap-4 lg:text-lg md:text-sm font-semibold'>
                                                <h2 className='lg:text-xl md:text-lg'>0{index + 1}</h2>
                                                <h2 className='font-medium'>{item.question}</h2>
                                            </div>
                                            <div onClick={() => toggleItem(index)} className="cursor-pointer">
                                                {expandedItems[index] ? <FaMinus /> : <FaPlus />}
                                            </div>
                                        </div>
                                        {expandedItems[index] && <p className='px-4 lg:max-w-[80%] text-sm'>{item.answer}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='lg:w-1/2 lg:py-0 pb-5   '>
                            <h2 className='text-2xl font-semibold text-[#041E42] pb-7'>
                                Contact Form
                            </h2>
                            <div className='mb-7'>
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block pb-3">Name</label>
                                        <input type="text" className="w-full p-2 border rounded" defaultValue="Raj Smith" />
                                    </div>
                                    <div>
                                        <label className="block pb-3">Email</label>
                                        <input type="email" className="w-full p-2 border rounded" defaultValue="example@gmail.com" />
                                    </div>
                                </div>
                                <div className='w-full mt-3 '>
                                    <label className="block pb-3">Subject</label>
                                    <input type="text" className="w-full p-2 border rounded" 
                                    placeholder='Enter the subject of your message'
                                    />
                                </div>
                                <div className='w-full mt-3'>
                                    <label className="block pb-3">Message</label>
                                    <textarea type="text" className="w-full p-2 border rounded h-[255px]" 
                                    placeholder='Type your concern here'
                                     />
                                </div>

                                <button className="bg-[#FCC626] rounded-2xl font-medium text-lg px-5 py-2 mt-3 text-black">Send Message</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto max-sm:px-4'>
                <AllFeatures />
            </div>
        </>
    )
}

export default ContactForm