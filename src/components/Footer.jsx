import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex justify-between">
        <p>
          &copy; {new Date().getFullYear()} BIIB Architects. All Rights
          Reserved.
        </p>
        <div className="space-x-4">
          <Link to="/catalog" className="hover:text-white">
            Catalog
          </Link>
          <Link to="/services" className="hover:text-white">
            Services
          </Link>
          <Link to="/checkout" className="hover:text-white">
            Checkout
          </Link>
        </div>
      </div>
    </footer>
  );
}
