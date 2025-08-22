import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductDetail from "../components/ProductDetail";

export default function SingleProduct() {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  return <ProductDetail product={product} />;
}
