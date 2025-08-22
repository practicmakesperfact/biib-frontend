import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard.jsx";


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductCard
        plan={{
          id: 1,
          title: "Sample Plan",
          thumbnail: "https://via.placeholder.com/150",
          price: 100,
          sqft: 2000,
          beds: 3,
          baths: 2,
          floors: 1,
          rating: 4,
          reviews: 10,
          fileType: "PDF",
        }}
      />
    </div>
  );
}

export default App;
