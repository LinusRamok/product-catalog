export const fetchProduct = async (productId: string) => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  if (res.status === 404) {
    const { notFound } = await import("next/navigation");
    return notFound();
  }

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
};
