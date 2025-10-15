import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">No Favorites Yet ❤️</h1>
        <p className="text-gray-600">
          Browse products and add some to your favorites.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-2xl font-semibold mb-6">Your Favorite Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 relative">
            <Link to={`/product/${product.id}`} className="block">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover group-hover:opacity-90 transition"
              />
              <div className="p-3">
                <h3 className="text-sm font-medium line-clamp-2">
                  {product.title}
                </h3>
              </div>
            </Link>
            <button
              onClick={() => removeFavorite(product.id)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
