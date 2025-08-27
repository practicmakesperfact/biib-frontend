
import axios from "axios";

// Toggle between mock data and real API
const USE_MOCK = true;

// ============ MOCK DATA ============ //
const mockProducts = [
  {
    id: 1,
    title: "Modern 3-Bedroom House Plan",
    price: 129.0,
    images: ["/images/house1.jpg", "/images/house1-2.jpg"],
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    price: 299.0,
    images: ["/images/house2.jpg", "/images/house2-2.jpg"],
  },
  {
    id: 3,
    title: "Tiny Cabin Retreat",
    price: 59.0,
    images: ["/images/house3.jpg", "/images/house3-2.jpg"],
  },
];

// ============ AXIOS INSTANCE ============ //
const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // <-- your backend URL
  headers: { "Content-Type": "application/json" },
});

// ============ API METHODS ============ //
async function getProducts() {
  if (USE_MOCK) {
    return new Promise(
      (resolve) => setTimeout(() => resolve(mockProducts), 500) // simulate delay
    );
  }
  const res = await apiClient.get("/products");
  return res.data;
}

async function getProductById(id) {
  if (USE_MOCK) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(mockProducts.find((p) => p.id === id)), 300)
    );
  }
  const res = await apiClient.get(`/products/${id}`);
  return res.data;
}

// Export all as default object
const api = { getProducts, getProductById };
export default api;
