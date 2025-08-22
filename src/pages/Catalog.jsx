import { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";

export default function Catalog() {
  const [filtered, setFiltered] = useState(products);

  const handleFilter = (criteria) => {
    let result = products.filter(
      (p) =>
        (!criteria.beds || p.beds == criteria.beds) &&
        (!criteria.baths || p.baths == criteria.baths) &&
        (!criteria.floors || p.floors == criteria.floors)
    );
    setFiltered(result);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Catalog</h1>
      <SearchFilter onFilter={handleFilter} />
      <ProductGrid products={filtered} />
    </div>
  );
}
