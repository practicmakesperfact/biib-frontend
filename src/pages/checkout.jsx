
import CheckoutSummary from "../components/cart/CheckoutSummary";
import { useCart } from "../hooks/useCart";

export default function Checkout() {
  const { items, clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect with real payment API (Chapa, Telebirr, Stripe, etc.)
    alert("✅ Order placed successfully!");
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
        <a
          href="/catalog"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Browse Catalog 
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-18 grid md:grid-cols-2 gap-8">
      {/* Checkout Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 space-y-6"
      >
        <h2 className="text-xl font-semibold">Billing Information</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Payment Method
          </label>
          <select
            required
            className="w-full border rounded-lg px-4 py-2 outline-none"
          >
            <option value="card">Credit / Debit Card</option>
            <option value="chapa">Chapa (Ethiopia)</option>
            <option value="telebirr">Telebirr</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-20 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>

      {/* Order Summary */}
      <CheckoutSummary />
    </div>
  );
}
