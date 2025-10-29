import { useState, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import { FiltersPanel } from "@/components/search/FiltersPanel";
import ProductCard from "@/components/product/ProductCard";
import productsData from "@/data/products";

export default function CatalogPage() {
  const { searchTerm } = useOutletContext(); 

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

  const [sortOption, setSortOption] = useState("relevance");
  const [view, setView] = useState("grid");

  // Filtering Logic (live search + filters)
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const {
        style,
        beds,
        baths,
        floors,
        priceMin,
        priceMax,
        sqftMin,
        sqftMax,
        fileType,
      } = filters;

      // Search from Header (real-time)
      if (
        searchTerm &&
        !(
          (product.title?.toLowerCase() || "").includes(
            searchTerm.toLowerCase()
          ) ||
          (product.description?.toLowerCase() || "").includes(
            searchTerm.toLowerCase()
          )
        )
      ) {
        return false;
      }

      //  Other filters
      if (style && product.style?.toLowerCase() !== style.toLowerCase())
        return false;
      if (beds && product.beds < parseInt(beds)) return false;
      if (baths && product.baths < parseInt(baths)) return false;
      if (floors && product.floors < parseInt(floors)) return false;
      if (priceMin && product.basePrice < parseFloat(priceMin)) return false;
      if (priceMax && product.basePrice > parseFloat(priceMax)) return false;
      if (sqftMin && product.sqft < parseFloat(sqftMin)) return false;
      if (sqftMax && product.sqft > parseFloat(sqftMax)) return false;

      if (
        fileType &&
        !product.fileTypes?.some(
          (f) => f.toLowerCase() === fileType.toLowerCase()
        )
      )
        return false;

      return true;
    });
  }, [filters, searchTerm]);

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
      {/*  Only filters now, no search bar */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <FiltersPanel
          onChange={(newFilters) =>
            setFilters((prev) => ({ ...prev, ...newFilters }))
          }
        />
      </div>

      {/* Sorting + View */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
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

        {/* View Toggle */}
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

      {/*  Filtered Products */}
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
