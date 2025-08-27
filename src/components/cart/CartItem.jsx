import { X } from "lucide-react";
import { useCart } from "../../hooks/useCart";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between border-b py-3">
      {/* Left: title */}
      <div>
        <h4 className="font-medium">{item.title}</h4>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
      </div>

      {/* Middle: quantity controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
      </div>

      {/* Right: remove button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        <X size={18} />
      </button>
    </div>
  );
}
