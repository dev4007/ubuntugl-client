import React from 'react';
import OrderStar from "../../assets/Settings/order_star.svg";
import { WishLists as WishLists_Data } from "./WishListData.jsx";
import MemberSideBar from '../../components/SideBar/MemberSideBar.jsx';

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

function WishList() {


    return (
        <div className='2xl:px-40 2xl:pt-20 pt-7'>
            <h2 className="xl:text-3xl text-xl font-medium mb-4">Member’s Dashboard</h2>
            {/* <div className="flex h-screen"> */}
            <div className="xl:flex">
                {/* Sidebar */}
                <MemberSideBar/>
                {/* Main Content */}
                <div className="flex-1 2xl:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-md min-h-[72vh]">
                        
                        <div className='flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 pb-4 rounded-md'>
                            <h2 className="text-lg font-medium mb-4 lg:mb-0">Wishlist (3)</h2>

                        </div>


                        <div className="relative overflow-x-auto max-h-[72vh]">
                            <table className="w-full text-sm text-left bg-white rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="bg-gray-100 border-b uppercase">
                                    <tr className=' text-center'>
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
                                            Total
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {WishLists_Data.map((item) => (
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

                                                        <div className="text-xs 2xl:text-sm text-gray-600 2xl:max-w-[65%] w-full">
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
                                                    {item.total}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-xs text-black whitespace-nowrap">
                                                <button
                                                    className={`px-7 py-3 w-full ${item.status === 'In Stock' ? 'bg-order-btn-green' :
                                                        item.status === 'Out of Stock' ? 'bg-order-btn-red' :
                                                            item.status === 'On the Way' ? 'bg-order-btn-yellow' : ''
                                                        }`}
                                                >
                                                    {item.status}
                                                </button>
                                            </td>

                                            <td className="p-4 text-center">
                                                <div className=" text-black whitespace-nowrap text-sm">
                                                    {/* {item.payment} */}
                                                    <button href='#' className='border rounded-full px-4 py-2 border-black'>Add to Cart</button>
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

export default WishList;
