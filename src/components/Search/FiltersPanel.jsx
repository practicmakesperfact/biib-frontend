
import { useState } from "react";

export function FiltersPanel({ onChange }) {
  const [filters, setFilters] = useState({
    style: "",
    beds: "",
    baths: "",
    stories: "",
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

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow">
      {/* Style */}
      <select
        className="border rounded p-2"
        value={filters.style}
        onChange={(e) => updateFilter("style", e.target.value)}
      >
        <option value="">Style</option>
        <option>Modern</option>
        <option>Traditional</option>
        <option>Farmhouse</option>
        <option>Luxury</option>
      </select>

      {/* Beds */}
      <select
        className="border rounded p-2"
        value={filters.beds}
        onChange={(e) => updateFilter("beds", e.target.value)}
      >
        <option value="">Beds</option>
        <option>1+</option>
        <option>2+</option>
        <option>3+</option>
        <option>4+</option>
      </select>

      {/* Baths */}
      <select
        className="border rounded p-2"
        value={filters.baths}
        onChange={(e) => updateFilter("baths", e.target.value)}
      >
        <option value="">Baths</option>
        <option>1+</option>
        <option>2+</option>
        <option>3+</option>
      </select>

      {/* Stories */}
      <select
        className="border rounded p-2"
        value={filters.stories}
        onChange={(e) => updateFilter("stories", e.target.value)}
      >
        <option value="">Stories</option>
        <option>1</option>
        <option>2</option>
        <option>3+</option>
      </select>

      {/* Price Range */}
      <input
        type="number"
        placeholder="Min Price"
        className="border rounded p-2"
        value={filters.priceMin}
        onChange={(e) => updateFilter("priceMin", e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        className="border rounded p-2"
        value={filters.priceMax}
        onChange={(e) => updateFilter("priceMax", e.target.value)}
      />

      {/* Sqft Range */}
      <input
        type="number"
        placeholder="Min Sqft"
        className="border rounded p-2"
        value={filters.sqftMin}
        onChange={(e) => updateFilter("sqftMin", e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Sqft"
        className="border rounded p-2"
        value={filters.sqftMax}
        onChange={(e) => updateFilter("sqftMax", e.target.value)}
      />

      {/* File Type */}
      <select
        className="border rounded p-2"
        value={filters.fileType}
        onChange={(e) => updateFilter("fileType", e.target.value)}
      >
        <option value="">File Type</option>
        <option>PDF</option>
        <option>CAD</option>
        <option>3D Model</option>
      </select>
    </div>
  );
}
