import React from "react";
import { Routes, Route } from "react-router-dom";
// components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
// pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";

import Account from "./pages/Account";
// ... other pages

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
         
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
