

import { Link } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "../../hooks/useCart";

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); 

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        {/* Quick View button */}
        <Link
          to={`/product/${product.id}`}
          className="absolute top-2 right-2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
        >
          <Eye className="w-5 h-5 text-gray-700" />
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {product.beds} Beds • {product.baths} Baths • {product.sqft} sqft
        </p>

        {/* Spacer pushes price + button to bottom */}
        <div className="flex-1" />

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            ${product.basePrice.toFixed(2)}
          </span>
          {/*  updated button with addToCart */}
          {/* <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <ShoppingCart className="w-5 h-5" />
          </button> */}
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.basePrice, // <-- use price key
                img: product.img,
              })
            }
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
