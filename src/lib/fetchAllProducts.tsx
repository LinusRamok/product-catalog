export const fetchAllProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");

  if (res.status === 404) {
    const { notFound } = await import("next/navigation");
    return notFound();
  }

  if (!res.ok) throw new Error("Failed to fetch product");

  const data = await res.json();
  return data.products;
};