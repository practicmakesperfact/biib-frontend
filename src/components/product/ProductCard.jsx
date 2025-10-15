import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, X, Star } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { useFavorites } from "../../hooks/useFavorites";

export default function ProductCard({ product, view = "grid" }) {
  const { addToCart } = useCart();
  const [isFav, setIsFav] = useState(!!product.isFavorite);
  const [showTour, setShowTour] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  // ✅ Safe price formatting
  const priceLabel =
    product?.basePrice != null && !Number.isNaN(Number(product.basePrice))
      ? Number(product.basePrice).toFixed(2)
      : null;

  return (
    <>
      <div
        className={`bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer ${
          view === "list" ? "flex" : "flex flex-col"
        }`}
      >
        {/* ✅ Image Section */}
        <div className="relative group">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.img}
              alt={product.title}
              className={`${
                view === "list"
                  ? "w-48 h-48 object-cover"
                  : "w-full h-48 object-cover"
              } transition-transform group-hover:scale-105`}
              loading="lazy"
            />
          </Link>

          {/* ✅ Top-left: Tour & Video buttons */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
            {product.hasTour && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTour(true);
                }}
                type="button"
                title="Virtual Tour"
                className="flex items-center gap-1 bg-white/95 px-2 py-1 rounded-md shadow text-xs font-medium hover:bg-white"
              >
                {/* Cube icon */}
                <svg
                  className="w-4 h-4 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7v10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Tour</span>
              </button>
            )}

            {product.hasVideo && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo(true);
                }}
                type="button"
                title="Watch Video"
                className="flex items-center gap-1 bg-white/95 px-2 py-1 rounded-md shadow text-xs font-medium hover:bg-white"
              >
                {/* Play icon */}
                <svg
                  className="w-4 h-4 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M5 3v18l15-9L5 3z"
                    stroke="currentColor"
                    strokeWidth="1.0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                  <path d="M8 6v12l10-6L8 6z" fill="currentColor" />
                </svg>
                <span>Video</span>
              </button>
            )}
          </div>

          {/* ✅ Heart (Favorite) - top-right */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(product); 
            }}
            aria-pressed={isFavorite(product.id)}
            title={
              isFavorite(product.id) ? "Remove favorite" : "Add to favorites"
            }
            className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow hover:bg-white z-20"
          >
            {isFavorite(product.id) ? (
              <svg
                className="w-5 h-5 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21s-7-4.35-9.5-7.02C-0.05 10.9 2.2 6 6.5 6c2.45 0 3.87 1.46 5.5 3.01C13.63 7.46 15.05 6 17.5 6 21.8 6 24.05 10.9 21.5 13.98 19 16.65 12 21 12 21z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.8 8.6c-.4-2.5-2.6-4.1-5.1-4.1-1.6 0-3 .7-4 1.8C10.2 5.2 8.8 4.5 7.3 4.5 4.8 4.5 2.6 6.1 2.2 8.6c-.6 3.4 2.2 6.2 6.3 9.7L12 21l3.5-2.7c4.1-3.5 6.9-6.3 6.3-9.7z" />
              </svg>
            )}
          </button>
        </div>

        {/* ✅ Content */}
        <div className="p-4 flex flex-col flex-1">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-semibold line-clamp-1">
              {product.title}
            </h3>
          </Link>

          {/* Specs */}
          <p className="text-sm text-gray-500 mt-1">
            {product.sqft} sqft • {product.beds} beds • {product.baths} baths •{" "}
            {product.floors} floors
          </p>

          {/* File Badges */}
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-200 px-2 py-1 rounded">PDF</span>
            <span className="bg-gray-200 px-2 py-1 rounded">CAD</span>
            <span className="bg-gray-200 px-2 py-1 rounded">3D</span>
          </div>

          {/* Ratings */}
          <div className="flex items-center mt-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="ml-1 text-gray-600 text-sm">
              ({product.reviewsCount || 12} reviews)
            </span>
          </div>

          {/* Price + Licensing */}
          <div className="mt-auto flex justify-between items-center">
            <span className="text-blue-600 font-bold text-lg">
              {priceLabel ? `$${priceLabel}` : "—"}
            </span>
            {product.licenses && (
              <span className="text-xs text-gray-500">
                {product.licenses.map((l) => l.name).join(", ")}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Tour Modal */}
      {showTour && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              onClick={() => setShowTour(false)}
              className="absolute top-2 right-2 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold mb-3">Virtual Tour</h2>
            <iframe
              src={product.tourUrl || "https://my.matterport.com/show/?m=demo"}
              className="w-full h-96 rounded"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ✅ Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold mb-3">House Video</h2>
            <iframe
              src={
                product.videoUrl || "https://www.youtube.com/embed/--Vkub716XA"
              }
              className="w-full h-96 rounded"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
