
import { useState } from "react";
import ProductGallery from "../components/product/ProductGallery";
import LicenseSelector from "../components/product/LicenseSelector";

export default function ProductDetail() {
  const sampleImages = [
    "https://via.placeholder.com/800x600?text=Front+View",
    "https://via.placeholder.com/800x600?text=Side+View",
    "https://via.placeholder.com/800x600?text=Interior",
  ];

  // Base price for product
  const basePrice = 149;

  // License tiers
  const licenses = [
    { type: "Personal Use", multiplier: 1 },
    { type: "Commercial", multiplier: 1.5 },
    { type: "Extended Commercial", multiplier: 2 },
  ];

  const [selectedLicense, setSelectedLicense] = useState({
    license: licenses[0],
    finalPrice: basePrice,
  });

  return (
    <div className="container mx-auto px-6 py-8 grid md:grid-cols-2 gap-10">
      {/* Product Images */}
      <ProductGallery images={sampleImages} />

      {/* Product Info */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Modern House Plan</h1>
        <p className="text-gray-600 mb-4">
          This contemporary home features open spaces, large windows, and an
          eco-friendly design.
        </p>

        {/* License Selector */}
        <LicenseSelector
          licenses={licenses}
          basePrice={basePrice}
          onSelect={setSelectedLicense}
        />

        {/* Dynamic Price */}
        <div className="text-xl font-bold text-blue-600 mt-4">
          ${selectedLicense.finalPrice}
        </div>

        {/* Add to Cart */}
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
