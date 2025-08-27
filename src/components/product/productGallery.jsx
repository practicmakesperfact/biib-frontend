import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ProductGallery({ images }) {
  const [selected, setSelected] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);

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
        className="relative w-full h-96 border rounded-lg overflow-hidden cursor-zoom-in"
        onClick={() => setIsZoomed(true)}
      >
        <img
          src={selected}
          alt="Plan preview"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(img)}
            className={`w-20 h-20 border rounded-md overflow-hidden ${
              selected === img ? "ring-2 ring-brand-500" : ""
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

      {/* Lightbox / Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          {/* Stop click propagation inside modal */}
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
