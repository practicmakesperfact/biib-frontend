
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Account() {
  const { user, login, register, logout } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [activeTab, setActiveTab] = useState("orders"); // default dashboard tab

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      register(form.name, form.email, form.password);
    } else {
      login(form.email, form.password);
    }
  };

  if (!user) {
    return (
      <div className="max-w-md mx-auto py-16">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">
            {isRegister ? "Create an Account" : "Login"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              {isRegister ? "Register" : "Login"}
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            {isRegister ? "Already have an account?" : "New here?"}{" "}
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="text-blue-600 hover:underline"
            >
              {isRegister ? "Login" : "Register"}
            </button>
          </p>
        </div>
      </div>
    );
  }

  // 🧠 Dashboard after login
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          Welcome, {user.name || user.email} 👋
        </h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        {["orders", "license", "saved", "Favorites", "builder"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 capitalize ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab === "saved"
              ? "Saved Plans & Searches"
              : tab === "license"
              ? "License Keys"
              : tab === "builder"
              ? "Builder Tools"
              : tab}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {activeTab === "orders" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">🧾 Orders & Downloads</h2>
          <p className="text-gray-500">You don't have any orders yet.</p>
        </div>
      )}

      {activeTab === "license" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">🔑 License Keys</h2>
          <p className="text-gray-500">No license keys found.</p>
        </div>
      )}

      {activeTab === "saved" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            📌 Saved Plans & Searches
          </h2>
          <p className="text-gray-500">No saved searches yet.</p>
        </div>
      )}

      {activeTab === "Favorites" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">❤️ Favorites</h2>
          <p className="text-gray-500">Your Favorites is empty.</p>
        </div>
      )}

      {activeTab === "builder" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            🏗️ Builder / Professional Tools
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Volume Discounts</li>
            <li>Reseller Pricing</li>
            <li>Bulk-download Management</li>
          </ul>
        </div>
      )}
    </div>
  );
}
