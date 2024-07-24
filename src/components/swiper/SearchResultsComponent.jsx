import React, { useState } from "react";
import { Products } from "../../data/SearchResultsProducts";

function SearchResultsComponent() {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [quantityMap, setQuantityMap] = useState({}); // State to store quantities

  const ratingStars = 5; // Assuming 5 stars rating

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = (productId) => {
    setHoveredProductId(null);
  };

  const handleIncrement = (productId) => {
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [productId]: (prevQuantityMap[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    if (quantityMap[productId] > 1) {
      setQuantityMap((prevQuantityMap) => ({
        ...prevQuantityMap,
        [productId]: prevQuantityMap[productId] - 1,
      }));
    }
  };

  const handleAddToCart = (productId) => {
    const quantity = quantityMap[productId] || 0;
    console.log(`Added ${quantity} items of product ${productId} to cart`);
    // Add your logic for adding to cart here
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-10 gap-4 py-5">
      {Products.map((product) => (
        <div
          key={product.id}
          id={`product-card-${product.id}`}
          className={`relative border rounded-lg p-4 bg-white shadow-lg transition-transform duration-300 ${
            hoveredProductId === product.id ? 'transform hover:scale-105' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(product.id)}
          onMouseLeave={() => handleMouseLeave(product.id)}
          style={{
            height: hoveredProductId === product.id ? 'auto' : 'initial',
          }}
        >
          {product.badge && (
            <div
              className={`absolute top-2 left-2 px-2 py-1 text-xs rounded ${
                product.badgeType === "choice"
                  ? "bg-blue-500 text-white"
                  : "bg-yellow-500 text-black"
              }`}
            >
              {product.badge}
            </div>
          )}
          <img src={product.image} alt={product.name} className="w-full h-auto" />
          
          <div className="flex items-baseline gap-2 mt-2">
            <span className="lg:text-lg text-sm font-bold">
              {product.price}
            </span>
            {product.previousPrice && (
              <strike className="text-xs">{product.previousPrice}</strike>
            )}
            {product.discount && (
              <span className="bg-yellow-400 px-2 text-xs rounded-xl">
                {product.discount}
              </span>
            )}
          </div>
          <p className="text-xs font-light py-1">{product.brand}</p>
          <div>
            <h3 className="text-sm">{product.name}</h3>
            <div className="text-xs text-gray-600 mt-2 lg:flex items-center gap-2">
              <span className="flex">
                {[...Array(ratingStars)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-3 h-3 fill-current ${
                        product.tag === "UBUNTU'S CHOICE"
                          ? starValue <= product.rating
                            ? "text-blue-500"
                            : "text-gray-300"
                          : starValue <= product.rating
                          ? "text-orange-400"
                          : "text-blue-500"
                      }`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l2.35 7.18h7.65l-6 4.64 2.35 7.18-6-4.64-6 4.64 2.36-7.18-6-4.64h7.65z" />
                    </svg>
                  );
                })}
              </span>{" "}
              <div className="lg:mt-0 mt-1">

              {product.reviews} reviews
              </div>
            </div>
            {hoveredProductId === product.id && (
              <div className="flex justify-between mt-4 ">
                <div className="hidden sm:flex bg-slate-300 rounded text-sm w-25">
                  <button
                    className="font-bold py-2 px-4 rounded-l"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <span className="py-2">{quantityMap[product.id] || 0}</span>
                  <button
                    className="font-bold py-2 px-4 rounded-r"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-yellow-500 w-25 max-sm:w-full text-black text-xs font-bold py-2 px-2 rounded focus:outline-none"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResultsComponent;
