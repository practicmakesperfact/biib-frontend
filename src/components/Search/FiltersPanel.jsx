import { useState } from "react";

export function FiltersPanel({ onChange }) {
  const [filters, setFilters] = useState({
    style: "",
    beds: "",
    baths: "",
    floors: "",
    priceMin: "",
    priceMax: "",
    sqftMin: "",
    sqftMax: "",
    fileType: "",
  });

  const updateFilter = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onChange(newFilters);
  };

  const inputClass =
    "border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";
  const selectWrapper = "relative w-full";
  const selectClass =
    "border rounded-md px-3 py-2 pr-8 w-full appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-md">
      {/* Style */}
      <div className={selectWrapper}>
        <select
          className={selectClass}
          value={filters.style}
          onChange={(e) => updateFilter("style", e.target.value)}
        >
          <option value="">Style</option>
          <option>Modern</option>
          <option>Traditional</option>
          <option>Farmhouse</option>
          <option>Luxury</option>
        </select>
        <svg
          className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Beds */}
      <div className={selectWrapper}>
        <select
          className={selectClass}
          value={filters.beds}
          onChange={(e) => updateFilter("beds", e.target.value)}
        >
          <option value="">Beds</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
          <option>4+</option>
        </select>
        <svg
          className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Baths */}
      <div className={selectWrapper}>
        <select
          className={selectClass}
          value={filters.baths}
          onChange={(e) => updateFilter("baths", e.target.value)}
        >
          <option value="">Baths</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
        </select>
        <svg
          className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Stories */}
      <div className={selectWrapper}>
        <select
          className={selectClass}
          value={filters.stories}
          onChange={(e) => updateFilter("stories", e.target.value)}
        >
          <option value="">floors</option>
          <option>1</option>
          <option>2</option>
          <option>3+</option>
        </select>
        <svg
          className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Price Range */}
      <input
        type="number"
        placeholder="Min Price"
        className={inputClass}
        value={filters.priceMin}
        onChange={(e) => updateFilter("priceMin", e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        className={inputClass}
        value={filters.priceMax}
        onChange={(e) => updateFilter("priceMax", e.target.value)}
      />

      {/* Sqft Range */}
      <input
        type="number"
        placeholder="Min Sqft"
        className={inputClass}
        value={filters.sqftMin}
        onChange={(e) => updateFilter("sqftMin", e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Sqft"
        className={inputClass}
        value={filters.sqftMax}
        onChange={(e) => updateFilter("sqftMax", e.target.value)}
      />

      {/* File Type */}
      <div className={selectWrapper}>
        <select
          className={selectClass}
          value={filters.fileType}
          onChange={(e) => updateFilter("fileType", e.target.value)}
        >
          <option value="">File Type</option>
          <option>PDF</option>
          <option>CAD</option>
          <option>3D Model</option>
        </select>
        <svg
          className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
