import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import ProductGallery from "../components/product/ProductGallery";
import LicenseSelector from "../components/product/LicenseSelector";
import SamplePreview from "../components/product/SamplePreview";
import DownloadList from "../components/product/DownloadList";
import Reviews from "../components/product/Reviews";
import RelatedProducts from "../components/product/RelatedProducts";
import products from "../data/products";
import { useCart } from "../hooks/useCart";
import { currencyFormat } from "../utils/currencyFormat";
import { useCurrencyRates } from "../hooks/useCurrencyRates";


export default function ProductDetail() {
  const { id } = useParams();
  const pid = parseInt(id, 10);
  const product = products.find((p) => p.id === pid);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Fallback for missing product
  if (!product) {
    return <div className="max-w-4xl mx-auto p-6">Product not found.</div>;
  }

  // currency / license / quantity state
  const [currency, setCurrency] = useState("USD");
  const [selectedLicense, setSelectedLicense] = useState(
    (product.licenses && product.licenses[0]) || {
      id: "basic",
      name: "Basic",
      price: product.basePrice || 0,
    }
  );
  const [qty, setQty] = useState(1);
  const [modRequestOpen, setModRequestOpen] = useState(false);

  // currency conversion (demo rates, replace with real API)
  const { rates, loading, error } = useCurrencyRates("USD");
  
  const price = useMemo(() => {
    const base = selectedLicense?.price ?? product.basePrice ?? 0;
    const converted = base * (rates[currency] || 1) * qty;
    return converted;
  }, [selectedLicense, product.basePrice, currency, qty, rates]);

  function handleAddToCart() {
    addToCart({
      id: product.id,
      title: product.title,
      price: Number(selectedLicense?.price ?? product.basePrice ?? 0),
      img: product.img,
      quantity: qty,
      license: selectedLicense?.id || "basic",
    });
  }

 function handleBuyNow() {
   addToCart({
     id: product.id,
     title: product.title,
     price: selectedLicense?.price ?? product.basePrice,
     img: product.img,
     quantity: qty,
     license: selectedLicense?.id || "basic",
   });
   navigate("/checkout");
 }


  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
      {/* Left: Gallery */}
      <div>
        {/* <ProductGallery images={product.images || [product.img]} /> */}
        <ProductGallery
          images={product.images?.length ? product.images : [product.img]}
        />

        {/* sample preview */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Sample Preview</h3>
          {/* <SamplePreview url={product.samplePdf || product.sample || ""} /> */}
        </div> 

        {/* Video / Tour / YouTube */}
        {product.youtubeUrl && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              Tutorial / Walkthrough
            </h3>
            <div className="aspect-video">
              <iframe
                title="product-tutorial"
                src={product.youtubeUrl.replace("watch?v=", "embed/")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              />
            </div>
          </div>
        )}
      </div>

      {/* Right: Info */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4">
          {product.shortDescription ||
            product.description ||
            "Beautiful, buildable plans with clear deliverables."}
        </p>

        {/* Key specs */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-50 p-3 rounded">
            <div className="text-xs text-gray-500">Area</div>
            <div className="font-semibold">{product.sqft} sqft</div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <div className="text-xs text-gray-500">Beds</div>
            <div className="font-semibold">{product.beds}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <div className="text-xs text-gray-500">Baths</div>
            <div className="font-semibold">{product.baths}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <div className="text-xs text-gray-500">Floors</div>
            <div className="font-semibold">{product.floors}</div>
          </div>
        </div>

        {/* Footprint / materials suggestions */}
        <div className="mb-4">
          <h4 className="text-sm font-medium">Footprint & Materials</h4>
          <p className="text-sm text-gray-600 mt-1">
            {product.footprint ||
              "Foundation: slab. Suggested exterior materials: timber cladding, painted render, aluminium windows."}
          </p>
        </div>

        {/* License selector */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">License</h4>
          <LicenseSelector
            licenses={
              product.licenses || [
                { id: "basic", name: "Basic", price: product.basePrice },
              ]
            }
            basePrice={product.basePrice}
            value={selectedLicense}
            onChange={(lic) => setSelectedLicense(lic)}
          />
        </div>

        {/* Currency + Quantity + Price */}
        <div className="flex items-center gap-3 mb-4">
          <div>
            <label className="text-xs text-gray-500">Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="ml-2 rounded px-1 py-1 pr-10 outline-none"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="ETB">ETB</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-500">Qty</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              className="ml-2 w-20 rounded px-2 py-1 outline-none"
            />
          </div>

          <div className="ml-auto text-right">
            <div className="text-xs text-gray-500">Price</div>
            <div className="text-2xl font-bold text-blue-600">
              {currencyFormat(price, currency)}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
          >
            Buy Now
          </button>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setModRequestOpen(true)}
            className="text-sm underline text-blue-600"
          >
            Request Modification
          </button>
          <a className="text-sm text-gray-500"> · </a>
          <a href="#" className="text-sm text-blue-500">
            License terms
          </a>
        </div>

        {/* Deliverables */}
        <div className="mt-6">
          <h4 className="font-medium mb-2">Deliverables</h4>
          <DownloadList
            files={
              product.deliverables || [
                {
                  id: "pdf",
                  name: "Printable PDF (watermarked until purchase)",
                  type: "PDF",
                  key: "plans.pdf",
                },
                {
                  id: "dwg",
                  name: "DWG (CAD) file",
                  type: "DWG",
                  key: "plans.dwg",
                },
                {
                  id: "skp",
                  name: "SketchUp 3D model",
                  type: "SKP",
                  key: "model.skp",
                },
              ]
            }
            productId={product.id}
          />
        </div>

        {/* Reviews */}
        <div className="mt-6">
          <Reviews
            reviews={
              product.reviews || [
                {
                  id: 1,
                  name: "Jane D.",
                  rating: 5,
                  text: "Exactly as drawn — contractor loved it.",
                  verified: true,
                },
                {
                  id: 2,
                  name: "Carlos R.",
                  rating: 4,
                  text: "Great layout. I asked for small modification and they responded.",
                  verified: false,
                },
              ]
            }
          />
        </div>
      </div>

      {/* Related & Mod Request modal */}
      <RelatedProducts currentId={product.id} products={products} />

      {/* Request Modification Modal (simple) */}
      {modRequestOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Request Modification</h3>
              <button
                onClick={() => setModRequestOpen(false)}
                className="text-gray-600"
              >
                Close
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // simulate submit
                alert("Modification request submitted — demo only.");
                setModRequestOpen(false);
              }}
            >
              <div className="mb-3">
                <label className="block text-sm text-gray-700 mb-1">
                  Brief
                </label>
                <textarea
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none"
                  placeholder="Describe changes you need"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm text-gray-700 mb-1">
                  Budget (optional)
                </label>
                <input
                  className="w-full border rounded px-3 py-2 outline-none"
                  placeholder="e.g. $250"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm text-gray-600 mb-1">
                  Attach reference file
                </label>
                <input
                  type="file"
                  className="w-50 outline-none text-gray-400"
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModRequestOpen(false)}
                  className="px-4 py-2 rounded border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

