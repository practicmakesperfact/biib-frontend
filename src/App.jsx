
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// pages 
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Services from "./pages/Services";
import Tutorials from "./pages/Tutorials";
import Account from "./pages/Account";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
}
