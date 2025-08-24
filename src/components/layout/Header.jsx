import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Button from "../ui/Button";
import { useCart } from "../../hooks/useCart";
import CartSidebar from "../cart/CartSidebar";

export default function Header({ onOpenFilters }) {
  const [q, setQ] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();

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

        {/* Desktop search + filters */}
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

        {/* Desktop navigation */}
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

          {/* Cart Button (Sidebar Toggle) */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-3 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-1"
            aria-label="Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile quick actions */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <Button variant="outline" onClick={onOpenFilters}>
            Filters
          </Button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="btn btn-primary relative"
          >
            <ShoppingCart className="w-4 h-4" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-blue-600 text-xs px-1 py-0.5 rounded-full">
                {cart.length}
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

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
