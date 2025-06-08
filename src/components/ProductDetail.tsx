"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProductDetail = ({ productId }: { productId: string }) => {
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        if (res.status === 404) return router.push("/not-found");
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(true);
      }
    }
    fetchProduct();
  }, [productId, router]);

  if (error)
    return (
      <p className="text-red-500">Failed to load product. Please try again.</p>
    );
  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white shadow p-6 rounded">
      <img
        src={product.thumbnail}
        className="w-full h-60 object-cover"
        alt={product.title}
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-green-600 font-bold mt-2">${product.price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
