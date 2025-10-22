import { Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";

// pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Services from "./pages/Services";
import RequestQuote from "./pages/RequestQuote";
import Tutorials from "./pages/Tutorials";
import Account from "./pages/Account";
import ProductDetail from "./pages/ProductDetail";
import Favorites from "./pages/Favorites";
import Resources from "./pages/Resources";
import CaseStudies from "./pages/CaseStudies";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import LicensePolicy from "./pages/LicensePolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TawkChat from "./components/TawkChat"; 

export default function App() {
  return (
    <>
      <TawkChat />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/request-quote/:serviceId"
            element={<RequestQuote />}
          />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/account" element={<Account />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/license-policy" element={<LicensePolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Route>
      </Routes>
    </>
  );
}
