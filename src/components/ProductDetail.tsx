"use client";
import { useCart } from "@/context/CartContext";

const ProductDetail = ({ product }: { product: any }) => {
  const { addToCart } = useCart();

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
      <button
        onClick={() => addToCart(product.id)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductDetail;
