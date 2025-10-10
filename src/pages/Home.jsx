import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/Products";
import ProductCard from "@/components/product/ProductCard";

//  Background images for the Hero Section (you can add more)
const heroImages = [
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
];

export default function Home() {
  const now = new Date();
  const [currentBg, setCurrentBg] = useState(0);

  //  Auto slide background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  //  New Releases = products added within last 30 days
  const newReleases = products.filter((p) => {
    const created = new Date(p.createdAt);
    const diffDays = (now - created) / (1000 * 60 * 60 * 24);
    return diffDays <= 30;
  });

  //  Best Sellers = top 4 by salesCount
  const bestSellers = [...products]
    .sort((a, b) => b.salesCount - a.salesCount)
    .slice(0, 4);

  //  Staff Picks
  const staffPicks = products.filter((p) => p.isStaffPick);

  //  On Sale
  const onSale = products.filter(
    (p) => p.salePrice && p.salePrice < p.basePrice
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/*  Hero Section with Dynamic Background */}
      <section
        className="relative rounded-2xl text-center overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImages[currentBg]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Discover Your Dream House Plan
          </h1>
          <p className="text-gray-200 mb-6 text-lg md:text-xl">
            Browse our curated collection or request a custom design.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/catalog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Browse Plans
            </Link>
            <Link
              to="/services"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/*  Sections for Best Sellers, New Releases, etc. */}
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
