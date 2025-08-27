import { createContext, useContext, useState, useMemo } from "react";

// Create Context
const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // sidebar state

  // Add to cart
  const addToCart = (product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  // Clear cart
  const clearCart = () => setItems([]);

  // Open/close sidebar
  const toggleCartSidebar = () => setIsCartOpen((prev) => !prev);

  // Check if product exists
  const isInCart = (id) => items.some((item) => item.id === id);

  // Get total item count
  const getCartCount = () =>
    items.reduce((count, item) => count + item.quantity, 0);

  // Calculate subtotal
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCartSidebar,
        isCartOpen,
        isInCart,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
