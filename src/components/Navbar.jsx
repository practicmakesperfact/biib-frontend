import { Link } from 'react-router-dom'
const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
  
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <header className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          BIIB Architects
        </Link>
        <div className="flex-1 max-w-xl mx-6">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full rounded-lg px-4 py-2 text-gray-800"
          />
        </div>
        <button className="bg-orange-600 px-4 py-2 rounded-lg">Search</button>
      </header>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/catalog" className="hover:text-blue-600">
          Catalog
        </Link>
        <Link to="/services" className="hover:text-blue-600">
          Services
        </Link>
        <Link to="/checkout" className="hover:text-blue-600">
          Checkout
        </Link>
      </div>
    </nav>
  );
}
