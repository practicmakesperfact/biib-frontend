import { Link } from "react-router-dom";
import products from "../data/Products";
import ProductCard from "@/components/product/ProductCard";

export default function Home() {
  const now = new Date();

  // 🆕 New Releases = products added within last 30 days
  const newReleases = products.filter((p) => {
    const created = new Date(p.createdAt);
    const diffDays = (now - created) / (1000 * 60 * 60 * 24);
    return diffDays <= 30; // less than 30 days old
  });

  // 🌟 Best Sellers = top 4 by salesCount
  const bestSellers = [...products]
    .sort((a, b) => b.salesCount - a.salesCount)
    .slice(0, 4);

  // 🧑‍💼 Staff Picks
  const staffPicks = products.filter((p) => p.isStaffPick);

  // 💰 On Sale
  const onSale = products.filter(
    (p) => p.salePrice && p.salePrice < p.basePrice
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Hero Section */}
      <section className="bg-gray-100 rounded-2xl p-10 text-center relative overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Discover Your Dream House Plan
        </h1>
        <p className="text-gray-600 mb-6">
          Browse our curated collection or request a custom design.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/catalog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Browse Plans
          </Link>
          <Link
            to="/services"
            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>

      {/* Sections */}
      {bestSellers.length > 0 && (
        <SectionCarousel title="Best Sellers" items={bestSellers} />
      )}
      {newReleases.length > 0 && (
        <SectionCarousel title="New Releases" items={newReleases} />
      )}
      {staffPicks.length > 0 && (
        <SectionCarousel title="Staff Picks" items={staffPicks} />
      )}
      {onSale.length > 0 && <SectionCarousel title="On Sale" items={onSale} />}
    </div>
  );
}

function SectionCarousel({ title, items }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Link to="/catalog" className="text-blue-600 hover:underline text-sm">
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
