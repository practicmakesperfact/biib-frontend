import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import Button from "../ui/Button";
import { useCart } from "../../hooks/useCart";
import { useFavorites } from "../../hooks/useFavorites";

export default function Header({ onOpenCart, onOpenFilters, onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { getCartCount } = useCart();
  const count = getCartCount();
  const { favorites } = useFavorites();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearchChange) onSearchChange(value); 
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center gap-4">
        <Link to="/" className="text-xl font-semibold">
          BIIB Designs
        </Link>

        {/*  Live Search Box (desktop) */}
        <div className="hidden md:flex items-center gap-2 flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search plans, styles, sqft…"
            className="input border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Button disabled>Search</Button>
        </div>

        {/* Navigation */}
        <nav className="ml-auto hidden md:flex items-center gap-5">
          <Link to="/catalog" className="hover:text-blue-600">
            Catalog
          </Link>
          <Link to="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link to="/account" className="hover:text-blue-600">
            Account
          </Link>

          {/*  Favorites */}
          <Link
            to="/favorites"
            className="relative px-3 py-2 rounded-lg border hover:bg-gray-50"
          >
            <Heart className="w-6 h-6" />
            {favorites.length > 0 && (
              <span className="absolute -top-0 -right-0 bg-pink-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>

          {/*  Cart */}
          <button
            onClick={onOpenCart}
            className="relative px-3 py-2 rounded-lg border hover:bg-gray-50"
          >
            <ShoppingCart className="w-7 h-5" />
            {count > 0 && (
              <span className="absolute -top-0 -right-0 bg-green-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden border-t bg-white">
        <div className="container mx-auto px-6 py-3 flex gap-2">
          <input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search plans, styles, sqft…"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Button disabled>Go</Button>
        </div>
      </div>
    </header>
  );
}
