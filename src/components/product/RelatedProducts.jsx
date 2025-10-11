
import ProductCard from "./ProductCard";

export default function RelatedProducts({ currentId, products = [] }) {
  // fallback: show up to 3 related by same style or nearest sqft
  const me = products.find((p) => p.id === currentId);
  if (!me) return null;

  const byStyle = products
    .filter((p) => p.id !== currentId && p.style && p.style === me.style)
    .slice(0, 3);
  const fallback = products.filter((p) => p.id !== currentId).slice(0, 3);

  const list = byStyle.length ? byStyle : fallback;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h4 className="text-lg font-semibold mb-3">Related Plans</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
