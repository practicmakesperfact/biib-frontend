import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartSidebar from "../cart/CartSidebar";

export default function Layout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Automatically redirect to /catalog when user types search from elsewhere
  useEffect(() => {
    if (searchTerm && location.pathname !== "/catalog") {
      navigate("/catalog");
    }
  }, [searchTerm, location.pathname, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onOpenCart={() => setIsCartOpen(true)}
        onSearchChange={(value) => setSearchTerm(value)}
      />
      <main className="flex-1">
        <Outlet context={{ searchTerm }} />
      </main>
      <Footer />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

