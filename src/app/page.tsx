import ProductCard from "@/components/ProductCard";
import { fetchAllProducts } from "@/lib/fetchAllProducts";

const Home = async () => {
  const products = await fetchAllProducts() 

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
