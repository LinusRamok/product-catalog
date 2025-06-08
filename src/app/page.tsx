import Link from "next/link";

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

const Home = async () => {
  let products = [];
  try {
    const data = await getProducts();
    products = data.products;
  } catch (error: any) {
    return (
      <p className="text-red-500">Failed to load products: {error.message}</p>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((product: any) => (
        <Link
          key={product.id}
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
      ))}
    </div>
  );
};

export default Home;
