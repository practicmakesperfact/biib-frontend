import { Link } from "react-router-dom";
import { X, Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { currencyFormat } from "../../utils/currencyFormat";

export default function CartSidebar({ isOpen, onClose }) {
  const { items, subtotal, removeFromCart, updateQuantity, clearCart } =
    useCart();

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* overlay */}
      <div
        className={`flex-1 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      {/* panel */}
      <aside
        className={`w-96 max-w-full bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-blue-600" /> Cart
          </h2>
          <button onClick={onClose} aria-label="Close cart">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border rounded-lg p-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {currencyFormat(item.price)}
                  </p>

                  {/* qty controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* footer */}
        {items.length > 0 && (
          <div className="p-4 border-t space-y-3">
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>{currencyFormat(subtotal)}</span>
            </div>
            <button
              onClick={clearCart}
              className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="block bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={onClose}
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
