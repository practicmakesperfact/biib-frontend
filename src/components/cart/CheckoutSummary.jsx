
import { useCart } from "../../hooks/useCart";

export default function CheckoutSummary() {
  const { cart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.05; // 5% tax placeholder
  const total = subtotal + tax;

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <ul className="divide-y">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between py-2">
            <span>{item.title}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (5%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
