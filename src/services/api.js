
// Mock dataset (replace later with real API calls)
const mockProducts = [
  {
    id: 1,
    title: "Modern 3-Bedroom House Plan",
    price: 129.0,
    image: "https://via.placeholder.com/400x300",
    beds: 3,
    baths: 2,
    stories: 2,
    style: "Modern",
    sqft: 1800,
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    price: 299.0,
    image: "https://via.placeholder.com/400x300",
    beds: 5,
    baths: 4,
    stories: 2,
    style: "Contemporary",
    sqft: 4200,
  },
  {
    id: 3,
    title: "Tiny Cabin",
    price: 59.0,
    image: "https://via.placeholder.com/400x300",
    beds: 1,
    baths: 1,
    stories: 1,
    style: "Rustic",
    sqft: 600,
  },
];

// Simulated API delay
const wait = (ms) => new Promise((res) => setTimeout(res, ms));

/**
 * Fetch products with optional filters
 * @param {Object} filters
 */
export async function fetchProducts(filters = {}) {
  await wait(500); // simulate network

  let results = mockProducts;

  // Apply filters
  if (filters.query) {
    results = results.filter((p) =>
      p.title.toLowerCase().includes(filters.query.toLowerCase())
    );
  }

  if (filters.style) {
    results = results.filter((p) => p.style === filters.style);
  }

  if (filters.beds) {
    results = results.filter((p) => p.beds >= Number(filters.beds));
  }

  if (filters.baths) {
    results = results.filter((p) => p.baths >= Number(filters.baths));
  }

  if (filters.stories) {
    results = results.filter((p) => p.stories === Number(filters.stories));
  }

  if (filters.priceMin) {
    results = results.filter((p) => p.price >= Number(filters.priceMin));
  }

  if (filters.priceMax) {
    results = results.filter((p) => p.price <= Number(filters.priceMax));
  }

  if (filters.sqftMin) {
    results = results.filter((p) => p.sqft >= Number(filters.sqftMin));
  }

  if (filters.sqftMax) {
    results = results.filter((p) => p.sqft <= Number(filters.sqftMax));
  }

  return results;
}
