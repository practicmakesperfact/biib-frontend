import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-gray-800">
        BIIB Architects
      </Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/catalog" className="hover:text-blue-600">Catalog</Link>
        <Link to="/services" className="hover:text-blue-600">Services</Link>
        <Link to="/checkout" className="hover:text-blue-600">Checkout</Link>
      </div>
    </nav>
  )
}
