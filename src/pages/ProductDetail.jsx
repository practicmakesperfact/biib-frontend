import { useParams } from "react-router-dom";
import products from "../data/Products";
import ProductGallery from "../components/product/ProductGallery";
import LicenseSelector from "../components/product/LicenseSelector";
import { useCart } from "../hooks/useCart";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <p>Product not found.</p>;

  const licenses = [
    { type: "Personal Use", multiplier: 1 },
    { type: "Commercial", multiplier: 1.5 },
    { type: "Extended Commercial", multiplier: 2 },
  ];

  const [selectedLicense, setSelectedLicense] = useState({
    license: licenses[0],
    finalPrice: product.basePrice,
  });

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: selectedLicense.finalPrice,
      license: selectedLicense.license.type,
      img: product.img,
    });
  };

  return (
    <div className="container mx-auto px-6 py-8 grid md:grid-cols-2 gap-10">
      <ProductGallery images={product.images} />

      <div>
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <LicenseSelector
          licenses={licenses}
          basePrice={product.basePrice}
          onSelect={setSelectedLicense}
        />

        <div className="text-xl font-bold text-blue-600 mt-4">
          ${selectedLicense.finalPrice}
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
