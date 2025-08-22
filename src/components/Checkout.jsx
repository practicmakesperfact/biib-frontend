export default function Checkout() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm">Full Name</label>
          <input type="text" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input type="email" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Card Number</label>
          <input type="text" className="w-full border px-3 py-2 rounded" />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
