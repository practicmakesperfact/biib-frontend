
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import  api  from "../services/api";
import { Loader2, ShoppingCart } from "lucide-react";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details
  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load product:", err);
        setLoading(false);
      });
  }, [id]);

// useEffect(() => {
//   api.getProducts().then(setProducts);
// }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-600">Product not found.</div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded-2xl shadow"
        />
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-500 mt-2">
          {product.beds} Beds • {product.baths} Baths • {product.sqft} sqft
        </p>

        <p className="mt-4 text-gray-700">{product.description}</p>

        <div className="mt-6">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="mt-6 bg-blue-600 text-white flex items-center justify-center gap-2 py-3 px-5 rounded-xl hover:bg-blue-700 transition"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
