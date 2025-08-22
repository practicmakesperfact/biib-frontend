import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ plan }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={plan.thumbnail}
        alt={plan.title}
        className="w-full h-48 object-cover lazy"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
        <p className="text-primary font-bold mb-2">${plan.price}</p>
        <div className="flex space-x-2 text-sm text-gray-600 mb-2">
          <span>{plan.sqft} sqft</span>
          <span>• {plan.beds} beds</span>
          <span>• {plan.baths} baths</span>
          <span>• {plan.floors} floors</span>
        </div>
        <div className="flex items-center mb-2">
          {Array(5)
            .fill()
            .map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i < plan.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          <span className="ml-2 text-sm">({plan.reviews})</span>
        </div>
        <div className="flex space-x-2">
          <span className="bg-gray-200 px-2 py-1 rounded text-xs">
            {plan.fileType}
          </span>
        </div>
        <Link
          to={`/product/${plan.id}`}
          className="block mt-4 bg-primary text-white text-center py-2 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
