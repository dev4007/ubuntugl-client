import React, { useState } from "react";
import { FaRegWindowMinimize } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";

function Sidebar() {
  const [selectedOption, setSelectedOption] = useState("above3");
  const [minPrice, setMinPrice] = useState(20); // Initial minimum price
  const [maxPrice, setMaxPrice] = useState(70987); // Initial maximum price

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to handle changes in the number inputs
  const handleMinPriceChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= minPrice) {
      setMaxPrice(value);
    }
  };

  // Function to handle changes in the range slider
  const handleRangeChange = (event) => {
    const value = parseInt(event.target.value);
    setMinPrice(value);
  };

  return (
    <div className="bg-white container mx-auto text-[#041E42]">
      <div className="mb-6">
        <div className="flex text-center justify-between">
          <h2 className="text-xl font-medium mb-2">Department</h2>
          <FaRegWindowMinimize className="mr-2 cursor-pointer" />
        </div>
        <ul className="ml-4 list-disc">
          <li className="mb-2 cursor-pointer">
            <span className="text-base">Electronics</span>
          </li>
          <li className="mb-2 cursor-pointer">
            <span className="text-base">Computers & Accessories</span>
            <ul className="ml-4 mt-2">
              <li className="mb-2 cursor-pointer">
                <span className="text-base">Desktops</span>
              </li>
              <li className="mb-2 cursor-pointer">
                <span className="text-base">Laptops</span>
              </li>
              <li className="mb-2 cursor-pointer">
                <span className="text-base">Tablets</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="flex text-center justify-between">
          <h2 className="text-xl font-medium mb-2">Filter by Brands</h2>
          <FaRegWindowMinimize className="mr-2 cursor-pointer" />
        </div>
        <input
          type="text"
          placeholder="Find a Brand"
          className="w-full px-3 py-2 mb-4 border rounded"
        />
        <ul className="ml-4">
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">Apple</span>
              <span className="ml-auto mr-3 text-base">87</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
                checked
              />
              <span className="ml-2 text-base">Asus</span>
              <span className="ml-auto mr-3 text-base">92</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">Acer</span>
              <span className="ml-auto mr-3 text-base">123</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">Dell</span>
              <span className="ml-auto mr-3 text-base">49</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">Lenovo</span>
              <span className="ml-auto mr-3 text-base">12</span>
            </label>
          </li>
        </ul>
        <div className="text-base font-medium text-black cursor-pointer mt-4">
          <span className="border-b-4 border-black">Show</span> More
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-6">
        <div className="flex text-center justify-between">
          <h2 className="text-xl font-medium mb-2">Price</h2>
          {/* Your minimize icon component */}
          {/* <FaRegWindowMinimize className="mr-2 cursor-pointer" /> */}
        </div>
        <div className="flex items-center mb-4">
          <input
            type="number"
            placeholder="$ 20"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-1/2 px-3 py-2 border rounded mr-2"
          />
          <input
            type="number"
            placeholder="$ 70987"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-1/2 px-3 py-2 border rounded ml-2"
          />
        </div>
        <div className="flex items-center mb-2">
          <input
            type="range"
            className="w-full  accent-[#041E42]"
            min="20"
            max="70987"
            value={minPrice}
            onChange={handleRangeChange}
          />
        </div>
        <div className="text-sm">
          ${minPrice} - ${maxPrice}
        </div>
      </div>

      {/* CPU Manufacturer Section */}
      <div className="mb-6">
        <div className="flex text-center justify-between">
          <h2 className="text-xl font-medium mb-2">CPU Manufacturer</h2>
          <FaRegWindowMinimize className="mr-2 cursor-pointer" />
        </div>
        <ul className="ml-4">
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">AMD</span>
              <span className="ml-auto mr-3 text-base">87</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
                checked
              />
              <span className="ml-2 text-base">Apple</span>
              <span className="ml-auto mr-3 text-base">92</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">Intel</span>
              <span className="ml-auto mr-3 text-base">123</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">NVIDIA</span>
              <span className="ml-auto mr-3 text-base">49</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">Qualcomm</span>
              <span className="ml-auto mr-3 text-base">12</span>
            </label>
          </li>
        </ul>
        <div className="text-lg font-semibold text-black cursor-pointer mt-4">
          <span className="border-b-4 border-black">Show</span> More
        </div>
      </div>

      {/* Memory Capacity Section */}
      <div className="mb-6">
        <div className="flex text-center justify-between">
          <h2 className="text-xl font-medium mb-2">Memory Capacity</h2>
          <FaRegWindowMinimize className="mr-2 cursor-pointer" />
        </div>
        <ul className="ml-4">
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">16 GB</span>
              <span className="ml-auto mr-3 text-base">87</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
                checked
              />
              <span className="ml-2 text-base">32 GB</span>
              <span className="ml-auto mr-3 text-base">92</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">64 GB</span>
              <span className="ml-auto mr-3 text-base">123</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">128 GB</span>
              <span className="ml-auto mr-3 text-base">49</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-base">1 TB</span>
              <span className="ml-auto mr-3 text-base">12</span>
            </label>
          </li>
        </ul>
        <div className="text-lg font-semibold text-black cursor-pointer mt-4">
          <span className="border-b-4 border-black">Show</span> More
        </div>
      </div>

      {/* Screen Size Section */}
      <div className="mb-6">
        <div className="flex text-center justify-between">
          <h2 className="text-xl font-medium mb-2">Screen Size</h2>
          <FaRegWindowMinimize className="mr-2 cursor-pointer" />
        </div>
        <ul className="ml-4">
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-sm">17 Inches & Above</span>
              <span className="ml-auto mr-3 text-sm">87</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
                checked
              />
              <span className="ml-2 text-sm">16 to 16.9 Inches</span>
              <span className="ml-auto mr-3 text-sm">92</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-sm">15 to 15.9 Inches</span>
              <span className="ml-auto mr-3 text-sm">123</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-sm">14 to 14.9 Inches</span>
              <span className="ml-auto mr-3 text-sm">49</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-sm">13 to 13.9 Inches</span>
              <span className="ml-auto mr-3 text-sm">12</span>
            </label>
          </li>
        </ul>
        <div className="text-lg font-semibold text-black cursor-pointer mt-4">
          <span className="border-b-4 border-black">Show</span> More
        </div>
      </div>

      {/* Display Resolution */}
      <div className="mb-6">
        <div className="flex text-center justify-between">
          <h2 className="text-xl font-medium mb-2">Display Resolution</h2>
          <FaRegWindowMinimize className="mr-2 cursor-pointer" />
        </div>
        <ul className="ml-4">
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-sm">1024 x 600 pixel</span>
              <span className="ml-auto mr-3 text-sm">87</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
                checked
              />
              <span className="ml-2 text-sm">1024 x 768 pixel</span>
              <span className="ml-auto mr-3 text-sm">92</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-sm">1280 x 720 pixel</span>
              <span className="ml-auto mr-3 text-sm">123</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-sm">1280 x 800 pixel</span>
              <span className="ml-auto mr-3 text-sm">49</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox accent-[#041E42]"
              />
              <span className="ml-2 text-sm">1366 x 768 pixe</span>
              <span className="ml-auto mr-3 text-sm">12</span>
            </label>
          </li>
        </ul>
        <div className="text-lg font-semibold text-black cursor-pointer mt-4">
          <span className="border-b-4 border-black">Show</span> More
        </div>
      </div>
      {/* IMAGE TO CODE */}
      <div className="mb-6">
        <div className="flex text-center justify-between">
          <h2 className="text-xl font-medium mb-2">Color</h2>
          <FaRegWindowMinimize className="mr-2 cursor-pointer" />
        </div>
        <div className="flex space-x-4">
          <div className="w-6 h-6 bg-[#041E42] rounded-full border border-gray-300 cursor-pointer"></div>
          <div className="w-6 h-6 bg-[#443297] rounded-full border border-gray-300 cursor-pointer"></div>
          <div className="w-6 h-6 bg-[#4A70B1] rounded-full border border-gray-300 cursor-pointer"></div>
          <div className="w-6 h-6 bg-[#F5C34B] rounded-full border border-gray-300 cursor-pointer"></div>
          <div className="w-6 h-6 bg-[#626974] rounded-full border border-gray-300 cursor-pointer"></div>
          <div className="w-6 h-6 bg-[#FFFFFF] rounded-full border border-gray-300 cursor-pointer"></div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium mb-2">Customer Rating</h2>
          <FaRegWindowMinimize className="mr-2 cursor-pointer" />
        </div>
        <ul className="ml-4">
          <li className="mb-2 flex items-center cursor-pointer">
            {/* <input type="radio" name="rating" className=" h-4 w-4 form-radio mr-2" /> */}
            <input
              type="radio"
              name="rating"
              value="above4"
              id="above4"
              className="form-radio mr-2 h-4 w-4 text-blue-500 custom-radio"
              checked={selectedOption === "above4"}
              onChange={handleOptionChange}
            />
            <span className="text-xl flex items-center">
              <TiStarFullOutline className="text-orange-400" />
              <TiStarFullOutline className="text-orange-400" />
              <TiStarFullOutline className="text-orange-400" />
              <TiStarFullOutline className="text-orange-400" />
              <CiStar className="text-blue-500" /> & up
            </span>
            <span className="ml-auto mr-3 text-sm">87</span>
          </li>
          <li className="mb-2 flex items-center cursor-pointer">
            {/* <input type="radio" name="rating" className=" h-4 w-4 form-radio mr-2" /> */}
            <input
              type="radio"
              name="rating"
              value="above3"
              id="above3"
              className="form-radio mr-2 h-4 w-4 text-blue-500 custom-radio"
              checked={selectedOption === "above3"}
              onChange={handleOptionChange}
            />
            <span className="text-xl flex items-center">
              <TiStarFullOutline className="text-orange-400" />
              <TiStarFullOutline className="text-orange-400" />
              <TiStarFullOutline className="text-orange-400" />
              <CiStar className="text-blue-500" />
              <CiStar className="text-blue-500" /> & up
            </span>
            <span className="ml-auto mr-3 text-sm">92</span>
          </li>
          <li className="mb-2 flex items-center cursor-pointer">
            {/* <input type="radio" name="rating" className=" h-4 w-4 form-radio mr-2" /> */}
            <input
              type="radio"
              name="rating"
              value="above2"
              id="above2"
              className="form-radio mr-2 h-4 w-4 text-blue-500 custom-radio"
              checked={selectedOption === "above2"}
              onChange={handleOptionChange}
            />
            <span className="text-xl flex items-center">
              <TiStarFullOutline className="text-orange-400" />
              <TiStarFullOutline className="text-orange-400" />
              <CiStar className="text-blue-500" />
              <CiStar className="text-blue-500" />
              <CiStar className="text-blue-500" /> & up
            </span>
            <span className="ml-auto mr-3 text-sm">123</span>
          </li>
          <li className="mb-2 flex items-center cursor-pointer">
            {/* <input type="radio" name="rating" className=" h-4 w-4 form-radio mr-2" /> */}
            <input
              type="radio"
              name="rating"
              value="above1"
              id="above1"
              className="form-radio mr-2 h-4 w-4 text-blue-500 custom-radio"
              checked={selectedOption === "above1"}
              onChange={handleOptionChange}
            />
            <span className="text-xl flex items-center">
              <TiStarFullOutline className="text-orange-400" />
              <CiStar className="text-blue-500" />
              <CiStar className="text-blue-500" />
              <CiStar className="text-blue-500" />
              <CiStar className="text-blue-500" /> & up
            </span>
            <span className="ml-auto mr-3 text-sm">49</span>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="flex text-center justify-between">
          <h2 className="text-xl font-medium mb-2">Condition</h2>
          <FaRegWindowMinimize className="mr-2 cursor-pointer" />
        </div>
        <ul className="ml-4">
          <li className="mb-2 flex items-center cursor-pointer">
            <input
              type="checkbox"
                  className="form-checkbox mr-2  custom-checkbox accent-[#041E42]"
            />
            <span className="text-sm">New</span>
            <span className="ml-auto mr-3 text-sm">87</span>
          </li>
          <li className="mb-2 flex items-center cursor-pointer">
            <input
              type="checkbox"
                  className="form-checkbox mr-2  custom-checkbox accent-[#041E42]"
              checked
            />
            <span className="text-sm">Used</span>
            <span className="ml-auto mr-3 text-sm">92</span>
          </li>
          <li className="mb-2 flex items-center cursor-pointer">
            <input
              type="checkbox"
                  className="form-checkbox mr-2  custom-checkbox accent-[#041E42]"
            />
            <span className="text-sm">Renewed</span>
            <span className="ml-auto mr-3 text-sm">123</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
