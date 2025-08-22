export default function ProductDetail({ product }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-96 object-cover rounded-lg shadow"
      />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">
        {product.sqft} sqft | {product.beds} Beds | {product.baths} Baths |{" "}
        {product.floors} Floors
      </p>
      <p className="text-2xl text-blue-600 font-bold mt-4">${product.price}</p>
      <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
        Buy Now
      </button>
    </div>
  );
}
