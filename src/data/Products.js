const products = [
  {
    id: 1,
    title: "Modern Courtyard Home",
    basePrice: 149,
    salePrice: 129,
    sqft: 2500,
    beds: 3,
    baths: 2.5,
    floors: 2,
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    images: [
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800", // Front
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800", // Side
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800", // Interior
    ],
    licenses: [
      { id: "basic", name: "Basic", price: 149 },
      { id: "extended", name: "Extended", price: 249 },
      { id: "commercial", name: "Commercial", price: 399 },
    ],
    hasVideo: true,
    hasTour: true,
    createdAt: "2025-09-20",
    salesCount: 245,
    isStaffPick: true,
    reviewsCount: 18,
  },
  {
    id: 2,
    title: "Warm Ranch Retreat",
    basePrice: 119,
    sqft: 1800,
    beds: 3,
    baths: 2,
    floors: 1,
    img: "https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg?auto=compress&cs=tinysrgb&w=1600",
    images: [
      "https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg?auto=compress&cs=tinysrgb&w=800", // Front
      "https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg?auto=compress&cs=tinysrgb&w=800", // Living Room
    ],
    licenses: [
      { id: "basic", name: "Basic", price: 119 },
      { id: "extended", name: "Extended", price: 199 },
      { id: "commercial", name: "Commercial", price: 329 },
    ],
    hasVideo: false,
    hasTour: true,
    createdAt: "2025-08-28",
    salesCount: 110,
    isStaffPick: false,
  },
  {
    id: 3,
    title: "Glass & Timber Villa",
    basePrice: 279,
    sqft: 3800,
    beds: 5,
    baths: 4,
    floors: 2,
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600",
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800", // Front
      "https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&w=800", // Balcony
      "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=800", // Interior
    ],
    licenses: [
      { id: "basic", name: "Basic", price: 279 },
      { id: "extended", name: "Extended", price: 399 },
      { id: "commercial", name: "Commercial", price: 599 },
    ],
    hasVideo: true,
    hasTour: false,
    createdAt: "2025-10-02",
    salesCount: 320,
    isStaffPick: true,
  },
  {
    id: 4,
    title: "Compact Modern Cabin",
    basePrice: 89,
    sqft: 950,
    beds: 1,
    baths: 1,
    floors: 1,
    img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1600",
    images: [
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800", // Front
      "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&w=800", // Kitchen
    ],
    licenses: [
      { id: "basic", name: "Basic", price: 89 },
      { id: "extended", name: "Extended", price: 149 },
      { id: "commercial", name: "Commercial", price: 249 },
    ],
    hasVideo: true,
    hasTour: false,
    createdAt: "2025-07-15",
    salesCount: 85,
    isStaffPick: false,
  },
  {
    id: 5,
    title: "Coastal Family Home",
    basePrice: 169,
    sqft: 2200,
    beds: 4,
    baths: 3,
    floors: 2,
    img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1600",
    images: [
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800", // Front
      "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=800", // Backyard
    ],
    licenses: [
      { id: "basic", name: "Basic", price: 169 },
      { id: "extended", name: "Extended", price: 259 },
      { id: "commercial", name: "Commercial", price: 399 },
    ],
    hasVideo: true,
    hasTour: true,
    createdAt: "2025-09-25",
    salesCount: 180,
    isStaffPick: true,
    reviewsCount: 18,
  },
  {
    id: 6,
    title: "Urban Loft Duplex",
    basePrice: 199,
    sqft: 2100,
    beds: 3,
    baths: 2,
    floors: 2,
    img: "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&w=1600",
    images: [
      "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&w=800", // Front
      "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800", // Interior
    ],
    licenses: [
      { id: "basic", name: "Basic", price: 199 },
      { id: "extended", name: "Extended", price: 299 },
      { id: "commercial", name: "Commercial", price: 459 },
    ],
    hasVideo: false,
    hasTour: true,
    createdAt: "2025-08-10",
    salesCount: 150,
    isStaffPick: false,
  },
];

export default products;
