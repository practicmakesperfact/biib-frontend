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

const mockTestimonials = [
  { id: 1, name: "John Doe", role: "Architect", message: "Great experience!" },
  { id: 2, name: "Jane Smith", role: "Builder", message: "Excellent service!" },
];

const mockPartners = [
  { id: 1, name: "Partner A", logo: "/images/partner1.png" },
  { id: 2, name: "Partner B", logo: "/images/partner2.png" },
];

const mockCaseStudies = [
  {
    id: 1,
    title: "Modern House Project",
    summary: "A stunning modern house design.",
    image: "/images/casestudy1.jpg",
  },
  {
    id: 2,
    title: "Villa Renovation",
    summary: "Luxury villa transformation.",
    image: "/images/casestudy2.jpg",
  },
];

// ============ AXIOS INSTANCE (for later real integration) ============ //
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  headers: { "Content-Type": "application/json" },
});

// ============ PRODUCT METHODS ============ //
async function getProducts() {
  if (USE_MOCK) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(mockProducts), 300)
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

// ============ SUPPORT MOCK METHODS ============ //
async function fetchTestimonials() {
  if (USE_MOCK) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(mockTestimonials), 300)
    );
  }
  const res = await apiClient.get("/support/testimonials/");
  return res.data;
}

async function fetchPartners() {
  if (USE_MOCK) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(mockPartners), 300)
    );
  }
  const res = await apiClient.get("/support/partners/");
  return res.data;
}

async function fetchCaseStudies() {
  if (USE_MOCK) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(mockCaseStudies), 300)
    );
  }
  const res = await apiClient.get("/support/case-studies/");
  return res.data;
}

async function submitContactForm(data) {
  if (USE_MOCK) {
    console.log("Mock contact form submitted", data);
    return { success: true };
  }
  const res = await apiClient.post("/support/contact/", data);
  return res.data;
}

// ============ EXPORTS ============ //
const api = {
  getProducts,
  getProductById,
  fetchTestimonials,
  fetchPartners,
  fetchCaseStudies,
  submitContactForm,
};

export default api;
