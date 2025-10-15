import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./hooks/useCart.jsx";
import { FavoriteProvider } from "./hooks/useFavorites.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FavoriteProvider>
        <App />
        </FavoriteProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
