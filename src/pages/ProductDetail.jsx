import ProductGallery from "../components/product/ProductGallery";

export default function ProductDetail() {
  const sampleImages = [
    "https://via.placeholder.com/800x600?text=Front+View",
    "https://via.placeholder.com/800x600?text=Side+View",
    "https://via.placeholder.com/800x600?text=Interior",
  ];

  return (
    <div className="container mx-auto px-6 py-8 grid md:grid-cols-2 gap-10">
      <ProductGallery images={sampleImages} />

      <div>
        <h1 className="text-2xl font-bold mb-4">Modern House Plan</h1>
        <p className="text-gray-600">
          This contemporary home features open spaces, large windows, and an
          eco-friendly design.
        </p>
      </div>
    </div>
  );
}
