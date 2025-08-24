
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Button from "../ui/Button";
import { useCart } from "../../hooks/useCart";

export default function Header({ onOpenFilters, onOpenCart }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const { count } = useCart();

  const onSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    navigate(`/catalog?${params.toString()}`);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center gap-4">
        <Link to="/" className="text-xl font-semibold">
          BIIB Architects
        </Link>

        <form
          onSubmit={onSearch}
          className="hidden md:flex items-center gap-2 flex-1"
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search plans, styles, sqft…"
            className="input"
          />
          <Button type="submit">Search</Button>
          <Button type="button" variant="outline" onClick={onOpenFilters}>
            Filters
          </Button>
        </form>

        <nav className="ml-auto hidden md:flex items-center gap-5">
          <Link to="/catalog" className="hover:text-brand-600">
            Plans
          </Link>
          <Link to="/services" className="hover:text-brand-600">
            Services
          </Link>
          <Link to="/tutorials" className="hover:text-brand-600">
            Tutorials
          </Link>
          <Link to="/account" className="hover:text-brand-600">
            Account
          </Link>

          {/* Cart button */}
          <button
            onClick={onOpenCart}
            className="relative px-3 py-2 rounded-lg border hover:bg-gray-50"
            aria-label="Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile quick actions */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <Button variant="outline" onClick={onOpenFilters}>
            Filters
          </Button>
          <button onClick={onOpenCart} className="btn btn-primary relative">
            <ShoppingCart className="w-4 h-4" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-blue-600 text-xs px-1 py-0.5 rounded-full">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile search row */}
      <div className="md:hidden border-t">
        <form
          onSubmit={onSearch}
          className="container mx-auto px-6 py-3 flex gap-2"
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search plans, styles, sqft…"
            className="input"
          />
          <Button type="submit">Go</Button>
        </form>
      </div>
    </header>
  );
}
