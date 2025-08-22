import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-600">
          {product.sqft} sqft · {product.beds} Beds · {product.baths} Baths
        </p>
        <p className="text-blue-600 font-bold mt-2">${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="block mt-3 bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
