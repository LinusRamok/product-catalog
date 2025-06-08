import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => (
  <Link
    href={`/products/${product.id}`}
    className="bg-white p-4 shadow rounded flex-1 min-w-[280px] max-w-sm"
  >
    <img
      src={product.thumbnail}
      alt={product.title}
      className="h-40 object-cover w-full"
    />
    <h2 className="mt-2 font-semibold">{product.title}</h2>
    <p className="text-green-600 font-bold">${product.price}</p>
  </Link>
);

export default ProductCard;