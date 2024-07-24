import React from "react";
import { RecommendedProducts } from "../../data/Products";

    const RecommendedCard = () => {
        return (
          <div className="w-full  mt-2 p-1 rounded-lg">
            <div className="p-4">
              <h5 className="text-2xl font-medium leading-none">Recommended for you</h5>
              <hr className="mt-4 border-t-2 border-gray-300"/>
            </div>
            {RecommendedProducts.map((product) => (
              <div key={product.id} className="flex items-center mb-2">
                <div>
                  <img
                    className="w-60 h-auto rounded-full"
                    src={product.image}
                    alt={`${product.name} image`}
                  />
                </div>
                <div className="ml-4 mb-4">
                  <p className="font-medium text-base">
                    {product.name}
                  </p>
                  <div className="">
                    <span className="font-medium text-lg max-[375px]:text-xs text-gray-900 mr-2">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm max-[375px]:text-xs text-gray-600 line-through mr-2 mt-0">
                      ${product.oldPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center mb-10">
              <button className="text-blue-500 underline">
                View More
              </button>
            </div>
          </div>
        );
      };
      
      export default RecommendedCard;
