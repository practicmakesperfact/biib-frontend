import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ plan }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <img
        src={plan.image}
        alt={plan.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">{plan.title}</h3>
        <p className="text-gray-600">
          {plan.sqft} sqft • {plan.beds} bd • {plan.baths} ba
        </p>
        <p className="mt-2 font-bold">${plan.price}</p>
        <Link
          to={`/product/${plan.id}`}
          className="mt-3 inline-block text-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
