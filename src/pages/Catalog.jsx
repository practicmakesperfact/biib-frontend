import { useState, useMemo } from "react";
import { SearchBar } from "@/components/search/SearchBar";
import { FiltersPanel } from "@/components/search/FiltersPanel";
import ProductCard from "@/components/product/ProductCard";
import productsData from "@/data/products";

export default function CatalogPage() {
  const [filters, setFilters] = useState({
    query: "",
    style: "",
    beds: "",
    baths: "",
    stories: "",
    minPrice: "",
    maxPrice: "",
    minSqft: "",
    maxSqft: "",
    fileType: "",
  });

  const [sortOption, setSortOption] = useState("relevance");
  const [view, setView] = useState("grid"); // 'grid' or 'list'

  //  Filter first, then sort
  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      if (
        filters.query &&
        !p.title.toLowerCase().includes(filters.query.toLowerCase())
      )
        return false;

      if (filters.minPrice && p.basePrice < Number(filters.minPrice))
        return false;
      if (filters.maxPrice && p.basePrice > Number(filters.maxPrice))
        return false;
      if (filters.minSqft && p.sqft < Number(filters.minSqft)) return false;
      if (filters.maxSqft && p.sqft > Number(filters.maxSqft)) return false;

      if (filters.beds && p.beds !== Number(filters.beds)) return false;
      if (filters.baths && Math.floor(p.baths) !== Number(filters.baths))
        return false;
      if (filters.stories && p.floors !== Number(filters.stories)) return false;

      return true;
    });
  }, [filters]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case "price":
          return a.basePrice - b.basePrice;
        case "newest":
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        case "popularity":
          return (b.sales || 0) - (a.sales || 0);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortOption]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/*  Search + Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <SearchBar
            onSearch={(query) => setFilters((prev) => ({ ...prev, query }))}
          />
        </div>
        <FiltersPanel
          onChange={(newFilters) =>
            setFilters((prev) => ({ ...prev, ...newFilters }))
          }
        />
      </div>

      {/* Sorting + View Toggle */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        {/* Sorting */}
        <div className="relative inline-block">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border px-3 py-2 rounded-md appearance-none pr-8 w-auto min-w-[180px]"
          >
            <option value="relevance">Sort by Relevance</option>
            <option value="price">Price (Low to High)</option>
            <option value="newest">Newest</option>
            <option value="popularity">Popularity</option>
          </select>
          <svg
            className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
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

        {/* View toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`px-3 py-2 rounded-md border ${
              view === "grid" ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-3 py-2 rounded-md border ${
              view === "list" ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* Products */}
      {sortedProducts.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No results found. Try adjusting your filters.
        </p>
      ) : (
        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-6"
          }
        >
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} view={view} />
          ))}
        </div>
      )}
    </section>
  );
}
