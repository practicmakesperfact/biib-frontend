
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/search/SearchBar";
import { FiltersPanel } from "@/components/search/FiltersPanel";
import { ProductCard } from "@/components/product/ProductCard";
import { fetchProducts } from "@/services/api";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch products whenever filters change
  useEffect(() => {
    setLoading(true);
    fetchProducts(filters).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <SearchBar onSearch={(query) => setFilters({ ...filters, query })} />
        </div>
        <FiltersPanel
          onChange={(newFilters) => setFilters({ ...filters, ...newFilters })}
        />
      </div>

      {/* Product Grid */}
      {loading ? (
        <p className="text-gray-500">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">
          No results found. Try adjusting filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
