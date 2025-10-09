import { useEffect, useState } from "react";
import { SearchBar } from "@/components/search/SearchBar";
import { FiltersPanel } from "@/components/search/FiltersPanel";
import ProductCard from "@/components/product/ProductCard";
import productsData from "@/data/products"; // <-- import local products

// export default function Catalog() {
//   const [products, setProducts] = useState([]);
//   const [filters, setFilters] = useState({});
//   const [loading, setLoading] = useState(true);

// useEffect(() => {
//   setLoading(true);
//   setTimeout(() => {
//     let filtered = productsData;

//     if (filters.query) {
//       filtered = filtered.filter((p) =>
//         p.title.toLowerCase().includes(filters.query.toLowerCase())
//       );
//     }

//     setProducts(filtered);
//     setLoading(false);
//   }, 500);
// }, [filters]);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Search + Filters */}
//       <div className="flex flex-col md:flex-row gap-6 mb-8">
//         <div className="flex-1">
//           <SearchBar onSearch={(query) => setFilters({ ...filters, query })} />
//         </div>
//         <FiltersPanel
//           onChange={(newFilters) => setFilters({ ...filters, ...newFilters })}
//         />
//       </div>

//       {/* Product Grid */}
//       {loading ? (
//         <p className="text-gray-500">Loading products...</p>
//       ) : products.length === 0 ? (
//         <p className="text-gray-500">No results found. Try adjusting filters.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


export default function CatalogPage() {
  const [sortOption, setSortOption] = useState("relevance");
  const [view, setView] = useState("grid"); // 'grid' or 'list'

  const sortedProducts = [...products].sort((a, b) => {
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

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        {/* Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          <option value="relevance">Sort by Relevance</option>
          <option value="price">Price (Low to High)</option>
          <option value="newest">Newest</option>
          <option value="popularity">Popularity</option>
        </select>

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

      {/* Product List */}
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
    </section>
  );
}
