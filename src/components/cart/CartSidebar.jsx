
import { useCart } from "../../hooks/useCart";
import { X, ShoppingCart, Trash2 } from "lucide-react";

export default function CartSidebar({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-blue-600" />
          Cart
        </h2>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4">
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-b pb-2"
            >
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs text-gray-500">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="p-4 border-t flex flex-col gap-3">
          <button
            onClick={clearCart}
            className="bg-gray-100 text-gray-600 py-2 rounded-lg hover:bg-gray-200"
          >
            Clear Cart
          </button>
          <a
            href="/checkout"
            className="bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700"
          >
            Go to Checkout
          </a>
        </div>
      )}
    </div>
  );
}
