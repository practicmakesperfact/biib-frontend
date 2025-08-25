
import { createContext, useContext, useReducer, useMemo } from "react";

const CartContext = createContext(null);

const initialState = {
  items: [], // { id, title, price, image, quantity }
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { item, qty = 1 } = action.payload;
      const idx = state.items.findIndex((i) => i.id === item.id);
      if (idx !== -1) {
        const next = [...state.items];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
        return { ...state, items: next };
      }
      return { ...state, items: [...state.items, { ...item, quantity: qty }] };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    case "UPDATE_QTY": {
      const { id, qty } = action.payload;
      const next = state.items.map((i) =>
        i.id === id ? { ...i, quantity: qty } : i
      );
      return { ...state, items: next };
    }
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item, qty = 1) =>
    dispatch({ type: "ADD", payload: { item, qty } });
  const removeFromCart = (id) => dispatch({ type: "REMOVE", payload: id });
  const updateQuantity = (id, qty) =>
    dispatch({ type: "UPDATE_QTY", payload: { id, qty: Math.max(1, qty) } });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const { items, count, subtotal } = useMemo(() => {
    const count = state.items.reduce((n, i) => n + i.quantity, 0);
    const subtotal = state.items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );
    return { items: state.items, count, subtotal };
  }, [state.items]);

  const value = {
    items,
    count,
    subtotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
