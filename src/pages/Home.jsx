import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Featured House Plans</h2>
        <ProductGrid products={products.slice(0, 3)} />
      </div>
    </div>
  );
}
