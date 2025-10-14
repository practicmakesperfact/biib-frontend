import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ProductGallery({ images = [] }) {
  // ✅ Filter out undefined / empty values
  const validImages = images.filter(
    (img) => typeof img === "string" && img.trim() !== ""
  );
  const fallbackImage = "/placeholder.png"; // Add this file inside your /public folder

  const [selected, setSelected] = useState(validImages[0] || fallbackImage);
  const [isZoomed, setIsZoomed] = useState(false);

  // When images prop changes, reset selected image
  useEffect(() => {
    if (validImages.length > 0) {
      setSelected(validImages[0]);
    } else {
      setSelected(fallbackImage);
    }
  }, [images]);

  // Close modal with ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsZoomed(false);
    };
    if (isZoomed) {
      document.addEventListener("keydown", handleKey);
    }
    return () => document.removeEventListener("keydown", handleKey);
  }, [isZoomed]);

  return (
    <div className="w-full">
      {/* Main image */}
      <div
        className="relative w-full h-96 border rounded-lg overflow-hidden cursor-zoom-in bg-gray-100"
        onClick={() => setIsZoomed(true)}
      >
        <img
          src={selected}
          alt="Plan preview"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Thumbnails */}
      {validImages.length > 0 && (
        <div className="flex gap-2 mt-3">
          {validImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(img)}
              className={`w-20 h-20 border rounded-md overflow-hidden transition ${
                selected === img
                  ? "ring-2 ring-blue-500"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${i}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox / Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
              aria-label="Close zoom"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <img
              src={selected}
              alt="Zoomed plan"
              className="max-w-4xl max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

