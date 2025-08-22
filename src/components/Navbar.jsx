import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function Navbar() {
  const nav = useNavigate();
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
        <div className="flex space-x-4">
          <Link to="/catalog" className="hover:text-blue-600">
            Catalog
          </Link>
          <Link to="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link to="/tutorials" className="hover:text-blue-600">
            Tutorials
          </Link>
          <Link to="/support" className="hover:text-blue-600">
            Support
          </Link>
        </div>
        <button onClick={() => nav("/cart")} className="relative">
          Cart
          <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
            3
          </span>
        </button>
      </div>
    </header>
  );
}
